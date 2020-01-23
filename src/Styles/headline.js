import styled from "styled-components";

const Headline = styled.p`
	text-align: center;
	font-size: 5rem;
	background: linear-gradient(red, orange, red, yellow);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: 900px) {
		font-size: 2rem;
	}
`;
export default Headline;
