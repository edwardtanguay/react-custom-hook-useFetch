import { useEffect, useState } from 'react';

export const GutenbergBookSearch = () => {
	const [booksArray, setBooksArray] = useState([]);
	const [searchText, setSearchText] = useState('nnn');

	const lookupText = (text) => {
		const url2 = `https://gutendex.com/books/?search=${text}`;
		(async () => {
			const response = await fetch(url2);
			const data = await response.json();
			setBooksArray([...data.results]);
		})();
	}

	useEffect(() => {
		lookupText('lewis');
	}, []);

	const handleSearchTextClick = (e) => {
		lookupText(searchText);
	}

	return (
		<>
			<h2>Gutenberg Books: <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} /> <button onClick={(e) => handleSearchTextClick(e)} >Search</button></h2>
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