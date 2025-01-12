"use client";
import { moon, sun } from "@/assets/icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useCallback } from "react";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="p-2"
    >
      <Image
        src={theme === "light" ? moon : sun}
        alt={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        width={24}
        height={24}
      />
    </button>
  );
}

export default ThemeSwitch;
