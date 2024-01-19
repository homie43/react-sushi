import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
    categoryId: number;
}

const initialState: FilterState = {
    categoryId: 0,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
    },
});

export const { changeCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
