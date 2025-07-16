const express  = require('express');
const mysql    = require('mysql');
const bodyParser = require('body-parser');
const session  = require('express-session');
const cors     = require('cors');

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: 'lax',
    secure: false
  }
}));

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'gameusers'
});

db.connect(err => {
  if (err) { console.error('DB error:', err); return; }
  console.log('Connected to MySQL');
});

app.post('/register', (req, res) => {
  const { names, email, passwords } = req.body;
  const q = 'INSERT INTO Users (names, email, passwords) VALUES (?, ?, ?)';
  db.query(q, [names, email, passwords], err => {
    if (err) { console.error('Insert error:', err); return res.status(500).send('DB error'); }
    res.send('<script>window.location.href="http://127.0.0.1:5500/login.html";</script>');
  });
});

app.post('/login', (req, res) => {
  const { email, passwords } = req.body;
  const q = 'SELECT * FROM Users WHERE email = ? AND passwords = ?';
  db.query(q, [email, passwords], (err, rows) => {
    if (err) { console.error('DB error:', err); return res.status(500).send('Server error'); }

    if (rows.length === 0) {
      return res.send('<script>alert("Invalid email or password"); window.location.href="http://127.0.0.1:5500/login.html";</script>');
    }

    const user = rows[0];
    req.session.user = { id: user.id, names: user.names, email: user.email };
    res.send('<script>window.location.href="http://127.0.0.1:5500/main.html";</script>');
  });
});

app.get('/api/me', (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not logged in' });

  db.query('SELECT coins FROM Users WHERE id = ?', [req.session.user.id], (err, results) => {
    if (err || !results.length) return res.status(500).json({ error: 'DB error' });
    res.json({ ...req.session.user, coins: results[0].coins });
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) { console.error('Logout error:', err); return res.status(500).send('Could not log out'); }
    res.clearCookie('connect.sid');
    res.send('Logged out');
  });
});

app.post('/api/complete-level', (req, res) => {
  const userId = req.session.user?.id;
  const level = parseInt(req.body.level, 10);
  if (!userId || !level) return res.status(400).json({ error: 'Missing data' });

  db.query('SELECT * FROM CompletedLevels WHERE user_id = ? AND level = ?', [userId, level], (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (results.length) {
      db.query('SELECT coins FROM Users WHERE id = ?', [userId], (err, results) => {
        if (err || !results.length) return res.status(500).json({ error: 'DB error' });
        res.json({ coins: results[0].coins, coinsAdded: false });
      });
    } else {
      db.query('INSERT INTO CompletedLevels (user_id, level) VALUES (?, ?)', [userId, level], (err) => {
        if (err) return res.status(500).json({ error: 'DB error' });
        db.query('UPDATE Users SET coins = coins + 50 WHERE id = ?', [userId], (err) => {
          if (err) return res.status(500).json({ error: 'DB error' });
          db.query('SELECT coins FROM Users WHERE id = ?', [userId], (err, results) => {
            if (err || !results.length) return res.status(500).json({ error: 'DB error' });
            res.json({ coins: results[0].coins, coinsAdded: true });
          });
        });
      });
    }
  });
});

/* ============================================================
   POST /api/add-coins      – добавя (или вади) сума от баланса
   Expects:  { amount: +50 }  или  { amount: -50 }
   Returns:  { coins: <newBalance> }
   ============================================================*/
app.post('/api/add-coins', (req, res) => {
  const userId = req.session.user?.id;
  const amount = parseInt(req.body.amount, 10);
  if (!userId || !Number.isFinite(amount)) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  const q = `
    UPDATE Users
    SET coins = GREATEST(coins + ?, 0)
    WHERE id  = ?;
  `;
  db.query(q, [amount, userId], err => {
    if (err) return res.status(500).json({ error: 'DB error' });
    db.query('SELECT coins FROM Users WHERE id = ?', [userId], (err, rows) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      res.json({ coins: rows[0].coins });
    });
  });
});

/* ============================================================
   POST /api/set-coins      – записва точна стойност
   Expects:  { newCoins: 320 }
   Returns:  { coins: <newBalance> }
   ============================================================*/
app.post('/api/set-coins', (req, res) => {
  const userId  = req.session.user?.id;
  const newAmt  = parseInt(req.body.newCoins, 10);
  if (!userId || !Number.isFinite(newAmt) || newAmt < 0) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  db.query('UPDATE Users SET coins = ? WHERE id = ?', [newAmt, userId], err => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ coins: newAmt });
  });
});

app.listen(3000, () => console.log('Server running at http://127.0.0.1:3000'));