import React, { useState } from "react";

import "./ToDoForm.css";

const TodoForm = (props) => {
	
// Define a state variable to hold the description entered by the user
	const [enteredDescription, setEnteredDescription] = useState("");

	// Event handler for the description input field
	const descriptionChangeHandler = (event) => {
		setEnteredDescription(event.target.value);
	};

	// Event handler for the form submission
	const submitHandler = (event) => {
		event.preventDefault();
		// Create a new job object using the entered description
		const jobData = {
			description: enteredDescription,
		};
		// Send the new job data to the parent component using a callback function passed in as props
		props.onSaveJobData(jobData);

		// Reset the description state variable to clear the input field			
		setEnteredDescription("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Todo List</label>
					<input
						type="text"
						value={enteredDescription}
						onChange={descriptionChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add</button>
			</div>
		</form>
	);
};

export default TodoForm;
