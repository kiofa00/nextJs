'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from 'src/store/apiThunk/productThunk';
import { productsSelector } from 'src/store/selectors';
import { RootState, AppDispatch } from 'src/store/store';

type Product = {
  id: string;
  title: string;
  price:number
}

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => productsSelector(state));

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <main>
      {products.map((product: Product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
          <br />
        </div>
      ))}
    </main>
  );
};

export default ProductList;
