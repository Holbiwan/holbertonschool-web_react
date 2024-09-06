import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

const Notification = () => {
	const handleButtonClick = () => {
		console.log("Close button has been clicked");
	};
	return (
		<div className="Notifications">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<p>Here is the list of notifications</p>
				<button
					style={{ background: "none", border: "none", cursor: "pointer" }}
					onClick={handleButtonClick}
				>
					<img
						src={closeIcon}
						alt="Close"
						style={{ width: "20px", height: "20px" }}
					/>
				</button>
			</div>

			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li
					data-priority="urgent"
					dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
				/>
			</ul>
		</div>
	);
};

export default Notification;
