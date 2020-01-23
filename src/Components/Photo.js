import React from "react";
import CopyrightCaption from "../Styles/copyright-caption";
import CopyrightDate from "../Styles/copyright-date";
import Headline from "../Styles/headline";
import Img from "../Styles/photo";
import styled from "styled-components";
const Div = styled.div`
	display: flex;
	justify-content: center;
`;
function Photo(props) {
	return (
		<>
			{console.log("This is props: ", props.data)}
			<Headline>{props.data.title}</Headline>
			{props.data.hdurl !== undefined ? (
				<Img src={props.data.hdurl} />
			) : (
				<Div>
					<iframe
						width="500"
						height="500"
						title={props.data.title}
						src={props.data.url}
					/>
				</Div>
			)}
			{console.log("this is url: ", props.data.hdurl)}
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
export { Photo };
