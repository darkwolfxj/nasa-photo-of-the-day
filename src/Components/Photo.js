import React from "react";
import CopyrightCaption from "../Styles/copyright-caption";
import CopyrightDate from "../Styles/copyright-date";
import Headline from "../Styles/headline";
import Img from "../Styles/photo";

export default function Photo(props) {
	return (
		<>
			<Headline>{props.data.title}</Headline>
			<Img src={props.data.hdurl} alt="nasa apod" />
			<CopyrightCaption>
				<CopyrightDate>
					<p> {props.data.copyright} </p> <p> {props.data.date}</p>
				</CopyrightDate>
				<div>
					<p> {props.data.explanation} </p>
				</div>
			</CopyrightCaption>
		</>
	);
}
