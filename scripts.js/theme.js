// Check localStorage for mode on load
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});