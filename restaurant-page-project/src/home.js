import { $content } from "./index";
import pizzaImg from "../asset/resource/pizza.jpg";

const home = () => {
  $content.innerHTML = "";

  const orderButton = document.createElement("button");
  orderButton.textContent = "Order Now";
  orderButton.classList.add("btn");

  const heading2 = document.createElement("h2");
  heading2.textContent = "Come on down for some delicious cuisine!";

  const heroSection = document.createElement("div");
  heroSection.appendChild(heading2);
  heroSection.appendChild(orderButton);
  heroSection.style.display = "flex";
  heroSection.style.flexDirection = "column";
  heroSection.style.justifyContent = "center";
  heroSection.style.alignItems = "center";
  heroSection.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  heroSection.style.color = "white";
  heroSection.style.padding = "20px";
  heroSection.style.borderRadius = "10px";

  const mainContent = document.createElement("div");
  mainContent.appendChild(heroSection);
  mainContent.style.display = "flex";
  mainContent.style.justifyContent = "center";
  mainContent.style.alignItems = "center";
  mainContent.style.height = "calc(100vh - 100px)";

  mainContent.style.backgroundImage = `url(${pizzaImg})`;
  mainContent.style.backgroundSize = "cover";

  $content.appendChild(mainContent);
};

export { home };
