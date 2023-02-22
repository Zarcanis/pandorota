function checkAnswer() {
  var userAnswer = document.getElementById("user-answer").value.toLowerCase();
  if (userAnswer === "votre réponse") {
    window.location.href = "page-suivante.html"; //remplacer "page-suivante.html" par le nom de la page que vous souhaitez rediriger
  } else {
    alert("Désolé, mauvaise réponse. Veuillez réessayer.");
  }
}
