import "./style.css";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";
const $content = document.querySelector(".content");

menu();

const $nav = document.querySelector("nav");

$nav.addEventListener("click", (e) => {
  if (e.target.textContent === "Home") {
    home();
  } else if (e.target.textContent === "Menu") {
    menu();
  } else if (e.target.textContent === "About") {
    about();
  }
});

export { $content };
