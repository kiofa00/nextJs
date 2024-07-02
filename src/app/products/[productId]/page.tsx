// 'use client';

async function getProduct(id: number) {
	const res = await fetch('https://dummyjson.com/products/' + id, {
		next: {
			revalidate: 60,
		},
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export default async function ProductDetail({ params }: any) {
	const productId = params.productId;
	const product = await getProduct(productId);

	return <div>{product.title}</div>;
}
