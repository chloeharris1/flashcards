import { configureStore } from "@reduxjs/toolkit";
// import reducer generated by the topics slice
import topicsReducer from "../features/topics/topicsSlice";
// import reducer generated by the quizzes slice
import quizzesReducer from "../features/quizzes/quizzesSlice";
export const store = configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
  },
});
