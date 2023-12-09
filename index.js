import darkMode from "./darkMode.js";
import lightMode from "./lightMode.js";

const colorPicker = document.getElementById("color-picker");
export const getColorBtn = document.getElementById("fetch-color");
export const colorScheme = document.getElementById("color-scheme");
const colorLists = document.getElementById("color-lists");
const darkModeCheckbox = document.getElementById("toggleBtn");
export const footer = document.getElementById("footer");
export const body = document.querySelector("body");
export const header = document.querySelector("header");

const baseURL = " https://www.thecolorapi.com/scheme";

darkModeCheckbox.addEventListener("click", () => {
  darkModeCheckbox.checked ? darkMode() : lightMode();
});
const displayFooter = (hexValues) => {
  let footerHtml = "";
  for (const color of hexValues) {
    footerHtml += `
        <div>
            ${color}
        </div>
        `;
  }
  footer.innerHTML = footerHtml;
};

const generateColors = (colors) => {
  let htmlColors = "";
  let hexColors = [];
  for (const color of colors) {
    htmlColors += `
        <div style ="background:${color.hex.value}">
           
        </div>
        `;
    hexColors.push(color.hex.value);
  }
  colorLists.innerHTML = htmlColors;
  displayFooter(hexColors);
};
getColorBtn.addEventListener("click", () => {
  let url = `${baseURL}?hex=${colorPicker.value.slice(1)}&mode=${
    colorScheme.value
  }&count=5`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => generateColors(data.colors));
});
