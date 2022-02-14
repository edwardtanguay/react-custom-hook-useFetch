import _DictionarySearch from './components/DictionarySearch';
import _GutenbergBookSearch from './components/GutenbergBookSearch';
import './App.scss';
import { dataManager } from './hoc/dataManager';

const DictionarySearch = dataManager(_DictionarySearch);
const GutenbergBookSearch = dataManager(_GutenbergBookSearch);

function App() {

	return (
		<div className="App">
			<DictionarySearch />
			<GutenbergBookSearch />
		</div>
	);
}

export default App;