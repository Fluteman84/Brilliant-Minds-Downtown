const API_BASE_URL = "http://localhost:3000/api";
const ADMIN_USERNAME = "BMadmin";
const ADMIN_PASSWORD = "Animesh@1234";

const loginForm = document.getElementById("adminLoginForm");
const loginMessage = document.getElementById("adminLoginMessage");

function openDashboard(username) {
  localStorage.setItem(
    "bm_admin_user",
    JSON.stringify({
      username,
      fullName: username
    })
  );

  window.location.href = "admin-dashboard.html";
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginMessage.textContent = "";

  const formData = new FormData(loginForm);
  const payload = {
    username: formData.get("username").trim(),
    password: formData.get("password").trim()
  };

  const isLocalAdmin =
    payload.username === ADMIN_USERNAME && payload.password === ADMIN_PASSWORD;

  try {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      if (isLocalAdmin) {
        openDashboard(payload.username);
        return;
      }

      loginMessage.textContent = "Invalid username or password.";
      return;
    }

    openDashboard(result.fullName || payload.username);
  } catch (error) {
    console.error("Error logging in:", error);

    if (isLocalAdmin) {
      openDashboard(payload.username);
      return;
    }

    loginMessage.textContent = "Could not login. Please check the backend server.";
  }
});
