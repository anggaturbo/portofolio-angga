
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
document.getElementById("scrollTopBtn")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
