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
      github: "https://www.github.com",
      demo: "https://your-amazon-demo-link.com",
      img: "assets/Picture/1-project.png",
    },
    netflix: {
      title: "Netflix Login Clone",
      description: "Login page clone with responsive UI.",
      date: "15 Feb 2025",
      Use: "HTML, CSS, JS",
      type: "Frontend",
      github: "https://www.github.com",
      demo: "https://your-netflix-demo-link.com",
      img: "assets/Picture/2-project.png",
    },
    burger: {
      title: "Burger Craft",
      description: "E-Commerce website for making own burger.",
      date: "20 Aug 2025",
      Use: "HTML, CSS, JS",
      type: "Frontend",
      github: "https://www.github.com",
      demo: "https://your-netflix-demo-link.com",
      img: "assets/Picture/3-project.png",
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
        ".project-card, .service-card, .contact-item, .about-box, .skill, .skill-tag"
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
        ".project-card, .service-card, .contact-item, .about-box, .skill, .skill-tag"
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
