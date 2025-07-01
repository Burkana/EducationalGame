const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to your MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // your MySQL user
  password: '1234', // your MySQL password
  database: 'gameusers'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

// Endpoint for the form POST request
app.post('/register', (req, res) => {
  const { names, email, passwords } = req.body;
   
  // Insert the form data into the Users table
  const query = 'INSERT INTO Users (names, email, passwords) VALUES (?, ?, ?)';
  db.query(query, [names, email, passwords], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Database error');
    }

   res.send('<script>window.location.href="http://127.0.0.1:5500/main.html";</script>');
    //return res.redirect('/main');
 
  });
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
