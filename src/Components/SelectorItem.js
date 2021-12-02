import { useState } from "react";


export default function Selector({ listContainer, setListContainer, }) {
    const [selectItem, setSelectItem] = useState("");
    const winner = () => {
        setSelectItem(listContainer[Math.floor(Math.random() * listContainer.length)]);
		
    };
    return (
			<div>
				<div
					className="selector-Wrap"
					style={{
						width: "50%",
						height: " 5%",
						marginLeft: "20%",
						justifyContent: "space-between",
						display: "flex",
						boxSizing: "border-box",
						alignItems: "center",
						flexWrap: "wrap",
						wordBreak: "break-all",
						background:
							"linear-gradient(-45deg, #EE7752, #DBDBAC,#ffff00,#d3d3d3,#DBDBAC ,#23A6, #DBDBAC)",
					}}
				>
					<h2
						id="selector-h2"
						style={{
							width: "50%",
							height: " 5%",
							marginLeft: "20%",
							display: "flex",
							boxSizing: "border-box",
							alignItems: "center",
							flexWrap: "wrap",
							wordBreak: "break-all",
							background:
								"linear-gradient(-45deg,#DBDBAC,#23D5, #d3d3d3,#E73C,#DBDBAC )",
						}}
					>
						{selectItem.v}
					</h2>
					<button
						id="selector-btn"
						onClick={winner}
						style={{
							width: "50%",
							height: " 5%",
							marginLeft: "20%",
							display: "flex",
							boxSizing: "border-box",
							alignItems: "center",
							flexWrap: "wrap",
							wordBreak: "break-all",
							background:
								"linear-gradient(-45deg,#DBDBAC,#23D5, #d3d3d3,#E73C,#DBDBAC )",
						}}
					>
						Selector Item
					</button>
				</div>
			</div>
		);
}