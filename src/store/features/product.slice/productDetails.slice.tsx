import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductDetailsThunk } from '@/src/store/apiThunk/productThunk';

interface ProductDetailsState {
	entity: any;
	loading: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: ProductDetailsState = {
	entity: null,
	loading: 'idle',
	error: null,
};

export const productDetailsSlice = createSlice({
	name: 'productDetails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProductDetailsThunk.pending, (state) => {
				state.loading = 'loading';
				state.error = null;
			})
			.addCase(getProductDetailsThunk.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.entity = action.payload; // Assuming action.payload is a single Product object
			})
			.addCase(getProductDetailsThunk.rejected, (state, action: PayloadAction<any>) => {
				state.loading = 'failed';
				state.error = action.payload ? (action.payload as string) : 'An error occurred';
			});
	},
});

export default productDetailsSlice.reducer;
