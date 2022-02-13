import { useEffect, useState } from 'react';
import './App.scss';

function App() {
	const [word, setWord] = useState('');

	useEffect(() => {
		const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/acquiesce';
		(async () => {
			const response = await fetch(url);
			const word = await response.json();
			console.log(word);
		})();


	}, []);

	return (
		<div className="App">
			<h1>Dictionary</h1>
		</div>
	);
}

export default App;