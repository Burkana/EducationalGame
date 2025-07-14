document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let isGuest = urlParams.get('guest') === 'true' || localStorage.getItem('isGuest') === 'true';

  if (urlParams.get('guest') === 'true') {
    localStorage.setItem('isGuest', 'true');
  }

  function updateCoinDisplay(val) {
    document.querySelectorAll('.coinBalance').forEach(el => el.innerText = val);
  }

  if (!isGuest) {
    fetch('http://127.0.0.1:3000/api/me', {
      credentials: 'include'
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(user => {
        document.getElementById('profile').innerText =
          `Добре дошли, ${user.names} (${user.email})`;
        updateCoinDisplay(user.coins ?? 100);
      })
      .catch(() => {
        //window.location.href = "login.html";
      });
  } else {
    document.getElementById('profile').innerText = "Добре дошли, Гост";
    let coins = localStorage.getItem('guestCoins');
    if (coins === null) {
      coins = 100;
      localStorage.setItem('guestCoins', coins);
    }
    updateCoinDisplay(coins);
  }

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('isGuest');
    if (isGuest) {
      window.location.href = "index.html";
    } else {
      fetch('http://127.0.0.1:3000/logout', {
        method: 'POST',
        credentials: 'include'
      }).then(() => {
        window.location.href = "login.html";
      });
    }
  });
});
