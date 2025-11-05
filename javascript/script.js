// side navigation
 function toggleMenu() {
  const menu = document.getElementById("sideNav");
  menu.classList.toggle("open");
}

let currentSize = 100; // percentage

function changeTextSize(direction) {
  currentSize += direction * 10; // increase or decrease by 10%
  document.body.style.fontSize = currentSize + "%";
}

function toggleContrast() {
  const body = document.body;
  const btn = document.getElementById("contrastToggle");

  body.classList.toggle("high-contrast");

  // Change icon depending on mode
  if (body.classList.contains("high-contrast")) {
    btn.textContent = "🌙"; // moon icon
  } else {
    btn.textContent = "☀️"; // sun icon
  }
}

