history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0, 0);
};

const navMenu = document.getElementById('nav-list')
const navtoggle = document.getElementById('nav-toggle')
const navclose = document.getElementById('nav-close')

if (navtoggle) {
  navtoggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu')
  })
}

if (navclose) {
  navclose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu')
  })
}

function coming(){
  window.alert("COMING SOON!")
}

const buttons = document.querySelectorAll("#showmore");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    card.classList.toggle("active");
  });
});


const toggle = document.getElementById("dark-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.innerHTML = '<i class="bi bi-sun"></i>';
} else {
  toggle.innerHTML = '<i class="bi bi-moon"></i>';
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");


  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggle.innerHTML = isDark
    ? '<i class="bi bi-sun"></i>'
    : '<i class="bi bi-moon"></i>';
});

const fadeImages = document.querySelectorAll(".hero-fade .fade-img");

let indexFade = 0;

if (fadeImages.length > 0) {
  setInterval(() => {
    fadeImages[indexFade].classList.remove("active");

    indexFade = (indexFade + 1) % fadeImages.length;

    fadeImages[indexFade].classList.add("active");
  }, 3000);
}
