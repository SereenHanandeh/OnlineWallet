import users from "../data/users";
import "../styles/table.css";

const Admin = () => {
  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthdate</th>
            <th>Total Income</th>
            <th>Total Expenses</th>
            <th>Wallet Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.birthdate}</td>
              <td>${user.totalIncome}</td>
              <td style={{ color: "red" }}>${Math.abs(user.totalExpenses)}</td>
              <td>${user.walletBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
