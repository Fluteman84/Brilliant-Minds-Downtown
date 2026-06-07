const CONTACT_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzYgdPRawza2Z98oZphvzVaSPVVlh5hFvmJsMo86SNp7oUZ3AmV7Ja5wrd2Edv5qP21/exec";

const courses = [
  {
    title: "JEE",
    duration: "1 Year / 2 Years",
    fees: "From INR 35,000",
    features: ["Concept mastery", "Mock tests", "Problem-solving drills"],
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "NEET",
    duration: "1 Year / 2 Years",
    fees: "From INR 35,000",
    features: ["Physics, Chemistry, Biology", "Revision plans", "Exam strategy"],
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "GATE CSE",
    duration: "6 Months / 12 Months",
    fees: "From INR 28,000",
    features: ["Core concepts", "Practice sets", "Revision mentorship"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "SSC",
    duration: "6 Months / 12 Months",
    fees: "From INR 18,000",
    features: ["Quantitative aptitude", "Reasoning", "English practice"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Banking",
    duration: "6 Months / 12 Months",
    fees: "From INR 20,000",
    features: ["Speed maths", "DI practice", "Mock interview prep"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Railway",
    duration: "6 Months / 12 Months",
    fees: "From INR 18,000",
    features: ["General studies", "Practice papers", "Time management"],
    image:
      "https://images.unsplash.com/photo-1501706362039-c6e80948f9c0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "WBCS",
    duration: "8 Months / 12 Months",
    fees: "From INR 32,000",
    features: ["Current affairs", "Mock interviews", "Answer writing"],
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80"
  }
];

const faculty = [
  {
    name: "Ananya Sen",
    qualification: "M.Sc Mathematics",
    experience: "12 Years Experience",
    subject: "Mathematics & Aptitude",
    image: "https://i.pravatar.cc/600?img=32",
    bio: "Focuses on concept clarity, exam practice, and strong fundamentals."
  },
  {
    name: "Arindam Roy",
    qualification: "M.Sc Physics",
    experience: "10 Years Experience",
    subject: "Physics",
    image: "https://i.pravatar.cc/600?img=12",
    bio: "Helps learners connect theory with real exam patterns."
  },
  {
    name: "Ritika Das",
    qualification: "M.Sc Chemistry",
    experience: "9 Years Experience",
    subject: "Chemistry",
    image: "https://i.pravatar.cc/600?img=47",
    bio: "Builds confidence with step-by-step concept reinforcement."
  },
  {
    name: "Sagnik Paul",
    qualification: "B.Tech CSE",
    experience: "8 Years Experience",
    subject: "Coding & GATE",
    image: "https://i.pravatar.cc/600?img=15",
    bio: "Guides students through logic, programming, and problem solving."
  },
  {
    name: "Moumita Ghosh",
    qualification: "Vocal Training Diploma",
    experience: "11 Years Experience",
    subject: "Vocal Music",
    image: "https://i.pravatar.cc/600?img=44",
    bio: "Encourages confidence, rhythm, and graceful expression."
  },
  {
    name: "Soumik Dey",
    qualification: "Strategic Games Coach",
    experience: "7 Years Experience",
    subject: "Chess & Strategy",
    image: "https://i.pravatar.cc/600?img=19",
    bio: "Builds focus, planning skills, and disciplined thinking."
  }
];

const studyMaterials = [
  {
    icon: "PDF",
    title: "Printable Notes",
    description: "Topic-wise summaries designed for quick revision and better recall."
  },
  {
    icon: "PYQ",
    title: "Previous Year Papers",
    description: "Practice papers that help students understand question patterns."
  },
  {
    icon: "MCQ",
    title: "Objective Practice Sets",
    description: "Daily and weekly exercises for competitive exam preparation."
  },
  {
    icon: "VIP",
    title: "Doubt-Support Sheets",
    description: "Structured sheets for students who need extra reinforcement."
  }
];

const news = [
  {
    tag: "Admission",
    title: "New session admission is now open for all core programs.",
    date: "June 2026",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
  },
  {
    tag: "Exams",
    title: "Monthly diagnostic tests begin from the first week of July.",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
  },
  {
    tag: "Events",
    title: "Annual talent showcase will feature music, chess, and recitation.",
    date: "August 2026",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  },
  {
    tag: "Important Dates",
    title: "Course orientation for new students will be held every Sunday.",
    date: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
  }
];

const testimonials = [
  {
    name: "Rohit Das",
    exam: "JEE Aspirant",
    image: "https://i.pravatar.cc/400?img=18",
    quote:
      "The teaching style is very clear and calm. I finally started understanding difficult topics without stress."
  },
  {
    name: "Sanjana Roy",
    exam: "NEET Student",
    image: "https://i.pravatar.cc/400?img=45",
    quote:
      "The mentors kept me consistent with weekly tests and revision. The progress became visible very quickly."
  },
  {
    name: "Arjun Mukherjee",
    exam: "GATE CSE",
    image: "https://i.pravatar.cc/400?img=8",
    quote:
      "The structured approach and doubt sessions made preparation feel manageable and focused."
  },
  {
    name: "Maya Ghosh",
    exam: "Parent",
    image: "https://i.pravatar.cc/400?img=5",
    quote:
      "A reliable institute with a very professional atmosphere. We saw real confidence grow in our child."
  }
];

const gallery = [
  {
    caption: "Classroom learning and discussion",
    span: "span-6",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
  },
  {
    caption: "Guided revision session",
    span: "span-3",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
  },
  {
    caption: "Student success celebration",
    span: "span-3",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  },
  {
    caption: "Interactive problem solving",
    span: "span-4",
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1400&q=80"
  },
  {
    caption: "Music and creativity",
    span: "span-4",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    caption: "Focused mentoring",
    span: "span-4",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
  }
];

const heroParallax = document.querySelector(".hero-section");
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navShell = document.querySelector(".nav-shell");
const primaryNav = document.getElementById("primaryNav");

const coursesGrid = document.getElementById("coursesGrid");
const facultyGrid = document.getElementById("facultyGrid");
const materialsGrid = document.getElementById("materialsGrid");
const newsGrid = document.getElementById("newsGrid");
const galleryGrid = document.getElementById("galleryGrid");

const testimonialTrack = document.getElementById("testimonialTrack");
const testimonialPrev = document.getElementById("testimonialPrev");
const testimonialNext = document.getElementById("testimonialNext");

const contactForm = document.getElementById("homeContactForm");
const contactMessage = document.getElementById("homeContactMessage");
const homeCourseInput = document.getElementById("homeCourseInput");
const newsletterButton = document.querySelector(".newsletter-form button");
const newsletterInput = document.querySelector(".newsletter-form input");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

const searchParams = new URLSearchParams(window.location.search);
const selectedCourse = searchParams.get("course");
if (selectedCourse && homeCourseInput) {
  homeCourseInput.value = selectedCourse;
}

function renderCourses() {
  if (!coursesGrid) {
    return;
  }

  coursesGrid.innerHTML = courses
    .map(
      (course, index) => `
        <article class="course-card reveal" style="--delay:${index * 60}ms">
          <figure>
            <img src="${course.image}" alt="${course.title} course" loading="lazy" decoding="async">
          </figure>
          <div class="course-card-body">
            <h3>${course.title}</h3>
            <div class="course-meta">
              <span class="pill">${course.duration}</span>
              <span class="pill">${course.fees}</span>
            </div>
            <ul class="course-list">
              ${course.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
            <div style="margin-top:18px;">
              <a class="button button-outline" href="#contact">Learn More</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFaculty() {
  if (!facultyGrid) {
    return;
  }

  facultyGrid.innerHTML = faculty
    .map(
      (person, index) => `
        <article class="faculty-card reveal" style="--delay:${index * 50}ms">
          <div class="faculty-photo">
            <img src="${person.image}" alt="${person.name}" loading="lazy" decoding="async">
            <div class="faculty-overlay">
              <strong>${person.subject}</strong>
              <p>${person.bio}</p>
            </div>
          </div>
          <div class="faculty-card-body">
            <h3>${person.name}</h3>
            <div class="faculty-meta">
              <span>${person.qualification}</span>
              <span>${person.experience}</span>
              <span>${person.subject}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderMaterials() {
  if (!materialsGrid) {
    return;
  }

  materialsGrid.innerHTML = studyMaterials
    .map(
      (item, index) => `
        <article class="material-card reveal" style="--delay:${index * 50}ms">
          <div class="material-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div style="margin-top:18px;">
            <a class="button button-secondary" href="#contact">Request Access</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderNews() {
  if (!newsGrid) {
    return;
  }

  newsGrid.innerHTML = news
    .map(
      (item, index) => `
        <article class="news-card reveal" style="--delay:${index * 60}ms">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
          <div class="news-card-body">
            <span class="news-tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.date}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  if (!galleryGrid) {
    return;
  }

  galleryGrid.innerHTML = gallery
    .map(
      (item, index) => `
        <button
          type="button"
          class="gallery-item ${item.span} reveal"
          style="--delay:${index * 40}ms"
          data-full="${item.image}"
          data-caption="${item.caption}"
        >
          <img src="${item.image}" alt="${item.caption}" loading="lazy" decoding="async">
          <span class="gallery-caption">${item.caption}</span>
        </button>
      `
    )
    .join("");
}

function renderTestimonials() {
  if (!testimonialTrack) {
    return;
  }

  testimonialTrack.innerHTML = testimonials
    .map(
      (item) => `
        <article class="testimonial-slide">
          <img class="testimonial-photo" src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">
          <div class="testimonial-body">
            <strong>${item.name}</strong>
            <p>${item.quote}</p>
            <p><strong>${item.exam}</strong></p>
          </div>
        </article>
      `
    )
    .join("");
}

function setupStickyHeader() {
  const onScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);

    const heroOffset = Math.min(window.scrollY * 0.08, 56);
    document.documentElement.style.setProperty("--hero-parallax", `${heroOffset}px`);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupMobileNav() {
  if (!navToggle || !navShell) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navShell.closest(".site-header")?.classList.toggle("nav-open");
    document.body.classList.toggle("menu-open");
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        navToggle.setAttribute("aria-expanded", "false");
        siteHeader.classList.remove("nav-open");
        document.body.classList.remove("menu-open");
      }
    });
  });
}

