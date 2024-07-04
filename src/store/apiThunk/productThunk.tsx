import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, getProductDetails } from '@/src/api/product';

interface Product {
	id: string;
	title: string;
}

export const getProductsThunk = createAsyncThunk<Product[], void, { rejectValue: string }>(
	'products/getProducts',
	async (_, thunkAPI) => {
		try {
			const response = await getProducts();
			return response.products;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const getProductDetailsThunk = createAsyncThunk<Product, number, { rejectValue: string }>(
	'products/getProductDetails',
	async (id, thunkAPI) => {
		try {
			const response = await getProductDetails(id);
			return response;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);
