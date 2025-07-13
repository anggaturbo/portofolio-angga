// Efek Ketik Otomatis
const textArray = ["Frontend Developer", "UI Designer", "Web Enthusiast"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetween = 1500;
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[index].length) {
    typedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, delayBetween);
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
