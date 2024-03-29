import { useExpenseContext } from "../../context/expenseContext";

const ExpenseFilter = () => {
	const { state, dispatch } = useExpenseContext();
	const { categories } = state;

	const handleFilterChange = (e) => {
		const { value } = e.target;
		dispatch({
			type: "set_filter",
			payload: value,
		});
	};

	return (
		<div>
			<label htmlFor="filtre">Filtres : </label>
			<select value={state.filter} id="filtre" onChange={handleFilterChange}>
				<option value={""}>Toutes</option>
				{categories.map((cat) => (
					<option key={cat.id} value={cat.id}>
						{cat.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default ExpenseFilter;
