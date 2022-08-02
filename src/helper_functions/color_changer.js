const colorChange = (type) => {
  switch (type) {
    case "fire":
      const fireRed = {
        color: "#ffffff",
        background: "#b91c1c",
      };
      return fireRed;
    case "fighting":
      const fightingRed = {
        color: "#ffffff",
        background: "#991b1b",
      };
      return fightingRed;
    case "water":
      const blue = {
        color: "#ffffff",
        background: "#2563eb",
      };
      return blue;
    case "normal":
      const yellow = {
        color: "#000000",
        background: "#facc15",
      };
      return yellow;
    case "grass":
      const green = {
        color: "#ffffff",
        background: "#65a30d",
      };
      return green;

    default:
      const defaultColour = {
        color: "#000000",
        background: "facc15",
      };
      return defaultColour;
  }
};

export default colorChange;
