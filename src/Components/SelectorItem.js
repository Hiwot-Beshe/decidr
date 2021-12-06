import { useState } from "react";

export default function Selector({ listContainer, setListContainer }) {
	const [selectItem, setSelectItem] = useState("");
	// const winner = () => {
	//     setSelectItem(listContainer[Math.floor(Math.random() * listContainer.length)]);

	// };
	const winner = () => {
		const selectItem = Math.floor(Math.random() * listContainer.length);
		if (listContainer.length <= 1) {
			setSelectItem("");
			alert("The list must contain at least 2 items");
		} else if (listContainer.length > 1) {
			setSelectItem(listContainer[selectItem]);
		}
	};

	return (
		<div>
			<div className="selector-Wrap">
				{listContainer.length <= 1 ? (
					<h5 id="selector-h2">
						A minimum of two items is
						required for the get
						Selector item to work.
					</h5>
				) : (
					""
				)}
				<h2 id="selector-h2">{selectItem.v}</h2>
				{winner.length ? (
					<h2 className="selectedItem">{selectItem.v}</h2>
				) : (
					<button id="selector-btn" onClick={winner}>
						Selector Item
					</button>
				)}
			</div>
		</div>
	);
}
