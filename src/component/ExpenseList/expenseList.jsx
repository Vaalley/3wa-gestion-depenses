import { useExpenseContext } from "../../context/expenseContext";
import ExpenseFilter from "../ExpenseFilter/expenseFilter.jsx";

const ExpenseList = () => {
	const { state } = useExpenseContext();
	const { expenses, filter } = state;

	const filteredExpenses = filter
		? expenses.filter((expense) => expense.categorie.id === parseInt(filter))
		: expenses;
	return (
		<div className="container">
			<h2>Liste des dépenses</h2>
			<ExpenseFilter />
			<table className="table">
				<colgroup>
					<col style={{ width: "33%" }} />
					<col style={{ width: "33%" }} />
					<col style={{ width: "33%" }} />
				</colgroup>
				<thead>
					<tr>
						<th>Titre</th>
						<th>Dépense (€)</th>
						<th>Catégorie</th>
					</tr>
				</thead>
				<tbody>
					{filteredExpenses.map((expense) => (
						<tr key={expense.id}>
							<td>{expense.titre}</td>
							<td>{expense.amount}</td>
							<td>{expense.categorie.name}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="footer">
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
