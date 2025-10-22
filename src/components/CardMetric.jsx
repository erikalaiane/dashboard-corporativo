export default function CardMetric({ title, value, change }) {
  const isNegative = change.startsWith("-");
  
  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{value}</p>
      <span className={`text-sm ${isNegative ? "text-red-500" : "text-green-500"}`}>
        {change}
      </span>
    </div>
  );
}
