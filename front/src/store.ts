import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import bestSellersReducer from "./features/bestSellers/bestSellersReducer";

export const store = configureStore({
  reducer: {
    bestSellers: bestSellersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch