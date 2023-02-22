// Sélectionnez tous les éléments de l'image avec la classe "puzzle-piece"
const puzzlePieces = document.querySelectorAll('.puzzle-piece');

// Bouclez à travers chaque élément d'image et ajoutez un gestionnaire d'événements de clic
puzzlePieces.forEach(piece => {
  piece.addEventListener('click', () => {
    // Vérifiez si l'image cliquée a la bonne réponse
    if (piece.alt === 'image 7') {
      // Affichez un message de félicitations et redirigez vers la page suivante après 2 secondes
      const message = document.getElementById('message');
      message.textContent = 'Bravo, c\'est la bonne réponse !';
      setTimeout(() => {
        window.location.href = 'lettree.html';
      }, 2000);
    } else {
      // Affichez un message d'erreur si la réponse est incorrecte
      const message = document.getElementById('message');
      message.textContent = 'Désolé, ce n\'est pas la bonne réponse. Essayez encore !';
    }
  });
})
