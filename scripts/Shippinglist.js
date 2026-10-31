import { getShippingShips, getHaulingShips } from "./database.js";

export const ShippingList = () => {
  const ships = getShippingShips();
  ships.sort((a, b) => a.name.localeCompare(b.name));

  let shipsHTML = "<ul>";

  for (const ship of ships) {
    shipsHTML += `<li data-id="${ship.id}"
                        data-type="ship"
data-hauler-id="${ship.haulerId}"
                      data-name="${ship.name}">
                      ${ship.name}
                    </li>`;
  }
  shipsHTML += "</ul>";

  return shipsHTML;
};
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "ship") {
    const haulerId = parseInt(itemClicked.dataset.haulerId);
    let haulingShip = { name: "Incorrect" };
    const haulers = getHaulingShips();
    for (const hauler of haulers) {
      if (hauler.id === haulerId) {
        haulingShip = hauler;
      }
    }
    window.alert(
      `This Ship ${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`,
    );
  }
});
