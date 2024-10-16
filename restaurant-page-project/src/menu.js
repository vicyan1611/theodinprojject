import { $content } from "./index";
import menu0 from "../asset/resource/menu0.jpg";
import menu1 from "../asset/resource/menu1.jpg";
import menu2 from "../asset/resource/menu2.jpg";
import menu3 from "../asset/resource/menu3.png";
import menu4 from "../asset/resource/menu4.jpg";
import menu5 from "../asset/resource/menu5.jpg";
const menu = () => {
  $content.innerHTML = "";

  const menuItems = [
    {
      name: "Pizza",
      price: 10.99,
      description: "Delicious pizza with your choice of toppings.",
    },
    {
      name: "Pasta",
      price: 8.99,
      description: "Pasta with your choice of sauce.",
    },
    {
      name: "Salad",
      price: 5.99,
      description: "Fresh salad with your choice of dressing.",
    },
    {
      name: "Breadsticks",
      price: 3.99,
      description: "Garlic breadsticks with marinara sauce.",
    },
    {
      name: "Soda",
      price: 1.99,
      description: "Soda in your choice of flavor.",
    },
    {
      name: "Water",
      price: 0.99,
      description: "Bottled water.",
    },
  ];

  const mainContent = document.createElement("div");
  mainContent.style.display = "flex";
  mainContent.style.flexDirection = "column";
  mainContent.style.backgroundColor = "#E9EED9";
  mainContent.style.display = "flex";
  mainContent.style.alignItems = "center";

  const heading2 = document.createElement("h2");
  heading2.textContent = "Menu";

  const menuContainer = document.createElement("div");
  menuContainer.style.display = "grid";
  menuContainer.style.gridTemplateColumns = "1fr 1fr";
  menuContainer.style.gridAutoRows = "1fr";
  menuContainer.style.width = "80%";
  menuContainer.style.gap = "10px";
  menuContainer.style.backgroundColor = "#CBD2A4";

  const menuImages = [menu0, menu1, menu2, menu3, menu4, menu5];

  menuItems.forEach((item, index) => {
    const menuItem = document.createElement("div");
    menuItem.style.paddingTop = "20px";
    menuItem.style.display = "flex";
    menuItem.style.flexDirection = "column";
    menuItem.style.justifyContent = "center";
    menuItem.style.alignItems = "center";

    const itemImage = document.createElement("img");
    itemImage.src = menuImages[index];
    itemImage.style.height = "250px";
    itemImage.style.width = "250px";
    itemImage.style.objectFit = "cover";
    itemImage.style.borderRadius = "10px";
    menuItem.appendChild(itemImage);

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    menuContainer.appendChild(menuItem);
  });

  mainContent.appendChild(heading2);
  mainContent.appendChild(menuContainer);
  $content.appendChild(mainContent);
};

export { menu };
