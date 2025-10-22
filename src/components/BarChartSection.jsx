import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", Vendas: 4000, Marketing: 2400 },
  { name: "Fev", Vendas: 3000, Marketing: 1398 },
  { name: "Mar", Vendas: 5000, Marketing: 2000 },
  { name: "Abr", Vendas: 4500, Marketing: 2500 },
  { name: "Mai", Vendas: 6000, Marketing: 3000 },
  { name: "Jun", Vendas: 5500, Marketing: 3500 },
];

const COLORS = ["#3b82f6", "#8b5cf6"];

export default function BarChartSection() {
  return (
    <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-lg transition-all hover:scale-[1.02] duration-300">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Desempenho Mensal
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Vendas" fill={COLORS[0]} />
          <Bar dataKey="Marketing" fill={COLORS[1]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
