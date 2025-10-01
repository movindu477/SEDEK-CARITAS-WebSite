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
          e.preventDefault(); // stop navigation
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

  // ===== Carousel / Horizontal Scroll for Recent Posts =====
  const wrapper = document.querySelector('.cards');
  const btnLeft = document.querySelector('.scroll-btn.left');
  const btnRight = document.querySelector('.scroll-btn.right');

  if (wrapper && btnLeft && btnRight) {
    const scrollAmount = 320; // adjust according to card width + gap
    btnRight.addEventListener('click', () => {
      wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    btnLeft.addEventListener('click', () => {
      wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }
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


/* Modal Image Functionality */
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("imgModal");
  const img = document.getElementById("organigram-img");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  if (img && modal && modalImg && closeBtn) {
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
    modal.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});


/* map function */
const dots = document.querySelectorAll('.diocese-dot');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const popupBtn = document.getElementById('popup-btn');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const name = dot.getAttribute('data-name');
    const info = dot.getAttribute('data-info');

    popupTitle.textContent = name;
    popupText.textContent = info;

    if (window.innerWidth > 768) {
      // Desktop → show near dot
      popup.style.position = "absolute";
      popup.style.top = (dot.offsetTop - 10) + "px";
      popup.style.left = (dot.offsetLeft + 30) + "px";
      popup.style.transform = "none";
    } else {
      // Mobile → center screen
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
    }

    popup.style.display = 'block';
  });
});

// Optional: close popup
popupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
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


//Rithu code
// Simple JS to show clicked category info
function showInfo(element) {
  const infoBox = document.getElementById('category-info');
  infoBox.innerHTML = `<h3>${element.textContent}</h3>
  <p>Here you can display details or description related to <strong>${element.textContent}</strong>.</p>`;
}


// ===== Single-Expand Toggle Function (true accordion) =====
function toggleYear(header) {
  const container = header.parentElement;
  const all = document.querySelectorAll('.year-container');

  all.forEach(c => {
    if (c === container) {
      c.classList.toggle('open');  // toggle clicked year
    } else {
      c.classList.remove('open');  // force all others closed
    }
  });
}

// ===== FOR THE RIGHT SIDE CATEGORY DATA DISPLAY =====
function showInfo(item) {
  const infoBox = document.getElementById('category-info');

  // Clear existing content
  infoBox.innerHTML = '';

  // Array for entries
  let entries = [];

  // Caritas Sri Lanka Youth Program entries
  if(item.innerText.includes('Caritas Sri Lanka Youth Program')) {
    entries = [
      {
        date: 'Tuesday, 08 July 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Empowered in Christ: Ecumenical Youth Programme Unites Christian Youth Across Sri Lanka',
        image: 'images/IMG-20250624-WA0088 (1).jpg',
        video: '', 
        description: 'From June 20th to 21st, 2025, the peaceful surroundings of Arunodaya Retreat Centre in Athurugiriya came alive with the vibrant spirit of youth, faith, and unity as 68 young participants from across Sri Lanka gathered for the Ecumenical Youth Programme. This transformative two-day initiative was jointly organized by Caritas Sri Lanka – SEDEC, the National…',
        category: '<span>Caritas Sri Lanka Youth Program</span><span>Sustainable Peace & Justice (SP&J)</span>',
        readMoreLink: '#'
      },
      {
        date: 'Tuesday, 06 October 2020',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Youth programme',
        image: 'images/DSC_8321-768x512.jpg', 
        video: 'https://www.youtube.com/embed/your_youtube_id', 
        description: 'Some highlights of the past youth programme',
        category: 'Caritas Sri Lanka Youth Program',
        readMoreLink: '#'
      }
    ];
  } 
  // Community Empowerment & Safe Migration entries
  else if(item.innerText.includes('Community Empowerment & Safe Migration')) {
    entries = [
      {
        date: 'Thursday, 10 April 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Strengthening Bonds for Sustainable Change: Partner Visit by Irasil Foundation',
        image: 'images/irasil-visit.jpg',
        video: '', 
        description: 'Caritas Sri Lanka had the privilege of hosting Mr. Gerard Chitty and Mrs. Shivanthi Chitty, representatives of the Irasil Foundation, from February 20th to 25th, 2025. This partner visit took place across several key project locations supported by the Irasil Foundation, including Caritas Badulla, CODESEP – Galle, Caritas Kurunegala, Caritas Anuradhapura, Don Bosco School Mannar,…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Thursday, 10 April 2025',
        org: 'Caritas Sri Lanka',
        topic: 'Caritas Korea Delegation Visits Sri Lanka: Strengthening Partnerships and Evaluating Community Projects',
        image: 'images/korea-delegation.jpg',
        video: '', 
        description: 'A delegation from Caritas Korea, led by Executive Director Fr. Francis and Program Coordinator Ms. Agnes, recently concluded a four-day visit to Sri Lanka to evaluate ongoing projects and strengthen partnerships with Caritas Sri Lanka. The visit, which took place from March 26 to 29, 2025, included meetings with all 13 diocesan partners and field…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      },
      {
        date: 'Monday, 06 May 2024',
        org: 'Caritas Sri Lanka',
        topic: 'Celebrating Culture and Unity: Caritas Sri Lanka’s Sinhala and Tamil New Year Festival 2024',
        image: '',
        video: '', 
        description: 'On April 29, 2024, the Caritas Sri Lanka Welfare Society organized the Awrudu festival for all staff members, an annual event that brings together the Sinhala and Tamil New Year with enthusiasm. This year’s celebration was marked by a series of heartfelt and culturally rich activities that showcased the traditions of Sri Lanka’s diverse communities.…',
        category: '<span>Community Empowerment & Safe Migration</span><span>(CE&SM), Latest News</span>',
        readMoreLink: '#'
      }
    ];
  } 
  // Default for other categories
  else {
    entries = [
      {
        date: '',
        org: '',
        topic: item.innerText,
        image: '',
        video: '',
        description: 'Details not available yet.',
        category: '',
        readMoreLink: '#'
      }
    ];
  }

  // Build HTML for all entries
  entries.forEach(entry => {
    const container = document.createElement('div');
    container.className = 'info-entry';
    container.innerHTML = `
      <div class="info-header" style="text-align: justify;">
        <span class="info-date">${entry.date}</span>
        <span class="info-org">${entry.org}</span>
      </div>
      <hr>
      <h3 class="info-topic" style="text-align: justify;">${entry.topic}</h3>
      ${entry.image ? `<img src="${entry.image}" alt="${entry.topic}">` : ''}
      ${entry.video ? `<div class="info-video"><iframe width="100%" height="300" src="${entry.video}" frameborder="0" allowfullscreen></iframe></div>` : ''}
      <p class="info-description" style="text-align: justify;">${entry.description}</p>
      <hr>
      <div class="info-footer" style="text-align: justify;">
        <span class="info-category">${entry.category}</span>
        <a href="${entry.readMoreLink}" class="read-more-btn">READ MORE</a>
      </div>
    `;
    infoBox.appendChild(container);
  });

  // Scroll into view smoothly
  infoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
