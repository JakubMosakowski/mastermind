// eslint-disable-next-line import/prefer-default-export
const Rainbow = require('rainbowvis.js');

export function getAllGamesFromStorage() {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i >= 0) {
    const key = keys[i];
    if (key) {
      if (key.length === 36) {
        const item = JSON.parse(localStorage.getItem(key));
        values.push(item);
      }
    }
    i -= 1;
  }

  return values;
}

export function getDifferentColors(number) {
  const rainbow = new Rainbow();
  const list = [];
  if (number < 2) {
    list.push('#FF0000');
    return list;
  }
  rainbow.setNumberRange(1, number);
  rainbow.setSpectrum('red', 'green', 'blue', 'black', 'white');

  for (let i = 1; i <= number; i += 1) {
    const hexColour = rainbow.colourAt(i);
    list.push(`#${hexColour}`);
  }
  return list;
}
