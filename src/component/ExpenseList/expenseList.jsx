import { useExpenseContext } from "../../context/expenseContext";

const ExpenseList = () => {
	const { state } = useExpenseContext();

	return (
		<div>
			<h3>Liste des dépenses</h3>
			<input type="text" />
			<ul>
				{state.expenses.map((expense) => (
					<li key={expense.id}>
						{expense.titre} - {expense.amount} - {expense.categorie.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExpenseList;
