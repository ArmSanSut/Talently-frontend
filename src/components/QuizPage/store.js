import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeReducer";

const store = configureStore({
	reducer: {
		answer : storeReducer
	}
});

export default store;
