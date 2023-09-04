import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
    numOfIcecream: 20,
};

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--;
        },
        restocked: (state, action) => {
            state.numOfIcecream += action.payload;
        },
    },
    /* when a cake is ordered, one icecream will also be reduced.
    1. one way
    extraReducers: {
        ['cake/ordered']: (state)=>{
            state.numOfIcecream--;
        }
    },
     2. second way */
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecream--;
        });
    }
});

export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions;