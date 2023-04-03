function openBurger() {
  const btn = document.querySelector(".fork-header__burg-container");
  const dropdownMenu = document.querySelector(".fork__dropdown-menu");
  const burgLineShort = document.querySelector(".burg-line__short");
  const burgLineTop = document.querySelector(".burg-line__top");
  const burgLineBot = document.querySelector(".burg-line__bot");
  btn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("fork__dropdown-menu--visible");
    burgLineShort.classList.toggle("burg-line__short--active");
    burgLineTop.classList.toggle("burg-line__top--active");
    burgLineBot.classList.toggle("burg-line__bot--active");
  });
}

openBurger();
