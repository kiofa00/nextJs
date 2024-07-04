'use client';

import { getProductDetailsThunk } from '@/src/store/apiThunk/productThunk';
import { productDetailsSelector } from '@/src/store/selectors';
import { RootState, AppDispatch } from '@/src/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ProductDetailProps {
	params: {
		productId: string;
	};
}

type Product = {
	id: string;
	title: string;
	description: string;
	price: number;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ params: { productId } }) => {
	const dispatch = useDispatch<AppDispatch>();
	const product: Product = useSelector((state: RootState) => productDetailsSelector(state));
	const router = useRouter();

	useEffect(() => {
		if (productId) {
			dispatch(getProductDetailsThunk(Number(productId)));
		}
	}, [dispatch, productId]);

	function handleBack() {
		router.back();
	}

	return (
		<main>
			<div>{product?.title}</div>
			<div>{product?.description}</div>
			<br />
			<button type="button" onClick={() => handleBack()}>
				Back
			</button>
		</main>
	);
};

export default ProductDetails;
