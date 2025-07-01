// Fix para iOS
function setVhUnit() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVhUnit();
window.addEventListener('resize', setVhUnit);

/* 🎯 Chips animadas
const chipsContainer = document.querySelector(".chips-container");

const colors = ['#D32F2F', '#9C27B0', '#FFD700', '#030001']; // rojo, violeta, dorado

 function createChip() {
  const chip = document.createElement("div");
  chip.classList.add("chip");

  // Color aleatorio
  const color = colors[Math.floor(Math.random() * colors.length)];
  chip.style.color = color;

  // Posición aleatoria
  chip.style.left = Math.random() * 100 + "vw";

  // Tamaño aleatorio
  const size = 30 + Math.random() * 20;
  chip.style.width = chip.style.height = size + "px";

  // Duración de la caída
  const duration = 3 + Math.random() * 3;
  chip.style.animationDuration = `${duration}s, 3s`;

  // Rotaciones iniciales aleatorias
  const rotX = Math.floor(Math.random() * 360);
  const rotY = Math.floor(Math.random() * 360);
  chip.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

  chipsContainer.appendChild(chip);

  // Eliminar después de la animación
  setTimeout(() => {
    chip.remove();
  }, duration * 1000 + 1000);
}

// Lanzar una ficha cada 250ms
setInterval(createChip, 250);
*/

// 📱 Lógica de WhatsApp + GA
document.addEventListener("DOMContentLoaded", () => {
  const whatsappButton = document.getElementById("whatsapp-button");
  const whatsappLogo = document.getElementById("whatsapp-logo");

  const links = [
    "https://wa.link/wdd4bs", // 1 474 758 5814
    "https://wa.link/lf8pvi", // 1 474 758 6757
    "https://wa.link/dv5ph9", // 1 474 758 6403
  ];

  const randomIndex = Math.floor(Math.random() * links.length);
  const selectedLink = links[randomIndex];

  // Botón
  if (whatsappButton) {
    whatsappButton.href = selectedLink;
    whatsappButton.addEventListener("click", () => {
      gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'Botón WhatsApp',
      });
    });
  }

  // Logo clickeable
  if (whatsappLogo) {
    whatsappLogo.href = selectedLink;
    whatsappLogo.addEventListener("click", () => {
      gtag('event', 'click_whatsapp_logo', {
        event_category: 'engagement',
        event_label: 'Logo WhatsApp',
      });
    });
  }

  // ✅ Fix Safari: forzar repintado para animaciones y capas 3D
  document.body.style.transform = 'translateZ(0)';

  // Hacer clickeable toda la pantalla
  const fullPageLink = document.createElement("a");
  fullPageLink.href = selectedLink;
  fullPageLink.target = "_blank";
  fullPageLink.style.position = "fixed";
  fullPageLink.style.top = 0;
  fullPageLink.style.left = 0;
  fullPageLink.style.width = "100%";
  fullPageLink.style.height = "100%";
  fullPageLink.style.zIndex = "9998";
  fullPageLink.style.textDecoration = "none";
  fullPageLink.style.background = "transparent";
  fullPageLink.style.pointerEvents = "auto";
  fullPageLink.setAttribute("aria-label", "Ir a WhatsApp");

  // Evitar que se rompa el diseño (contenido sigue visible y clickeable por debajo visualmente)
  document.body.appendChild(fullPageLink);

  fullPageLink.addEventListener("click", () => {
    gtag('event', 'click_whatsapp_fullpage', {
      event_category: 'engagement',
      event_label: 'Pantalla Completa WhatsApp',
    });
  });
});
