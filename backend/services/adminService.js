async function validateAdmin(username, password) {
  const adminUsername = process.env.ADMIN_USERNAME || "BMadmin";
  const adminPassword = process.env.ADMIN_PASSWORD || "Animesh@1234";

  return username === adminUsername && password === adminPassword;
}

module.exports = {
  validateAdmin
};
