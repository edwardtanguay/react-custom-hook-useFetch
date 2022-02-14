import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
		})();
	}, [url]);

	return [data];
}