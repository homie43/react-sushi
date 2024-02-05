import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SortPropertyEnum } from '../../../types/types';
import { SortItem } from '../../../components/Sort';

export interface FilterState {
    categoryId: number;
    sortValue: SortItem;
}

const initialState: FilterState = {
    categoryId: 0,
    sortValue: {
        name: 'популярности 👆',
        sortProp: SortPropertyEnum.RATING,
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSort: (state, action: PayloadAction<SortItem>) => {
            state.sortValue = action.payload;
        },
    },
});

export const { changeCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
