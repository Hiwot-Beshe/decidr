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
		<div
			className="display-Wrap"
			style={{
				width: "50%",
				height: " 5%",
				marginLeft: "20%",
				justifyContent: "space-evenly",
				display: "flex",
				boxSizing: "border-box",
				alignItems: "center",
				overflow: "auto",
				background:
					"linear-gradient(-45deg, #EE7752, #DBDBAC,#ffff00,#d3d3d3,#DBDBAC , #23D5AB)",
			}}
		>
			<ol
				id="display-ol"
				type="1"
				style={{
					paddingInlineStart: "0",
					flexWrap: "wrap",
					maxWidth: "40%",
					wordBreak: "break-all",
				}}
			>
				{listContainer.map((item, index) => (
					<li
						id="display-li"
						key={index}
						style={{
							paddingInlineStart: "0",
							justifyContent: "space-between",
							overflow: "initial",
						}}
					>
						<h4>{item.v}</h4>
						<button
							id="display-btn"
							style={{
								alignItems: "self-end",
							}}
							onClick={() => deleteItem(item.v)}
						>
							x
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}
