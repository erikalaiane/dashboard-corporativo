import { Home, BarChart3, Users, Settings, PieChart, FileText } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-white/30 dark:bg-white/5 backdrop-blur-lg border-r border-white/20 shadow-xl transition-all duration-300">
      
      {/* Logo */}
      <div className="p-6 text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        PulseBoard
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-3 text-gray-600 dark:text-gray-300">
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200">
          <Home size={20} /> <span>Início</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200">
          <BarChart3 size={20} /> <span>Métricas</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200">
          <PieChart size={20} /> <span>Estatísticas</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200">
          <FileText size={20} /> <span>Relatórios</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200">
          <Users size={20} /> <span>Equipe</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200">
          <Settings size={20} /> <span>Configurações</span>
        </a>
      </nav>

      {/* Rodapé (opcional) */}
      <div className="p-4 text-sm text-gray-500 dark:text-gray-400">
        v1.0 • PulseBoard
      </div>
    </aside>
  );
}
