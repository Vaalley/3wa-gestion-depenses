import "./App.css";
import ExpenseForm from "./component/ExpenseForm/expenseForm";
import ExpenseList from "./component/ExpenseList/expenseList";

function App() {
	return (
		<div className="app">
			<h1>Gestion des dépenses</h1>
			<ExpenseForm />
			<ExpenseList />
		</div>
	);
}

export default App;
