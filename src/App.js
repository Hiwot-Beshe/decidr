import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import AddItem from "./Components/AddItem";

function App() {
  const [listContainer, setListContainer] = useState([]);
  console.log("List Container", listContainer);
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
		</div>
	);
}

export default App;
