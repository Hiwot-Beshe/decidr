import { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
	const [newItem, setNewItem] = useState("");
	const formSubmit = (event) => {
		event.preventDefault();
		event.target.reset();
	};
	

	const addItem = () => {
		if (newItem === " ") {
			alert("Please add a new item in order to continue.");
		} else if (newItem.length === 0) {
			setListContainer([...listContainer]);
			alert("Please add a new item in order to continue.");
		} else {
			setListContainer([...listContainer, { v: newItem }]);
			setNewItem("");
		}
		}
	
	

	return (
		<div>
			<form id="addItem-form" onSubmit={formSubmit}>
				<input
					id="add-item"
					value={newItem}
					onChange={(event) => setNewItem(event.target.value)}
					placeholder="Add an item"
				/>
				{listContainer.length ? (
					<p>Number of Items: {listContainer.length}</p>
				) : (
					""
				)}
				<button id="submit-item" onClick={addItem}  type="submit">
					Add Item
				</button>
			</form>
		</div>
	);
}
