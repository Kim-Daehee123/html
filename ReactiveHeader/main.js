const toggleBtn = document.querySelector(".nav_toogleBtn");
const menu = document.querySelector(".nav_menu");
const icons = document.querySelector(".nav_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

window.addEventListener("resize", () => {
  let innerWidth = this.window.innerWidth;

  console.log(innerWidth);
  if (innerWidth > 768) {
    menu.classList.remove("active");
    icons.classList.remove("active");
  }
});
