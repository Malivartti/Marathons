export function getItem(item: string) {
  return localStorage.getItem(item);
}

export function setItem(key: string, item: string) {
  localStorage.setItem(key, item);
}
