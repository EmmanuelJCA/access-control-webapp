export const getLocalStorageItem = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null;
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export const setLocalStorageItem = (key: string, value: any) => {
  if (typeof window === 'undefined') return;
  return localStorage.setItem(key, JSON.stringify(value));
}

export const removeLocalStorageItem = (key: string) => {
  if (typeof window === 'undefined') return;
  return localStorage.removeItem(key);
}
