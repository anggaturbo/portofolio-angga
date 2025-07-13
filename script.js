// Scroll to top button
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
document.getElementById("scrollTopBtn")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Highlight active nav link
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
  if (window.location.href.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
