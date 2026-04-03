const fecha = new Date("2026-05-23").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fecha - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((distancia / (1000 * 60)) % 60);

  timer.innerHTML = `${dias} días · ${horas}h · ${minutos}m`;
}, 1000);

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;

  const mensaje = `Hola, confirmo mi asistencia a la boda de Isabela y Kairos. Nombre: ${nombre}`;

  window.open(`https://wa.me/573127726119?text=${encodeURIComponent(mensaje)}`);
});