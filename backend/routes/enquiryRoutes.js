const express = require("express");
const { saveEnquiry } = require("../services/enquiryService");

const router = express.Router();

router.post("/", async (request, response) => {
  const { name, phone, course } = request.body;

  if (!name || !phone || !course) {
    return response.status(400).json({
      message: "Name, phone, and course are required."
    });
  }

  try {
    const result = await saveEnquiry(request.body);
    response.json({ message: result.message });
  } catch (error) {
    console.error("Error saving enquiry:", error.message);
    response.status(500).json({ message: "Could not save enquiry." });
  }
});

module.exports = router;
