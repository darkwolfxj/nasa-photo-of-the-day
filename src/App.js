import React from "react";
import "./App.css";
import PhotoRender from "./Components/PhotoRender";
import Body from "./Styles/Body";

function App() {
	return (
		<Body>
			<div className="App">
				<p>NASA Astronomy Photo of the Day</p>
			</div>
			<PhotoRender />
		</Body>
	);
}

export default App;
