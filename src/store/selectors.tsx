import { RootState } from './store';

export const productsSelector = (state: RootState) => state.products.entities;
export const productDetailsSelector = (state: RootState) => state.productDetails.entity;

