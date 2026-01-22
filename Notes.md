###first effect

```html
<!-- Add this in your HTML body (recommended after second section) -->
<div id="particles-js"></div>
```

```javascript
 <!-- Include the particles.js script just before closing body tag -->
 <script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
 <script>
   particlesJS("particles-js", {
     particles: {
       number: {
         value: 80,
         density: { enable: true, value_area: 800 },
       },
       color: { value: "#ffffff" },
       shape: {
         type: "circle",
         stroke: { width: 0, color: "#000000" },
       },
       opacity: {
         value: 0.1,
         random: false,
         anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
       },
       size: {
         value: 3,
         random: true,
         anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
       },
       move: {
         enable: true,
         speed: 1,
         direction: "none",
         random: true,
         straight: false,
         out_mode: "out",
         bounce: false,
       },
     },
     interactivity: {
       detect_on: "canvas",
       events: {
         onhover: { enable: true, mode: "repulse" },
         onclick: { enable: true, mode: "push" },
         resize: true,
       },
       modes: {
         repulse: { distance: 100, duration: 0.4 },
         push: { particles_nb: 4 },
       },
     },
     retina_detect: true,
   });
 </script>

 <!-- CSS to position the effect -->
 <style>
   #particles-js {
     position: fixed;
     top: 0;
     left: 0;
     width: 100vw;
     height: 100vh;
     z-index: -1;
     pointer-events: none; /* prevents it from blocking clicks */
   }
 </style>
```

## second effect

##### after <body> tag

```html
<canvas id="bgCanvas"></canvas>
```

##### In CSS

```css
#bgCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  pointer-events: none;
```

##### before </body> tag

```javascript
<script>
      const canvas = document.getElementById("bgCanvas");
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let t = 0;

      function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
          let y =
            canvas.height / 2 +
            60 * Math.sin(x * 0.01 + t) +
            30 * Math.sin(x * 0.02 + t * 2);

          ctx.lineTo(x, y);
        }

        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(0, 255, 200, 0.3)";
        ctx.stroke();

        t += 0.015;
        requestAnimationFrame(drawWave);
      }

      drawWave();
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    </script>
```

## third effect

##### after <body> tag

```html
<div class="aurora-bg"></div>
```

##### In CSS

```css
.aurora-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, #00ffd5, transparent),
    radial-gradient(circle at 70% 60%, #0051ff, transparent), radial-gradient(circle
        at 50% 80%, #ff00ff, transparent);
  animation: aurora 20s ease infinite;
  z-index: -10;
  pointer-events: none;
}

@keyframes aurora {
  0%,
  100% {
    filter: blur(80px) brightness(0.8);
    transform: scale(1);
  }
  50% {
    filter: blur(100px) brightness(1);
    transform: scale(1.2);
  }
}
```

## FIRST HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    <!--
    - favicon
  -->
    <link
      rel="shortcut icon"
      href="./assets/images/logo.ico"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="style copy.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img
            src="./assets/images/my-avatar.png"
            alt="Richard hanrick"
            width="80"
          />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Richard hanrick">Richard hanrick</h1>

          <p class="title">Web developer</p>
        </div>

        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:richard@example.com" class="contact-link"
                >richard@example.com</a
              >
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+12133522795" class="contact-link"
                >+1 (213) 352-2795</a
              >
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <!-- <div id="particles-js"></div> -->

    <header class="heading">
      <div class="logo">
        <img src="1-logo.png" class="logo-img" alt="logo-img" />
        <h1 class="logo_text">Devloper</h1>
      </div>
      <div class="first-box">
        <ul class="nav-container">
          <li><a class="container-items" href="#">Home</a></li>
          <li><a class="container-items" href="#">About me</a></li>
          <li><a class="container-items" href="#">Projects</a></li>
          <li><a class="container-items" href="#">Services</a></li>
        </ul>
      </div>
    </header>
    <section class="first-items">
      <div class="content">
        <h2>Hi, I am</h2>
        <h1>ABHAY TRIPATHI</h1>
        <p>
          - A passionate and dedicated junior web developer, driven by the
          <br />
          ever-evolving of technology and its limitless possibilites.
        </p>
        <button>Contact me</button>
      </div>
      <div class="hero_image">
        <img src="2-hero [Recovered]-02.svg" alt="this is image" />
      </div>
    </section>
    <section class="second-section">
      <div class="second-items">
        <div class="second-content">
          <h2>About Me</h2>
          <p>
            I am a junior web developer with a passion for creating dynamic
            and<br />
            user-friendly websites. I have a strong foundation in HTML, CSS,
            and<br />
            JavaScript, and I am constantly learning new technologies to
            enhance<br />
            my skills. I enjoy working on projects that challenge me and allow
            me<br />
            to grow as a developer.
          </p>
        </div>
        <div class="third-items">
          <div class="third-content">
            <h2>My Work Skills</h2>
            <ul class="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Figma</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="third-section">
      <div class="third-items">
        <div class="third-content">
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I have worked on. Each project
            showcases my skills in web development and my ability to create
            functional and visually appealing websites.
          </p>
          <ul class="project-list">
            <li>Project 1: Portfolio Website</li>
            <li>Project 2: E-commerce Site</li>
            <li>Project 3: Blog Platform</li>
          </ul>
        </div>
      </div>
    </section> -->
    <!-- Include the particles.js script just before closing body tag -->
    <script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
    <script>
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#f4f4f4" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#f4f4f4" },
          },
          opacity: {
            value: 0.1,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    </script>

    <!-- CSS to position the effect -->
    <style>
      #particles-js {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        pointer-events: none; /* prevents it from blocking clicks */
      }
    </style>
  </body>
</html>
```

## FIRST CSS

```css
:root {
  /* Colors */
  --color-bg-dark: #111111;
  --color-white: #fec563;
  --color-light-white: #f5f5f5;
  --color-light-gray: #b3b3b3;
  --color-transparent-light-gray: #b3b3b3b5;
  --color-button-bg: #cbcbcb;
  --color-button-text: #0059c0;
  --color-heading-gradient-start: #00bcd4;
  --color-heading-gradient-end: #00ffae;
  --color-heading-bg: rgba(25, 25, 25, 0.7);
  --color-nav-hover: rgba(128, 128, 128, 0.121);

  /* Fonts */
  --font-main: "Gantari", sans-serif;

  /* Font Sizes */
  --font-h1: 45px;
  --font-h2: 20px;
  --font-body: 13px;
  --font-button: 16px;
  --font-nav: 18px;
}

* {
  box-sizing: content-box;
}

body {
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-bg-dark);
}

