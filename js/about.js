const mentors = [
  {
    name: "Ananya Sen",
    subject: "Mathematics Mentor",
    image: "https://i.pravatar.cc/500?img=32"
  },
  {
    name: "Arindam Roy",
    subject: "Science Mentor",
    image: "https://i.pravatar.cc/500?img=12"
  },
  {
    name: "Ritika Das",
    subject: "English Mentor",
    image: "https://i.pravatar.cc/500?img=47"
  },
  {
    name: "Sagnik Paul",
    subject: "Coding Mentor",
    image: "https://i.pravatar.cc/500?img=15"
  },
  {
    name: "Moumita Ghosh",
    subject: "Vocal Music Mentor",
    image: "https://i.pravatar.cc/500?img=44"
  },
  {
    name: "Soumik Dey",
    subject: "Chess Mentor",
    image: "https://i.pravatar.cc/500?img=19"
  },
  {
    name: "Piyali Mukherjee",
    subject: "Recitation Mentor",
    image: "https://i.pravatar.cc/500?img=28"
  },
  {
    name: "Debarati Saha",
    subject: "Career Guidance Mentor",
    image: "https://i.pravatar.cc/500?img=36"
  },
  {
    name: "Abhik Chatterjee",
    subject: "Guitar Mentor",
    image: "https://i.pravatar.cc/500?img=58"
  },
  {
    name: "Tania Bose",
    subject: "Keyboard Mentor",
    image: "https://i.pravatar.cc/500?img=25"
  }
];

const track = document.getElementById("mentorCarouselTrack");
const prevButton = document.getElementById("mentorPrevButton");
const nextButton = document.getElementById("mentorNextButton");

let currentIndex = 0;
let autoSlide;

function getCardsPerView() {
  if (window.innerWidth <= 640) {
    return 1;
  }

  if (window.innerWidth <= 900) {
    return 2;
  }

  return 4;
}

function renderMentors() {
  track.innerHTML = mentors
    .map((mentor) => `
      <article class="mentor-card">
        <img src="${mentor.image}" alt="${mentor.name}">
        <div class="mentor-card-body">
          <h3>${mentor.name}</h3>
          <p class="mentor-subject">${mentor.subject}</p>
        </div>
      </article>
    `)
    .join("");

  updateCarouselPosition();
}

function updateCarouselPosition() {
  const cards = track.querySelectorAll(".mentor-card");

  if (!cards.length) {
    return;
  }

  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, mentors.length - cardsPerView);
  currentIndex = Math.min(currentIndex, maxIndex);

  const cardWidth = cards[0].offsetWidth;
  const gap = 22;
  const moveBy = currentIndex * (cardWidth + gap);
  track.style.transform = `translateX(-${moveBy}px)`;
}

function nextSlide() {
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, mentors.length - cardsPerView);
  currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
  updateCarouselPosition();
}

function prevSlide() {
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, mentors.length - cardsPerView);
  currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
  updateCarouselPosition();
}

function startAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3200);
}

nextButton.addEventListener("click", () => {
  nextSlide();
  startAutoSlide();
});

prevButton.addEventListener("click", () => {
  prevSlide();
  startAutoSlide();
});

window.addEventListener("resize", updateCarouselPosition);
track.addEventListener("mouseenter", () => clearInterval(autoSlide));
track.addEventListener("mouseleave", startAutoSlide);

renderMentors();
startAutoSlide();
