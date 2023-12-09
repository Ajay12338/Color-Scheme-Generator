import { header, body, footer, colorScheme, getColorBtn } from "./index.js";

const darkMode = () => {
  header.classList.add("dark-header");
  body.classList.add("dark-body");
  footer.classList.add("dark-footer");
  colorScheme.classList.add("dark-select");
  getColorBtn.classList.add("dark-button");
};

export default darkMode;
