import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/filterSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: { filter },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
