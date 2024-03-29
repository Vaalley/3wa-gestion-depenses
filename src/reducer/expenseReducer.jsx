import { useReducer } from "react";

const initialState = {
	expenses: [],
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

		default:
			return state;
	}
};

const useExpenseReducer = () => useReducer(expenseReducer, initialState);

export default useExpenseReducer;
