import React from "react";

export default function DisplayItem({
	listContainer,
	setListContainer,
	selectItem,
	setSelectItem,
}) {
	const deleteItem = (index) => {
		const filteredList = listContainer.filter((item) => item.v !== index);
		setListContainer(filteredList);
	};

	return (
		<div className="display-Wrap">
			<ol
				id="display-ol"
				type="1"
				
			>
				{listContainer.map((item, index) => (
					<li id="display-li" key={index}>
						<h4>{item.v}</h4>
						<button id="display-btn" onClick={() => deleteItem(item.v)}>
							x
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}
