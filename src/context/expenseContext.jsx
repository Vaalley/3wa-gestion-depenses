import { createContext, useContext } from "react";
import useExpenseReducer from "../reducer/expenseReducer.jsx";

const expenseContext = createContext();

export const useExpenseContext = () => useContext(expenseContext);

const ExpenseContextProvider = ({ children }) => {
	const [state, dispatch] = useExpenseReducer();

	return (
		<expenseContext.Provider value={{ state, dispatch }}>
			{children}
		</expenseContext.Provider>
	);
};

export default ExpenseContextProvider;
