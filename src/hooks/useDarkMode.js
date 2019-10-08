import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', initialValue);
  useEffect(()=>{
    const body = document.querySelector('body');
    isDarkMode ? body.classList.add('dark-mode'): body.classList.remove('dark-mode');

  }, [isDarkMode])
  return [isDarkMode, setIsDarkMode]
};
