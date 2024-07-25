import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    data:[],
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        fetchProductSuccess(state,actions) {
            state.data = actions.payload;
        }
    }
});

export const {} = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
    return async function getProductsThunk(dispatch,getState) {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response;
    }
}