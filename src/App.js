import { DictionarySearch } from './components/DictionarySearch';
import { GutenbergBookSearch } from './components/GutenbergBookSearch';
import './App.scss';

function App() {

	return (
		<div className="App">
			<DictionarySearch />
			<GutenbergBookSearch />
		</div>
	);
}

export default App;