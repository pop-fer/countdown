// Tomar el año actual
const year = new Date().getFullYear();

// Definir fecha objetivo → 24 septiembre a las 23:59:59
let targetDate = new Date(`${year}-09-24T23:59:59`).getTime();

// Si ya pasó el 24 de septiembre de este año, usar el próximo año
if (Date.now() > targetDate) {
  targetDate = new Date(`${year + 1}-09-24T23:59:59`).getTime();
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.querySelector(".timer").innerHTML = "<h2>¡Llegó el 24 de Octubre!</h2>";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").textContent = String(days).padStart(2, "0");
  document.querySelector(".hours").textContent = String(hours).padStart(2, "0");
  document.querySelector(".minutes").textContent = String(minutes).padStart(2, "0");
  document.querySelector(".seconds").textContent = String(seconds).padStart(2, "0");
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
