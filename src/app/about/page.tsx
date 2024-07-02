// 'use client';
import React from 'react';

export const getProducts = async () => {
	const data = await fetch('https://dummyjson.com/products', { cache: 'force-cache' });
	const products = await data.json();
	return products.products;
};

export default async function Aboutpage() {
	const products = await getProducts();

	return (
		<div>
			{products.map((product: any, index: any) => (
				<div key={index}>{product.title}</div>
			))}
		</div>
	);
}
