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

const buttons = document.querySelectorAll("#showmore");


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    card.classList.toggle("active");
  });
});

const toggle = document.getElementById("dark-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.innerHTML = '<i class="bi bi-sun"></i>';
  } else {
    toggle.innerHTML = '<i class="bi bi-moon"></i>';
  }
});

function coming() {
  window.alert("COMING SOON")
}