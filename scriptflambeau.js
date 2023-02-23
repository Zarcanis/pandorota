// JavaScript
const images = [
  "pando1.jpg",
  "pando2.jpg",
  "pando3.jpg",
  "pando4.jpg",
  "pando5.jpg",
  "pando6.jpg",
  "pando7.jpg",
  // ...ajouter des chemins d'accès pour toutes les images du pool
];

const randomIndex = Math.floor(Math.random() * images.length); // Obtenir un index aléatoire
const randomImage = images[randomIndex]; // Obtenir le chemin d'accès de l'image aléatoire

const imageElement = document.getElementById("random-image");
imageElement.setAttribute("src", randomImage); // Mettre à jour l'attribut "src" de l'élément img avec l'image aléatoire
