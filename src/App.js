import { useEffect, useState } from 'react';
import { DictionarySearch } from './components/DictionarySearch';
import './App.scss';

function App() {
	const [booksArray, setBooksArray] = useState([]);

	useEffect(() => {
		const url2 = 'https://gutendex.com/books/?search=colorado';
		(async () => {
			const response = await fetch(url2);
			const data = await response.json();
			console.log(data);
			setBooksArray([...data.results]);
		})();
	}, []);

	return (
		<div className="App">
			<DictionarySearch/>

			<h2>Gutenberg Books</h2>
			<ul>
				{booksArray.map((book, i) => {
					return (
						<li key={i}><a target="_blank" href={book.formats['text/html']} rel="noreferrer">{book.title}</a> - {book.authors[0].name}</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;