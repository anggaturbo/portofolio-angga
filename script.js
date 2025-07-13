// Scroll to top
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
document.getElementById("scrollTopBtn")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Highlight nav aktif
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
  if (window.location.href.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

// Dark mode toggle
const toggle = document.createElement("button");
toggle.textContent = "🌙/☀️";
toggle.className = "toggle-dark";
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
};
document.body.appendChild(toggle);
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}
