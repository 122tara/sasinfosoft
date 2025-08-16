let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change every 5s

const scrollUp = document.getElementById("scrollUp");
const scrollDown = document.getElementById("scrollDown");

// Scroll Up
scrollUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll Down
scrollDown.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// Show/Hide buttons smartly
function toggleScrollButtons() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;

  // Hide Up button if already at top
  if (scrollTop === 0) {
    scrollUp.classList.add("hidden");
  } else {
    scrollUp.classList.remove("hidden");
  }

  // Hide Down button if at bottom
  if (scrollTop + windowHeight >= docHeight - 5) {
    scrollDown.classList.add("hidden");
  } else {
    scrollDown.classList.remove("hidden");
  }
}

// Run on scroll + page load
window.addEventListener("scroll", toggleScrollButtons);
window.addEventListener("load", toggleScrollButtons);
