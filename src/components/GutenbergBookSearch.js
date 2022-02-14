import { useEffect, useState } from 'react';

const GutenbergBookSearch = ({fetchData}) => {
	const [booksArray, setBooksArray] = useState([]);
	const [searchText, setSearchText] = useState('nnn');

	const lookupText = (text) => {
		(async () => {
			const data = await fetchData(`https://gutendex.com/books/?search=${text}`);
			setBooksArray([...data.results]);
		})();
	}

	useEffect(() => {
		const _searchText = 'ocean';
		setSearchText(_searchText);
		lookupText(_searchText);
	}, []);

	const handleSearchTextClick = (e) => {
		lookupText(searchText);
	}

	return (
		<div className="component gutenbergComponent">
			<h2>Gutenberg Books: <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} /> <button onClick={(e) => handleSearchTextClick(e)} >Search</button></h2>
			<div className="content">
				<ul>
					{booksArray.map((book, i) => {
						return (
							<li key={i}><a target="_blank" href={book.formats['text/html']} rel="noreferrer">{book.title}</a> - {book.authors[0].name}</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default GutenbergBookSearch;