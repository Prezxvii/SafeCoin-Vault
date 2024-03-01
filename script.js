function togglePassword() {
  var passwordInput = document.getElementById("password");
  var showPasswordToggle = document.querySelector(".show-password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordToggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showPasswordToggle.textContent = "Show";
  }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Here you can add your logic for handling the login process
  console.log("Username:", username);
  console.log("Password:", password);
  // For demonstration purposes, we'll just log the credentials
});



const toggleButton = document.getElementById('toggleAbout');
const aboutContent = document.getElementById('aboutContent');

toggleButton.addEventListener('click', function() {
  aboutContent.classList.toggle('open');
});

function toggleSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}