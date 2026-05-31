const { getSheetsClient } = require("../config/sheets");

const spreadsheetId = process.env.GOOGLE_SHEET_ID;

function ensureSpreadsheetId() {
  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID is missing in .env");
  }
}

async function getRows(sheetName) {
  ensureSpreadsheetId();
  const sheets = await getSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A:Z`
  });

  return response.data.values || [];
}

async function appendRow(sheetName, rowValues) {
  ensureSpreadsheetId();
  const sheets = await getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [rowValues]
    }
  });
}

async function deleteRow(sheetName, rowNumber) {
  ensureSpreadsheetId();
  const sheets = await getSheetsClient();

  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });

  const targetSheet = spreadsheet.data.sheets.find(
    (sheet) => sheet.properties.title === sheetName
  );

  if (!targetSheet) {
    throw new Error(`Sheet "${sheetName}" not found.`);
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: targetSheet.properties.sheetId,
              dimension: "ROWS",
              startIndex: rowNumber - 1,
              endIndex: rowNumber
            }
          }
        }
      ]
    }
  });
}

function getNextId(dataRows) {
  const ids = dataRows
    .map((row) => Number(row[0]))
    .filter((value) => !Number.isNaN(value));

  if (!ids.length) {
    return 1;
  }

  return Math.max(...ids) + 1;
}

module.exports = {
  getRows,
  appendRow,
  deleteRow,
  getNextId
};
