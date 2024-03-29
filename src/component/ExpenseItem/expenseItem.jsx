/* import PropTypes from "prop-types";
import { useTodoContext } from "../../context/todoContext.jsx";

const TaskItem = ({ task }) => {
	const {
		state: { categories },
		dispatch,
	} = useTodoContext();
	const cat = categories.find((cat) => cat.id == task.categorie);

	const handleToggle = () => {
		dispatch({
			type: "toggle_task",
			payload: task.id,
		});
	};

	const handleDelete = () => {
		dispatch({
			type: "delete_task",
			payload: task.id,
		});
	};

	return (
		<div>
			<span>{task.titre}</span>
			<span>{cat.label}</span>
			{task.description !== "" && <span>{task.description}</span>}
			<button onClick={handleDelete}>X</button>
		</div>
	);
};

TaskItem.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string,
		titre: PropTypes.string,
		categorie: PropTypes.string,
		description: PropTypes.string,
		done: PropTypes.bool,
	}),
};

export default TaskItem;
 */
