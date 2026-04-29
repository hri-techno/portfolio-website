const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
};

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// ✨ Scroll animation (important upgrade)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
