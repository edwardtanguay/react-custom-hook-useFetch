import { useEffect, useState } from 'react';

export const DictionarySearch = () => {
	const [wordObject, setWordObject] = useState([]);

	useEffect(() => {
		const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/response';
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
			setWordObject(data[0]);
		})();
	}, []);

	return (
		<>
			<h2>Dictionary</h2>
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
		</>
	)
}