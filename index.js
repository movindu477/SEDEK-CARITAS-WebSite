/* navbar function */

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");
  const dropdownItems = document.querySelectorAll("#navMenu .dropdown");
  const isMobile = () => window.matchMedia("(max-width: 640px)").matches;
  function openMenu() {
    navMenu.classList.add("active");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenuFn() {
    navMenu.classList.remove("active");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    dropdownItems.forEach(d => d.classList.remove("active"));
  }
  mobileMenuBtn.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuFn);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) closeMenuFn();
  });
  dropdownItems.forEach(item => {
    const toggleLink = item.querySelector("a.dropdown-toggle");
    let tappedOnce = false; // Track double tap on mobile
    toggleLink.addEventListener("click", (e) => {
      if (isMobile()) {
        if (!item.classList.contains("active") && !tappedOnce) {
          e.preventDefault(); // stop navigat
          item.classList.add("active");
          tappedOnce = true; 
          setTimeout(() => tappedOnce = false, 1000);
        } else {
          window.location.href = toggleLink.getAttribute("href");
        }
      }
    });
    item.querySelectorAll(".dropdown-menu a").forEach(subLink => {
      subLink.addEventListener("click", () => {
        if (isMobile()) closeMenuFn();
      });
    });
  });
  document.addEventListener("click", (e) => {
    if (isMobile() && navMenu.classList.contains("active")) {
      const inside = e.target.closest("#navMenu") || e.target.closest("#mobileMenuBtn");
      if (!inside) closeMenuFn();
    }
  });
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      document.body.style.overflow = "";
      navMenu.classList.remove("active");
      dropdownItems.forEach(d => d.classList.remove("active"));
    }
  });
});
  
  




  // Simple script to highlight active dot
        document.addEventListener('DOMContentLoaded', function() {
            const dots = document.querySelectorAll('.carousel-dot');
            
            function activateDot(index) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
            }
            
            // Change dot every 5 seconds (matching animation timing)
            let currentIndex = 0;
            setInterval(() => {
                activateDot(currentIndex);
                currentIndex = (currentIndex + 1) % dots.length;
            }, 5000);
        });





      document.addEventListener('DOMContentLoaded', function() {
            const unitHeadings = document.querySelectorAll('.unitboxes-headings h1');
            const unitContents = document.querySelectorAll('.imagebox1');
            
            unitHeadings.forEach(heading => {
                heading.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    
                    // Remove active class from all headings and contents
                    unitHeadings.forEach(h => h.classList.remove('active'));
                    unitContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked heading and corresponding content
                    this.classList.add('active');
                    document.getElementById(targetId).classList.add('active');
                });
            });
        });





        // Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// When user clicks, scroll to the top smoothly
scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};





/* impact-section function */
// Number counter animation when section enters viewport
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  let started = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 200; // adjust speed
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCounter();
    });
  }

  // Use IntersectionObserver to trigger only once
  const section = document.querySelector(".impact-section");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      animateCounters();
    }
  }, { threshold: 0.4 });

  observer.observe(section);
});




document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".unitboxes-headings h2");
  const boxes = document.querySelectorAll(".imagebox1");

  headings.forEach(heading => {
    heading.addEventListener("click", () => {
      // Remove active from all
      headings.forEach(h => h.classList.remove("active"));
      boxes.forEach(box => box.classList.remove("active"));

      // Add active to clicked
      heading.classList.add("active");
      document.getElementById(heading.dataset.target).classList.add("active");
    });
  });
});




/* map function */
const dots = document.querySelectorAll('.diocese-dot');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const popupBtn = document.getElementById('popup-btn');

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const name = dot.getAttribute('data-name');
    const info = dot.getAttribute('data-info');

    popupTitle.textContent = name;
    popupText.textContent = info;

    // Position popup near the clicked dot
    const rect = dot.getBoundingClientRect();
    const containerRect = dot.closest('.map-container').getBoundingClientRect();

    popup.style.top = (dot.offsetTop - 10) + "px";
    popup.style.left = (dot.offsetLeft + 30) + "px";

    popup.style.display = 'block';
  });
});

// Hide popup when clicking outside
document.addEventListener('click', (e) => {
  if (!popup.contains(e.target) && !e.target.classList.contains('diocese-dot')) {
    popup.style.display = 'none';
  }
});

// Reveal-on-scroll for mainimage2 boxes
document.addEventListener('DOMContentLoaded', () => {
  const revealBoxes = document.querySelectorAll('.mainimage2 .box');
  if (!revealBoxes.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  revealBoxes.forEach(box => observer.observe(box));
});




// mainimage2 section function
// Reveal boxes on scroll
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".mainimage2 .box");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});
