'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store, AppStore } from 'src/store/store';

export function Providers({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		storeRef.current = store();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
