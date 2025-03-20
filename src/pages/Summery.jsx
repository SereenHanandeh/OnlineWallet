import transactions from "../data/transactions";

const Summary = () => {
  const totalIncome = transactions
    .filter((tx) => tx.type === "Income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpenses = transactions
    .filter((tx) => tx.type === "Expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = totalIncome + totalExpenses;

  return (
    <div className="container">
      <h2>Summary</h2>
      <p>
        Total Income: <strong style={{ color: "green" }}>${totalIncome}</strong>
      </p>
      <p>
        Total Expenses:{" "}
        <strong style={{ color: "red" }}>${Math.abs(totalExpenses)}</strong>
      </p>
      <p>
        Wallet Balance: <strong>${balance}</strong>
      </p>
    </div>
  );
};

export default Summary;
