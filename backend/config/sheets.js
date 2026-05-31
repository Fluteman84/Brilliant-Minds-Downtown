const path = require("path");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const credentialsFile =
  process.env.GOOGLE_CREDENTIALS_FILE || "credentials.json";

async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, "..", credentialsFile),
    scopes: SCOPES
  });

  const authClient = await auth.getClient();

  return google.sheets({
    version: "v4",
    auth: authClient
  });
}

module.exports = {
  getSheetsClient
};
