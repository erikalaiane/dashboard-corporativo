import { Home, BarChart3, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white/30 dark:bg-white/5 backdrop-blur-lg border-r border-white/20 shadow-xl transition-all duration-300">
        <div className="p-6 text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            PulseBoard
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
