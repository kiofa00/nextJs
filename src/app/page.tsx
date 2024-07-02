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
			<Link href="/about">About</Link>
			<br />
			<button type="button" onClick={handleClick}>
				About/Post
			</button>
		</div>
	);
}
