//Вход като гост
document.getElementById('guestBtn').addEventListener('click', () => {
  window.location.href = 'main.html?guest=true';
});