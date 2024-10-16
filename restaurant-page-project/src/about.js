import { $content } from "./index";

const about = () => {
  $content.innerHTML = "";
  $content.textContent = "About";
};

export { about };
