/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const GutenbergBookSearch = ({ fetchData }) => {
	const [booksArray, setBooksArray] = useState([]);
	const [searchText, setSearchText] = useState('');

	const lookupText = (text) => {
		setBooksArray([]);
		setTimeout(async () => {
			const data = await fetchData(`https://gutendex.com/books/?search=${text}`);
			setBooksArray([...data.results]);
		}, 1000);
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
				{booksArray.length === 0 && (
					<div><FaSpinner className="spinner"/></div>
				)}
				{booksArray.length > 1 && (
					<ul>
						{booksArray.map((book, i) => {
							return (
								<li key={i}><a target="_blank" href={book.formats['text/html']} rel="noreferrer">{book.title}</a> - {book.authors[0].name}</li>
							)
						})}
					</ul>
				)}
			</div>
		</div>
	)
}

export default GutenbergBookSearch;