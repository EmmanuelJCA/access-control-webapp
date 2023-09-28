import Cookies from 'js-cookie';

export const getCookieItem = <T>(key: string): T | null => {
  const cookie = Cookies.get(key);
  if(cookie) {
    return JSON.parse(cookie);
  } else {
    return null;
  }
}

export const setCookieItem = (key: string, value: any) => {
  return Cookies.set(key, JSON.stringify(value));
}