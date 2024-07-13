// Import necessary dependencies
import React from "react";
// Import the useDispatch hook from the 'react-redux' library
import { useDispatch } from "react-redux";
// Import the counterActions object from the Redux store
import { counterActions } from "../../store/index";

import { useState } from "react";
import "./TodoItem.css";


//define todo items component
const TodoItem = (props) => {

	// Get a reference to the dispatch function for dispatching actions to the store
	const dispatch = useDispatch();
	// Set up state variables for showing/hiding various UI elements
	const [showEditButton, setShowEditButton] = useState(true);
	const [showCancelButton, setShowCancelButton] = useState(false);
	const [showDescriptionText, setshowDescriptionText] = useState(true);
	const [showDescriptionTextArea, setshowDescriptionTextArea] = useState(false);
	const [islineThroughDescripion, setlineThroughDescripion] = useState(
		props.completed
	);

	// Handle change of "completed" checkbox for line-through effect
	const handleLineThroughDescriptChange = (event) => {
		setlineThroughDescripion(event.target.checked);
	}

	// Set up state variables for editing a todo item
	const [DescriptionText, setDescription] = useState(props.description);
	const [showSaveButton, setShowSaveButton] = useState(false);

	// Function to delete a todo item from the store
	const deleteDataItem = (id) => {
		dispatch(counterActions.DeleteObject(id));
	};
	// Function to start editing a todo item
	const editDataItem = (id) => {
		setShowEditButton(false);
		setShowCancelButton(true);
		setShowSaveButton(true);
		setshowDescriptionText(false);
		setshowDescriptionTextArea(true);
	};
// Function to save changes made to a todo item
	const saveDataItem = (id) => {
		// Create a new object with the updated todo item data
		const newDataItem = {
			id: id,
			description: DescriptionText,
			complete: islineThroughDescripion,
		};
		// Create an EditAction object to dispatch to the store with the updated data
		const EditAction = {
			id: id,
			newDataItem: newDataItem,
		};
		// Dispatch the EditAction to the store
		dispatch(counterActions.EditObject(EditAction))

		// Reset UI state variables to their initial values
		setShowEditButton(true);
		setShowCancelButton(false);
		setShowSaveButton(false);
		setshowDescriptionText(true);
		setshowDescriptionTextArea(false);
	};
// Function to cancel editing a todo item and reset UI state variables
	const cancelDataItem = (id) => {
		setShowEditButton(true);
		setShowCancelButton(false);
		setShowSaveButton(false);
		setshowDescriptionText(true);
		setshowDescriptionTextArea(false);
	};

// Handle changes made to the description text of a todo item being edited
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	
// Render the TodoItem component with appropriate UI elements and functionality
	return (
		<div className="job-item">
			{showDescriptionText && (
				<div
					className={`job-item__description ${
						islineThroughDescripion ? "line-through-description" : ""
					}`}
				>
					{props.description}
				</div>
			)}

			<div>
				{showDescriptionTextArea && (
					<textarea
						value={DescriptionText}
						onChange={handleDescriptionChange}
						id="item-text"
						name="Text1"
						cols="40"
						rows="5"
					>
					
					</textarea>
				)}
			</div>

			<button onClick={() => deleteDataItem(props.id)}>Delete</button>

			{showEditButton && (
				<button onClick={() => editDataItem(props.id)}>Edit</button>
			)}

			{showSaveButton && (
				<button onClick={() => saveDataItem(props.id)}>Save</button>
			)}
			{showCancelButton && (
				<button onClick={() => cancelDataItem(props.id)}>Cancel</button>
			)}

			<label>
				<input
					type="checkbox"
					checked={islineThroughDescripion}
					onChange={handleLineThroughDescriptChange}
				/>
				Completed?
			</label>
		</div>
	);
};

export default TodoItem;
