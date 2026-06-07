const scriptURL = "https://script.google.com/macros/s/AKfycbzVDYgk62ttXbcIX1FpV36Q3ljyV4RTnLkog6-nmnQ/dev";

const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("contactMessage");
const courseInput = document.getElementById("courseInput");
const submitButton = form.querySelector('button[type="submit"]');

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
  const email = (formData.get("email") || "").trim();
  const course = (formData.get("course") || "").trim();
  const message = (formData.get("message") || "").trim();

  if (!name || !phone || !course) {
    messageBox.textContent = "Please fill in name, phone, and course.";
    return;
  }

  formData.set("name", name);
  formData.set("phone", phone);
  formData.set("email", email);
  formData.set("course", course);
  formData.set("message", message);

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
  }

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });

    messageBox.textContent = "Enquiry submitted successfully.";
    //form.reset();

    if (selectedCourse && courseInput) {
      courseInput.value = selectedCourse;
    }
  } catch (error) {
    console.error("Error sending enquiry:", error);
    messageBox.textContent = "Could not submit enquiry. Please try again.";
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Submit Enquiry";
    }
  }
});
