"use-strict";

const App = {
  // All of our selected HTML documents
  $: {
    menu: document.querySelector(".menu"),
    menuItems: document.querySelector(".items"),
  },

  init() {
    App.$.menu.addEventListener("click", () => {
      App.$.menuItems.classList.toggle("hidden");
    });
  },
};

window.addEventListener("load", () => App.init());
