document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let responseMsg = document.getElementById("responseMsg");

  if (name === "" || email === "" || message === "") {
    responseMsg.textContent = "⚠️ Please fill out all fields.";
    responseMsg.style.color = "#ffdd57";
    return;
  }

  if (!validateEmail(email)) {
    responseMsg.textContent = "❌ Invalid email address.";
    responseMsg.style.color = "red";
    return;
  }

  // Simulate sending (can be replaced with backend/API call)
  responseMsg.textContent = "✅ Thank you! Your message has been sent.";
  responseMsg.style.color = "#00ff7f";

  // Clear fields after submit
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
