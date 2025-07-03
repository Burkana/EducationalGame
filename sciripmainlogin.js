document.addEventListener('DOMContentLoaded', () => {
  fetch('http://127.0.0.1:3000/api/me', {
    credentials: 'include'
  })
  .then(res => res.ok ? res.json() : Promise.reject())
  .then(user => {
    document.getElementById('profile').innerText =
      `Добре дошли, ${user.names} (${user.email})`;
  })
  .catch(() => {
    window.location.href = "http://127.0.0.1:5500/login.html";
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    fetch('http://127.0.0.1:3000/logout', {
      method: 'POST',
      credentials: 'include'
    }).then(() => {
      window.location.href = "http://127.0.0.1:5500/login.html";
    });
  });
});