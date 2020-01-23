import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import axios from "axios";

export default function PhotoRender() {
	const [data, setData] = useState({});
	var today = new Date();
	var Today =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
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
			<Photo data={data} />
			<form>
				<label for="date">Choose a Day</label>
				<input id="date" type="date" onChange={handleChange} value={date} />
			</form>
		</div>
	);
}
