import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark-mode", value);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};
