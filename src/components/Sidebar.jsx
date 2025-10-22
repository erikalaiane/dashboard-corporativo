import { Home, BarChart3, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="p-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
        CorpDash
      </div>

      <nav className="flex-1 px-4 space-y-2 text-gray-600 dark:text-gray-300">
        <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <Home size={18} /> <span>Início</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <BarChart3 size={18} /> <span>Métricas</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <Users size={18} /> <span>Equipe</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <Settings size={18} /> <span>Configurações</span>
        </a>
      </nav>
    </aside>
  );
}
