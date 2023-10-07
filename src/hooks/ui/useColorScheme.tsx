import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toggleIsDarkMode } from "@/redux/features/ui/uiSlice";
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
