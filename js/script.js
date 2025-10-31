/** @format */

// === VIDEO MODAL ===
const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close");
const videoFrame = document.getElementById("videoFrame");
const videoFile = document.getElementById("videoFile");

// === Open Modal ===
videoBtn.addEventListener("click", () => {
  videoModal.classList.add("active");

  // ▶️ YouTube iframe
  if (videoFrame) {
    const src = videoFrame.src;
    if (!src.includes("autoplay=1")) {
      videoFrame.src = src.replace("autoplay=0", "autoplay=1");
    }
  }

  // ▶️ Local video
  if (videoFile) {
    videoFile.currentTime = 0;
    videoFile.play().catch(() => {});
  }
});

// === Close Modal ===
function closeModal() {
  videoModal.classList.remove("active");

  // Stop iframe
  if (videoFrame) {
    videoFrame.src = videoFrame.src.replace("autoplay=1", "autoplay=0");
  }

  // Pause local video
  if (videoFile) {
    videoFile.pause();
  }
}

closeBtn.addEventListener("click", closeModal);

// Close if user clicks outside
window.addEventListener("click", (e) => {
  if (e.target === videoModal) closeModal();
});

// intro Animation start here
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");
  const canvas = document.getElementById("intro-canvas");
  const ctx = canvas.getContext("2d");
  // const audio = document.getElementById("intro-audio");

  // // === AUDIO HANDLING ===

  // // 🎵 List all your audio files here
  // const playlist = [
  //   "audio/piano 1.mp3",
  //   "audio/piano 2.mp3",
  //   "audio/piano 3.mp3",
  // ];

  // const audio = document.getElementById("intro-audio");

  // // === Pick a random track ===
  // function getRandomTrack() {
  //   const index = Math.floor(Math.random() * playlist.length);
  //   return playlist[index];
  // }

  // // === Load and play a random audio file ===
  // function playRandomAudio() {
  //   audio.src = getRandomTrack();
  //   audio.load(); // ensure it reloads properly
  //   audio.muted = false;
  //   audio.play().catch((err) => {
  //     console.warn("Playback blocked until user interaction:", err);
  //   });
  // }

  // // === Wait for user click to start playback (required by browser policy) ===
  // document.body.addEventListener(
  //   "click",
  //   () => {
  //     if (audio.paused) {
  //       playRandomAudio();
  //     }
  //   },
  //   { once: true } // runs only once
  // );

  // // === When one track ends, play another random one ===
  // audio.addEventListener("ended", playRandomAudio);

  // // === Automatically pause when tab or window is inactive ===
  // document.addEventListener("visibilitychange", () => {
  //   if (document.hidden) {
  //     // tab is hidden → pause
  //     audio.pause();
  //   } else {
  //     // tab is active again → resume
  //     audio.play().catch(() => {});
  //   }
  // });

  // // === Optional: pause and reset if user closes or reloads the page ===
  // window.addEventListener("beforeunload", () => {
  //   audio.pause();
  //   audio.currentTime = 0;
  // });

  // === CANVAS SETUP ===
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // === PARTICLE ANIMATION ===
  const particles = [];
  const numParticles = 120;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // === INTRO EXIT & SHOW MAIN SITE ===
  setTimeout(() => {
    intro.classList.add("fade-out");
    setTimeout(() => {
      intro.remove();
      main.style.display = "block";
      main.style.animation = "showSite 1.5s ease forwards";
    }, 800);
  }, 8500);
});

// intro Animation end here

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

// Contact form submission start here
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const payload = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  const url =
    "https://script.google.com/macros/s/AKfycbxEmssc2Zvl_B2TuQndoseo4m4kQRi9cLomUvK3yTYvEnqwQuuC3BWuSOGu6Zosk1fH/exec";

  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors", // avoids CORS blocking
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // ✅ SweetAlert success popup
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Message sent successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  } catch (error) {
    console.error("❌ Error sending message:", error);
    alert("⚠️ Something went wrong — check console.");
  }
});

// Contact form submission end here

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

//date object constructor
const date = new Date();
console.log(date);
