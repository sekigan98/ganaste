document.addEventListener("DOMContentLoaded", () => {
  const palabras = ["Slot", "Mesas en vivo", "Apuestas deportivas", "Ruleta", "Crash", "Blackjack"];
  const contenedor = document.getElementById("palabras-dinamicas");

  let i = 0;
  setInterval(() => {
    i = (i + 1) % palabras.length;
    contenedor.textContent = palabras[i];
  }, 2500);
});
