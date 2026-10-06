// ================== Page Loader ==================
(function () {
  const loader = document.getElementById("pageLoader");
  const bar = document.getElementById("loaderBar");
  if (!loader || !bar) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      bar.style.width = "100%";
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 400);
    }
    bar.style.width = progress + "%";
  }, 80);

  window.addEventListener("load", () => {
    progress = 100;
    bar.style.width = "100%";
    clearInterval(interval);
    setTimeout(() => loader.classList.add("hidden"), 300);
  });
})();

// ================== Mobile Nav Toggle ==================
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      sidebar.classList.add("show-sidebar");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      sidebar.classList.remove("show-sidebar");
    });
  }

  // Close sidebar when a nav link is clicked (mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("show-sidebar");
    });
  });
});

// ================== Sidebar Share Button ==================
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".btn-share");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: "Abhay Tripathi's Portfolio",
        text: "Check out this awesome portfolio by Abhay Tripathi!",
        url: window.location.href,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          console.log("Portfolio shared successfully!");
        } catch (err) {
          console.log("Share cancelled or failed:", err);
        }
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href);
          showToast("🔗 Link copied to clipboard!");
        } catch (err) {
          alert("Could not copy link. Please try manually.");
        }
      }
    });
  }

  // 🔹 Toast message function
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
});

// ================== Scroll Active Link ==================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50; // adjust for nav height
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", scrollActive);

// modal
document.addEventListener("DOMContentLoaded", () => {
  const projectsData = {
    amazon: {
      title: "Amazon Clone",
      description: "This is my first clone project but this isn’t complete.",
      date: "1 Jan 2025",
      Use: "HTML, CSS",
      type: "Frontend",
      type: "code",
      type: "code",
      type: "code",
      github: "https://www.github.com",
      demo: "https://your-amazon-demo-link.com",
      img: "assets/picture/amazon/1.png",
    },
    netflix: {
      title: "Netflix Login Clone",
      description: "Login page clone with responsive UI.",
      date: "15 Feb 2025",
      Use: "HTML, CSS, JS",
      type: "Frontend",
      github: "https://www.github.com",
      demo: "https://your-netflix-demo-link.com",
      img: "assets/picture/netflix/1.png",
    },
    burger: {
      title: "Burger Craft",
      description: "E-Commerce website for making own burger.",
      date: "20 Aug 2025",
      Use: "HTML, CSS, JS",
      type: "Frontend",
      github: "https://www.github.com",
      demo: "https://your-netflix-demo-link.com",
      img: "assets/picture/burger/1.png",
    },
    loginUI: {
      title: "Login UI Design",
      description: "Clean login page UI design for practice.",
      date: "20 Feb 2025",
      Use: "Figma Prototype",
      type: "Design",
      github: "#",
      demo: "https://www.figma.com/design/mBUgN5ZVRgJp8fkwyZn7y7/Shared-file?node-id=0-1&t=jVecG9wJC7c3QyJG-1",
      img: "assets/Picture/4-project.png",
    },
  };

  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDescription");
  const modalDate = document.getElementById("modalDate");
  const modalLang = document.getElementById("modalUse");
  const modalGithub = document.getElementById("modalGithub");
  const modalDemo = document.getElementById("modalDemo");
  const closeBtn = document.querySelector(".close-btn");

  const viewButtons = document.querySelectorAll(".project-view");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectKey = btn.dataset.project;
      const project = projectsData[projectKey];

      if (project) {
        modalImg.src = project.img;
        modalTitle.innerText = project.title;
        modalDesc.innerText = project.description;
        modalDate.innerText = project.date;
        modalUse.innerText = project.Use;
        modalGithub.href = project.github;
        modalDemo.href = project.demo;

        modal.style.display = "flex";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// ================== GSAP Scroll Animations ==================
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ===== Desktop/Tablet (scroll animations with ScrollTrigger) =====
  if (window.innerWidth > 768) {
    // Animate each section container
    gsap.utils.toArray("section").forEach((section) => {
      gsap.from(section, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%", // appear earlier
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate section titles
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.from(title, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate cards, boxes, contact items, skills
    gsap.utils
      .toArray(
        ".project-card, .service-card, .contact-item, .about-box, .skill, .skill-tag",
      )
      .forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%", // fire earlier (before reaching top)
            toggleActions: "play none none reverse",
          },
        });
      });

    // Timeline items
    gsap.utils.toArray(".timeline-item").forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 95%",
        },
      });
    });

    // Home title + subtitle
    gsap.from(".home-title, .home-subtitle", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".home-data",
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });
  }

  // ===== Mobile (fade-in without scroll trigger) =====
  else {
    // Fade-in all sections immediately
    gsap.utils.toArray("section").forEach((section, i) => {
      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.2, // stagger sections
      });
    });

    // Fade-in titles
    gsap.utils.toArray(".section-title").forEach((title, i) => {
      gsap.from(title, {
        y: 20,
        opacity: 100,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5 + i * 0.15,
      });
    });

    // Cards, boxes, skills, etc.
    gsap.utils
      .toArray(
        ".project-card, .service-card, .contact-item, .about-box, .skill, .skill-tag",
      )
      .forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 100,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.6 + i * 0.1,
        });
      });
  }

  // ================== Always Active Animations ==================

  // Skill fill shine
  gsap.utils.toArray(".skill-fill").forEach((bar) => {
    gsap.to(bar, {
      "--shine-x": "120%",
      duration: 1,
      repeat: -1,
      ease: "linear",
      delay: Math.random() * 1.5,
    });
  });

  // Floating social icons
  gsap.to(".social-icon", {
    y: -8,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "sine.inOut",
    stagger: 0.3,
  });

  // Project card hover tilt effect (desktop only)
  if (window.innerWidth > 768) {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;
        gsap.to(card, {
          rotationX: -rotateX,
          rotationY: rotateY,
          duration: 0.3,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5 });
      });
    });
  }
});

