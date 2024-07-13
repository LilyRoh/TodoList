// Importing the createSlice and configureStore functions from Redux Toolkit library
import { createSlice, configureStore } from "@reduxjs/toolkit";
// Defining the initial state for the store
const initialState = {
	nextId: 3,
	todos: {
		1: {
		
			description:
				"Go to supermarker",
			completed: true,
		},
		2: {
			
			description:
				"Meet friends"
		},
	},
};
// Creating a slice of the store using createSlice function
const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		AddObject(state, action) {
			state.todos[state.nextId] = action.payload;
			state.nextId += 1;
		},
		DeleteObject(state, action) {
			delete state.todos[action.payload];
		},
		
		EditObject(state, action) {
			state.todos[action.payload.id] = action.payload.newDataItem;
		},
	},
});
// Creating a store by calling configureStore function and passing the counterSlice reducer
const store = configureStore({
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
