/* ================= NAVBAR FUNCTIONALITY ================= */
document.addEventListener('DOMContentLoaded', function () {
  // Navbar elements
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");
  const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

  // Scroll effect for navbar
  function handleScroll() {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  }

  // Menu functions
  function openMenu() {
      if (navMenu) {
          navMenu.classList.add("active");
          // Add backdrop overlay
          if (!document.getElementById('mobileMenuBackdrop')) {
              const backdrop = document.createElement('div');
              backdrop.id = 'mobileMenuBackdrop';
              backdrop.className = 'mobile-menu-backdrop';
              backdrop.addEventListener('click', closeMenuFn);
              document.body.appendChild(backdrop);
          }
      }
      if (mobileMenuBtn) {
          mobileMenuBtn.classList.add("active");
          mobileMenuBtn.setAttribute("aria-expanded", "true");
      }
      document.body.style.overflow = "hidden";
  }

  function closeMenuFn() {
      if (navMenu) {
          navMenu.classList.remove("active");
      }
      if (mobileMenuBtn) {
          mobileMenuBtn.classList.remove("active");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
      document.body.style.overflow = "";
      
      // Remove backdrop overlay
      const backdrop = document.getElementById('mobileMenuBackdrop');
      if (backdrop) {
          backdrop.remove();
      }
      
      // Close all dropdowns and submenus
      document.querySelectorAll('.dropdown.active, .dropdown-submenu.active').forEach(item => {
          item.classList.remove("active");
      });
  }

  // Toggle dropdown on mobile
  function toggleDropdown(dropdown) {
      if (!dropdown) return;
      
      const isActive = dropdown.classList.contains('active');
      
      // For submenus, don't close sibling submenus in the same parent
      // Only close submenus that are at the same level or in different parents
      if (dropdown.classList.contains('dropdown-submenu')) {
          // Close other submenus at the same level (siblings)
          const parent = dropdown.parentElement;
          if (parent) {
              parent.querySelectorAll('.dropdown-submenu.active').forEach(item => {
                  if (item !== dropdown && item.parentElement === parent) {
                      item.classList.remove('active');
                  }
              });
          }
      } else {
          // For main dropdowns, close all other dropdowns and submenus
          document.querySelectorAll('.dropdown.active, .dropdown-submenu.active').forEach(item => {
              if (item !== dropdown) {
                  item.classList.remove('active');
              }
          });
      }
      
      // Toggle current dropdown
      if (!isActive) {
          dropdown.classList.add('active');
      } else {
          dropdown.classList.remove('active');
      }
  }

  // Mobile menu toggle
  if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", openMenu);
  }

  if (closeMenu) {
      closeMenu.addEventListener("click", closeMenuFn);
  }

  // Escape key to close menu
  document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
          closeMenuFn();
      }
  });

  // ================= MOBILE NAVIGATION HANDLING =================
  
  // Handle regular navigation links (non-dropdown items) on mobile
  document.querySelectorAll('#navMenu > li:not(.dropdown) > a').forEach(link => {
      link.addEventListener('click', function(e) {
          if (isMobile() && navMenu && navMenu.classList.contains("active")) {
              // Allow navigation and close menu
              const href = this.getAttribute('href');
              if (href && href !== '#' && href !== 'javascript:void(0)') {
                  // Close menu immediately for navigation
                  closeMenuFn();
              }
          }
      });
  });

  // DROPDOWN TOGGLE FUNCTIONALITY - Improved for mobile
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
          if (isMobile()) {
              const href = this.getAttribute('href');
              const isToggleOnly = !href || href === '#' || href === 'javascript:void(0)';
              const dropdown = this.closest('.dropdown');
              const isActive = dropdown && dropdown.classList.contains('active');
              
              // Always toggle on mobile for dropdowns
              if (isToggleOnly || !isActive) {
                  // Only toggle, no navigation - or first click to open
                  e.preventDefault();
                  e.stopPropagation();
                  if (dropdown) {
                      toggleDropdown(dropdown);
                  }
                  return false;
              } else {
                  // Dropdown already open and has href: navigate to href and close menu
                  closeMenuFn();
                  // Allow default navigation behavior (don't prevent)
              }
          }
      }, true); // Use capture phase for priority
      
      // Also handle clicks directly on the arrow
      const arrow = toggle.querySelector('.dropdown-arrow');
      if (arrow) {
          arrow.addEventListener('click', function(e) {
              if (isMobile()) {
                  e.preventDefault();
                  e.stopPropagation();
                  e.stopImmediatePropagation();
                  const dropdown = toggle.closest('.dropdown');
                  if (dropdown) {
                      toggleDropdown(dropdown);
                  }
                  return false;
              }
          }, true); // Use capture phase for priority
      }
  });

  // SUBMENU TOGGLE FUNCTIONALITY - Improved for mobile
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
      // Handle clicks on the entire toggle link (including arrow)
      toggle.addEventListener('click', function(e) {
          if (isMobile()) {
              // Always prevent default for submenu toggles on mobile
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              
              const submenuParent = this.closest('.dropdown-submenu');
              if (submenuParent) {
                  // Use the toggleDropdown function
                  toggleDropdown(submenuParent);
              }
              
              return false;
          }
      }, true); // Use capture phase for priority
  });

  // Handle all navigation links in dropdown menus and submenus (mobile)
  // This should run AFTER toggle handlers, so we use bubble phase (default)
  document.querySelectorAll('.dropdown-menu a, .submenu a').forEach(link => {
      link.addEventListener('click', function(e) {
          // Skip if already handled by toggle handlers
          if (e.defaultPrevented) {
              return;
          }
          
          if (isMobile()) {
              // Check if it's a toggle link
              const isToggle = this.classList.contains('dropdown-toggle') || this.classList.contains('submenu-toggle');
              
              if (!isToggle) {
                  // Regular navigation link - navigate and close menu
                  const href = this.getAttribute('href');
                  if (href && href !== '#' && href !== 'javascript:void(0)') {
                      // Close menu before navigation
                      closeMenuFn();
                      // Allow default navigation behavior
                  }
              }
          }
      });
  });

  // Desktop hover functionality - IMPROVED
  if (!isMobile()) {
      let hoverTimeouts = new Map();
      const HOVER_DELAY = 100;

      // Add hover events for main dropdowns
      document.querySelectorAll('.dropdown').forEach(dropdown => {
          dropdown.addEventListener('mouseenter', function() {
              clearTimeout(hoverTimeouts.get(this));
              this.classList.add('active');
          });
          
          dropdown.addEventListener('mouseleave', function(e) {
              const relatedTarget = e.relatedTarget;
              const timeoutId = setTimeout(() => {
                  if (!this.contains(relatedTarget)) {
                      this.classList.remove('active');
                  }
              }, HOVER_DELAY);
              hoverTimeouts.set(this, timeoutId);
          });
      });

      // Add hover events for dropdown menus
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.addEventListener('mouseenter', function() {
              const dropdown = this.closest('.dropdown');
              if (dropdown) {
                  clearTimeout(hoverTimeouts.get(dropdown));
                  dropdown.classList.add('active');
              }
          });
          
          menu.addEventListener('mouseleave', function(e) {
              const relatedTarget = e.relatedTarget;
              const dropdown = this.closest('.dropdown');
              
              if (dropdown) {
                  const timeoutId = setTimeout(() => {
                      if (!dropdown.contains(relatedTarget)) {
                          dropdown.classList.remove('active');
                      }
                  }, HOVER_DELAY);
                  hoverTimeouts.set(dropdown, timeoutId);
              }
          });
      });

      // Add hover events for submenus
      document.querySelectorAll('.dropdown-submenu').forEach(submenu => {
          submenu.addEventListener('mouseenter', function() {
              clearTimeout(hoverTimeouts.get(this));
              this.classList.add('active');
          });
          
          submenu.addEventListener('mouseleave', function(e) {
              const relatedTarget = e.relatedTarget;
              const timeoutId = setTimeout(() => {
                  if (!this.contains(relatedTarget)) {
                      this.classList.remove('active');
                  }
              }, HOVER_DELAY);
              hoverTimeouts.set(this, timeoutId);
          });
      });

      // Add hover events for submenu menus
      document.querySelectorAll('.submenu').forEach(menu => {
          menu.addEventListener('mouseenter', function() {
              const submenu = this.closest('.dropdown-submenu');
              if (submenu) {
                  clearTimeout(hoverTimeouts.get(submenu));
                  submenu.classList.add('active');
              }
          });
          
          menu.addEventListener('mouseleave', function(e) {
              const relatedTarget = e.relatedTarget;
              const submenu = this.closest('.dropdown-submenu');
              
              if (submenu) {
                  const timeoutId = setTimeout(() => {
                      if (!submenu.contains(relatedTarget)) {
                          submenu.classList.remove('active');
                      }
                  }, HOVER_DELAY);
                  hoverTimeouts.set(submenu, timeoutId);
              }
          });
      });

      // Clear all timeouts when mouse enters navbar
      navbar.addEventListener('mouseenter', () => {
          hoverTimeouts.forEach((timeout, element) => {
              clearTimeout(timeout);
          });
      });
  }

  // Close submenus when clicking outside (desktop)
  document.addEventListener('click', function(e) {
      if (!isMobile()) {
          if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-submenu')) {
              document.querySelectorAll('.dropdown.active, .dropdown-submenu.active').forEach(item => {
                  item.classList.remove('active');
              });
          }
      }
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener('click', function(e) {
      if (isMobile() && navMenu && navMenu.classList.contains("active")) {
          // Don't close if clicking inside menu, menu button, or backdrop (backdrop has its own handler)
          if (!e.target.closest("#navMenu") && 
              !e.target.closest("#mobileMenuBtn") && 
              !e.target.closest("#mobileMenuBackdrop")) {
              closeMenuFn();
          }
      }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
      if (!isMobile() && navMenu) {
          // Reset mobile menu state on desktop
          navMenu.classList.remove("active");
          if (mobileMenuBtn) {
              mobileMenuBtn.classList.remove("active");
          }
          document.querySelectorAll('.dropdown.active, .dropdown-submenu.active').forEach(item => {
              item.classList.remove('active');
          });
      }
  });

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initialize scroll state
  handleScroll();

  // ================= COMING SOON NOTIFICATION SYSTEM =================
  
  // List of pages that don't exist yet (will show "Coming Soon")
  const comingSoonPages = [
    'partnership.html',
    'fundraise.html',
    'advocates.html',
    'blogs.html',
    'newsletters.html',
    'internships.html',
    'volunteer.html',
    'opportunities.html',
    'annual-reports.html'
  ];

  // Function to check if a page exists (synchronously check file list)
  function isComingSoonPage(href) {
    if (!href || href === '#' || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return false;
    }
    
    // Extract filename from href
    const filename = href.split('/').pop().split('#')[0];
    
    // Check if it's in the coming soon list
    return comingSoonPages.includes(filename);
  }

  // Function to show Coming Soon notification
  function showComingSoonNotification() {
    // Remove existing notification if any
    const existingNotification = document.getElementById('comingSoonNotification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.id = 'comingSoonNotification';
    notification.className = 'coming-soon-notification';
    notification.innerHTML = `
      <div class="coming-soon-content">
        <svg class="coming-soon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span class="coming-soon-text">Coming Soon</span>
      </div>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Trigger animation after a brief delay
    requestAnimationFrame(() => {
      setTimeout(() => {
        notification.classList.add('show');
      }, 10);
    });

    // Auto hide after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 400);
    }, 3000);
  }

  // Handle navigation links - check if page exists
  document.querySelectorAll('#navMenu a, .navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's a toggle link or anchor link
      if (this.classList.contains('dropdown-toggle') || 
          this.classList.contains('submenu-toggle') ||
          !href ||
          href === '#' ||
          href.startsWith('#') ||
          href.startsWith('javascript:') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:')) {
        return;
      }

      // Check if it's a coming soon page
      if (isComingSoonPage(href)) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close mobile menu if open
        if (isMobile() && navMenu && navMenu.classList.contains("active")) {
          closeMenuFn();
        }
        
        // Show notification
        showComingSoonNotification();
        return false;
      }
    });
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



  // Get elements for ORG image
  const modal = document.getElementById("imagePopup");
  const img = document.getElementById("orgImage");
  const modalImg = document.getElementById("popupImg");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Show popup when image is clicked
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  // Close popup when 'x' is clicked
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // Also close popup when clicking outside image
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

//donate
// Process Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    
    // Step click functionality
    steps.forEach(step => {
        step.addEventListener('click', function() {
            // Remove active class from all steps
            steps.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked step
            this.classList.add('active');
            
            // Add visual feedback
            this.style.transform = 'translateY(-8px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
            
            // Show step information
            showStepInfo(this);
        });
        
        // Hover effects
        step.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Function to show step information
    function showStepInfo(step) {
        const stepNumber = step.querySelector('.step-number').textContent;
        const stepTitle = step.querySelector('h3').textContent;
        const stepDescription = step.querySelector('p').textContent;
        
        console.log(`Step ${stepNumber} activated:`, {
            title: stepTitle,
            description: stepDescription
        });
        
        // You can add additional functionality here
        // For example, update a separate info panel or show modal
    }
    
    // Auto-activate steps in sequence (optional)
    function activateStepsSequentially() {
        let index = 0;
        const interval = setInterval(() => {
            if (index < steps.length) {
                // Remove active class from all steps
                steps.forEach(s => s.classList.remove('active'));
                
                // Add active class to current step
                steps[index].classList.add('active');
                showStepInfo(steps[index]);
                
                index++;
            } else {
                clearInterval(interval);
                
                // Reset after completion
                setTimeout(() => {
                    steps.forEach(s => s.classList.remove('active'));
                }, 3000);
            }
        }, 2000);
    }
    
    // Uncomment the line below if you want steps to auto-activate on page load
    // activateStepsSequentially();
    
    // Initialize first step as active
    if (steps.length > 0) {
        steps[0].classList.add('active');
        showStepInfo(steps[0]);
    }
});

// Add smooth scroll to process section
function scrollToProcessSection() {
    const section = document.querySelector('.infographic-section');
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }
}

//application form of donate
// Application Form Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const applicationLink = document.getElementById('applicationLink');
    
    if (applicationLink) {
        // Add click tracking (optional - for analytics)
        applicationLink.addEventListener('click', function(e) {
            // You can add analytics tracking here
            console.log('Application form link clicked');
            
            // Optional: Add loading state
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        });
        
        // Add hover effects
        applicationLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        applicationLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Add intersection observer for animation
    const applicationSection = document.querySelector('.application-section');
    if (applicationSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(applicationSection);
    }
});

// Function to simulate form submission (if needed)
function submitApplicationForm(formData) {
    // This would be connected to your actual form submission
    console.log('Submitting application form:', formData);
    
    // Show success message
    showApplicationSuccess();
}

function showApplicationSuccess() {
    // You can implement a success modal or message here
    const successMessage = document.createElement('div');
    successMessage.className = 'application-success';
    successMessage.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✅</div>
            <h3>Application Submitted!</h3>
            <p>Thank you for your application. We'll contact you within 24-48 hours.</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    
    successMessage.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    successMessage.querySelector('.success-content').style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 15px;
        text-align: center;
        max-width: 400px;
        margin: 20px;
    `;
    
    document.body.appendChild(successMessage);
}