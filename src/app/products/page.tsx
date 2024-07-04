import dynamic from 'next/dynamic';

const ProductList = dynamic(() => import('./productList'), { ssr: false });

const Page: React.FC = () => {
	return (
		<main>
			<ProductList />
		</main>
	);
};

export default Page;
