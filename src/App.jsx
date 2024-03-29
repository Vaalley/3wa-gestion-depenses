import "./App.css";
import ExpenseForm from "./component/ExpenseForm/expenseForm";
import ExpenseList from "./component/ExpenseList/expenseList";

function App() {
	return (
		<div className="app">
			<ExpenseForm />
			<ExpenseList />
		</div>
	);
}

export default App;