.sidebar,
article {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

.icon-box ion-icon {
  --ionicon-stroke-width: 35px;
}

article {
  display: none;
}

article.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.h2,
.h3,
.h4,
.h5 {
  color: var(--white-2);
  text-transform: capitalize;
}

.h2 {
  font-size: var(--fs-1);
}

.h3 {
  font-size: var(--fs-2);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
}

.article-title {
  position: relative;
  padding-bottom: 7px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.has-scrollbar::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

.has-scrollbar::-webkit-scrollbar-track {
  background: var(--onyx);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--orange-yellow-crayola);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-button {
  width: 20px;
}

.content-card {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 15px;
  padding-top: 45px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  z-index: 1;
}

.content-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}

.heading {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-heading-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 15px rgba(75, 75, 75, 0.058);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 50px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.heading .logo {
  display: flex;
  vertical-align: middle;
}

.heading .logo-img {
  position: relative;
  left: 0.6rem;
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
}

.heading .logo-img:hover {
  transform: scale(110%);
}

.heading .logo h1 {
  position: relative;
  top: 0.5rem;
  color: var(--color-white);
  font-weight: 600;
  font-size: var(--font-h1);
  font-family: var(--font-main);
}

.nav-container {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  gap: 25px;
  position: relative;
  right: 20%;
}

.nav-container .container-items {
  padding: 10px;
  text-decoration: none;
  color: var(--color-white);
  font-size: var(--font-nav);
  font-family: var(--font-main);
}

.nav-container .container-items:hover {
  background-color: var(--color-nav-hover);
  border-radius: 8px;
  transition: 0.3s;
}

.first-items {
  position: relative;
  top: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 150px 80px;
}

.content {
  flex: 1;
  font-family: var(--font-main);
  color: var(--color-light-white);
}

h2 {
  font-size: var(--font-h2);
  color: var(--color-light-gray);
  margin-bottom: 20px;
}

h1 {
  font-size: var(--font-h1);
  background: linear-gradient(
    90deg,
    var(--color-heading-gradient-start),
    var(--color-heading-gradient-end)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0;
  margin-bottom: 20px;
}

p {
  font-size: var(--font-body);
  color: var(--color-transparent-light-gray);
  margin-top: 20px;
  margin-bottom: 20px;
}

button {
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  border: none;
  padding: 10px 20px;
  font-size: var(--font-button);
  font-family: var(--font-main);
  border-radius: 20px;
  cursor: pointer;
}

.hero_image {
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  left: 3%;
}

.hero_image img {
  width: 650px;
}

.second-section {
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  padding: 100px 0;
}

.second-items {
  width: 85%;
  height: 600px;
  padding: 50px 80px;
  border-radius: 40px;
  display: flex;
  background: #1e1e1f;
  /* backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(15px); */
  /* box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); */
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.second-items::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.second-items .second-content {
  position: relative;
  z-index: 1;
  flex: 1;
  color: var(--color-light-white);
  font-family: var(--font-main);
}

.second-items h2 {
  font-size: var(--font-h1);
  color: var(--color-white);
  padding: 25px;
  margin-bottom: 30px;
  text-align: center;
}

.second-items p {
  line-height: 1.8;
  font-size: var(--font-button);
  color: #dddddd;
  text-align: center;
}

#bgCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  pointer-events: none;
}
```

##### aside tag

```html
<aside class="sidebar" data-sidebar>
  <div class="sidebar-info">
    <figure class="avatar-box">
      <img
        src="./assets/images/my-avatar.png"
        alt="Abhay Tripathi"
        width="80"
      />
    </figure>

    <div class="info-content">
      <h1 class="name" title="Richard hanrick">Abhay Tripathi</h1>

      <p class="title">Web developer</p>
    </div>

    <button class="info_more-btn" data-sidebar-btn>
      <span>Show Contacts</span>

      <ion-icon name="chevron-down"></ion-icon>
    </button>
  </div>

  <div class="sidebar-info_more">
    <div class="separator"></div>

    <ul class="contacts-list">
      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
        </div>

        <div class="contact-info">
          <p class="contact-title">Email</p>

          <a href="mailto:richard@example.com" class="contact-link"
            >abhay@example.com</a
          >
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="phone-portrait-outline"></ion-icon>
        </div>

        <div class="contact-info">
          <p class="contact-title">Phone</p>

          <a href="tel:+12133522795" class="contact-link">+1 (213) 352-2795</a>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="calendar-outline"></ion-icon>
        </div>

        <div class="contact-info">
          <p class="contact-title">Birthday</p>

          <time datetime="1982-06-23">Sep 11, 2005</time>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="location-outline"></ion-icon>
        </div>

        <div class="contact-info">
          <p class="contact-title">Location</p>

          <address>Sacramento, California, USA</address>
        </div>
      </li>
    </ul>

    <div class="separator"></div>

    <ul class="social-list">
      <li class="social-item">
        <a href="#" class="social-link">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>

      <li class="social-item">
        <a href="#" class="social-link">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li class="social-item">
        <a href="#" class="social-link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
    </ul>
  </div>
</aside>
```

##### aside css

```css
.sidebar,
article {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

.icon-box ion-icon {
  --ionicon-stroke-width: 35px;
}

article {
  display: none;
}

article.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.h2,
.h3,
.h4,
.h5 {
  color: var(--white-2);
  text-transform: capitalize;
}

.h2 {
  font-size: var(--fs-1);
}

.h3 {
  font-size: var(--fs-2);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
}

.article-title {
  position: relative;
  padding-bottom: 7px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.has-scrollbar::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

.has-scrollbar::-webkit-scrollbar-track {
  background: var(--onyx);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--orange-yellow-crayola);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-button {
  width: 20px;
}

.content-card {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 15px;
  padding-top: 45px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  z-index: 1;
}

.content-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}
```

```html
<section class="testimonials section">
  <h2 class="section-title" data-heading="My clients say">Testimonials</h2>

  <div class="testimonials-container container swiper">
    <div class="swiper-wrapper">
      <div class="testimonial-card swiper-slide">
        <div class="testimonial-quote">
          <i class="bx bxs-quote-alt-left"></i>
        </div>
        <p class="testimonial-description">
          Working with Miriam was an absolute pleasure from start to finish.
          They took the time to truly understand our business needs and
          translated them into a stunning and highly functional website
        </p>
        <h3 class="testimonial-date">March 30, 2025</h3>
        <div class="testimonial-profile">
          <img
            src="https://i.postimg.cc/MTr9j4Yn/client1.jpg"
            alt=""
            class="testimonial-profile-img"
          />

          <div class="testimonial-profile-data">
            <span class="testimonial-profile-name">Chen Xiuying</span>
            <span class="testimonail-profile-detail">Marketing Director</span>
          </div>
        </div>
      </div>

      <div class="testimonial-card swiper-slide">
        <div class="testimonial-quote">
          <i class="bx bxs-quote-alt-left"></i>
        </div>
        <p class="testimonial-description">
          Miriam truly understood our business needs through her modern and
          sleek design, making a site incredibly user-friendly. With her help,
          we had a significant increase in engagement and customer sales
        </p>
        <h3 class="testimonial-date">January 18, 2025</h3>
        <div class="testimonial-profile">
          <img
            src="https://i.postimg.cc/wvV7f8rB/client2.jpg"
            alt=""
            class="testimonial-profile-img"
          />

          <div class="testimonial-profile-data">
            <span class="testimonial-profile-name">Joshua Middletown</span>
            <span class="testimonail-profile-detail">Sales Director</span>
          </div>
        </div>
      </div>

      <div class="testimonial-card swiper-slide">
        <div class="testimonial-quote">
          <i class="bx bxs-quote-alt-left"></i>
        </div>
        <p class="testimonial-description">
          I was blown away by the website Miriam created for my business! Miriam
          crafted a incredibly user-friendly, that allows our customers to
          access information on any device. Since the launch, I've seen a
          significant increase in inquiries and bookings
        </p>
        <h3 class="testimonial-date">November 29, 2024</h3>
        <div class="testimonial-profile">
          <img
            src="https://i.postimg.cc/pdP9DL0S/client3.jpg"
            alt=""
            class="testimonial-profile-img"
          />

          <div class="testimonial-profile-data">
            <span class="testimonial-profile-name">Melanie Stone</span>
            <span class="testimonail-profile-detail">Business Owner</span>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</section>
```

```css
/* Main - Testimonials */

@media screen and (min-width: 992px) {
  .testimonials-container {
    width: 750px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

.testimonial-card {
  background-color: var(--box-color);
  padding: 1.8rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
}
.testimonial-quote {
  display: inline-flex;
  font-size: 1.5rem;
  color: var(--skin-color);
  margin-bottom: var(--mb1);
}
.testimonial-description {
  margin-bottom: var(--mb1);
  font-size: var(--small-font-size);
  text-align: justify;
}
.testimonial-date {
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb2);
}
.testimonial-profile {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
.testimonial-profile-img {
  width: 60px;
  height: 60px;
  border-radius: 3rem;
}
.testimonial-profile-name {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  color: var(--title-color);
}
.testimonial-profile-detail {
  font-size: var(--small-font-size);
  display: block;
}
.testimonial-profile-data {
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
}

/* Swiper */

.swiper-pagination-bullet {
  background-color: var(--box-color);
}
.swiper-pagination-bullet-active {
  background-color: var(--skin-color);
}
```

## Before parallax

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    <link rel="stylesheet" href="style_real.css" />
    <!--
    - favicon
  -->

    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
    />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <div class="nav-toggle" id="nav-toggle">
      <i class="uil uil-bars"></i>
    </div>
    <aside class="sidebar" id="sidebar">
      <nav class="nav">
        <div class="nav-logo">
          <a href="#" class="nav-logo"
            ><img src="assets/Picture/1-logo.png" alt=""
          /></a>
        </div>

        <div class="nav-menu">
          <div class="menu">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="#home" class="nav-link active-link">Home</a>
              </li>

              <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
              </li>

              <li class="nav-item">
                <a href="#skills" class="nav-link">Skills</a>
              </li>

              <li class="nav-item">
                <a href="#work" class="nav-link">Work</a>
              </li>

              <li class="nav-item">
                <a href="#services" class="nav-link">Services</a>
              </li>

              <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="btn-share">
          <i class="fa-solid fa-share-nodes social-share"></i>
        </div>

        <div class="nav-close" id="nav-close">
          <i class="uil uil-times"></i>
        </div>
      </nav>
    </aside>

    <main class="main">
      <section class="home" id="home">
        <div class="home-container container grid">
          <div class="my-info">
            <div class="info-item">
              <i class="fa-brands fa-whatsapp info-icon"></i>

              <div>
                <h3 class="info-title">Whatsapp</h3>
                <span class="info-subtitle">999-888-777</span>
              </div>
            </div>

            <div class="info-item">
              <i class="fa-solid fa-envelope info-icon"></i>

              <div>
                <h3 class="info-title">Email</h3>
                <span class="info-subtitle">user@gmail.com</span>
              </div>
            </div>
          </div>
          <!-- Social Media Links -->
          <div
            class="social-follow"
            role="complementary"
            aria-label="Social media links"
          >
            <span>Follow Me</span>
            <div class="social-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="home-data">
            <h1 class="home-title">Hi, I'm Abhay Tripathi</h1>
            <h3 class="home-subtitle">Frontend Developer & Graphic Designer</h3>
            <p class="home-description">
              A passionate and dedicated junior web developer, driven by the
              ever-evolving of technology and its limitless possibilites
            </p>
            <a href="#about" class="button">
              <i class="fa-solid fa-user button-icon"></i>
              More About me!
            </a>
          </div>
        </div>
      </section>

      <!-- ===================================About me============================================= -->

      <section class="about section">
        <div id="about"></div>
        <h2 class="section-title" data-heading="Intro">About me</h2>
        <div class="about-section">
          <div class="second-items">
            <div class="second-content">
              <h3>Hi, <span class="head">I'm Abhay Tripathi</span></h3>
              <p>
                I am a junior web developer with a passion for creating dynamic
                and user-friendly websites. I have a strong foundation in HTML,
                CSS, and JavaScript, and I am constantly learning new
                technologies to enhance my skills. I enjoy working on projects
                that challenge me and allow me to grow as a developer.
              </p>

              <div class="about-info">
                <div class="about-box">
                  <h3 class="about-title">Experience</h3>
                  <span class="about-subtitle">Fresher</span>
                </div>
                <div class="about-box">
                  <h3 class="about-title">Projects</h3>
                  <span class="about-subtitle">2 + </span>
                </div>
                <div class="about-box">
                  <h3 class="about-title">Satisfaction</h3>
                  <span class="about-subtitle">100%</span>
                </div>
              </div>
              <!-- Skills Section -->
                <div class="skills-section">
                  <h4 class="skills-title">Core Technologies</h4>
                  <div class="skills-grid">
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">React</span>
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">CSS3</span>
                  </div>
                </div>
            </div>
          </div>


          <div class="about-img">
            <img
              src="assets/Picture/profile_round.png"
              alt="profile"
              class="profile-img"
              width="300px"
            />
            <a href="#contact" class="button about-button"
              ><i class="uil uil-navigator button-icon"></i>Contact me</a
            >
          </div>
        </div>
      </section>
      <!-- ===================================Skills============================================= -->
      <section class="qualification section" id="skills">
        <h2 class="section-title" data-heading="Abilities">
          Areas of Expertise
        </h2>
        <div class="skills-container container grid skills-section">
          <div class="languages">
            <h3 class="qualification-title">
              <i class="fa-solid fa-code"></i>&nbsp;&nbsp; Languages
            </h3>
            <div class="skill">
              <div class="skill-title">HTML <span>80%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 80%"></div>
              </div>
            </div>

            <div class="skill">
              <div class="skill-title">CSS <span>80%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 80%"></div>
              </div>
            </div>

            <div class="skill">
              <div class="skill-title">JavaScript<span>60%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 60%"></div>
              </div>
            </div>
          </div>
          <div class="design">
            <h3 class="qualification-title">
              <i class="fa-solid fa-pencil-ruler"></i>&nbsp;&nbsp;Designing
              Tools
            </h3>
            <div class="skill">
              <div class="skill-title">Adobe Illustrator <span>80%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 80%"></div>
              </div>
            </div>

            <div class="skill">
              <div class="skill-title">Figma <span>70%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 70%"></div>
              </div>
            </div>

            <div class="skill">
              <div class="skill-title">Wordpress <span>50%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 50%"></div>
              </div>
            </div>
          </div>
          <div class="Editing">
            <h3 class="qualification-title">
              <i class="fa-solid fa-pen-to-square"></i>&nbsp;&nbsp;Editing Tools
            </h3>
            <div class="skill">
              <div class="skill-title">Filmora <span>50%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 50%"></div>
              </div>
            </div>

            <div class="skill">
              <div class="skill-title">Adobe Premiere Pro<span>30%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 30%"></div>
              </div>
            </div>

            <div class="skill">
              <div class="skill-title">Adobe Lightroom <span>50%</span></div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 50%"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================================Qualifications============================================= -->

      <section class="qualification section">
        <h2 class="section-title" data-heading="My Journey">Qualifications</h2>

        <div class="qualification-container container grid">
          <div class="education">
            <h3 class="qualification-title">
              <i class="uil uil-graduation-cap"></i>Education
            </h3>

            <div class="timeline">
              <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-title">
                  IGNOU University (New Delhi, India)
                </h3>
                <p class="timeline-text">Bachelor of Computer Application</p>
                <span class="timeline-date"
                  ><i class="uil uil-calendar-alt"></i>2023 - 2026</span
                >
              </div>

              <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-title">IIAT Institute (Delhi. India)</h3>
                <p class="timeline-text">
                  Advanced Diploma in Computer Applications (ADCA)
                </p>
                <span class="timeline-date"
                  ><i class="uil uil-calendar-alt"></i>2021 - 2022</span
                >
              </div>
            </div>
          </div>

          <div class="experience">
            <h3 class="qualification-title">
              <i class="uil uil-suitcase"></i>Experience
            </h3>

            <div class="timeline">
              <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-title">Fresher</h3>
                <p class="timeline-text">Junior web developer</p>
                <span class="timeline-date"
                  ><i class="uil uil-calendar-alt"></i>2025 - Present</span
                >
              </div>
            </div>
          </div>
          <div class="experience">
            <h3 class="qualification-title">
              <i class="uil uil-suitcase"></i>Achievements
            </h3>

            <div class="timeline">
              <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-title">Udemy Certification</h3>
                <p class="timeline-text">
                  Adobe Illustrator CC – Advanced Training course
                </p>

              </div>
            </div>
            <div class="timeline">
              <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-title">Udemy Certification</h3>
                <p class="timeline-text">
                  CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-title">Udemy Certification</h3>
                <p class="timeline-text">JS - The Complete Course</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="work-section" id="work">
        <h2 class="section-title" data-heading="Portfolio">My Work</h2>
        <div class="projects-grid">
          <!-- Project Card -->
          <div class="project-card" data-project="amazon">
            <img
              src="assets/Picture/1-project.png"
              alt="Amazon Clone"
              class="project-img"
            />
            <h3 class="project-title">Amazon Clone</h3>
            <a href="#" class="project-demo" data-project="amazon"
              >Demo <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>

          <div class="project-card" data-project="netflix">
            <img
              src="assets/Picture/2-project.png"
              alt="Netflix Clone"
              class="project-img"
            />
            <h3 class="project-title">Netflix Login Clone</h3>
            <a href="#" class="project-demo" data-project="netflix"
              >Demo <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
          <div class="project-card" data-project="netflix">
            <img
              src="assets/Picture/3-project.jpg"
              alt="Netflix Clone"
              class="project-img"
            />
            <h3 class="project-title">Netflix Login Clone</h3>
            <a href="#" class="project-demo" data-project="netflix"
              >Demo <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
        </div>
        <div class="projects-grid">
          <!-- Project Card -->
          <div class="project-card" data-project="amazon">
            <img
              src="https://i.postimg.cc/43Th5VXJ/work-1.png"
              alt="Amazon Clone"
              class="project-img"
            />
            <h3 class="project-title">Amazon Clone</h3>
            <a href="#" class="project-demo" data-project="amazon"
              >Demo <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>

          <div class="project-card" data-project="netflix">
            <img
              src="https://i.postimg.cc/43Th5VXJ/work-1.png"
              alt="Netflix Clone"
              class="project-img"
            />
            <h3 class="project-title">Netflix Login Clone</h3>
            <a href="#" class="project-demo" data-project="netflix"
              >Demo <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
          <div class="project-card" data-project="netflix">
            <img
              src="https://i.postimg.cc/43Th5VXJ/work-1.png"
              alt="Netflix Clone"
              class="project-img"
            />
            <h3 class="project-title">Netflix Login Clone</h3>
            <a href="#" class="project-demo" data-project="netflix"
              >Demo <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
        </div>
      </section>
      <!-- Modal -->
      <div id="project-modal" class="modal">
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <div class="modal-body" id="modal-body">
            <!-- dynamic content loads here -->
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <section class="services-section" id="services" >
        <h2 class="section-title" data-heading="Portfolio">My Services</h2>

        <div class="services-container">
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">
                <i class="fa-solid fa-code"></i>
              </div>
              <h3 class="service-title">Frontend Development</h3>
              <p class="service-description">
                Creating responsive and interactive user interfaces using modern
                frameworks like React, Vue.js, and Angular with pixel-perfect
                design implementation.
              </p>
              <ul class="service-features">
                <li>Responsive Web Design</li>
                <li>React js Development</li>
                <li>Performance Optimization</li>
                <li>Cross-browser Compatibility</li>
              </ul>

            </div>

            <div
              class="service-card featured"
            >
              <div class="service-icon">
                <i class="fa-solid fa-pencil-ruler"></i>
              </div>
              <h3 class="service-title">UI/UX Design</h3>
              <p class="service-description">
                Designing intuitive and visually appealing user experiences that
                convert visitors into customers through strategic design
                thinking and user research.
              </p>
              <ul class="service-features">
                <li>User Research & Analysis</li>
                <li>Wireframing & Prototyping</li>
                <li>Visual Design System</li>
                <li>Usability Testing</li>
              </ul>

            </div>

            <div class="service-card">
              <div class="service-icon">
                <i class="fa-solid fa-paintbrush"></i>
              </div>
              <h3 class="service-title">Graphic Design</h3>
              <p class="service-description">
                Creating impactful visual identities, logos, and marketing
                materials that resonate with your brand message and captivate
                your audience.
              </p>
              <ul class="service-features">
                <li>Logo & Brand Identity</li>
                <li>Marketing Materials</li>
                <li>Print & Digital Design</li>
                <li>Brand Guidelines</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section" id="contact">
        <h2 class="section-title" data-heading="Contact">Get In Touch</h2>
          <div class="contact-content">
            <div class="contact-info" data-aos="fade-right">

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="contact-details">
                  <h4>Location</h4>
                  <p>Delhi, India</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h4>Phone</h4>
                  <p>+91 1234567890</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <p>abhay@gmail.com</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fa-solid fa-clock"></i>
                </div>
                <div class="contact-details">
                  <h4>Response Time</h4>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>

            <div class="contact-form-wrapper" data-aos="fade-left">
              <form class="contact-form" id="contactForm">
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                    <label for="firstName">First Name</label>
                    <span class="input-border"></span>
                  </div>
                  <div class="input-group">
                    <input type="text" id="lastName" name="lastName" required />
                    <label for="lastName">Last Name</label>
                    <span class="input-border"></span>
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <input type="email" id="email" name="email" required />
                    <label for="email">Email Address</label>
                    <span class="input-border"></span>
                  </div>
                  <div class="input-group">
                    <input type="tel" id="phone" name="phone" required/>
                    <label for="phone">Phone Number</label>
                    <span class="input-border"></span>
                  </div>
                </div>

                <div class="input-group">
                  <select id="service" name="service">
                    <option value="">Select a Service</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="graphic">Graphic Design</option>
                  </select>
                  <label for="service">Service Required</label>
                  <span class="input-border"></span>
                </div>

                <div class="input-group">
                  <select id="budget" name="budget">
                    <option value="">Select Budget Range</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500+">$2,500+</option>
                  </select>
                  <label for="budget">Budget Range</label>
                  <span class="input-border"></span>
                </div>

                <div class="input-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                  <label for="message">Project Details</label>
                  <span class="input-border"></span>
                </div>

                <button type="submit" class="submit-btn">
                  <span class="btn-text">Send Message</span>
                  <span class="btn-icon"
                    ><i class="fas fa-paper-plane"></i
                  ></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>

  <script src="script_real.js"></script>
</html>

```

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Turret+Road:wght@200;300;400;500;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap");

:root {
  --hue-color: 242;

  --color-main: #5479ce;
  --color-light-white: #f5f5f5;
  --color-light-gray: #ffffff;
  --color-transparent-light-gray: #b3b3b3b5;
  --color-button-bg: #5479ce;
  --color-button-text: #ffffff;
  --color-heading-gradient-start: #00bcd4;
  --color-heading-gradient-end: #00ffae;
  --social-box-color: #1a1a2e;
  --color-heading-bg: rgba(22, 33, 50, 0.7);
  --color-nav-hover: rgba(128, 128, 128, 0.121);
  --skin-color: hsl(200, 64%, 43%);
  --mirage-color: hsl(210, 10%, 23%);
  --title-color: hsl(var(--hue-color), 8%, 95%);
  --text-color: hsl(var(--hue-color), 8%, 85%);
  --body-color: hsl(var(--hue-color), 19%, 5%);
  --box-color: hsl(var(--hue-color), 14%, 10%);
  --scroll-box-color: hsl(var(--hue-color), 12%, 38%);
  --scroll-thumb-color: hsl(var(--hue-color), 12%, 26%);

  --hover-shadow: 0 15px 40px rgba(0, 191, 255, 0.2);

  --bg-color: hsl(var(--hue-color), 19%, 5%);
  --card-bg: hsl(var(--hue-color), 15%, 8%);
  --text-primary: hsl(var(--hue-color), 8%, 95%);
  --text-secondary: hsl(var(--hue-color), 8%, 75%);
  --text-muted: hsl(var(--hue-color), 8%, 60%);
  --accent-color: hsl(var(--hue-color), 69%, 61%);
  --accent-hover: hsl(var(--hue-color), 69%, 71%);
  --gradient-primary: linear-gradient(
    135deg,
    hsl(var(--hue-color), 69%, 61%),
    hsl(var(--hue-color), 69%, 45%)
  );
  --gradient-secondary: linear-gradient(
    135deg,
    hsl(var(--hue-color), 15%, 12%),
    hsl(var(--hue-color), 15%, 8%)
  );
  --border-color: hsl(var(--hue-color), 15%, 15%);
  --shadow-light: 0 4px 15px hsla(var(--hue-color), 69%, 61%, 0.1);
  --shadow-medium: 0 8px 30px hsla(var(--hue-color), 69%, 61%, 0.15);
  --shadow-heavy: 0 15px 60px hsla(var(--hue-color), 69%, 61%, 0.2);

  --body-font: "Poppins", sans-serif;
  --signature-font: "Turret Road", sans-serif;

  /* Fonts */

  --font-main: "Gantari", sans-serif;
  --font-medium: 500;
  --font-bold: 600;

  /* Font Sizes */
  --font-h1: 45px;
  --font-h2: 20px;
  --font-body: 13px;
  --font-button: 16px;
  --font-nav: 18px;
  --biggest-font-size: 2.5rem;
  --h1-font-size: 2.25rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.2rem;
  --normal-font-size: 1rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;

  --mb1: 1rem;
  --mb2: 0.5rem;
  --mb3: 3rem;
  --mb05: 0.5rem;
  --mb15: 1.5rem;
  --mb025: 0.25rem;
  --mb25: 2.5rem;
  --mb075: 0.75rem;

  --z-fixed: 10;
  --z-modal: 100;
}

@media screen and (max-width: 1024px) {
  :root {
    --biggest-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body,
button,
input {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}
body {
  background-color: var(--body-color);
  color: var(--text-color);
}
h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-bold);
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
}
button,
input {
  border: none;
  outline: none;
}
.container {
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
}
.grid {
  display: grid;
}
.button {
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  background-color: var(--color-main);
  color: var(--title-color);
  padding: 0.75rem 1.4rem;
  border-radius: 0.25rem;
  font-weight: var(--font-medium);
  position: relative;
  top: 5.5rem;
  z-index: 1;
  transition: 0.4s;
}
.button::after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mirage-color);
  z-index: -1;
  transform-origin: center;
  transform: scale(0);
  border-radius: 0.25rem;
  transition: 0.3s;
}
.button:hover::after {
  transform: scale(1);
}
.section {
  padding: 6.5rem 0 2rem;
}
.section-title {
  text-align: center;
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb3);
}
.section-title::before {
  content: attr(data-heading);
  display: block;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--skin-color);
}
::-webkit-scrollbar {
  width: 0.6rem;
  background-color: var(--scroll-box-color);
  border-radius: 0.5rem;
}
::-webkit-scrollbar-thumb {
  background-color: var(--scroll-thumb-color);
  border-radius: 0.5rem;
}

/* Sidebar */

.sidebar {
  position: fixed;
  width: 100px;
  height: 100vh;
  background-color: var(--body-color);
  border-right: 1px solid var(--box-color);
}
.nav-logo {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.8rem;
  width: 90px;
  /* height: 80px; */
  text-align: center;
  margin: auto;
}

.nav-menu {
  position: fixed;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  width: 100vh;
}
.menu {
  display: flex;
}
.nav-list {
  display: flex;
  flex-direction: row-reverse;
  margin: -2px auto 0 auto;
}
.nav-link {
  float: right;
  height: 100%;
  line-height: 100px;
  padding: 0 1rem;
  color: var(--title-color);
  font-weight: var(--font-medium);
  position: relative;
  transition: 0.4s;
}
.nav-toggle {
  height: 32px;
  width: 36px;
  cursor: pointer;
  position: fixed;
  right: 1.5rem;
  top: 2rem;
  font-size: 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--skin-color);
  color: var(--title-color);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.nav-close {
  font-size: 0.8rem;
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  cursor: pointer;
  display: none;
}
.nav-link.active-link,
.nav-link:hover {
  color: var(--skin-color);
}
.nav-link.active-link::after,
.nav-link:hover::after {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  background-color: var(--skin-color);
  border-radius: 50%;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  margin: auto;
}
.btn-share {
  position: absolute;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  text-align: center;
  cursor: pointer;
}
.social-share {
  font-size: 1.5rem;
}

/* Main - Home */

.main {
  margin-left: 120px;
}

.home {
  background-image: url(assets/Picture/hero-2.png);
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
.home-container {
  position: relative;
  height: 100%;
  align-items: center;
}
.my-info {
  display: flex;
  column-gap: 1.8rem;
  position: absolute;
  left: 0;
  top: 2.2rem;
}
.info-item {
  display: flex;
  align-items: center;
}
.info-title,
.info-subtitle {
  font-size: var(--small-font-size);
}
.info-title {
  font-weight: var(--font-medium);
}
.info-icon {
  font-size: 1.8rem;
  color: var(--skin-color);
  margin-right: var(--mb075);
}

.info-icon:hover {
  transform: translateY(-0.25rem);
}

/* Social Follow */
.social-follow {
  position: fixed;
  top: 1.8rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 999;
  background: var(--social-box-color);
  padding: 1rem 1.5rem;
  border-radius: var(--mb05);
  /* box-shadow: var(--box-shadow); */
}

.social-follow span {
  color: var(--light-gray);
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--accent-dark);
  color: var(--primary-blue);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--primary-blue);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: var(--hover-shadow);
}

.home-img {
  display: none;
}
.home-title {
  position: relative;
  top: 3rem;
  font-size: var(--biggest-font-size);
}
.home-subtitle {
  position: relative;
  top: 4rem;
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb075);
}
.home-description {
  position: relative;
  top: 4.2rem;
  max-width: 450px;
  margin-bottom: var(--mb2);
}
/* Second  section start */

