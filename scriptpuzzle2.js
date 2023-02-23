// Fonction pour déplacer une tuile
function moveTile() {
  var id = parseInt(this.getAttribute("id"));
  var x = id % 4;
  var y = Math.floor(id / 4);

  if (x == emptyX && Math.abs(y - emptyY) == 1 || y == emptyY && Math.abs(x - emptyX) == 1) {
    var targetId = emptyY * 4 + emptyX;
    var tile = document.getElementById(targetId);
    tile.style.left = (x * 100) + "px";
    tile.style.top = (y * 100) + "px";
    tile.setAttribute("id", id);
    this.style.left = (emptyX * 100) + "px";
    this.style.top = (emptyY * 100) + "px";
    this.setAttribute("id", targetId);
    emptyX = x;
    emptyY = y;
    positions[id] = targetId;
    positions[targetId] = id;

    if (checkWin()) {
      alert("Félicitations, vous avez réussi le puzzle ! La lettre est : X");
      document.getElementById("letter-link").style.display = "block";
    }
  }
}

// Fonction pour vérifier si le puzzle est terminé
function checkWin() {
  for (var i = 0; i < targets.length; i++) {
    if (positions[i] != targets[i]) {
      return false;
    }
  }
  return true;
}

// Fonction pour mélanger les tuiles de manière aléatoire
function shuffleTiles() {
  shuffle(images);
  drawPuzzle();
}

// Fonction pour dessiner le puzzle à l'écran
function drawPuzzle() {
  var puzzle = document.getElementById("puzzle");
  puzzle.innerHTML = "";

  for (var i = 0; i < 16; i++) {
    var x = i % 4;
    var y = Math.floor(i / 4);
    positions[i] = -1;

    if (i != 15) {
      var tile = document.createElement("div");
      tile.setAttribute("class", "tile");
      tile.style.backgroundImage = "url('images/" + images[i] + "')";
      tile.style.backgroundPosition = (-x * 100) + "px " + (-y * 100) + "px";
      tile.style.left = (x * 100) + "px";
      tile.style.top = (y * 100) + "px";
      tile.setAttribute("id", i);
      tile.addEventListener("click", moveTile);
      puzzle.appendChild(tile);
      positions[i] = i;
    } else {
      emptyX = x;
      emptyY = y;
    }
  }
}

// Fonction pour mélanger aléatoirement les éléments d'un tableau
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
