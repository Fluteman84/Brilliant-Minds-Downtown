const API_BASE_URL = "http://localhost:3000/api";

async function loadHomeCourses() {
  const list = document.getElementById("homeCourseList");

  if (!list) {
    return;
  }

  list.innerHTML = "<p>Loading courses...</p>";

  try {
    const response = await fetch(`${API_BASE_URL}/courses`);
    if (!response.ok) {
      throw new Error("Could not load courses");
    }
    const courses = await response.json();
    list.innerHTML = "";

    courses.slice(0, 4).forEach((course) => {
      const imageUrl = course.IMAGE_URL || "images/main-bg.webp";
      const card = document.createElement("article");
      card.className = "course-card";
      card.innerHTML = `
        <img src="${imageUrl}" alt="${course.COURSE_TITLE}">
        <div class="course-content">
          <h3>${course.COURSE_TITLE}</h3>
          <p>${course.DESCRIPTION}</p>
          <div class="course-meta">
            <span class="duration-badge">${course.DURATION}</span>
            <a href="contact.html?course=${encodeURIComponent(course.COURSE_TITLE)}" class="button button-outline">Enquiry</a>
          </div>
        </div>
      `;
      list.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading home courses:", error);
    list.innerHTML = "<p>Courses could not be loaded.</p>";
  }
}

loadHomeCourses();
