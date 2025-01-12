"use client";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          Blog App
        </span>

        <div id="navbar-solid-bg">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
