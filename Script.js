function verifie() {
  var valeur = document.getElementById("champ_texte").value;
  nombre_de_fois = nombre_de_fois + 1;

  if (isNaN(valeur)) {
    alert("ceci n'est pas un nombre : " + valeur);
  } else {
    if (valeur == nombre) {
      alert(
        " Vous avez réussi !! Nous vous refaisons un nouveau nombre mystère, vous avez réussi en " +
          nombre_de_fois +
          " fois"
      );
      nombre = getRandom(0, 100);
      nombre_de_fois = 0;
    } else if (valeur > nombre) {
      alert("votre nombre est trop grand");
    } else if (valeur < nombre) {
      alert("votre nombre est trop petit");
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var nombre = getRandom(0, 100);
var nombre_de_fois = 0;

