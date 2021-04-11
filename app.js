const toggleBurger = document.getElementsByClassName("toggle-burger")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggleBurger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
