'use client'
import Header from '@/components/header/page';
import React, { useEffect, useState } from 'react';

export interface AboutProps {}

export default function AboutPage(props: AboutProps) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('https://dummyjson.com/products');
			const data = await response.json();
			setProducts(data.products);
		})();
	}, []);

	return (
		<div>
			<h1>About Page</h1>
			<Header />

			<ul>
				{products.map((product: any) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
}
