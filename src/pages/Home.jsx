import transactions from "../data/transactions";
import "../styles/table.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td>{tx.type}</td>
              <td>${tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
