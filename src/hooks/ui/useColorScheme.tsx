import { useAppDispatch, useAppSelector } from "@/store";
import { toggleIsDarkMode } from "@/store/ui/uiSlice";
import { setCookieItem } from "@/utils/cookies";

export const useColorScheme = () => {
  const { isDarkMode } = useAppSelector(state => state.uiReducer);
  const dispatch = useAppDispatch();

  const setIsDarkMode = (prefersDark: boolean) => {
    setCookieItem('prefersDarkMode', prefersDark);
    dispatch(toggleIsDarkMode(prefersDark));
  }
  
  return {
    isDarkMode,
    setIsDarkMode
  }
}
