const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const password = passwordInput.value.toLowerCase();
  
  if (password === 'secret') {
    window.location.href = 'mosaic.html';
  } else {
    alert('Come on Dorota, make an effort!');
  }
});
