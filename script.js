/* ============================================================
   SCRIPT — Abhay Tripathi portfolio
   Sections: LOADER · NAVIGATION · SHARE · SCROLL · ANIMATIONS ·
             HERO · WORK (slider) · PROJECT MODAL · FOOTER
   ============================================================ */

/* ======================= LOADER ======================= */
(function () {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;

  const MIN_DISPLAY = 2600; // ms — lets the PORTFOLIO intro finish
  const startTime = performance.now();
  let pageLoaded = document.readyState === "complete";
  let hideScheduled = false;

  function scheduleHide() {
    if (hideScheduled || !pageLoaded) return;
    hideScheduled = true;
    const remaining = Math.max(0, MIN_DISPLAY - (performance.now() - startTime));
    setTimeout(() => loader.classList.add("hidden"), remaining + 200);
  }

  if (pageLoaded) {
    scheduleHide();
  } else {
    window.addEventListener("load", () => {
      pageLoaded = true;
      scheduleHide();
    });
  }
})();

/* ======================= NAVIGATION ======================= */
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLinks = document.querySelectorAll(".nav-link");

  navToggle?.addEventListener("click", () => sidebar.classList.add("show-sidebar"));
  navClose?.addEventListener("click", () => sidebar.classList.remove("show-sidebar"));

  // Close the mobile menu when a link is tapped
  navLinks.forEach((link) => {
    link.addEventListener("click", () => sidebar.classList.remove("show-sidebar"));
  });
});

// Highlight the nav link of the section in view
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50; // offset for the nav height
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ======================= SHARE BUTTON ======================= */
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".btn-share");

  // Small toast message, e.g. "Link copied"
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  shareBtn?.addEventListener("click", async () => {
    const shareData = {
      title: "Abhay Tripathi's Portfolio",
      text: "Check out this awesome portfolio by Abhay Tripathi!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled the share sheet — nothing to do
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("🔗 Link copied to clipboard!");
    } catch (err) {
      alert("Could not copy link. Please try manually.");
    }
  });
});

/* ======================= ANIMATIONS (GSAP) ======================= */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  if (window.innerWidth > 768) {
    // Desktop / tablet: animate on scroll
    gsap.utils.toArray("section").forEach((section) => {
      gsap.from(section, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

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

    gsap.utils.toArray(".about-box, .skill").forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });

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
  } else {
    // Mobile: staggered fade-in, no scroll trigger
    gsap.utils.toArray("section").forEach((section, i) => {
      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.2,
      });
    });

    gsap.utils.toArray(".section-title").forEach((title, i) => {
      gsap.from(title, {
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5 + i * 0.15,
      });
    });

    gsap.utils.toArray(".about-box, .skill").forEach((el, i) => {
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.6 + i * 0.1,
      });
    });
  }

  // Always-on: shine sweep across the skill bars
  gsap.utils.toArray(".skill-fill").forEach((bar) => {
    gsap.to(bar, {
      "--shine-x": "120%",
      duration: 1,
      repeat: -1,
      ease: "linear",
      delay: Math.random() * 1.5,
    });
  });
});

/* ======================= SCROLL EFFECTS ======================= */

// Hero content drifts up and fades as you scroll away from it
(function () {
  const heroContent = document.getElementById("heroContent");
  if (!heroContent) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.pageYOffset;
      heroContent.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroContent.style.opacity = Math.max(0, 1 - scrollY / 500);
      ticking = false;
    });
  });
})();

/* ======================= FOOTER ======================= */
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

