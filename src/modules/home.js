import restaurantImage from "../assets/restaurant.png";

function createHome() {
  const root = document.querySelector("#content");
  const actualContent = document.createElement("div");
  actualContent.classList.add("actual-content");

  const h1 = document.createElement("h1");
  h1.textContent = `Odin's Tiffins`;

  const img = document.createElement("img");
  img.src = restaurantImage;

  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = `Welcome to <strong>Odin Tiffins</strong> — where idlis are fluffier
            than your dreams, dosas are wider than your problems, and sambhar
            flows like gossip at a family wedding. Come hungry, leave in a food
            coma!`;
  div.appendChild(p);

  const locationDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = `Location`;
  const locationP = document.createElement("p");
  locationP.textContent = `📍 42, Anna Banana Street, Foodie Nagar, Bengaluru - 560001`;
  locationDiv.appendChild(h3);
  locationDiv.appendChild(locationP);

  actualContent.appendChild(h1);
  actualContent.appendChild(img);
  actualContent.appendChild(div);
  actualContent.appendChild(locationDiv);
  root.appendChild(actualContent)
  return;
}

export default createHome;
