const form = document.querySelector("#contactForm");
const status = document.querySelector("#status");
form.addEventListener("submit", function (event) { event.preventDefault(); status.textContent = "Form submitted successfully."; form.reset(); });