window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".info-card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Every bug fixed is progress",
    "Small commits, big projects",
    "Mistakes teach lessons",
    "Debugging means learning",
    "Consistency beats speed",
    "Code freely, test wisely",
    "Refactor to save time",
    "Every function teaches",
    "Persistence solves problems",
    "One line can change all",
    "Errors are just guides",
    "Build, break, improve",
    "Logic beats luck",
    "Push code, push limits",
    "Test, fail, succeed",
    "Keep coding, keep growing",
    "Solutions hide in problems",
    "Commit often, learn faster",
    "Think before you code",
    "Code today, create tomorrow",
    "Refine, don’t just write",
    "Every bug teaches patience",
    "Small steps, big impact",
    "Your code is your craft",
    "Learning is in the loops",
  ];

  const footerQuote = document.getElementById("footer-quote");
  if (footerQuote) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    footerQuote.textContent = `"${randomQuote}"`;
  }
});

// ================== Parallax Scroll Effect ==================
(function () {
  const bg = document.getElementById("parallaxBg");
  const heroContent = document.getElementById("heroContent");

  if (!bg) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;

        // Background moves slower than scroll = parallax
        bg.style.transform = `translateY(${scrollY * 0.45}px)`;

        // Content moves slightly upward as you scroll
        if (heroContent) {
          heroContent.style.transform = `translateY(${scrollY * 0.12}px)`;
          heroContent.style.opacity = Math.max(0, 1 - scrollY / 500);
        }

        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ================== Project Slider (with category filter) ==================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const dotsContainer = document.getElementById("sliderDots");
  const catButtons = document.querySelectorAll(".work-cat-item[data-filter]");
  const workDesc = document.getElementById("workDesc");
  if (!track) return;

  const categoryInfo = {
    development: {
      desc: "Responsive, interactive websites built from scratch — from e-commerce clones to a real-time attendance system using GPS and Face Recognition.",
    },
    uiux: {
      desc: "Figma prototypes and UI explorations focused on clean layouts and flows that feel natural to use.",
    },
    graphic: {
      desc: "Posters, logos, and social media designs crafted in Adobe Illustrator and Photoshop.",
    },
  };

  const allSlides = Array.from(track.querySelectorAll(".slide"));
  let slides = allSlides;
  let current = 0;

  // 3D tilt on hover (desktop only) — the active slide's glow makes the effect pop
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    allSlides.forEach((slide) => {
      slide.addEventListener("mousemove", (e) => {
        const rect = slide.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 16;
        const rotateX = (py - 0.5) * -16;
        slide.style.setProperty("--rx", `${rotateX}deg`);
        slide.style.setProperty("--ry", `${rotateY}deg`);
      });
      slide.addEventListener("mouseleave", () => {
        slide.style.setProperty("--rx", "0deg");
        slide.style.setProperty("--ry", "0deg");
      });
    });
  }

  function buildDots() {
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.dataset.dot = i;
      dot.addEventListener("click", () => {
        current = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
      const isPeek =
        slides.length > 1 && i === (current + 1) % slides.length;
      slide.classList.toggle("peek", isPeek);
    });
    const activeSlide = slides[current];
    const offset = activeSlide ? activeSlide.offsetLeft : 0;
    track.style.transform = `translateX(-${offset}px)`;
    Array.from(dotsContainer.querySelectorAll(".dot")).forEach((d, i) =>
      d.classList.toggle("active", i === current),
    );
  }

  function applyFilter(filter) {
    current = 0;
    allSlides.forEach((slide) => {
      const match = slide.dataset.category === filter;
      slide.classList.toggle("hidden-slide", !match);
    });
    slides = allSlides.filter((s) => !s.classList.contains("hidden-slide"));
    buildDots();
    updateSlider();
  }

  function setCategory(filter) {
    catButtons.forEach((b) =>
      b.classList.toggle("active", b.dataset.filter === filter),
    );
    if (workDesc && categoryInfo[filter]) {
      workDesc.textContent = categoryInfo[filter].desc;
    }
    applyFilter(filter);
  }

  catButtons.forEach((btn) => {
    btn.addEventListener("click", () => setCategory(btn.dataset.filter));
  });

  document.getElementById("sliderPrev").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlider();
  });
  document.getElementById("sliderNext").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlider();
  });

  // Event delegation so clicks keep working after re-filtering
  track.addEventListener("click", (e) => {
    const slideEl = e.target.closest(".slide");
    if (!slideEl || slideEl.classList.contains("hidden-slide")) return;
    const i = slides.indexOf(slideEl);
    if (i !== -1 && i !== current) {
      current = i;
      updateSlider();
    }
  });

  // Touch swipe
  let startX = 0;
  track.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  track.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      current =
        diff > 0
          ? (current + 1) % slides.length
          : (current - 1 + slides.length) % slides.length;
      updateSlider();
    }
  });

  // Keep the active card aligned if the viewport size changes (e.g. mobile breakpoint)
  window.addEventListener("resize", () => updateSlider());

  // Start on Development category
  setCategory("development");
});

