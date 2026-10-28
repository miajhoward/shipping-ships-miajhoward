import { getShippingShips } from "./database.js";

export const ShippingList = () => {
  const ships = getShippingShips();

  let shipsHTML = "<ul>";

  for (const ship of ships) {
    shipsHTML += `<li>${ship.name}</li>`;
  }

  shipsHTML += "</ul>";

  return shipsHTML;
};
