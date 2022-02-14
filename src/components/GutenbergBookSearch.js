import { useEffect, useState } from 'react';

export const GutenbergBookSearch = () => {
	const [booksArray, setBooksArray] = useState([]);

	useEffect(() => {
		const url2 = 'https://gutendex.com/books/?search=palmer';
		(async () => {
			const response = await fetch(url2);
			const data = await response.json();
			console.log(data);
			setBooksArray([...data.results]);
		})();
	}, []);


	return (
		<>
			<h2>Gutenberg Books</h2>
			<ul>
				{booksArray.map((book, i) => {
					return (
						<li key={i}><a target="_blank" href={book.formats['text/html']} rel="noreferrer">{book.title}</a> - {book.authors[0].name}</li>
					)
				})}
			</ul>
		</>
	)
}