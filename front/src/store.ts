import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import bestSellersReducer from "./features/bestSellers/bestSellersReducer";
import gamesReducer from "./features/games/gamesReducer";

export const store = configureStore({
  reducer: {
    bestSellers: bestSellersReducer,
    games: gamesReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch