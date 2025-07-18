//

// faq-section start here
const headers = document.querySelectorAll(".faq-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const isActive = header.classList.contains("active");

    // Close all items
    headers.forEach((h) => {
      h.classList.remove("active");
      h.nextElementSibling.style.display = "none";
    });

    // Toggle current one
    if (!isActive) {
      header.classList.add("active");
      header.nextElementSibling.style.display = "block";
    }
  });
});
// faq-section ends here

// media query hamburger-menu start here

// function togglebar() {
//   const navMenu = document.querySelector(".nav-menu");
//   const navLink = document.querySelector(".nav-link");
//   navMenu.classList.toggle("active");
//   navLink.classList.toggle("active");
// }
function togglebar() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

// media query hamburger-menu ends here

//blog section filter functionality
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
