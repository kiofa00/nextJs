'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	function handleClick() {
		// router.push("/about/post")
		router.back();
	}

	return (
		<div>
			<Link href="/products">Products</Link>
		</div>
	);
}
