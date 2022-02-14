import _DictionarySearch from './components/DictionarySearch';
import { GutenbergBookSearch } from './components/GutenbergBookSearch';
import './App.scss';
import { dataManager } from './hoc/dataManager';

const DictionarySearch = dataManager(_DictionarySearch);

function App() {

	return (
		<div className="App">
			<DictionarySearch />
			<GutenbergBookSearch />
		</div>
	);
}

export default App;