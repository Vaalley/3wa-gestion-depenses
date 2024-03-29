import { useState } from "react";
import { useExpenseContext } from "../../context/expenseContext.jsx";

export const categories = [
	{
		id: 1,
		name: "Alimentation",
	},
	{
		id: 2,
		name: "Logement",
	},
	{
		id: 3,
		name: "Transport",
	},
	{
		id: 4,
		name: "Divertissement",
	},
	{
		id: 5,
		name: "Santé",
	},
	{
		id: 6,
		name: "Éducation",
	},
	{
		id: 7,
		name: "Autres",
	},
];

const ExpenseForm = () => {
	const { state, dispatch } = useExpenseContext();
	const initialState = {
		titre: "",
		amount: "",
		categorie: "",
	};

	const [expense, setExpense] = useState(initialState);
	const [message, setMessage] = useState("");
	const handleChange = (e) => {
		const { name, value } = e.target;
		setExpense({
			...expense,
			[name]: value,
		});
		setMessage("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (expense.titre.trim() === "") {
			setMessage("Merci de remplir le champs Titre");
			return;
		}
		if (expense.categorie === "") {
			setMessage("Merci de sélectionner une catégorie");
			return;
		}

		dispatch({
			type: "add_expense",
			payload: {
				...expense,
				titre: expense.titre.trim(),
				categorie: categories.find(
					(cat) => cat.id === parseInt(expense.categorie)
				),
			},
		});
		setExpense(initialState);
		setMessage("");
	};

	return (
		<form onSubmit={handleSubmit} className={"taskForm"}>
			<h3>Ajouter une dépense</h3>
			{message !== "" && <span style={{ color: "red" }}>{message}</span>}
			<input
				onChange={handleChange}
				type="text"
				name={"titre"}
				placeholder={"Titre"}
				value={expense.titre}
			/>
			<input
				onChange={handleChange}
				type="text"
				pattern="^[0-9,.]+$"
				name={"amount"}
				placeholder={"Montant"}
				value={expense.amount}
			/>
			<select
				onChange={handleChange}
				name="categorie"
				value={expense.categorie}
			>
				<option value={""}>---- Categorie ----</option>
				{categories.map((cat) => {
					return (
						<option key={cat.id} value={cat.id}>
							{cat.name}
						</option>
					);
				})}
			</select>
			<input type="submit" value={"ajouter"} />
		</form>
	);
};

export default ExpenseForm;
