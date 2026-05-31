const express = require("express");
const {
  getCourses,
  addCourse,
  deleteCourseById
} = require("../services/courseService");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const courses = await getCourses();
    response.json(courses);
  } catch (error) {
    console.error("Error loading courses:", error.message);
    response.status(500).json({ message: "Could not load courses." });
  }
});

router.post("/", async (request, response) => {
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
    console.error("Error adding course:", error.message);
    response.status(500).json({ message: "Could not add course." });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deleted = await deleteCourseById(request.params.id);

    if (!deleted) {
      return response.status(404).json({ message: "Course not found." });
    }

    response.json({ message: "Course deleted successfully." });
  } catch (error) {
    console.error("Error deleting course:", error.message);
    response.status(500).json({ message: "Could not delete course." });
  }
});

module.exports = router;
