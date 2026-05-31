const API_BASE_URL = "http://localhost:3000/api";

const loginForm = document.getElementById("adminLoginForm");
const loginMessage = document.getElementById("adminLoginMessage");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginMessage.textContent = "";

  const formData = new FormData(loginForm);
  const payload = {
    username: formData.get("username").trim(),
    password: formData.get("password").trim()
  };

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
      loginMessage.textContent = "Invalid username or password.";
      return;
    }

    localStorage.setItem(
      "bm_admin_user",
      JSON.stringify({
        username: payload.username,
        fullName: result.fullName || payload.username
      })
    );

    window.location.href = "admin-dashboard.html";
  } catch (error) {
    console.error("Error logging in:", error);
    loginMessage.textContent = "Could not login. Please check the backend server.";
  }
});
