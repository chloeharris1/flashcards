import { createSlice } from "@reduxjs/toolkit";
// import addQuizId action
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    // actions
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      // new quiz object
      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds
      };
    }
  }
});

// creating a new quiz and associating it with its topic are part of a single process, so:
// action creator that returns a thunk that dispatches these two actions one after the other
export const addQuizForTopicId = (quiz) => {
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizId({ quizId: quiz.id, topicId: quiz.topicId }));
  };
};

// export selector that select the quizzes object nested in initial state
export const selectQuizzes = (state) => state.quizzes.quizzes;
// export the action creators and reducer that the slice generates
export const { addQuiz } = quizzesSlice.actions;
// imported in the store as 'quizzesReducer'
export default quizzesSlice.reducer;
