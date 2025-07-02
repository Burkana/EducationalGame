document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('http://127.0.0.1:3000/login', {
    method: 'POST',
    body: new URLSearchParams(formData),
    credentials: 'include'
  })
  .then(res => res.text())
  .then(html => {
    document.write(html);
  })
  .catch(() => {
    alert("Login failed or server error");
  });
});