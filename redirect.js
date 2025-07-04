document.addEventListener("DOMContentLoaded", function () {
  const numeros = [
    "https://wa.me/5491130738182",
    "https://wa.me/5491130736507"
  ];
  const elegido = numeros[Math.floor(Math.random() * numeros.length)];
  const mensaje = "?text=Hola!%20Estoy%20interesado%20en%20más%20info";

  setTimeout(() => {
    window.location.href = elegido + mensaje;
  }, 1500); // 1.5 segundos de espera
});
