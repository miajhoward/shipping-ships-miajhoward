import { getDocks, getHaulingShips } from "./database.js";

export const DockList = () => {
  const docks = getDocks();

  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li data-id="${dock.id}"
                        data-type="dock"
data-location="${dock.location}">
                      ${dock.location}
                    </li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dock") {
    const dockId = parseInt(itemClicked.dataset.id);
    const dockLocation = itemClicked.dataset.location;
    const haulerNames = [];

    const haulers = getHaulingShips();

    for (const hauler of haulers) {
      if (hauler.dockId === dockId) {
        haulerNames.push(hauler.name);
      }
    }
    if (haulerNames.length === 0) {
      window.alert(`The ${dockLocation} dock is currently unloading nothing`);
    } else {
      window.alert(
        `The ${dockLocation} dock is currently unloading ${haulerNames.join(", ")}`,
      );
    }
  }
});
