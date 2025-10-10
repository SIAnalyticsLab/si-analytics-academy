// auth.js
// Ensure firebase-config.js is loaded first

// Register User
function registerUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registration successful! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

// Login User
function loginUser(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

// Logout User
function logoutUser() {
  auth.signOut()
    .then(() => {
      window.location.href = "login.html";
    })
    .catch(error => console.error(error));
}

// Password Reset
function resetPassword(email) {
  auth.sendPasswordResetEmail(email)
    .then(() => alert("Password reset link sent to your email"))
    .catch(error => alert(error.message));
}
