const express = require("express");
const { validateAdmin } = require("../services/adminService");
const { addCourse, deleteCourseById } = require("../services/courseService");
const { getEnquiries } = require("../services/enquiryService");

const router = express.Router();

router.post("/login", async (request, response) => {
  const { username, password } = request.body;

  if (!username || !password) {
    return response.status(400).json({
      message: "Username and password are required."
    });
  }

  try {
    const isValid = await validateAdmin(username, password);
    response.json({
      success: isValid,
      fullName: isValid ? username : ""
    });
  } catch (error) {
    console.error("Error during admin login:", error.message);
    response.status(500).json({ message: "Could not login." });
  }
});

router.get("/enquiries", async (request, response) => {
  try {
    const enquiries = await getEnquiries();
    response.json(enquiries);
  } catch (error) {
    console.error("Error loading enquiries:", error.message);
    response.status(500).json({ message: "Could not load enquiries." });
  }
});

router.post("/course", async (request, response) => {
  const { title, description, duration } = request.body;

  if (!title || !description || !duration) {
    return response.status(400).json({
      message: "Title, description, and duration are required."
    });
  }

  try {
    const newCourse = await addCourse(request.body);
    response.json({
      message: "Course added successfully.",
      course: newCourse
    });
  } catch (error) {
    console.error("Error adding admin course:", error.message);
    response.status(500).json({ message: "Could not add course." });
  }
});

router.delete("/course/:id", async (request, response) => {
  try {
    const deleted = await deleteCourseById(request.params.id);

    if (!deleted) {
      return response.status(404).json({ message: "Course not found." });
    }

    response.json({ message: "Course deleted successfully." });
  } catch (error) {
    console.error("Error deleting admin course:", error.message);
    response.status(500).json({ message: "Could not delete course." });
  }
});

module.exports = router;
