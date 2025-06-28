document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      response.textContent = "Please fill out all fields.";
      response.style.color = "red";
      return;
    }

    response.textContent = `Thank you, ${name}. I'll get back to you soon!`;
    response.style.color = "green";
    form.reset();
  });
});
