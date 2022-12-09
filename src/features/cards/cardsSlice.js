import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    // actions
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      // new card object
      state.cards[id] = {
        front,
        back
      };
    }
  }
});

// export selector that select the cards object
export const selectCards = (state) => state.cards.cards;
// export the actoion creator and reducer that the slice generates
export const { addCard } = cardsSlice.actions;
// export reducer
export default cardsSlice.reducer;
