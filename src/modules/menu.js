import "../style.css";
import burgerPhoto from "../assets/hamburger.png";
import pizzaPhoto from "../assets/pizza.png";
import orangeJuicePhoto from "../assets/orangeJuice.png";
import sushiPhoto from "../assets/sushi.png";
import croissantPhoto from "../assets/croissant.png";

function createMenuItem(name, price, desc, imgPath) {
  const imgDiv = document.createElement("div");
  const imgHeading = document.createElement("h3");
  const imgPrice = document.createElement("h4");
  const imgDesc = document.createElement("p");
  const imgImg = document.createElement("img");

  imgHeading.textContent = name;
  imgPrice.textContent = price;
  imgDesc.textContent = desc;
  imgImg.src = imgPath;

  imgDiv.appendChild(imgHeading);
  imgDiv.appendChild(imgPrice);
  imgDiv.appendChild(imgImg);
  imgDiv.appendChild(imgDesc);

  return imgDiv;
}

function createMenu() {
  const root = document.querySelector("#content");
  const actualContent = document.createElement("div");
  actualContent.classList.add("actual-content");

  const h1 = document.createElement("h1");
  h1.textContent = `Menu`;

  const burgerDiv = createMenuItem(
    `🍔 Classic Odin Burger`,
    `$5`,
    `A juicy, flame-grilled patty stacked with crisp lettuce, ripe tomato, caramelized onions, and melted cheddar, all hugged by a toasted sesame bun. Served with a side of golden fries and our secret house sauce.`,
    burgerPhoto
  );

  const pizzaDiv = createMenuItem(
    `🍕 Cheesy Delight Pizza`,
    `$4`,
    `A thin, crispy crust loaded with rich tomato sauce, gooey mozzarella, and a blend of Italian herbs. Topped with cherry tomatoes, olives, and fresh basil for that perfect bite of comfort.`,
    pizzaPhoto
  );

  const orangeJuiceDiv = createMenuItem(
    `🍊 Fresh Orange Juice`,
    `$1`,
    `Squeezed from the juiciest, sun-ripened oranges, this chilled glass of goodness is pulp-perfect, naturally sweet, and packed with Vitamin C. No sugar, no nonsense.`,
    orangeJuicePhoto
  );

  const sushiDiv = createMenuItem(
    `🍣 Salmon Sushi Roll`,
    `$2`,
    `Delicate slices of fresh salmon wrapped around seasoned rice, creamy avocado, and a hint of wasabi. Served with soy sauce, pickled ginger, and love.`,
    sushiPhoto
  );
  const croissantDiv = createMenuItem(
    `🥐 Buttery Croissant`,
    `$10`,
    `Flaky, golden, and freshly baked each morning. Layers of airy dough and rich butter make this French classic the ultimate breakfast or snack companion.`,
    croissantPhoto
  );

  actualContent.appendChild(h1);
  actualContent.appendChild(burgerDiv);
  actualContent.appendChild(pizzaDiv);
  actualContent.appendChild(orangeJuiceDiv);
  actualContent.appendChild(sushiDiv);
  actualContent.appendChild(croissantDiv);
  root.appendChild(actualContent);
  return;
}

export default createMenu;
