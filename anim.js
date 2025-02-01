// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "GRACIAS AMOR", time:  3},
  { text: "ESTOS 3 MESES A TU LADO", time:  7},
  { text: "HAN SIDO LOS MEJORES DE MI VIDA", time: 11 },
  { text: "GRACIAS A QUE LLEGO ESA LUZ", time: 15 },
  { text: "ESA LUZ QUE ILUMINO MI OSCURIDAD", time: 18 },
  { text: "Y A TU LADO ME HE SENTIDO", time: 20 },
  { text: "COMO EL HOMBRE MAS DICHOSO DE TODOS", time: 23 },
  { text: "GRACIAS AMOR Y ESTE REGALO ES DE CORAZON", time: 26 },
  { text: "Y AUNQUE NO PUEDO ESTAR A TU LADO", time: 29 },
  { text: "NADA IMPIDE QUE TE HAGA REGALOS", time: 32 },
  { text: "TE AMOOOOOOO", time: 37 },
  { text: "Y FELICES 3 MESES AMOR", time: 39 },
  { text: "ERES LO QUE SIEMPRE HABIA BUSCADO", time: 42 },
  { text: "Y LLEGASTE CUANDO YA ME HABIA RESIGNADO", time: 44 },
  { text: "PERO ME HICISTE EL HOMBRE MAS FELIZ", time: 47 },
  { text: "GRACIAS AMOR Y CUANDO TE VEA SERAN MEJOR LAS FLORES", time: 52 },
  { text: "FELICES 3 MESES Y VAMOS POR MAS", time: 57 },
  { text: "HUMILDEMENTE ESTE ES MI REGALO", time: 60 },
  { text: "AUNQUE PROVICIONAL AMOR", time: 63 },
  { text: "PORQUE CUANDO TE VEA SERA MEJOR", time: 66 },
  { text: "FELICES 3 MESES", time: 68 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);