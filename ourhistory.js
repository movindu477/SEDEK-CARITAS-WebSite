// Reveal elements on scroll
function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".history-description, .directors-heading, .directors-list"
  );
  const windowHeight = window.innerHeight;
  
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);




// description function from history to directors
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add .show class to main section
        entry.target.classList.add("show");

        // Animate paragraphs inside
        const paragraphs = entry.target.querySelectorAll("p");
        paragraphs.forEach((p, i) => {
          setTimeout(() => p.classList.add("show"), i * 300);
        });

        // Animate directors heading
        const heading = entry.target.querySelector(".directors-heading");
        if (heading) setTimeout(() => heading.classList.add("show"), 400);

        // Animate directors list
        const listItems = entry.target.querySelectorAll(".directors-list li");
        listItems.forEach((li, i) => {
          setTimeout(() => li.classList.add("show"), 600 + i * 150);
        });

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const section = document.querySelector(".history-description");
  if (section) observer.observe(section);
});
