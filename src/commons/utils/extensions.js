// eslint-disable-next-line import/prefer-default-export
export function getAllGamesFromStorage() {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i >= 0) {
    const key = keys[i];
    console.log(`KEY: ${key}`);
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
