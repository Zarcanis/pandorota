var blankTile = {
 x: 300,
 y: 300
};

var puzzleTiles = [];
var solvedTiles = [];
var puzzleSize = 3;
var tileSize = 200;
var shuffleCount = 1000;

var puzzleContainer = document.getElementById('puzzle-container');
var puzzleArea = document.getElementById('puzzle-area');
var shuffleButton = document.getElementById('shuffle-button');
var solveButton = document.getElementById('solve-button');
var message = document.getElementById('message');
var nextPageButton = document.getElementById('next-page-button');

// Create tiles and add them to the DOM
function createTiles() {
 for (var i = 0; i < puzzleSize; i++) {
  for (var j = 0; j < puzzleSize; j++) {
   var tile = document.createElement('div');
   tile.className = 'puzzle-tile';
   tile.style.width = tileSize + 'px';
   tile.style.height = tileSize + 'px';
   tile.style.backgroundPosition = (-j * tileSize) + 'px ' + (-i * tileSize) + 'px';
   tile.style.top = i * tileSize + 'px';
   tile.style.left = j * tileSize + 'px';
   puzzleArea.appendChild(tile);
   puzzleTiles.push(tile);
   solvedTiles.push({x: j * tileSize, y: i * tileSize});
  }
 }
}

// Shuffle the tiles
function shuffleTiles() {
 for (var i = 0; i < shuffleCount; i++) {
  var neighbors = [];
  if (blankTile.x > 0) {
   neighbors.push({x: blankTile.x - tileSize, y: blankTile.y});
  }
  if (blankTile.x < (puzzleSize - 1) * tileSize) {
   neighbors.push({x: blankTile.x + tileSize, y: blankTile.y});
  }
  if (blankTile.y > 0) {
   neighbors.push({x: blankTile.x, y: blankTile.y - tileSize});
	
