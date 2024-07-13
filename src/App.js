import React from "react";
// Import the useSelector and useDispatch hooks from the react-redux library
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";

import NewToDO from "./components/NewToDo/NewToDO";
import Todos from "./components/Todo/Todos";

const App = () => {
	// Get the useDispatch hook to dispatch actions to the store
	const dispatch = useDispatch();
		// Use the useSelector hook to select the todos array from the store
	const todos = useSelector((state) => state.todos);

    // Define an event handler to add a new todo to the store
	const addTodoHandler = (todo) => {
		const newTodo = {
			// Create a new todo object with the entered description and a default 'completed' value of false
			description: todo.description,
			completed: false
		};
	// Dispatch the 'AddObject' action with the newTodo object as the payload
		dispatch(counterActions.AddObject(newTodo));
	};

	return (
		<div>
			<NewToDO onAddExpense={addTodoHandler} />
			<Todos items={todos} />
		</div>
	);
};

export default App;
