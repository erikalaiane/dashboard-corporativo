import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", vendas: 4000 },
  { name: "Fev", vendas: 3000 },
  { name: "Mar", vendas: 5000 },
  { name: "Abr", vendas: 4500 },
  { name: "Mai", vendas: 6000 },
  { name: "Jun", vendas: 5500 },
];

export default function ChartSection() {
  return (
   <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Vendas Mensais
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="vendas" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
