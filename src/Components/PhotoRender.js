import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import axios from "axios";

export default function PhotoRender() {
	const [data, setData] = useState({});
	//get today's date
	var today = new Date();
	//format the date
	function formatDate() {
		let d = "" + today.getDate();
		let m = "" + (today.getMonth() + 1);
		let y = "" + today.getFullYear();

		if (d.length < 2) {
			d = "0" + m;
		}
		if (m.length < 2) {
			m = "0" + m;
		}
		return [y, m, d].join("-");
	}
	let thisDay =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

	let Today = formatDate(thisDay);

	const [date, setDate] = useState(Today);
	useEffect(() => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=QKaxrNzmkBuK7U6fww4gt7HPpRhQbn2YJkpAlFj1&date=${date}`
			)
			.then((response) => setData(response.data))
			.catch((error) => console.log("Data was not returned", error));
	}, [date]);
	const handleChange = (e) => {
		setDate(e.target.value);
	};
	return (
		<div className="photo-container">
			<form>
				<label htmlFor="date">Choose a Day</label>
				<input id="date" type="date" onChange={handleChange} value={date} />
			</form>
			<Photo data={data} />
		</div>
	);
}