/* About */

.about {
  justify-items: center;
}

.about-section {
  align-items: center;
  width: 90%;
  height: 90vh;
  max-width: 1200px;
  padding: 20px 30px 20px 100px;
  border-radius: 30px;
  background: #1e1e1f23;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 30px 0 rgba(116, 174, 239, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 80px;
}

.second-items::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.06);
  z-index: 0;
}

.second-content {
  position: relative;
  top: 1rem;
  z-index: 1;
  color: #fff;
  text-align: left;

  .head {
    color: var(--color-main);
    font-size: var(--mb15);
  }
}

.second-content h2 {
  font-size: 32px;
  color: #fcb045;
  margin-bottom: 20px;
}

.second-content p {
  font-size: 16px;
  color: #dddddd;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
}

.about-info {
  display: grid;
  grid-template-columns: repeat(3, 140px);
  column-gap: 0.5rem;
  margin-bottom: var(--mb3);
  position: relative;
  top: 2.5rem;
}
.about-box {
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  background-color: var(--box-color);
}
.about-title {
  font-size: var(--mb5);
  font-weight: 300;
  color: var(--white);
}
.about-subtitle {
  color: var(--color-main);
  font-weight: var(--font-bold);
  font-size: 1.8rem;
}

.about-info:hover {
}
.about-box:hover::before {
  opacity: 1;
}

