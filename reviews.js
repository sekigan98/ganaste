document.addEventListener("DOMContentLoaded", () => {
 const reviews = [
  { nombre: "Lucía G.", texto: "Les hablé por WhatsApp y ya estaba jugando. Súper rápido.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/44.jpg" },
  { nombre: "Rodrigo P.", texto: "No confiaba mucho, pero funcionó perfecto. Ya jugué dos veces.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/35.jpg" },
  { nombre: "Sofía M.", texto: "El bono me lo activaron en minutos. Muy recomendado.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/68.jpg" },
  { nombre: "El Tano", texto: "Me crearon la cuenta al toque. Ya estoy metido 🔥", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/62.jpg" },
  { nombre: "Mariela B.", texto: "Todo claro desde el inicio. Ya transferí y jugué slots.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/32.jpg" },
  { nombre: "Carlos R.", texto: "Al principio dudaba, pero cumplió todo. Muy serio.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/45.jpg" },
  { nombre: "Evelyn J.", texto: "Todo súper rápido y buena atención. Ya les recomendé a mis amigos.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/19.jpg" },
  { nombre: "Nico D.", texto: "En 10 minutos ya estaba jugando ruleta. Real y sin vueltas.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/20.jpg" },
  { nombre: "Laura V.", texto: "Me respondieron enseguida, transferí y ya estaba adentro.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/50.jpg" },
  { nombre: "Ramiro C.", texto: "Excelente experiencia. Muy atentos en todo momento.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/54.jpg" },
  { nombre: "Karen L.", texto: "¡Re copados! Me explicaron todo por WhatsApp y me guiaron.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/10.jpg" },
  { nombre: "Julián M.", texto: "No es chamuyo, funciona de verdad. Ya gané en blackjack.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/13.jpg" },
  { nombre: "Tamara P.", texto: "Nunca me atendieron tan rápido. Re buena onda.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/28.jpg" },
  { nombre: "Leo G.", texto: "Me sorprendió. Súper serio y todo tal cual dijeron.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/38.jpg" },
  { nombre: "Ana L.", texto: "Entré por curiosidad y terminé jugando una hora 😂", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/21.jpg" },
  { nombre: "Pablo S.", texto: "Transferí y ya tenía todo cargado. Muy buena experiencia.", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/15.jpg" },
  { nombre: "Flor D.", texto: "Me contestaron literal en segundos. Me re sirvió.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/64.jpg" },
  { nombre: "Damián R.", texto: "Muy confiables. Me ayudaron sin vueltas ni chamuyo.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/70.jpg" },
  { nombre: "Noelia T.", texto: "La mejor atención que recibí en una web así.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/77.jpg" },
  { nombre: "Gonza M.", texto: "Todo lo que prometen, lo cumplen. Muy serios.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/73.jpg" },
  { nombre: "Vane E.", texto: "Muy atentos, te ayudan en todo paso a paso.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/80.jpg" },
  { nombre: "Luciano B.", texto: "La carga fue inmediata. Ya estoy jugando blackjack.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/83.jpg" },
  { nombre: "Camila S.", texto: "Pensé que era una estafa, pero es 100% real.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/85.jpg" },
  { nombre: "Diego C.", texto: "Muy bueno todo. Me mandaron el link y funcionó.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/88.jpg" },
  { nombre: "Natalia R.", texto: "Muy recomendable. Atentos, claros y sin vueltas.", fecha: "Hace 4 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/90.jpg" },
  { nombre: "Lautaro M.", texto: "Le pasé a mis amigos, todos jugando ya 😂", fecha: "Hace 6 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/91.jpg" },
  { nombre: "Marina G.", texto: "Todo muy simple, sin vueltas raras. Me gustó.", fecha: "Hace 1 día", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/92.jpg" },
  { nombre: "Facundo Z.", texto: "Realmente confiable. Ya jugué dos veces.", fecha: "Hace 3 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/95.jpg" },
  { nombre: "Belén F.", texto: "Re buena atención. Me cargaron el bono enseguida.", fecha: "Hace 2 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/women/97.jpg" },
  { nombre: "Matías J.", texto: "Todo como dijeron. Muy serio el sitio.", fecha: "Hace 5 días", estrellas: 5, foto: "https://randomuser.me/api/portraits/men/99.jpg" }
];

 // 🔀 Mezclar reseñas para que aparezcan en orden aleatorio al cargar
  reviews.sort(() => Math.random() - 0.5);

  const container = document.getElementById("fake-reviews");
  if (!container) return;

  // 💄 Estilos del contenedor
  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    maxWidth: "320px",
    margin: "30px auto 0",
    minHeight: "90px",
    zIndex: "9994"
  });

  let index = 0;

  const showReview = () => {
    const r = reviews[index];
    container.innerHTML = ""; // Limpiar anterior

    const div = document.createElement("div");
    Object.assign(div.style, {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "#fff",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      opacity: 0,
      transition: "opacity 0.5s ease"
    });

    div.innerHTML = `
      <img src="${r.foto}" alt="Foto de ${r.nombre}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
      <div style="font-size: 14px; color: #222;">
        <strong>${r.nombre}</strong> <span style="color:#666; font-size:12px;">· ${r.fecha}</span><br>
        <span style="color: #FFD700;">${"★".repeat(r.estrellas)}</span><br>
        <span>${r.texto}</span>
      </div>
    `;

    container.appendChild(div);

    setTimeout(() => {
      div.style.opacity = 1;
    }, 100);

    index = (index + 1) % reviews.length;
  };

  showReview();
  setInterval(showReview, 4000);
});
