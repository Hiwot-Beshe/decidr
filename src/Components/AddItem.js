import { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
	const [newItem, setNewItem] = useState("");
	const formSubmit = (event) => {
		event.preventDefault();
		event.target.reset();
	};
	const addItem = () => {
		setListContainer([...listContainer, { v: newItem }]);
		setNewItem("");
	};

	return (
		<div>
			<form
				id="addItem-form"
				onSubmit={formSubmit}
				style={{
					width: "50%",
					height: " 5%",
					marginTop: "50px",
					marginLeft: "20%",
					justifyContent: "space-between",
					display: "flex",
					boxSizing: "border-box",
					alignItems: "center",

					background:
						"linear-gradient(-45deg,#ff0000,#DBDB,#FFFF00,#DBDBAC , #FFFF00,  #23D5AB)",
				}}
			>
				<input
					id="add-item"
					style={{
						width: "50%",
						height: " 10%",
						justifyContent: "space-between",
						display: "flex",
						boxSizing: "border-box",
						alignItems: "center",
						background:
							"linear-gradient(-45deg,#FF0000,#FFFF00,#00FF00,#23A6D5, #fff)",
					}}
					value={newItem}
					onChange={(event) => setNewItem(event.target.value)}
					placeholder="Add an item"
				/>
				<button id="submit-item" onClick={addItem} type="submit">
					Add Item
				</button>
			</form>
		</div>
	);
}
