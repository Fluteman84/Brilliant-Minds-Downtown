const API_BASE_URL = "http://localhost:3000/api";

const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("contactMessage");
const courseInput = document.getElementById("courseInput");

const searchParams = new URLSearchParams(window.location.search);
const selectedCourse = searchParams.get("course");

if (selectedCourse && courseInput) {
  courseInput.value = selectedCourse;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  messageBox.textContent = "";

  const formData = new FormData(form);
  const payload = {
    name: formData.get("name").trim(),
    phone: formData.get("phone").trim(),
    email: formData.get("email").trim(),
    course: formData.get("course").trim(),
    message: formData.get("message").trim()
  };

  if (!payload.name || !payload.phone || !payload.course) {
    messageBox.textContent = "Please fill in name, phone, and course.";
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    messageBox.textContent = result.message;

    if (response.ok) {
      form.reset();
      if (selectedCourse) {
        courseInput.value = selectedCourse;
      }
    }
  } catch (error) {
    console.error("Error sending enquiry:", error);
    messageBox.textContent = "Could not submit enquiry.";
  }
});
