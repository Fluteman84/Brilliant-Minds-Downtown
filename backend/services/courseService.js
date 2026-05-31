const {
  getRows,
  appendRow,
  deleteRow,
  getNextId
} = require("./sheetsService");

const SHEET_NAME = "COURSES";

function mapCourse(row) {
  return {
    COURSE_ID: row[0] || "",
    COURSE_TITLE: row[1] || "",
    DESCRIPTION: row[2] || "",
    DURATION: row[3] || "",
    IMAGE_URL: row[4] || ""
  };
}

async function getCourses() {
  const rows = await getRows(SHEET_NAME);
  const dataRows = rows.slice(1);

  return dataRows.filter((row) => row[0]).map(mapCourse);
}

async function addCourse(courseData) {
  const rows = await getRows(SHEET_NAME);
  const dataRows = rows.slice(1);
  const newId = getNextId(dataRows);

  const rowValues = [
    String(newId),
    courseData.title,
    courseData.description,
    courseData.duration,
    courseData.imageUrl ||
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
  ];

  await appendRow(SHEET_NAME, rowValues);

  return mapCourse(rowValues);
}

async function deleteCourseById(courseId) {
  const rows = await getRows(SHEET_NAME);
  const dataRows = rows.slice(1);
  const courseIndex = dataRows.findIndex((row) => row[0] === String(courseId));

  if (courseIndex === -1) {
    return false;
  }

  const realSheetRowNumber = courseIndex + 2;
  await deleteRow(SHEET_NAME, realSheetRowNumber);
  return true;
}

module.exports = {
  getCourses,
  addCourse,
  deleteCourseById
};
