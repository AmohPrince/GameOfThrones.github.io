const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const date = document.getElementById(date);

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

date.addEventListener("click", () => {
  date.innerHTML = Date();
});