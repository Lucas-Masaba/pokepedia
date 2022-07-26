const colorChange = (type) => {
  switch (type) {
    case "fire":
      const red = {
        color: "#ffffff",
        background: "#b91c1c",
      };
      return red;
    case "water":
      const blue = {
        background: "#2563eb",
      };
      return blue;
    case "normal":
      const yellow = {
        color: '#000000',
        background: "#facc15",
      };
      return yellow;
    default:
      const defaultColour = {
        color: '#000000',
        background: "facc15",
      };
      return defaultColour;
  }
};

export default colorChange