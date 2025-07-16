window.CoinManager = {
  isGuest: new URLSearchParams(window.location.search).get('guest') === 'true',

  getCoins: function() {
    if (this.isGuest) {
      let coins = localStorage.getItem('guestCoins');
      if (coins === null) {
        coins = 100;
        localStorage.setItem('guestCoins', coins);
      }
      return parseInt(coins, 10);
    } else {
      return fetch('http://127.0.0.1:3000/api/me', { credentials: 'include' })
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(user => user.coins ?? 100);
    }
  },

setCoins: function (val) {
  if (this.isGuest) {
    localStorage.setItem('guestCoins', val);
    this.updateDisplay(val);
  } else {                     
    return fetch('http://127.0.0.1:3000/api/set-coins', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newCoins: val })
    })
    .then(r => r.json())
    .then(d => this.updateDisplay(d.coins));
  }
},

  updateDisplay: function(val) {
    document.querySelectorAll('.coinBalance').forEach(el => {
      el.innerText = val;
    });
  },

  addCoins: function(amount) {
    if (this.isGuest) {
      let coins = parseInt(localStorage.getItem('guestCoins') || '100', 10);
      coins += amount;
      localStorage.setItem('guestCoins', coins);
      this.updateDisplay(coins);
      return coins;
    } else {
      return fetch('http://127.0.0.1:3000/api/add-coins', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
      })
      .then(res => res.json())
      .then(data => {
        this.updateDisplay(data.coins);
        return data.coins;
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.CoinManager.isGuest) {
    window.CoinManager.updateDisplay(window.CoinManager.getCoins());
  } else {
    window.CoinManager.getCoins().then(coins => {
      window.CoinManager.updateDisplay(coins);
    });
  }
});