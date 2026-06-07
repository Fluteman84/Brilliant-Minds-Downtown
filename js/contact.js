const scriptURL = "https://script.google.com/macros/s/AKfycbzYgdPRawza2Z98oZphvzVaSPVVlh5hFvmJsMo86SNp7oUZ3AmV7Ja5wrd2Edv5qP21/exec";

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
  const name = (formData.get("name") || "").trim();
  const phone = (formData.get("phone") || "").trim();
  const course = (formData.get("course") || "").trim();

  if (!name || !phone || !course) {
    messageBox.textContent = "Please fill in name, phone, and course.";
    return;
  }

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: formData
    });

    messageBox.textContent = "Enquiry submitted successfully.";
    form.reset();

    if (selectedCourse) {
      courseInput.value = selectedCourse;
    }
  } catch (error) {
    console.error("Error sending enquiry:", error);
    messageBox.textContent = "Could not submit enquiry. Please try again.";
  }
});
