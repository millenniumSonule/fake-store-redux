import axios from "axios";
import { setProducts, setProductsLoading, setProductsError } from "./productsSlice";

export const getProducts = () => async (dispatch) => {
    dispatch(setProductsLoading());
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
    } catch (error) {
        dispatch(setProductsError(error.toString()));
    }
};
