const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config({
  path: path.join(__dirname, ".env")
});

const courseRoutes = require("./routes/courseRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..")));

app.get("/api/health", (request, response) => {
  response.json({ message: "Google Sheets backend is running." });
});

app.use("/api/courses", courseRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
