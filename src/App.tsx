import React, { FC } from "react";

import "./App.css";

interface AppProps {
	sendSearchQuery(): void;
}

// type AppProps = {
// 	sendSearchQuery?(): void;
// }

const App: FC<AppProps> = ({ sendSearchQuery = () => undefined }) => {
	const [searchValue, setSearchValue] = React.useState<string>();

	const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const search = () => {
		sendSearchQuery();
	};
	return (
		<div>
			<input
				value={searchValue}
				type="text"
				name="search"
				onChange={onSearchInput}
				id=""
			/>
			<button onClick={search}>search</button>
		</div>
	);
};

export default App;
