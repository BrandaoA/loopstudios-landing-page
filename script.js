
const menuButton = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const links = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  links.classList.remove("hidden");
})

closeMenu.addEventListener("click",() => {
  links.classList.add("hidden");
})