.about-box:hover {
  color: var(--title-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

/* Skills Section */
.skills-section {
  margin-bottom: var(--mb025);
}

.skills-title {
  font-size: var(--h3-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb1);
  font-weight: var(--font-medium);
  font-family: var(--body-font);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.6rem 1.2rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  font-size: var(--small-font-size);
  color: var(--text-secondary);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.skill-tag::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.skill-tag:hover::before {
  opacity: 1;
}

.skill-tag:hover {
  color: var(--title-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

/* Profile Image */

.profile-img {
  position: relative;
  bottom: 1.8rem;
  /* border-radius: 7%;  /////// when it'll be square  */
}

.about-button {
  position: relative;
  top: 0.3rem;
  left: 4rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
}

/*--------------------- Skills Section --------------------------*/

.skills-heading {
  font-size: var(--h2-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb2);
  position: relative;
  top: 5rem;
}

.skills-container {
  grid-template-columns: repeat(3, 320px);
  column-gap: 3.5rem;
  justify-content: center;
}

.skill {
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.skill-title {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #ccc;
  margin-bottom: 10px;
}

.skill-bar {
  background-color: #2d2d2d;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.skill-fill {
  background-color: var(--color-main);
  height: 80%;
  border-radius: 8px;
  transition: width 0.8s ease;
}
.scroll-float {
  overflow: hidden;
}

.scroll-float-text {
  display: inline-block;
  font-size: clamp(1.6rem, 8vw, 10rem);
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
}

.char {
  display: inline-block;
}

/* Main - Qualification */

.qualification-container {
  grid-template-columns: repeat(3, 340px);
  column-gap: 3rem;
  justify-content: center;
}
.qualification-title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb2);
}
.timeline-item {
  position: relative;
  margin-bottom: var(--mb25);
  padding-left: 3rem;
}
.timeline-item:last-child {
  margin-bottom: 0;
}
.timeline-item::before {
  content: "";
  width: 1px;
  position: absolute;
  left: 0.48rem;
  top: 0;
  height: 100%;
  background-color: var(--color-main);
}
.circle-dot {
  position: absolute;
  left: 0;
  top: 0;
  height: 1rem;
  width: 1rem;
  border: 2px solid var(--color-main);
  border-radius: 50%;
  background-color: var(--color-main);
  transition: 0.4s;
}
.timeline-item:hover .circle-dot {
  background-color: var(--body-color);
}
.timeline-title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb025);
}
.timeline-text {
  font-size: var(--smaller-font-size);
  margin-bottom: var(--mb1);
}
.timeline-date {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-size: var(--normal-font-size);
  color: var(--skin-color);
}

/* Work Section */

/* Grid Layout */

.work-section {
  margin-top: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 2.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

/* Project Card */
.project-card {
  height: 52vh;
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 9px;
  transition: transform 0.3s;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-img {
  width: 100%;
  height: 300px;
  padding: 20px;
  overflow: hidden;
  border-radius: 30px;
}

.project-title {
  display: inline;
  margin-top: 6px;
  margin-left: 1.2rem;
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.project-demo {
  /* display: inline-block; */
  position: relative;
  left: 4.5rem;
  color: #1e90ff;
  text-decoration: none;
  font-size: var(--normal-font-size);
}

.project-demo i {
  margin-left: 5px;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background-color: #2c2c2c;
  margin: 5% auto;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
}

.modal-body img {
  width: 100%;
  border-radius: 10px;
}

.modal-body h3 {
  margin-top: 15px;
  font-size: 24px;
}

.modal-body p {
  margin: 10px 0;
  color: #ccc;
}

/* ----------------Services Section ---------------------------*/

.services-section {
  padding: 6rem 0;
  position: relative;
}

.services-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  /* background: var(--gradient-primary); */
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s ease;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  /* background: var(--gradient-primary); */
  /* transform: scaleX(0);
  transition: transform 0.4s ease; */
}

/* .service-card:hover::before {
  transform: scaleX(1);
} */

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-heavy);
  border-color: var(--accent-color);
}

.service-card.featured {
  border: 2px solid var(--accent-color);
  background: linear-gradient(
    135deg,
    var(--card-bg),
    hsla(var(--hue-color), 69%, 61%, 0.05)
  );
}

.featured-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--color-button-bg);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.service-icon {
  width: 70px;
  height: 70px;
  background: var(--color-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.service-icon i {
  font-size: 1.8rem;
  color: white;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.service-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.service-features {
  list-style: none;
  margin-bottom: 2rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: var(--text-muted);
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

.service-price {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.service-price span {
  font-size: 1.5rem;
  color: var(--accent-color);
  font-weight: 700;
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  position: relative;
}

.contact-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2.5rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 15px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-light);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--color-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon i {
  font-size: 1.2rem;
  color: white;
}

.contact-details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.contact-details p {
  color: var(--text-secondary);
}

/* Contact Form */
.contact-form-wrapper {
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-medium);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.input-group {
  position: relative;
}

.input-group input,
.input-group select,
.input-group textarea {
  width: 100%;
  padding: 1rem 0 1rem 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--border-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  font-family: inherit;
}

.input-group label {
  position: absolute;
  top: 1rem;
  left: 0;
  color: var(--text-muted);
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-group input:focus ~ label,
.input-group input:valid ~ label,
.input-group select:focus ~ label,
.input-group select:valid ~ label,
.input-group textarea:focus ~ label,
.input-group textarea:valid ~ label {
  top: -0.5rem;
  font-size: 0.8rem;
  color: var(--accent-color);
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  border-bottom-color: var(--accent-color);
}

.input-border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.input-group input:focus ~ .input-border,
.input-group select:focus ~ .input-border,
.input-group textarea:focus ~ .input-border {
  width: 100%;
}

.input-group select option {
  background: var(--card-bg);
  color: var(--text-primary);
}

.input-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-family: inherit;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.submit-btn:active {
  transform: translateY(0);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.submit-btn:hover .btn-icon {
  transform: translateX(5px);
}

/* Media Queries */

@media screen and (max-width: 1408px) {
  .container {
    margin-left: var(--mb25);
    margin-right: var(--mb25);
  }
}
/*
@media screen and (max-width: 1216px) {
  .about-container {
    column-gap: 2.5rem;
  }
  .about-description {
    padding-right: 0;
  }
  .work-container {
    grid-template-columns: repeat(2, 330px);
    gap: 3rem;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    margin-left: var(--mb15);
    margin-right: var(--mb15);
  }
  .sidebar {
    width: 100%;
    z-index: 999;
    transform: translateX(-100%);
  }
  .show-sidebar {
    transform: translateX(0);
  }
  .nav-logo,
  .btn-share {
    display: none;
  }
  .nav-menu {
    height: 100%;
    width: 100%;
    transform: rotate(0deg) translateX(0);
    display: flex;
    justify-content: center;
  }
  .nav-list {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    padding: 1rem 0;
    line-height: 1.5;
  }
  .nav-link.active-link::after,
  .nav-link:hover::after {
    bottom: 0;
  }
  .nav-close {
    display: block;
  }
  .nav-toggle {
    display: flex;
  }

  .main {
    margin-left: 0;
  }

  .about-container {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
  .about-img {
    width: 350px;
  }
  .about-data {
    text-align: center;
  }
  .about-info {
    justify-content: center;
  }
  .about-box {
    padding: 0.75rem 0.5rem;
  }
  .about-description {
    padding: 0 4rem;
    text-align: center;
  }

  .qualification-container {
    grid-template-columns: repeat(2, 290px);
  }
  .skills-container {
    grid-template-columns: 340px 300px;
  }
  .skills-list {
    row-gap: 1.7rem;
  }

  .work-card {
    padding: 1rem;
  }
  .work-img {
    margin-bottom: var(--mb075);
  }
  .work-title {
    margin-bottom: var(--mb025);
  }

  .services-container {
    grid-template-columns: repeat(3, 220px);
  }

  .testimonial-card {
    padding: 1.25rem 1.5rem;
  }

  .portfolio-item-details {
    margin-bottom: var(--mb15);
  }
  .details-info li {
    margin-bottom: var(--mb05);
  }
  .details-title {
    margin-bottom: var(--mb075);
  }
}

@media screen and (max-width: 768px) {
  .about-img {
    width: 250px;
  }
  .qualification-container {
    grid-template-columns: 290px;
    row-gap: 3rem;
  }
  .skills-container {
    grid-template-columns: 300px;
    row-gap: 3rem;
  }
  .work-container {
    grid-template-columns: 330px;
  }

  .services-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .services-content {
    padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  }
  .services-icon {
    font-size: 1.5rem;
  }

  .contact-container {
    grid-template-columns: 360px;
    row-gap: 3rem;
  }
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }
  .footer-socials {
    justify-self: start;
  }
  .footer-links {
    flex-direction: column;
    row-gap: 1.5rem;
  }
  .footer-bg {
    padding: 2rem 0 3rem;
  }
  .footer-copy {
    margin-top: var(--mb3);
  }

  .portfolio-popup-inner {
    width: 420px;
    padding: 2.8rem 1.5rem 2.5rem;
  }
  .portfolio-popup-content {
    grid-template-columns: 1fr;
    row-gap: 1.6rem;
  }
  .details-title {
    font-size: var(--normal-font-size);
  }
  .portfolio-popup-close {
    top: 0.5rem;
  }
}

@media screen and (max-width: 576px) {
  .nav-toggle {
    right: initial;
    left: 1.5rem;
  }
  .home {
    background-image: none;
    height: initial;
    align-items: initial;
    padding: 7rem 0 2rem;
  }
  .home-container {
    row-gap: 2rem;
  }
  .home-img {
    display: block;
    width: 250px;
    justify-self: center;
  }
  .my-info {
    display: none;
  }
  .home-social {
    left: initial;
    right: -1rem;
    flex-direction: column;
    row-gap: 3.5rem;
  }
  .home-social-follow {
    font-size: var(--smaller-font-size);
    transform: rotate(90deg);
  }
  .home-social-links {
    flex-direction: column;
    row-gap: 0.25rem;
  }
  .home-social-link {
    font-size: var(--normal-font-size);
  }

  .about-info {
    grid-template-columns: repeat(3, 1fr);
  }
  .about-description {
    padding: 0;
  } 

  .services-modal-content {
    padding: 4.5rem 1.5rem 2.5rem;
  }
  .services-modal-description {
    padding: 0;
  }

  .work-container,
  .contact-container {
    grid-template-columns: 300px;
  }

  .footer-container {
    grid-template-columns: 1fr;
  }
  .footer-links {
    justify-self: flex-start;
  }
}

@media screen and (max-width: 350px) {
  .container {
    margin-left: var(--mb1);
    margin-left: var(--mb1);
  }
  .home-img {
    width: 200px;
  }
  .home-title {
    font-size: var(--h1-font-size);
  }
  .home-subtitle {
    font-size: var(--normal-font-size);
  }

  .about-info {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.5rem;
  }
  .work-container,
  .skills-container,
  .qualification-container,
  .contact-container {
    grid-template-columns: 1fr;
  }
  .skills-title {
    font-size: var(--normal-font-size);
  }
  .work-item {
    font-size: var(--normal-font-size);
  }
  .work-filters {
    column-gap: 0.25rem;
  }
  .services-container {
    grid-template-columns: max-content;
  }
  .services-content {
    padding-right: 3.5rem;
  }
}
*/
```

```javascript
// Toggling Skill Tabs

const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills-active");
    });

    target.classList.add("skills-active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills-active");
    });

    tab.classList.add("skills-active");
  });
});

