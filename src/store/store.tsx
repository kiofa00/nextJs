import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './features/product.slice/product.slice';
import { productDetailsSlice } from './features/product.slice/productDetails.slice';

export const store = () => {
	return configureStore({
		reducer: {
			products: productsSlice.reducer,
			productDetails: productDetailsSlice.reducer,
		},
	});
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
