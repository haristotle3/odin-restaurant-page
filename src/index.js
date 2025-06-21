import "./style.css";
import createHome from "./modules/home.js";
import createMenu from "./modules/menu.js";
import createContact from "./modules/contact.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact-us");

homeButton.addEventListener("click", () => {
  content.removeChild(document.querySelector(".actual-content"));
  createHome();
  return;
});

contactButton.addEventListener("click", () => {
  content.removeChild(document.querySelector(".actual-content"));
  createContact();
  return;
});

menuButton.addEventListener("click", () => {
  content.removeChild(document.querySelector(".actual-content"));
  createMenu();
  return;
});

createHome();
