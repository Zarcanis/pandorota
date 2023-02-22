function checkAnswer(image) {
 var message = document.getElementById("message");
 if (image.alt === "image 7") {
  message.innerHTML = "Bravo, c'est la bonne réponse !";
  setTimeout(function() {
   window.location.href = "lettre.html";
  }, 2000);
 } else {
  message.innerHTML = "Désolé, ce n'est pas la bonne réponse. Veuillez réessayer.");
  }
}


