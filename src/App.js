import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Expense } from "./components/Expense";
import { ExpenseHistory } from "./components/Expense_History";
import { AddNewExpense } from "./components/AddNewExpense";

function App() {
  return (
    <div className="tracker">
      <Header />
      <AddNewExpense />
      <ExpenseHistory />
      <Expense />
      <Balance />
    </div>
  );
}

export default App;
