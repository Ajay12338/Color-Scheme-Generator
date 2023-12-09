import { header, body, footer, colorScheme, getColorBtn } from "./index.js";

const lightMode = () => {
  header.classList.remove("dark-header");
  body.classList.remove("dark-body");
  footer.classList.remove("dark-footer");
  colorScheme.classList.remove("dark-select");
  getColorBtn.classList.remove("dark-button");
};

export default lightMode;
