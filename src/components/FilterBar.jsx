import { useState } from "react";

export default function FilterBar({ onFilter }) {
  const [periodo, setPeriodo] = useState("7d");
  const [categoria, setCategoria] = useState("todas");

  const handleApply = () => {
    onFilter({ periodo, categoria });
  };

  return (
    <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          Período
        </label>
        <select
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
          className="p-2 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
        >
          <option value="7d">Últimos 7 dias</option>
          <option value="30d">Últimos 30 dias</option>
          <option value="12m">Últimos 12 meses</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          Categoria
        </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="p-2 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
        >
          <option value="todas">Todas</option>
          <option value="vendas">Vendas</option>
          <option value="marketing">Marketing</option>
          <option value="suporte">Suporte</option>
        </select>
      </div>

      <button
        onClick={handleApply}
        className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Aplicar Filtros
      </button>
    </div>
  );
}
