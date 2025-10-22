import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardMetric from "../components/CardMetric";
import LineChartSection from "../components/LineChartSection";
import PieChartSection from "../components/PieChartSection";
import BarChartSection from "../components/BarChartSection";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

export default function Dashboard() {
  const [filters, setFilters] = useState({ periodo: "7d", categoria: "todas" });

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    console.log("Filtros aplicados:", newFilters);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-colors">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
          <FilterBar onFilter={handleFilter} />

          {/* Texto de filtro ativo */}
          {filters && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Exibindo dados de <strong>{filters.categoria}</strong> dos{" "}
              <strong>
                {filters.periodo === "7d"
                  ? "últimos 7 dias"
                  : filters.periodo === "30d"
                  ? "últimos 30 dias"
                  : "últimos 12 meses"}
              </strong>
            </p>
          )}

          {/* Cards de métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CardMetric title="Faturamento" value="R$ 24.500" change="+12%" />
            <CardMetric title="Usuários" value="1.203" change="+8%" />
            <CardMetric title="Conversões" value="342" change="+5%" />
            <CardMetric title="Tickets" value="78" change="-3%" />
          </div>

          {/* Gráficos lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <LineChartSection />
            <PieChartSection />
            <BarChartSection />
          </div>
        </main>
      </div>
    </div>
  );
}
