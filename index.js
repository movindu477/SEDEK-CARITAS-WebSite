  /* navbar function */
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");

  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
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

