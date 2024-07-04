'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const ProductDetails = dynamic(() => import('./productDetails'), { ssr: false });

const Page: React.FC = () => {
  const params = useParams<{ productId: string }>();
  const { productId } = params;

  return (
    <main>
      <ProductDetails params={{ productId }} />
    </main>
  );
};

export default Page;
