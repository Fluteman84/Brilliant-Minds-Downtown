const API_BASE_URL = "http://localhost:3000/api";

const adminUser = JSON.parse(localStorage.getItem("bm_admin_user") || "null");
const welcomeText = document.getElementById("dashboardWelcomeText");
const coursesTableBody = document.getElementById("coursesTableBody");
const dashboardMessage = document.getElementById("dashboardMessage");
const logoutButton = document.getElementById("logoutButton");

if (!adminUser) {
  window.location.href = "admin.html";
} else {
  welcomeText.textContent = `Welcome, ${adminUser.fullName || adminUser.username}`;

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("bm_admin_user");
    window.location.href = "admin.html";
  });
}

async function loadCoursesTable() {
  try {
    const response = await fetch(`${API_BASE_URL}/courses`);

    if (!response.ok) {
      throw new Error("Could not load courses");
    }

    const courses = await response.json();
    coursesTableBody.innerHTML = "";

    if (!courses.length) {
      coursesTableBody.innerHTML = `
        <tr>
          <td colspan="5">No course records found.</td>
        </tr>
      `;
      return;
    }

    courses.forEach((course) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${course.COURSE_ID || "-"}</td>
        <td>${course.COURSE_TITLE || "-"}</td>
        <td>${course.DESCRIPTION || "-"}</td>
        <td>${course.DURATION || "-"}</td>
        <td>${course.IMAGE_URL || "-"}</td>
      `;
      coursesTableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error loading courses:", error);
    dashboardMessage.textContent = "Could not fetch courses from Google Spreadsheet.";
    coursesTableBody.innerHTML = `
      <tr>
        <td colspan="5">Course data unavailable.</td>
      </tr>
    `;
  }
}

if (adminUser) {
  loadCoursesTable();
}
