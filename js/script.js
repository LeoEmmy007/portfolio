
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
