const colorChange = (type) => {
  switch (type) {
    case 'fire': {
      const fireRed = {
        color: '#ffffff',
        background: '#b91c1c',
      };
      return fireRed;
    }
    case 'fighting': {
      const fightingRed = {
        color: '#ffffff',
        background: '#991b1b',
      };
      return fightingRed;
    }
    case 'flying': {
      const flyingSlate = {
        color: '#000000',
        background: '#94a3b8',
      };
      return flyingSlate;
    }
    case 'poison': {
      const poisonGreen = {
        color: '#ffffff',
        background: '#166534',
      };

      return poisonGreen;
    }
    case 'ground': {
      const brown = {
        color: '#ffffff',
        background: '#7c2d12',
      };
      return brown;
    }
    case 'rock': {
      const black = {
        color: '#ffffff',
        background: '#18181b',
      };
      return black;
    }
    case 'water': {
      const blue = {
        color: '#ffffff',
        background: '#2563eb',
      };
      return blue;
    }
    case 'normal': {
      const yellow = {
        color: '#000000',
        background: '#facc15',
      };
      return yellow;
    }
    case 'grass': {
      const green = {
        color: '#ffffff',
        background: '#65a30d',
      };
      return green;
    }
    case 'electric': {
      const electricBlue = {
        color: '#000000',
        background: '#7DF9FF',
      };
      return electricBlue;
    }
    case 'psychic': {
      const psychicColor = {
        color: '#000000',
        background: '#625981',
      };
      return psychicColor;
    }
    case 'ice': {
      const iceColor = {
        color: '#000000',
        background: '#DBF1FD',
      };
      return iceColor;
    }
    case 'dragon': {
      const dragonColor = {
        color: '#000000',
        background: '#6C8EB4',
      };
      return dragonColor;
    }
    case 'dark': {
      const darkColor = {
        color: '#ffffff',
        background: '#000000',
      };
      return darkColor;
    }
    case 'fairy': {
      const fairyColor = {
        color: '#000000',
        background: '#DED4D8',
      };
      return fairyColor;
    }
    case 'unknown': {
      const unknownColor = {
        color: '#000000',
        background: '#ffffff',
      };
      return unknownColor;
    }
    case 'shadow': {
      const shadowColor = {
        color: '#ffffff',
        background: '#8a795d',
      };
      return shadowColor;
    }
    default: {
      const defaultColour = {
        color: '#000000',
        background: 'facc15',
      };
      return defaultColour;
    }
  }
};

export default colorChange;