//Services Popup
const modalViews = document.querySelectorAll(".services-modal");
const modelBtns = document.querySelectorAll(".services-button");
const modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
// Input Animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Scroll Section Active Link

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 40;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

// Activating Sidebar

// const navMenu = document.getElementById("sidebar");
// const navToggle = document.getElementById("nav-toggle");
// const navClose = document.getElementById("nav-close");

// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.add("show-sidebar");
//   });
// }

// if (navClose) {
//   navClose.addEventListener("click", () => {
//     navMenu.classList.remove("show-sidebar");
//   });
// }

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const sidebar = document.getElementById("sidebar");

  navToggle.addEventListener("click", () => {
    sidebar.style.display = "block";
  });

  navClose.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
});
// Project data
const projectData = {
  amazon: {
    title: "Amazon Clone",
    description: "This is my first clone project but this isn’t complete.",
    date: "1 Jan 2025",
    languages: "HTML, CSS",
    type: "Frontend",
    github: "https://www.github.com",
    img: "https://i.postimg.cc/43Th5VXJ/work-1.png",
  },
  netflix: {
    title: "Netflix Login Clone",
    description: "Login page clone with responsive UI.",
    date: "15 Feb 2025",
    languages: "HTML, CSS, JS",
    type: "Frontend",
    github: "https://www.github.com",
    img: "https://i.postimg.cc/43Th5VXJ/work-1.png",
  },
};

