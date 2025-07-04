document.addEventListener('DOMContentLoaded', () => {
  const isGuest = new URLSearchParams(window.location.search).get('guest') === 'true';

  if (!isGuest) {
    // Logged-in user
    fetch('http://127.0.0.1:3000/api/me', {
      credentials: 'include'
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(user => {
        document.getElementById('profile').innerText =
          `Добре дошли, ${user.names} (${user.email})`;
      })
      .catch(() => {
        window.location.href = "login.html";
      });
  } else {
    // Guest
    document.getElementById('profile').innerText = "Добре дошли, Гост";
  }

  // Common logout logic — check guest mode inside
  document.getElementById('logoutBtn').addEventListener('click', () => {
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

