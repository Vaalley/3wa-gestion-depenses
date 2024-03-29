import { useExpenseContext } from "../../context/expenseContext";
import ExpenseFilter from "../ExpenseFilter/expenseFilter.jsx";

const ExpenseList = () => {
	const { state } = useExpenseContext();
	const { expenses, filter } = state;

	const filteredExpenses = filter
		? expenses.filter((expense) => expense.categorie.id === parseInt(filter))
		: expenses;
	return (
		<div>
			<h3>Liste des dépenses</h3>
			<ExpenseFilter />
			<ul>
				{filteredExpenses.map((expense) => (
					<li key={expense.id}>
						{expense.titre} - {expense.amount} - {expense.categorie.name}
					</li>
				))}
			</ul>
			<div>
				Total :{" "}
				{parseFloat(
					filteredExpenses.reduce(
						(total, expense) => parseFloat(total) + parseFloat(expense.amount),
						0
					)
				)}
			</div>
		</div>
	);
};

export default ExpenseList;
