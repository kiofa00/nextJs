import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsThunk } from '@/src/store/apiThunk/productThunk';

interface ProductsState {
	entities: any[];
	loading: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: ProductsState = {
	entities: [],
	loading: 'idle',
	error: null,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.pending, (state) => {
				state.loading = 'loading';
				state.error = null;
			})
			.addCase(getProductsThunk.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.entities = action.payload;
			})
			.addCase(getProductsThunk.rejected, (state, action: PayloadAction<any>) => {
				state.loading = 'failed';
				state.error = action.payload ? (action.payload as string) : 'An error occurred';
			});
	},
});

export default productsSlice.reducer;
