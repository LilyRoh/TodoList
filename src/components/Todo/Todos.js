import TodoItem from "./TodoItem";
import "./Todos.css";


const Todos = (props) => {

	const todos = Object.entries(props.items);

	return (
		<div className="jobs">
			<h2>TO DO LIST</h2>

			{todos.map((todo) => (
				<TodoItem
					key={todo[0]}
					id={todo[0]}
					description={todo[1].description}
					completed={todo[1].completed}
				/>
			))}
		</div>
	);
};

export default Todos;