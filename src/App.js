import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import AddItem from "./Components/AddItem";
import SelectorItem from "./Components/SelectorItem";
import DisplayItem from "./Components/DisplayItem";

function App(selectItem, setSelectItem) {
	const [listContainer, setListContainer] = useState([]);
	
	return (
		<div className="App">
			<header className="App-header">
				<p>Decidr</p>
			</header>
			<div>
				<AddItem
					listContainer={listContainer}
					setListContainer={setListContainer}
				/>
			</div>
			<div>
				<DisplayItem
					listContainer={listContainer}
					setListContainer={setListContainer}
				/>
			</div>
			<div>
				<SelectorItem
					listContainer={listContainer}
					setListContainer={setListContainer}
					selectItem={selectItem}
					setSelectItem={setSelectItem}
				/>
			</div>
		</div>
	);
}

export default App;
