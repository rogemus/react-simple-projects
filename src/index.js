import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAkQ6ImxYaZdDV-ON6g_AqPWjhlHkGBMB8';

const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
	);
}

ReactDOM.render(
	<App/>, document.getElementById('app'));