// Modal logic
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".project-demo").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const projectKey = link.dataset.project;
    showProject(projectKey);
  });
});

function showProject(key) {
  const data = projectData[key];
  if (data) {
    modalBody.innerHTML = `
      <img src="${data.img}" alt="${data.title}">
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <p><strong>Created:</strong> ${data.date}</p>
      <p><strong>Languages:</strong> ${data.languages}</p>
      <p><strong>Type:</strong> ${data.type}</p>
      <p><strong>View:</strong> <a href="${data.github}" target="_blank">${data.github}</a></p>
    `;
    modal.style.display = "block";
  }
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// // Form handling with validation
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (!validateForm()) {
//     return;
//   }

//   // Get form data
//   const formData = new FormData(this);
//   const formObject = {};

//   for (let [key, value] of formData.entries()) {
//     formObject[key] = value;
//   }

//   // Simulate form submission
//   const submitBtn = this.querySelector(".submit-btn");
//   const originalText = submitBtn.innerHTML;

//   submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//   submitBtn.disabled = true;

//   // Simulate API call
//   setTimeout(() => {
//     submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
//     submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";

//     // Reset form
//     this.reset();

//     // Reset button after 3 seconds
//     setTimeout(() => {
//       submitBtn.innerHTML = originalText;
//       submitBtn.disabled = false;
//       submitBtn.style.background = "";
//     }, 3000);

//     // Show success message
//     showNotification(
//       "Message sent successfully! I'll get back to you soon.",
//       "success"
//     );
//   }, 2000);
// });

// // Form validation
// function validateForm() {
//   const form = document.getElementById("contactForm");
//   const inputs = form.querySelectorAll(
//     "input[required], select[required], textarea[required]"
//   );
//   let isValid = true;

//   inputs.forEach((input) => {
//     if (!input.value.trim()) {
//       isValid = false;
//       input.style.borderBottomColor = "#ef4444";
//     } else {
//       input.style.borderBottomColor = "#10b981";
//     }
//   });

//   // Email validation
//   const emailInput = form.querySelector('input[type="email"]');
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (emailInput.value && !emailRegex.test(emailInput.value)) {
//     isValid = false;
//     emailInput.style.borderBottomColor = "#ef4444";
//     showNotification("Please enter a valid email address", "error");
//   }

//   return isValid;
// }

// // Notification system
// function showNotification(message, type = "success") {
//   const notification = document.createElement("div");
//   notification.className = `notification ${type}`;
//   notification.innerHTML = `
//         <div class="notification-content">
//             <i class="fas ${
//               type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
//             }"></i>
//             <span>${message}</span>
//         </div>
//     `;

//   // Add notification styles
//   notification.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         background: ${
//           type === "success"
//             ? "linear-gradient(135deg, #10b981, #059669)"
//             : "linear-gradient(135deg, #ef4444, #dc2626)"
//         };
//         color: white;
//         padding: 1rem 1.5rem;
//         border-radius: 10px;
//         box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
//         z-index: 10000;
//         transform: translateX(400px);
//         transition: transform 0.3s ease;
//     `;

//   document.body.appendChild(notification);

//   // Animate in
//   setTimeout(() => {
//     notification.style.transform = "translateX(0)";
//   }, 100);

//   // Remove after 5 seconds
//   setTimeout(() => {
//     notification.style.transform = "translateX(400px)";
//     setTimeout(() => {
//       document.body.removeChild(notification);
//     }, 300);
//   }, 5000);
// }

// // Scroll animations
// function animateOnScroll() {
//   const elements = document.querySelectorAll("[data-aos]");

//   elements.forEach((element) => {
//     const elementTop = element.getBoundingClientRect().top;
//     const elementVisible = 150;

//     if (elementTop < window.innerHeight - elementVisible) {
//       element.classList.add("aos-animate");
//     }
//   });
// }

// // Initialize animations on scroll
// window.addEventListener("scroll", animateOnScroll);
// window.addEventListener("load", animateOnScroll);

// // Update active navigation based on scroll position
// window.addEventListener("scroll", function () {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".nav-link");

//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (window.pageYOffset >= sectionTop - 200) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === `#${current}`) {
//       link.classList.add("active");
//     }
//   });
// });

// // Real-time form validation
// document.getElementById("contactForm").addEventListener("input", function (e) {
//   if (e.target.type === "email") {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (e.target.value && !emailRegex.test(e.target.value)) {
//       e.target.style.borderBottomColor = "#ef4444";
//     } else {
//       e.target.style.borderBottomColor = "#10b981";
//     }
//   }
// });
```

```html
<div class="nav-toggle" id="nav-toggle">
  <i class="uil uil-bars"></i>
</div>
<aside class="sidebar" id="sidebar">
  <nav class="nav">
    <div class="nav-logo">
      <a href="#" class="nav-logo"
        ><img src="assets/Picture/1-logo.png" alt=""
      /></a>
    </div>

    <div class="nav-menu">
      <div class="menu">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#home" class="nav-link active-link">Home</a>
          </li>

          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>

          <li class="nav-item">
            <a href="#skills" class="nav-link">Skills</a>
          </li>

          <li class="nav-item">
            <a href="#work" class="nav-link">Work</a>
          </li>

          <li class="nav-item">
            <a href="#services" class="nav-link">Services</a>
          </li>

          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="btn-share">
      <i class="fa-solid fa-share-nodes social-share"></i>
    </div>

    <div class="nav-close" id="nav-close">
      <i class="uil uil-times"></i>
    </div>
  </nav>
</aside>
```

```css
/* Sidebar */

.sidebar {
  position: fixed;
  width: 100px;
  height: 100vh;
  background-color: var(--body-color);
  border-right: 1px solid var(--box-color);
  /* transform: translateX(-100%);
  transition: transform 0.3s ease; */
}

/* .sidebar.active {
  transform: translateX(0);
} */

.nav-logo {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.8rem;
  width: 90px;
  /* height: 80px; */
  text-align: center;
  margin: auto;
}

.nav-menu {
  position: fixed;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  width: 100vh;
}
.menu {
  display: flex;
}
.nav-list {
  display: flex;
  flex-direction: row-reverse;
  margin: -2px auto 0 auto;
}
.nav-link {
  float: right;
  height: 100%;
  line-height: 100px;
  padding: 0 1rem;
  color: var(--title-color);
  font-weight: var(--font-medium);
  position: relative;
  transition: 0.4s;
}
.nav-toggle {
  height: 32px;
  width: 36px;
  cursor: pointer;
  position: fixed;
  right: 1.5rem;
  top: 2rem;
  font-size: 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--skin-color);
  color: var(--title-color);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.nav-close {
  font-size: 0.8rem;
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  cursor: pointer;
  display: none;
}
.nav-link.active-link,
.nav-link:hover {
  color: var(--skin-color);
}
.nav-link.active-link::after,
.nav-link:hover::after {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  background-color: var(--skin-color);
  border-radius: 50%;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  margin: auto;
}
.btn-share {
  position: absolute;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  text-align: center;
  cursor: pointer;
}
.social-share {
  font-size: 1.5rem;
}
```

```javascript
// // Activating Sidebar

// const navMenu = document.getElementById("sidebar");
// const navToggle = document.getElementById("nav-toggle");
// const navClose = document.getElementById("nav-close");

// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.add("show-sidebar");
//   });
// }

// if (navClose) {
//   navClose.addEventListener("click", () => {
//     navMenu.classList.remove("show-sidebar");
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const navToggle = document.getElementById("nav-toggle");
//   const navClose = document.getElementById("nav-close");
//   const sidebar = document.getElementById("sidebar");

//   navToggle.addEventListener("click", () => {
//     sidebar.style.display = "block";
//   });

//   navClose.addEventListener("click", () => {
//     sidebar.style.display = "none";
//   });
// });

// === Sidebar Toggle ===
const navMenu = document.getElementById("sidebar");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Show Sidebar
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

// Hide Sidebar
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}
```

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Turret+Road:wght@200;300;400;500;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap");

:root {
  --hue-color: 242;

  --color-main: #5479ce;
  --color-button-bg: #5479ce;
  --social-box-color: #1a1a2e;
  --skin-color: hsl(200, 64%, 43%);
  --mirage-color: hsl(210, 10%, 23%);
  --title-color: hsl(var(--hue-color), 8%, 95%);
  --text-color: hsl(var(--hue-color), 8%, 85%);
  --body-color: hsl(var(--hue-color), 19%, 5%);
  --box-color: hsl(var(--hue-color), 14%, 10%);
  --scroll-box-color: hsl(var(--hue-color), 12%, 38%);
  --scroll-thumb-color: hsl(var(--hue-color), 12%, 26%);
  --hover-shadow: 0 15px 40px rgba(0, 191, 255, 0.2);
  --card-bg: hsl(var(--hue-color), 15%, 8%);
  --text-primary: hsl(var(--hue-color), 8%, 95%);
  --text-secondary: hsl(var(--hue-color), 8%, 75%);
  --text-muted: hsl(var(--hue-color), 8%, 60%);
  --accent-color: hsl(var(--hue-color), 69%, 61%);
  --gradient-primary: linear-gradient(
    135deg,
    hsl(var(--hue-color), 69%, 61%),
    hsl(var(--hue-color), 69%, 45%)
  );
  --border-color: hsl(var(--hue-color), 15%, 15%);
  --shadow-light: 0 4px 15px hsla(var(--hue-color), 69%, 61%, 0.1);
  --shadow-medium: 0 8px 30px hsla(var(--hue-color), 69%, 61%, 0.15);
  --shadow-heavy: 0 15px 60px hsla(var(--hue-color), 69%, 61%, 0.2);

  /* Fonts */

  --body-font: "Poppins", sans-serif;
  --font-medium: 500;
  --font-bold: 600;

  /* Font Sizes */
  --biggest-font-size: 2.5rem;
  --h1-font-size: 2.25rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.2rem;
  --normal-font-size: 1rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;

  --mb1: 1rem;
  --mb2: 0.5rem;
  --mb3: 3rem;
  --mb05: 0.5rem;
  --mb15: 1.5rem;
  --mb025: 0.25rem;
  --mb25: 2.5rem;
  --mb075: 0.75rem;
}

@media screen and (max-width: 1024px) {
  :root {
    --biggest-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body,
button,
input {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}
body {
  background-color: var(--body-color);
  color: var(--text-color);
}
h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-bold);
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
}
button,
input {
  border: none;
  outline: none;
}
.container {
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
}
.grid {
  display: grid;
}
.button {
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  background-color: var(--color-main);
  color: var(--title-color);
  padding: 0.75rem 1.4rem;
  border-radius: 0.25rem;
  font-weight: var(--font-medium);
  position: relative;
  top: 5.5rem;
  z-index: 1;
  transition: 0.4s;
}
.button::after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mirage-color);
  z-index: -1;
  transform-origin: center;
  transform: scale(0);
  border-radius: 0.25rem;
  transition: 0.3s;
}
.button:hover::after {
  transform: scale(1);
}
.section {
  padding: 6.5rem 0 2rem;
}
.section-title {
  text-align: center;
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb3);
}
.section-title::before {
  content: attr(data-heading);
  display: block;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--skin-color);
}
::-webkit-scrollbar {
  width: 0.6rem;
  background-color: var(--scroll-box-color);
  border-radius: 0.5rem;
}
::-webkit-scrollbar-thumb {
  background-color: var(--scroll-thumb-color);
  border-radius: 0.5rem;
}

.sidebar {
  position: fixed;
  width: 100px;
  height: 100vh;
  background-color: var(--body-color);
  border-right: 1px solid var(--box-color);
}
.nav-logo {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.8rem;
  width: 90px;
  /* height: 80px; */
  text-align: center;
  margin: auto;
}
.nav-menu {
  position: fixed;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  width: 100vh;
}
.menu {
  display: flex;
}
.nav-list {
  display: flex;
  flex-direction: row-reverse;
  margin: -2px auto 0 auto;
}
.nav-link {
  float: right;
  height: 100%;
  line-height: 100px;
  padding: 0 1rem;
  color: var(--title-color);
  font-weight: var(--font-medium);
  position: relative;
  transition: 0.4s;
}
.nav-toggle {
  height: 32px;
  width: 36px;
  cursor: pointer;
  position: fixed;
  right: 1.5rem;
  top: 2rem;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  background-color: var(--skin-color);
  color: var(--title-color);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.nav-close {
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  cursor: pointer;
  display: none;
}
.nav-link.active-link,
.nav-link:hover {
  color: var(--skin-color);
}
.nav-link.active-link::after,
.nav-link:hover::after {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  background-color: var(--skin-color);
  border-radius: 50%;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  margin: auto;
}
.btn-share {
  position: absolute;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  text-align: center;
  cursor: pointer;
}
.social-share {
  font-size: 1.5rem;
}

/* Main - Home */

.main {
  margin-left: 120px;
}

.home {
  background-image: url(assets/Picture/hero.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
}
.home-container {
  position: relative;
  height: 100%;
  align-items: center;
}

.social {
  position: relative;
  bottom: 4rem;
  grid-template-columns: repeat(2, 240px);
  display: flex;
  gap: 600px;
}

.my-info {
  display: flex;
  column-gap: 1.8rem;
}
.info-item {
  display: flex;
  align-items: center;
}
.info-title,
.info-subtitle {
  font-size: var(--small-font-size);
}
.info-title {
  font-weight: var(--font-medium);
}
.info-icon {
  font-size: 1.8rem;
  color: var(--skin-color);
  margin-right: var(--mb075);
}

.info-icon:hover {
  transform: translateY(-0.25rem);
}

/* Social Follow */
.social-follow {
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 999;
  background: var(--social-box-color);
  padding: 1rem 1.5rem;
  border-radius: var(--mb05);
  /* box-shadow: var(--box-shadow); */
}

.social-follow span {
  color: var(--light-gray);
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--accent-dark);
  color: var(--color-main);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  background: var(--primary-blue);
  box-shadow: var(--hover-shadow);
}

/* .social-icon:hover {
  color: var(--white);
  transform: translateY(-3px);
} */

.home-img {
  display: none;
}
.home-title {
  position: relative;
  top: -5rem;
  font-size: var(--biggest-font-size);
}
.home-subtitle {
  position: relative;
  top: -4.5rem;
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb075);
}
.home-description {
  position: relative;
  top: -3rem;
  max-width: 450px;
  margin-bottom: var(--mb2);
}

.home-button {
  position: relative;
  top: -2rem;
}

/* Second  section start */
/* About */

.about {
  justify-items: center;
}

.about-section {
  align-items: center;
  width: 90%;
  height: 90vh;
  padding: 3rem;
  border-radius: 20px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);

  box-shadow: var(--shadow-heavy);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 100px;
}

/* .second-items::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.06);
  z-index: 0;
} */

.second-content {
  position: relative;
  top: 1rem;
  z-index: 1;
  color: #fff;
  text-align: left;
}
.head {
  color: var(--color-main);
  font-size: var(--mb15);
}

.second-content p {
  font-size: 16px;
  color: #dddddd;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
}

.about-info {
  display: grid;
  grid-template-columns: repeat(3, 130px);
  column-gap: 0.5rem;
  margin-bottom: var(--mb3);
  position: relative;
  top: 2.5rem;
}
.about-box {
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  background-color: var(--box-color);
}
.about-title {
  font-size: var(--mb5);
  font-weight: 300;
  color: var(--white);
}
.about-subtitle {
  color: var(--color-main);
  font-weight: var(--font-bold);
  font-size: 1.5rem;
}

.about-box:hover {
  color: var(--title-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

/* core Section */
.core-section {
  position: relative;
  top: 1rem;
}

.core-title {
  font-size: var(--h3-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb1);
  font-weight: var(--font-medium);
  font-family: var(--body-font);
}

.core-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.core-tag {
  padding: 0.6rem 1.2rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  font-size: var(--small-font-size);
  color: var(--text-secondary);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.core-tag::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.core-tag:hover::before {
  opacity: 1;
}

.core-tag:hover {
  color: var(--title-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

/* Profile Image */
.about-img {
  justify-content: center;
}

.profile-img {
  position: relative;
}

.about-button {
  position: relative;
  top: 2rem;
  left: 4rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
}

/*--------------------- Skills Section --------------------------*/

.skills-heading {
  font-size: var(--h2-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb2);
  position: relative;
  top: 5rem;
}

.skills-container {
  grid-template-columns: repeat(3, 320px);
  column-gap: 4rem;
  justify-content: center;
}

.skill {
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.skill-title {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #ccc;
  margin-bottom: 10px;
}

.skill-bar {
  background-color: #2d2d2d;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.skill-fill {
  background-color: var(--color-main);
  height: 80%;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.skill-fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: var(--shine-x, -100%); /* controlled by GSAP */
  width: 40%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-20deg);
}

.scroll-float {
  overflow: hidden;
}

.scroll-float-text {
  display: inline-block;
  font-size: clamp(1.6rem, 8vw, 10rem);
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
}

.char {
  display: inline-block;
}

/* Main - Qualification */

.qualification-container {
  grid-template-columns: repeat(3, 340px);
  column-gap: 3rem;
  justify-content: center;
}
.qualification-title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb2);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--mb25);
  padding-left: 3rem;
}
.timeline-item:last-child {
  margin-bottom: 0;
}
.timeline-item::before {
  content: "";
  width: 1px;
  position: absolute;
  left: 0.48rem;
  top: 0;
  height: 100%;
  background-color: var(--color-main);
}

.circle-dot {
  position: absolute;
  left: 0;
  top: 0;
  height: 1rem;
  width: 1rem;
  border: 2px solid var(--color-main);
  border-radius: 50%;
  background-color: var(--color-main);
  transition: 0.4s;
}
.timeline-item:hover .circle-dot {
  background-color: var(--body-color);
}
.timeline-title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb025);
}
.timeline-text {
  font-size: var(--smaller-font-size);
  margin-bottom: var(--mb1);
}
.timeline-date {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-size: var(--normal-font-size);
  color: var(--skin-color);
}

/* Work Section */

/* Grid Layout */

.work-section {
  margin-top: 2rem;
}

/* .projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
} */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

/* Project Card */
.project-card {
  height: 60vh;
  padding: 10px;
  border-radius: 20px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-heavy);
}

.project-img {
  width: 100%;
  height: 300px;
  padding: 20px;
  overflow: hidden;
  border-radius: 30px;
  transition: all 0.3s ease;
}
.project-img:hover {
  transform: scale(1.2);
}

.project-title {
  text-align: center;
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.project-view {
  position: relative;
  left: 9rem;
  color: var(--color-main);
  text-decoration: none;
  font-size: var(--normal-font-size);
}

.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content.small {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 15px;
  max-width: 400px; /* smaller size */
  width: 90%;
  text-align: left;
  position: relative;
  box-shadow: var(--shadow-medium);
  animation: scaleIn 0.25s ease;
}

.modal-content.small img {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-color);
}
.modal-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.modal-links .btn {
  padding: 0.6rem 1.2rem;
  background: var(--color-main);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.3s;
}

.modal-links .btn:hover {
  background: var(--accent-hover);
}

/* ----------------Services Section ---------------------------*/

.services-section {
  padding: 5rem 0;
}

.services-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  /* background: var(--gradient-primary); */
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s ease;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-heavy);
  border-color: var(--accent-color);
}

.service-card.featured {
  border: 2px solid var(--accent-color);
  background: linear-gradient(
    135deg,
    var(--card-bg),
    hsla(var(--hue-color), 69%, 61%, 0.05)
  );
}

.featured-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--color-button-bg);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.service-icon {
  width: 70px;
  height: 70px;
  background: var(--color-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.service-icon i {
  font-size: 1.8rem;
  color: white;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.service-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.service-features {
  list-style: none;
  margin-bottom: 2rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: var(--text-muted);
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

.service-price {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.service-price span {
  font-size: 1.5rem;
  color: var(--accent-color);
  font-weight: 700;
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  position: relative;
}

.contact-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2.5rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 15px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-light);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--color-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon i {
  font-size: 1.2rem;
  color: white;
}

.contact-details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.contact-details p {
  color: var(--text-secondary);
}

/* Contact Form */
.contact-form-wrapper {
  width: 95%;
  position: relative;
  right: 0.5rem;
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-medium);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.input-group {
  position: relative;
}

.input-group input,
.input-group select,
.input-group textarea {
  width: 100%;
  padding: 1rem 0 1rem 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--border-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  font-family: inherit;
}

.input-group label {
  position: absolute;
  top: 1rem;
  left: 0;
  color: var(--text-muted);
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-group input:focus ~ label,
.input-group input:valid ~ label,
.input-group select:focus ~ label,
.input-group select:valid ~ label,
.input-group textarea:focus ~ label,
.input-group textarea:valid ~ label {
  top: -0.5rem;
  font-size: 0.8rem;
  color: var(--accent-color);
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  border-bottom-color: var(--accent-color);
}

.input-border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.input-group input:focus ~ .input-border,
.input-group select:focus ~ .input-border,
.input-group textarea:focus ~ .input-border {
  width: 100%;
}

.input-group select option {
  background: var(--card-bg);
  color: var(--text-primary);
}

.input-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-family: inherit;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.submit-btn:active {
  transform: translateY(0);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.submit-btn:hover .btn-icon {
  transform: translateX(5px);
}
/* Footer */

/* ================== Footer ================== */
.footer {
  width: 100%;
  height: 50vh;
  position: relative;
  background: rgba(255, 255, 255, 0.027);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  backdrop-filter: blur(18px) saturate(150%);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0 0;
  padding: 3rem 2rem 2rem;
  text-align: center;
  margin-top: 3rem;
  overflow: hidden;
  z-index: 1;
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
}

/* Layout */
.footer-layout {
  position: relative;
  top: 7rem;
}

/* Branding left-center */
.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transform: translateY(-50%);
}

.footer-logo {
  width: 280px;
  object-fit: contain;
}

.footer-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 0.8rem;
}

.footer-social a {
  color: var(--text-secondary);
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.footer-social a:hover {
  color: var(--accent-color);
  transform: translateY(-3px);
}

.footer-text {
  position: relative;
  top: 4rem;
}

/* Quote top */
.footer-quote {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #00bfff, #8a2be2, #00ffc8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-legal {
  font-size: 0.9rem;
  color: var(--text-muted);
  position: relative;
  top: 3rem;
}

/* Leaves decoration */
.footer-decor {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 200px;
  opacity: 0.12;
  pointer-events: none;
  user-select: none;
  z-index: -1;
  filter: blur(2px);
}

/* ------------- */
/*  ----------------------*/

/* Media Queries */

@media screen and (max-width: 1408px) {
  .container {
    margin-left: var(--mb25);
    margin-right: var(--mb25);
  }
}

@media screen and (max-width: 1216px) {
  .about-container {
    column-gap: 2.5rem;
  }
  .work-container {
    grid-template-columns: repeat(2, 330px);
    gap: 3rem;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    margin-left: var(--mb15);
    margin-right: var(--mb15);
  }
  .sidebar {
    width: 100%;
    z-index: 999;
    transform: translateX(-100%);
  }
  .nav-logo,
  .btn-share {
    display: none;
  }
  .nav-menu {
    height: 100%;
    width: 100%;
    transform: rotate(0deg) translateX(0);
    display: flex;
    justify-content: center;
  }
  .nav-list {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    padding: 1rem 0;
    line-height: 1.5;
  }
  .nav-link.active-link::after,
  .nav-link:hover::after {
    bottom: 0;
  }
  .nav-close {
    display: block;
  }
  .nav-toggle {
    display: flex;
  }

  .main {
    margin-left: 0;
  }

  .about-container {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
  .about-img {
    width: 350px;
  }
  .about-data {
    text-align: center;
  }
  .about-info {
    justify-content: center;
  }
  .about-box {
    padding: 0.75rem 0.5rem;
  }

  .qualification-container {
    grid-template-columns: repeat(2, 290px);
  }
  .skills-container {
    grid-template-columns: 340px 300px;
  }

  .services-container {
    grid-template-columns: repeat(3, 220px);
  }

  .portfolio-item-details {
    margin-bottom: var(--mb15);
  }
  .details-info li {
    margin-bottom: var(--mb05);
  }
  .details-title {
    margin-bottom: var(--mb075);
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr; /* stack into single column on tablets too */
    gap: 2rem;
  }

  .contact-form {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .social-follow {
    display: none;
  }

  .about-section {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  .about-img img {
    width: 60%;
  }
  .about-button {
    display: none;
  }
  .second-items {
    width: 100%;
    height: auto;
    max-width: 420px;
    text-align: center;
    padding: 0.5rem;
    overflow: hidden;
  }

  .qualification-container {
    grid-template-columns: 290px;
    row-gap: 3rem;
  }
  .skills-container {
    grid-template-columns: 300px;
    row-gap: 3rem;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-card {
    width: 80%;
    height: auto;
    min-height: 220px; /* Optional: set a reasonable minimum */
    padding: 10px 0; /* Reduce vertical padding */
    margin-bottom: 1.5rem; /* Space between cards */
  }
  .project-img {
    width: 400px;
  }

  .services-container {
    grid-template-columns: 1fr; /* ✅ one column */
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .service-card {
    text-align: center;
    padding: 1.5rem;
    border: 1px solid var(--box-color);
    border-radius: 12px;
    background: var(--body-color);
  }

  .contact-container {
    grid-template-columns: 360px;
    row-gap: 3rem;
  }
  .contact-content {
    display: grid;
    grid-template-columns: 1fr; /* stack into single column */
    gap: 2rem;
    padding: 1rem;
  }

  .contact-info {
    text-align: center; /* center icons/info */
  }

  .contact-form {
    width: 100%; /* full width form */
  }

  .contact-form input,
  .contact-form select,
  .contact-form textarea {
    width: 100%;
    font-size: 14px;
  }

  .footer-container {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .footer-nav {
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }
}

@media screen and (max-width: 576px) {
  .nav-toggle {
    right: initial;
    left: 1.5rem;
  }
  .home {
    background-image: none;
    height: initial;
    align-items: initial;
    padding: 7rem 0 2rem;
  }
  .home-container {
    row-gap: 2rem;
  }
  .home-img {
    display: block;
    width: 250px;
    justify-self: center;
  }
  .my-info {
    display: none;
  }
  .home-social {
    left: initial;
    right: -1rem;
    flex-direction: column;
    row-gap: 3.5rem;
  }
  .home-social-follow {
    font-size: var(--smaller-font-size);
    transform: rotate(90deg);
  }
  .home-social-links {
    flex-direction: column;
    row-gap: 0.25rem;
  }
  .home-social-link {
    font-size: var(--normal-font-size);
  }

  .about-info {
    grid-template-columns: repeat(3, 1fr);
  }

  .services-modal-content {
    padding: 4.5rem 1.5rem 2.5rem;
  }
  .services-modal-description {
    padding: 0;
  }

  .work-container,
  .contact-container {
    grid-template-columns: 300px;
  }
}

@media screen and (max-width: 350px) {
  .container {
    margin-left: var(--mb1);
    margin-left: var(--mb1);
  }
  .home-img {
    width: 200px;
  }
  .home-title {
    font-size: var(--h1-font-size);
  }
  .home-subtitle {
    font-size: var(--normal-font-size);
  }

  .about-info {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.5rem;
  }
  .work-container,
  .skills-container,
  .qualification-container {
    grid-template-columns: 1fr;
  }
  .services-container {
    grid-template-columns: max-content;
  }
}

```
