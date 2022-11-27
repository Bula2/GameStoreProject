import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import bestsellersReducer from "./bestsellers-reducer";
import gamesReducer from "./games-reducer";
import basketReducer from "./basket-reducer";

export const store = configureStore({
  reducer: {
    bestsellers: bestsellersReducer,
    games: gamesReducer,
    basket: basketReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch