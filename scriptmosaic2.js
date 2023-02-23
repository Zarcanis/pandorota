var options = document.querySelectorAll(".enigma-option");
var message = document.getElementById("message");

for (var i = 0; i < options.length; i++) {
	options[i].addEventListener("click", function() {
		if (this.alt === "image true") {
			message.innerHTML = "Hey, well done! :)";
			setTimeout(function() {
				window.location.href = "flambeau.html";
			}, 2000);
		} else {
			message.innerHTML = "What are you doing, clicking at random?!";
		}
	});
}
