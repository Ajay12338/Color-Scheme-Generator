import { header, body, footer, colorScheme, getColorBtn } from "./index.js";
import { darkBtnLabel } from "./darkMode.js";
const lightMode = () => {
  header.classList.remove("dark-header");
  body.classList.remove("dark-body");
  footer.classList.remove("dark-footer");
  colorScheme.classList.remove("dark-select");
  getColorBtn.classList.remove("dark-button");
  darkBtnLabel.classList.add("toggle");
  darkBtnLabel.innerHTML = `<i class="fa-regular fa-moon"></i>`;
};

export default lightMode;
