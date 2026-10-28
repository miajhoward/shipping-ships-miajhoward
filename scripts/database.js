const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    { id: 1, name: "Ever Given", dockId: 1 },
    { id: 2, name: "MSC Gülsün", dockId: 2 },
    { id: 3, name: "Maersk Alabama", dockId: 3 },
    { id: 4, name: "Nashville Hauler", dockId: 4 },
  ],
  shippingShips: [
    { id: 1, name: "Sea Breeze", haulerId: 1 },
    { id: 2, name: "Sunset S", haulerId: 2 },
    { id: 3, name: "Paradise", haulerId: 3 },
    { id: 4, name: "Nashville Shipper", haulerId: 4 },
  ],
};
export const getDocks = () => {
  return structuredClone(database.docks);
};
export const getHaulingShips = () => {
  return structuredClone(database.haulers);
};
export const getShippingShips = () => {
  return structuredClone(database.shippingShips);
};
