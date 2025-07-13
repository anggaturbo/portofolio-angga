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

// Tombol dark mode (ditambahkan via script, tidak dari HTML)
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

// Efek Ketik Otomatis
const typingEl = document.querySelector(".typing");
const phrases = ["Frontend Developer", "UI Designer", "Web Enthusiast"];
let index = 0;

function typeLoop() {
  typingEl.textContent = phrases[index];
  index = (index + 1) % phrases.length;
}
setInterval(typeLoop, 4000);
typeLoop();
