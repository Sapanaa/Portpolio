// components/DarkModeToggle.tsx
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModeSetting = localStorage.getItem('darkMode');
    if (
      darkModeSetting === 'enabled' ||
      (!darkModeSetting && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const rootElement = document.documentElement;
    if (rootElement.classList.contains('dark')) {
      rootElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
      setIsDarkMode(false);
    } else {
      rootElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 "
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6 text-white-500 " /> // Light mode icon
      ) : (
        <MoonIcon className="w-6 h-6 text-blue-500 " />   // Dark mode icon
      )}
    </button>
  );
}
