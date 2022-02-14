export const dataManager = Component => (props) => {

	const fetchData = (url) => {
		return new Promise(async resolve => {
			const response = await fetch(url);
			const data = await response.json();
			resolve(data);
		});
	}

	return <Component {...props} fetchData={fetchData}/>
}