// ================== Project Modal ==================
document.addEventListener("DOMContentLoaded", () => {
  const projectsData = {
    amazon: {
      title: "Amazon Clone",
      tag: "Frontend · Clone",
      desc: "A full Amazon homepage clone built with HTML & CSS. Includes product grid, category nav, hero banner, and responsive footer.",
      skills: ["HTML5", "CSS3"],
      date: "Jan 2025",
      github: "https://www.github.com",
      screenshots: [
        "assets/picture/amazon/1.png",
        "assets/picture/amazon/2.png",
        "assets/picture/amazon/3.png",
      ],
    },
    netflix: {
      title: "Netflix Login Clone",
      tag: "Frontend · Clone",
      desc: "Pixel-perfect Netflix login page clone with responsive UI, form validation, and smooth hover effects.",
      skills: ["HTML5", "CSS3", "JavaScript"],
      date: "Feb 2025",
      github: "https://www.github.com",
      screenshots: [
        "assets/picture/netflix/1.png",
        "assets/picture/netflix/2.png",
        "assets/picture/netflix/3.png",
        "assets/picture/netflix/4.png",
      ],
    },
    burger: {
      title: "Burger Craft",
      tag: "Frontend · E-Commerce",
      desc: "An e-commerce style website for building custom burgers. Features animated UI, custom product builder, and cart layout.",
      skills: ["HTML5", "CSS3", "JavaScript"],
      date: "Aug 2025",
      github: "https://www.github.com",
      screenshots: [
        "assets/picture/burger/1.png",
        "assets/picture/burger/2.png",
        "assets/picture/burger/3.png",
        "assets/picture/burger/4.png",
        "assets/picture/burger/5.png",
        "assets/picture/burger/6.png",
        "assets/picture/burger/7.png",
        "assets/picture/burger/8.png",
      ],
    },
    attend: {
      title: "Attendance Management System",
      tag: "Web App · GPS + Face Recognition",
      desc: "A smart attendance system that verifies identity with the Face API and confirms presence using real-time GPS location, so attendance can only be marked from the actual location by the actual person — no proxy check-ins.",
      skills: ["HTML5", "CSS3", "JavaScript", "Face API", "Geolocation API"],
      date: "2026",
      github: "https://github.com/AbhayTripathii/attendance-app",
      screenshots: [
        "assets/picture/attend/1.png",
        "assets/picture/attend/2.png",
      ],
    },
    loginUI: {
      title: "Login UI Design",
      tag: "UI Design · Figma",
      desc: "A clean, minimal login page UI prototype. Focused on micro-interactions, spacing, and visual hierarchy.",
      skills: ["Figma", "UI Design", "Prototyping"],
      date: "Feb 2025",
      type: "design",
      link: "https://www.figma.com/design/mBUgN5ZVRgJp8fkwyZn7y7/",
      linkLabel: "View on Figma",
      screenshots: ["assets/Picture/4-project.png"],
    },
    freshmart: {
      title: "FreshMart Grocery",
      tag: "UI Design · Figma",
      desc: "A grocery shopping app UI design focused on quick browsing, easy cart management, and a clean checkout flow.",
      skills: ["Figma", "UI Design", "Prototyping"],
      date: "2026",
      type: "design",
      link: "projects/freshmart/index.html",
      linkLabel: "View on Figma",
      screenshots: ["assets/Picture/2-project.png"],
    },
  };

  const backdrop = document.getElementById("projModalBackdrop");
  const closeBtn = document.getElementById("projModalClose");

  function openModal(key) {
    const p = projectsData[key];
    if (!p) return;

    document.getElementById("projModalTitle").textContent = p.title;
    document.getElementById("projModalTag").textContent = p.tag;
    document.getElementById("projModalDesc").textContent = p.desc;
    document.getElementById("projModalDate").textContent = p.date;
    const ghBtn = document.getElementById("projModalGithub");
    if (p.type === "design") {
      ghBtn.href = p.link || "#";
      ghBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${p.linkLabel || "View Design"}`;
    } else {
      ghBtn.href = p.github || "#";
      ghBtn.innerHTML = `<i class="fab fa-github"></i> View Code on GitHub`;
    }

    const skillsEl = document.getElementById("projModalSkills");
    skillsEl.innerHTML = p.skills
      .map((s) => `<span class="skill-pill">${s}</span>`)
      .join("");

    const screenshots = document.getElementById("projScreenshots");
    screenshots.innerHTML = p.screenshots
      .map((src) => `<img src="${src}" alt="${p.title}" />`)
      .join("");

    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".view-project-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(btn.dataset.project);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

// ================== Graphic Design Section ==================
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".graphic-item");
  const preview = document.getElementById("graphicPreview");
  if (!items.length || !preview) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const img = preview.querySelector(".graphic-preview-img");
      img.style.opacity = "0";
      setTimeout(() => {
        img.src = item.dataset.img;
        img.style.opacity = "1";
      }, 200);
    });
  });
});
