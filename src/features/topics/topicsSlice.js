import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    // actions
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      // new topic object
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    },
    // add a quiz's id to the quizIds array
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

// export selector that select the topics object nested in initial state
export const selectTopics = (state) => state.topics.topics;
// export the action creators and reducer that the slice generates
export const { addTopic, addQuizId } = topicsSlice.actions;
// imported in the store as 'topicsReducer'
export default topicsSlice.reducer;
