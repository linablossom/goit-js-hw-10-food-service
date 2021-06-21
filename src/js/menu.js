import items from "../../menu.json";
import menuItemTpl from "../templates/menu-item.hbs";

const theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const refs = {
  bodyEl: document.querySelector("body"),
  menuEl: document.querySelector(".js-menu"),
  inputEl: document.querySelector("#theme-switch-toggle"),
};

refs.inputEl.addEventListener("change", onCheckboxChange);

function render() {
  const html = items.map(menuItemTpl).join("");
  refs.menuEl.insertAdjacentHTML("beforeend", html);
}

render();

function onCheckboxChange(e) {
  const themeName = e.target.checked ? theme.DARK : theme.LIGHT;
  refs.bodyEl.classList.add(themeName);
  refs.bodyEl.classList.remove(e.target.checked ? theme.LIGHT : theme.DARK);
  localStorage.setItem("theme", themeName);
}

function initTheme() {
  const curTheme = localStorage.getItem("theme") || theme.LIGHT;
  refs.bodyEl.classList.add(curTheme);
  if (curTheme === theme.DARK) refs.inputEl.checked = true;
}

initTheme();
