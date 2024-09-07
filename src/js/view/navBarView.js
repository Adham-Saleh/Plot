import View from "./view.js";

class NavBar extends View {
  _parentElement = document.querySelector(".content");
  _window = document.querySelector(".nav-menu");

  _openMenu = document.querySelector(".open-menu");
  _closeMenu = document.querySelector(".close-menu");
  _ballons = document.querySelector(".bi-balloon-heart");

  constructor() {
    super();
    this._addHandlerOpenNavMenu();
  }

  _addHandlerOpenNavMenu() {
    this._parentElement.addEventListener("click", (e) => {
      const menuBtn = e.target.closest(".menu-btn");
      if (!menuBtn) return;
      this._window.classList.toggle("hidden");
      this._openMenu.classList.toggle("hidden");
      this._closeMenu.classList.toggle("hidden");
      setTimeout(
        () => this._ballons.scrollIntoView({ behavior: "smooth" }),
        500
      );
    });
  }
}

export default new NavBar();
