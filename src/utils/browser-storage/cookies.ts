import Cookies from 'js-cookie';

export const getCookieItem = <T>(key: string): T | null => {
  const item = Cookies.get(key);
  return item ? JSON.parse(item) : null;
}

export const setCookieItem = (key: string, value: any) => {
  return Cookies.set(key, JSON.stringify(value));
}

export const removeCookieItem = (key: string) => {
  return Cookies.remove(key);
}