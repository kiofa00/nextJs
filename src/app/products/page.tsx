// 'use client';
import Link from 'next/link';

async function getData() {
	const res = await fetch('https://dummyjson.com/products', { cache: 'force-cache' });
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	const products = await res.json();
	return products.products;
}

export default async function Page() {
	const data = await getData();
	return (
		<main>
			{data.map((product: any) => (
				<div key={product.id}>
					<Link href={`/products/${product.id}`}>
						{product.title}
					</Link>
					<br />
				</div>
			))}
		</main>
	);
}
