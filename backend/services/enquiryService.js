const { getRows, appendRow, getNextId } = require("./sheetsService");

const SHEET_NAME = "ENQUIRIES";

async function saveEnquiry(enquiryData) {
  const rows = await getRows(SHEET_NAME);
  const dataRows = rows.slice(1);
  const newId = getNextId(dataRows);

  const rowValues = [
    String(newId),
    enquiryData.name,
    enquiryData.phone,
    enquiryData.email || "",
    enquiryData.course,
    enquiryData.message || "",
    new Date().toISOString()
  ];

  await appendRow(SHEET_NAME, rowValues);

  return {
    id: String(newId),
    message: "Enquiry submitted successfully."
  };
}

async function getEnquiries() {
  const rows = await getRows(SHEET_NAME);
  const dataRows = rows.slice(1);

  return dataRows
    .filter((row) => row[0])
    .map((row) => ({
      ENQUIRY_ID: row[0] || "",
      NAME: row[1] || "",
      PHONE: row[2] || "",
      EMAIL: row[3] || "",
      COURSE_NAME: row[4] || "",
      MESSAGE: row[5] || "",
      CREATED_AT: row[6] || ""
    }));
}

module.exports = {
  saveEnquiry,
  getEnquiries
};
