import TodoForm from "./TodoForm";
import "./NewToDO.css";


//display enterty form and provide new todo items
const NewToDO = (props) => {

	const saveJobDataHandler = (enteredJobData) => {
		const expenseData = {
			...enteredJobData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-todo">
			<TodoForm onSaveJobData={saveJobDataHandler} />
		</div>
	);
};

export default NewToDO;
