"use-strict";

const App = {
  // All of our selected HTML documents
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  init() {
    App.registerEventListeners();
  },

  registerEventListeners() {
    // Toggling menu (DONE)
    App.$.menu.addEventListener("click", () => {
      App.$.menuItems.classList.toggle("hidden");
    });
    // TODO
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game!");
    });
    // TODO
    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("Add a new round");
    });
    // TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(`Square with id ${event.target.id} was clicked`);
      });
    });
  },
};

window.addEventListener("load", App.init);
