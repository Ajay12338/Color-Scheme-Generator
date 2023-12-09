import { header, body, footer, colorScheme, getColorBtn } from "./index.js";
export const darkBtnLabel = document.querySelector("label");
const darkMode = () => {
  header.classList.add("dark-header");
  body.classList.add("dark-body");
  footer.classList.add("dark-footer");
  colorScheme.classList.add("dark-select");
  getColorBtn.classList.add("dark-button");
  darkBtnLabel.classList.remove("toggle");
  darkBtnLabel.innerHTML = `<img src="light-on.png" alt="light mode image"/>`;
};

export default darkMode;