function setupRevealObserver() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  elements.forEach((element) => observer.observe(element));
}

function animateCounter(element) {
  const rawValue = Number(element.dataset.counter || 0);
  const suffix = element.dataset.suffix || "";
  const prefix = element.dataset.prefix || "";
  const duration = 1400;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(rawValue * eased);
    element.textContent = `${prefix}${value.toLocaleString()}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  const seen = new WeakSet();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupTestimonials() {
  if (!testimonialTrack) {
    return;
  }

  let index = 0;
  let timer;
  const slides = () => Array.from(testimonialTrack.children);

  function update() {
    testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() {
    const total = slides().length;
    index = (index + 1) % total;
    update();
  }

  function prev() {
    const total = slides().length;
    index = (index - 1 + total) % total;
    update();
  }

  function start() {
    stop();
    timer = window.setInterval(next, 4500);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
  }

  testimonialNext?.addEventListener("click", () => {
    next();
    start();
  });

  testimonialPrev?.addEventListener("click", () => {
    prev();
    start();
  });

  testimonialTrack.addEventListener("mouseenter", stop);
  testimonialTrack.addEventListener("mouseleave", start);
  update();
  start();
}

function setupLightbox() {
  if (!lightbox || !lightboxImage || !lightboxCaption || !lightboxClose) {
    return;
  }

  galleryGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-full]");
    if (!button) {
      return;
    }

    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.dataset.caption || "Gallery image";
    lightboxCaption.textContent = button.dataset.caption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  });

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function setupContactForm() {
  if (!contactForm || !contactMessage) {
    return;
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    contactMessage.textContent = "";

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").trim();
    const phone = (formData.get("phone") || "").trim();
    const course = (formData.get("course") || "").trim();
    const message = (formData.get("message") || "").trim();

    if (!name || !phone || !course || !message) {
      contactMessage.textContent = "Please fill in all required fields.";
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      await fetch(CONTACT_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      contactMessage.textContent = "Enquiry submitted successfully.";
      contactForm.reset();
      if (selectedCourse && homeCourseInput) {
        homeCourseInput.value = selectedCourse;
      }
    } catch (error) {
      console.error("Contact form error:", error);
      contactMessage.textContent = "Could not submit enquiry. Please try again.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText || "Submit Enquiry";
      }
    }
  });
}

function setupNewsletter() {
  if (!newsletterButton || !newsletterInput) {
    return;
  }

  newsletterButton.addEventListener("click", () => {
    const value = newsletterInput.value.trim();
    if (!value) {
      newsletterInput.focus();
      return;
    }

    newsletterInput.value = "";
    newsletterButton.textContent = "Subscribed";
    window.setTimeout(() => {
      newsletterButton.textContent = "Subscribe";
    }, 1600);
  });
}

renderCourses();
renderFaculty();
renderMaterials();
renderNews();
renderGallery();
renderTestimonials();
setupStickyHeader();
setupMobileNav();
setupRevealObserver();
setupCounters();
setupTestimonials();
setupLightbox();
setupContactForm();
setupNewsletter();