/* ======================= WORK — PROJECT SLIDER ======================= */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const dotsContainer = document.getElementById("sliderDots");
  const catButtons = document.querySelectorAll(".work-cat-item[data-filter]");
  const workDesc = document.getElementById("workDesc");
  if (!track) return;

  // Text shown under the category buttons
  const categoryInfo = {
    development: {
      desc: "I build websites with a designer's eye and a developer's precision — clean layouts, smooth interactions, and code that stays readable. From e-commerce builds to a GPS and Face Recognition attendance system, I focus on making things work well.",
    },
    uiux: {
      desc: "This is where I'm at my best. I care about spacing, hierarchy, and the small details that make a screen feel right — every flow is designed to feel natural to use, not just look good.",
    },
    graphic: {
      desc: "Posters, logos, and social media designs built with a strong eye for composition, color, and type — crafted in Illustrator and Photoshop to be noticed and remembered.",
    },
  };

  const allSlides = Array.from(track.querySelectorAll(".slide"));
  let slides = allSlides;
  let current = 0;

  // 3D tilt on hover (mouse devices only)
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    allSlides.forEach((slide) => {
      slide.addEventListener("mousemove", (e) => {
        const rect = slide.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        slide.style.setProperty("--rx", `${(py - 0.5) * -16}deg`);
        slide.style.setProperty("--ry", `${(px - 0.5) * 16}deg`);
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
      slide.classList.toggle("peek", slides.length > 1 && i === (current + 1) % slides.length);
    });
    const activeSlide = slides[current];
    const offset = activeSlide ? activeSlide.offsetLeft : 0;
    track.style.transform = `translateX(-${offset}px)`;
    dotsContainer.querySelectorAll(".dot").forEach((d, i) =>
      d.classList.toggle("active", i === current),
    );
  }

  function applyFilter(filter) {
    current = 0;
    allSlides.forEach((slide) => {
      slide.classList.toggle("hidden-slide", slide.dataset.category !== filter);
    });
    slides = allSlides.filter((s) => !s.classList.contains("hidden-slide"));
    buildDots();
    updateSlider();
  }

  function setCategory(filter) {
    catButtons.forEach((b) => b.classList.toggle("active", b.dataset.filter === filter));
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

  // Clicking a visible card brings it to the front
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

  // Keep the active card aligned when the viewport changes size
  window.addEventListener("resize", updateSlider);

  setCategory("development");
});

/* ======================= PROJECT MODAL ======================= */
document.addEventListener("DOMContentLoaded", () => {
  // Figma links for the two UI/UX projects.
  const FIGMA_LOGIN = "https://www.figma.com/design/mBUgN5ZVRgJp8fkwyZn7y7/";
  const FIGMA_FRESHMART = "https://www.figma.com/design/mBUgN5ZVRgJp8fkwyZn7y7/Shared-file?node-id=2005-24";

  // Project data. type "design" = Figma project (embed + link), otherwise a code project.
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
      link: FIGMA_LOGIN,
      linkLabel: "View on Figma",
      screenshots: [
        "assets/Picture/LoginUI/1.png",
        "assets/Picture/LoginUI/2.png",
        "assets/Picture/LoginUI/3.png",
      ],
    },
    freshmart: {
      title: "FreshMart Grocery",
      tag: "UI Design · Figma",
      desc: "A grocery shopping app UI design focused on quick browsing, easy cart management, and a clean checkout flow.",
      skills: ["Figma", "UI Design", "Prototyping"],
      date: "2026",
      type: "design",
      link: FIGMA_FRESHMART,
      linkLabel: "View on Figma",
      screenshots: [
        "assets/Picture/FreshUI/1.png",
        "assets/Picture/FreshUI/2.png",
        "assets/Picture/FreshUI/3.png",
        "assets/Picture/FreshUI/4.png",
      ],
    },
  };

  // Card "Figma" buttons open the same link as the modal button
  document.querySelectorAll(".slide").forEach((slide) => {
    const viewBtn = slide.querySelector(".view-project-btn");
    const project = viewBtn && projectsData[viewBtn.dataset.project];
    const figmaLink = slide.querySelector(".slide-gh");
    if (project && project.type === "design" && figmaLink) {
      figmaLink.href = project.link;
      figmaLink.target = "_blank";
      figmaLink.rel = "noopener";
    }
  });

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

    document.getElementById("projModalSkills").innerHTML = p.skills
      .map((s) => `<span class="skill-pill">${s}</span>`)
      .join("");

    const screenshots = document.getElementById("projScreenshots");
    if (p.embed) {
      // Live Figma design (shared as "Anyone can view")
      screenshots.innerHTML = `<iframe class="proj-embed" src="${p.embed}" title="${p.title}" allowfullscreen loading="lazy"></iframe>`;
    } else {
      screenshots.innerHTML = p.screenshots
        .map((src) => `<img src="${src}" alt="${p.title}" />`)
        .join("");
    }

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
