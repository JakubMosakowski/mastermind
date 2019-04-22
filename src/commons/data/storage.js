export function setObject(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getObject(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return null;
  }
}

export function setPrimitive(key, value) {
  localStorage.setItem(key, value);
}

export function getPrimitive(key) {
  return localStorage.getItem(key);
}

export const currentGameId = 'currentGameId';
export function getGameResultKey(id) { return `${id}-results`; }
