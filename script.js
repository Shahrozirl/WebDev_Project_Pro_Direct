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
