import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeReducer";

const store = configureStore({
	reducer: {
		quizPage : storeReducer
	}

});

export default store;
