import darkMode from "./darkMode.js";
import lightMode from "./lightMode.js";

export const getColorBtn = document.getElementById("fetch-color");
export const colorScheme = document.getElementById("color-scheme");
export const footer = document.getElementById("footer");
export const body = document.querySelector("body");
export const header = document.querySelector("header");

const colorPicker = document.getElementById("color-picker");
const colorLists = document.getElementById("color-lists");
const darkModeCheckbox = document.getElementById("toggleBtn");
const baseURL = " https://www.thecolorapi.com/scheme";

if (darkModeCheckbox.checked) darkMode();
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
const copyToClipBoard = async (color) => {
  await navigator.clipboard.writeText(color);
  alert(`Copied ${color} to clipboard!!!`);
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
  }&count=10`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      generateColors(data.colors);
      const footerTxts = document.querySelectorAll("footer > div");
      footerTxts.forEach((div) => {
        div.addEventListener("click", (e) => {
          copyToClipBoard(div.innerText);
        });
      });
    });
});
