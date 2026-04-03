const weddingDate = new Date("2026-05-23T00:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    timerElement.innerHTML = "¡Hoy es nuestro gran día!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  timerElement.innerHTML = `${days} días · ${hours} horas · ${minutes} min`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach((section) => observer.observe(section));

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {
  rsvpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const guestName = document.getElementById("guestName").value.trim();

    if (!guestName) {
      alert("Por favor escribe tu nombre completo.");
      return;
    }

    const rawMessage =
      `Hola, confirmo mi asistencia a la boda de Isabela y Kairos.\n\nNombre completo: ${guestName}`;

    const whatsappURL = `https://wa.me/573127726119?text=${encodeURIComponent(rawMessage)}`;

    window.open(whatsappURL, "_blank");
  });
}