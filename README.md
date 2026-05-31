# Brilliant Minds-Downtown Simple Website

This project now uses:

- HTML
- CSS
- Vanilla JavaScript
- Node.js
- Express.js
- Google Sheets API

Google Spreadsheet is used as the database.

## Backend structure

```text
backend/
├── server.js
├── routes/
│   ├── adminRoutes.js
│   ├── courseRoutes.js
│   └── enquiryRoutes.js
├── services/
│   ├── adminService.js
│   ├── courseService.js
│   ├── enquiryService.js
│   └── sheetsService.js
├── config/
│   └── sheets.js
├── .env
├── package.json
└── credentials.json
```

## API endpoints

- `GET /api/courses`
- `POST /api/enquiry`
- `POST /api/admin/login`
- `GET /api/admin/enquiries`
- `POST /api/admin/course`
- `DELETE /api/admin/course/:id`

## Admin login

Use:

```text
Username: BMadmin
Password: Animesh@1234
```

After successful login, the site opens:

```text
admin-dashboard.html
```

The dashboard currently shows courses from the Google Spreadsheet in table format. The mentors table is intentionally empty for later design work.

## Run the backend

1. Open terminal in `backend`
2. Install packages:

```bash
npm install
```

3. Update `.env`
4. Update `credentials.json`
5. Start server:

```bash
npm start
```

6. Open:

```text
http://localhost:3000/index.html
```

## Google Sheets setup

Detailed Google Sheets and Google Cloud setup is available in:

- [backend/SETUP_GUIDE.md](/c:/ALL/VSCODE%20practice/Cpp/brilliant-minds-downtown-simple-site/backend/SETUP_GUIDE.md:1)
