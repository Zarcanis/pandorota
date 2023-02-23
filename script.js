const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const password = passwordInput.value;
  
  if (password === 'Password') {
    window.location.href = 'enigme.html';
  } else {
    alert('Mot de passe incorrect');
  }
});
