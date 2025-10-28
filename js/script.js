/** @format */

// Toggle mobile menu
function togglebar() {
  const navlist = document.querySelector(".nav-lin");
  navlist.classList.toggle("active");
}

// FAQ accordion
const headers = document.querySelectorAll(".faq-header");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const isActive = header.classList.contains("active");
    headers.forEach((h) => {
      h.classList.remove("active");
      h.nextElementSibling.style.display = "none";
    });
    if (!isActive) {
      header.classList.add("active");
      header.nextElementSibling.style.display = "block";
    }
  });
});
// faq accordion end

// contact form message start her
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const payload = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  // 🔥 paste your Web App URL below:
  const url =
    "https://script.google.com/macros/s/AKfycbxEmssc2Zvl_B2TuQndoseo4m4kQRi9cLomUvK3yTYvEnqwQuuC3BWuSOGu6Zosk1fH/exec";

  await fetch(url, {
    method: "POST",
    mode: "no-cors", // prevents CORS issues
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  alert("Message sent successfully!");
  form.reset();
});
// contact form message ends here

// Section navigation
function showHome() {
  document.getElementById("About").style.display = "block";
  document.getElementById("Service").style.display = "block";
  document.getElementById("Resume").style.display = "block";
  document.getElementById("Project").style.display = "block";
  document.getElementById("Faq").style.display = "block";
  document.getElementById("Contact").style.display = "block";
}

function showAbout() {
  document.getElementById("About").style.display = "block";
  document.getElementById("Service").style.display = "none";
  document.getElementById("Resume").style.display = "none";
  document.getElementById("Project").style.display = "none";
  document.getElementById("Faq").style.display = "none";
  document.getElementById("Contact").style.display = "none";
}

function showService() {
  document.getElementById("About").style.display = "none";
  document.getElementById("Service").style.display = "block";
  document.getElementById("Resume").style.display = "none";
  document.getElementById("Project").style.display = "none";
  document.getElementById("Faq").style.display = "none";
  document.getElementById("Contact").style.display = "none";
}

function showResume() {
  document.getElementById("About").style.display = "none";
  document.getElementById("Service").style.display = "none";
  document.getElementById("Resume").style.display = "block";
  document.getElementById("Project").style.display = "none";
  document.getElementById("Faq").style.display = "none";
  document.getElementById("Contact").style.display = "none";
}

function showProject() {
  document.getElementById("About").style.display = "none";
  document.getElementById("Service").style.display = "none";
  document.getElementById("Resume").style.display = "none";
  document.getElementById("Project").style.display = "block";
  document.getElementById("Faq").style.display = "none";
  document.getElementById("Contact").style.display = "none";
}

function showFaq() {
  document.getElementById("About").style.display = "none";
  document.getElementById("Service").style.display = "none";
  document.getElementById("Resume").style.display = "none";
  document.getElementById("Project").style.display = "none";
  document.getElementById("Faq").style.display = "block";
  document.getElementById("Contact").style.display = "none";
}

function showContact() {
  document.getElementById("About").style.display = "none";
  document.getElementById("Service").style.display = "none";
  document.getElementById("Resume").style.display = "none";
  document.getElementById("Project").style.display = "none";
  document.getElementById("Faq").style.display = "none";
  document.getElementById("Contact").style.display = "block";
}
