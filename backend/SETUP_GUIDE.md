# Google Sheets Backend Setup Guide

This backend uses Google Sheets as the database.

## 1. Create the Google Spreadsheet

Create one Google Spreadsheet with these sheet tabs:

### `COURSES`

Header row:

```text
ID | Course Name | Description | Duration | Image URL
```

### `ENQUIRIES`

Header row:

```text
ID | Name | Phone | Email | Course | Message | Created At
```

### `ADMIN_USERS`

This tab can remain empty for now. Admin login is currently handled from `.env`.

## 2. Create Google Cloud project

1. Open Google Cloud Console
2. Create a project
3. Enable `Google Sheets API`
4. Go to `APIs & Services > Credentials`
5. Create `Service Account`
6. Create a JSON key
7. Download the JSON key file

## 3. Set up `credentials.json`

Open:

- [backend/credentials.json](/c:/ALL/VSCODE%20practice/Cpp/brilliant-minds-downtown-simple-site/backend/credentials.json:1)

Replace the placeholder values with the contents of the downloaded Google service account JSON file.

## 4. Share the spreadsheet with service account

Copy the `client_email` from `credentials.json`.

Open your Google Spreadsheet and share it with that email address using `Editor` access.

This step is required or the backend will not be able to read/write data.

## 5. Set up `.env`

Open:

- [backend/.env](/c:/ALL/VSCODE%20practice/Cpp/brilliant-minds-downtown-simple-site/backend/.env:1)

Set:

```env
PORT=3000
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_CREDENTIALS_FILE=credentials.json
ADMIN_USERNAME=BMadmin
ADMIN_PASSWORD=Animesh@1234
```

### How to find `GOOGLE_SHEET_ID`

If your sheet URL is:

```text
https://docs.google.com/spreadsheets/d/1ABCXYZ1234567890/edit#gid=0
```

Then the sheet ID is:

```text
1ABCXYZ1234567890
```

## 6. Install packages

Inside `backend` run:

```bash
npm install
```

## 7. Start the backend

Run:

```bash
npm start
```

Backend URL:

```text
http://localhost:3000
```

## 8. How the backend works

### `GET /api/courses`

- Reads all rows from `COURSES`
- Skips the header row
- Returns course data as JSON

### `POST /api/enquiry`

- Appends a new row to `ENQUIRIES`
- Creates a new ID automatically
- Adds current timestamp automatically

### `POST /api/admin/login`

- Checks username and password from `.env`
- Returns `success: true` or `false`

### `GET /api/admin/enquiries`

- Reads all rows from `ENQUIRIES`
- Skips the header row
- Returns enquiry data for the admin page

### `POST /api/admin/course`

- Appends a new course row to `COURSES`
- Creates next course ID automatically

### `DELETE /api/admin/course/:id`

- Finds course by ID in `COURSES`
- Deletes the matching sheet row

## 9. Beginner notes

- Keep the first row of each sheet as headers
- Do not rename the sheet tabs unless you also update the code
- Do not remove the `ID` column from `COURSES` or `ENQUIRIES`
- Passwords are plain text only for learning/demo purposes
