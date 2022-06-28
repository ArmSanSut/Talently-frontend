import { createSlice } from "@reduxjs/toolkit";
export const storeReducer = createSlice({
	name: "answer",
	initialState: {
		answers: [],
		current: 1,
		score: []
	},
	reducers: {
		addAnswer: (state, action) => {
			state.current++;
			state.answers.push(action.payload);
		},
		clearAnswer: (state) => {
			state.answers = [];
			state.current = 1;
		}
	}
});

export default storeReducer.reducer;

export const { addAnswer, clearAnswer } = storeReducer.actions;

