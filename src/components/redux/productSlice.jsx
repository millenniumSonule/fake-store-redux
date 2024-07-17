import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    staus:'idle', //'idle' | loading | succeed | fail
    error: null
};

const productSlice = createSlice ({
    name: "products",
    initialState,
    reducers: {
        setProducts(state,action) {
            state.data = action.payload;
            state.staus = 'succeeded';
        },

        setProductsLoading (state) {
            state.staus = 'loading';
        },

        setProductsError(state,action) {
            state.staus = 'failed';
            state.error = action.payload;
        }

    }

});

export const { setProducts, setProductsLoading, setProductsError} = productSlice.actions;
export default productSlice.reducer;