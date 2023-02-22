var options = document.querySelectorAll(".enigma-option");
var message = document.getElementById("message");

for (var i = 0; i < options.length; i++) {
	options[i].addEventListener("click", function() {
		if (this.alt === "image 7") {
			message.innerHTML = "Bravo, c'est la bonne réponse !";
			setTimeout(function() {
				window.location.href = "lettre.html";
			}, 2000);
		} else {
			message.innerHTML = "Désolé, ce n'est pas la bonne réponse. Essayez encore.";
		}
	});
}
