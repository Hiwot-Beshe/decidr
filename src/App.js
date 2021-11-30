import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
	const [listContainer, setListContainer] = useState([]);
	const [items, setItems] = useState("");
	const [selectItem, setSelectItem] = useState("");
  const onchange = (e) => setItems(e.target.value);
  
  const addItem = () => {
		setListContainer([...listContainer, { v: listContainer }]);
		setListContainer("");
  };
  	const submitHandler = (event) => {
			event.preventDefault();
			event.target.reset();
    };
  const selector = () => {
		setSelectItem(listContainer[Math.floor(Math.random() * listContainer.length)]);
	};
	return (
		<div className="App">
			<header className="App-header">
		
				<h1>Decider</h1>
			</header>
      <div>
       
				<form onSubmit={submitHandler}>
					<label>
						List
						<input type="text" name="name" onChange={onchange} />
					</label>

					<button onClick={addItem}>Add</button>
				</form>
			</div>
		</div>
	);
}

export default App;
