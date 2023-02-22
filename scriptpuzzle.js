var emptySquare = {x: 2, y: 2};
var message = document.getElementById("message");

// Initialize drag-and-drop for puzzle pieces
var puzzlePieces = document.querySelectorAll(".puzzle-piece");
puzzlePieces.forEach(function(piece) {
  piece.addEventListener("dragstart", dragstartHandler);
});

// Initialize drop zones for puzzle pieces
var dropZones = document.querySelectorAll(".puzzle-piece");
dropZones.forEach(function(zone) {
  zone.addEventListener("drop", dropHandler);
  zone.addEventListener("dragover", dragoverHandler);
});

function dragstartHandler(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dropHandler(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var draggedElement = document.getElementById(data);
