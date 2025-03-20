import { PieChart, Pie, Cell, Tooltip } from "recharts";
import transactions from "../data/transactions";
import "../styles/summary.css";

const Summary = () => {
  const totalIncome = transactions
    .filter((tx) => tx.type === "Income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpenses = transactions
    .filter((tx) => tx.type === "Expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = totalIncome + totalExpenses;

  const data = [
    { name: "Income", value: totalIncome, color: "#4CAF50" },
    { name: "Expenses", value: Math.abs(totalExpenses), color: "#e74c3c" },
  ];

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <p>
        Total Income:{" "}
        <strong style={{ color: "#4CAF50" }}>${totalIncome}</strong>
      </p>
      <p>
        Total Expenses:{" "}
        <strong style={{ color: "#e74c3c" }}>${Math.abs(totalExpenses)}</strong>
      </p>
      <p>
        Wallet Balance: <strong>${balance}</strong>
      </p>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Summary;
