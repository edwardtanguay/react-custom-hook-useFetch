import { useEffect, useState } from 'react';

const DictionarySearch = ({ fetchData }) => {
	const [searchWord, setSearchWord] = useState('');
	const [wordObject, setWordObject] = useState([]);

	const lookupWord = (word) => {
		(async () => {
			const data = await fetchData(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
			setWordObject(data[0]);
		})();
	}

	useEffect(() => {
		const _searchWord = 'steel';
		setSearchWord(_searchWord);
		lookupWord(_searchWord);
	}, []);

	const handleSearchWordClick = (e) => {
		lookupWord(searchWord);
	}

	return (
		<div className="component">
			<h2>Dictionary: <input type="text" value={searchWord} onChange={e => setSearchWord(e.target.value)} /> <button onClick={(e) => handleSearchWordClick(e)} >Search</button></h2>
			<div className="content">
				{wordObject.word && (
					<div className="wordArea">
						<div className="wordInfo">
							<span className="word">{wordObject.word}</span> <span className="partOfSpeech">({wordObject.meanings[0].partOfSpeech})</span>
						</div>
						<ul>
							<li>
								<div className="definition">{wordObject.meanings[0].definitions[0].definition.slice(0, -1)}</div>
								<div className="example">"{wordObject.meanings[0].definitions[0].example}"</div>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default DictionarySearch;