import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Dashboard Corporativo
      </h1>

      <div className="flex items-center gap-4">
        {/* Select de período com hover e pointer */}
        <select
          className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
        >
          <option>Últimos 7 dias</option>
          <option>Últimos 30 dias</option>
          <option>Este ano</option>
        </select>

        {/* Botão de toggle dark mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:scale-105 transition-all duration-200"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
