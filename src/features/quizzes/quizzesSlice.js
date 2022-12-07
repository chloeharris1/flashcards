import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    id: "",
    topicId: "",
    name: "",
    cardsId: []
  }
});
