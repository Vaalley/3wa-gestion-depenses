import { useReducer } from "react";

const initialState = {
	expenses: [],
	filter: "",
	categories: [
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
	],
};

const expenseReducer = (state, action) => {
	switch (action.type) {
		case "add_expense":
			return {
				...state,
				expenses: state.expenses.concat([
					{
						id: Date.now(),
						titre: action.payload.titre,
						categorie: action.payload.categorie,
						amount: action.payload.amount,
					},
				]),
			};

		case "set_filter":
			return {
				...state,
				filter: action.payload,
			};

		default:
			return state;
	}
};

const useExpenseReducer = () => useReducer(expenseReducer, initialState);

export default useExpenseReducer;
