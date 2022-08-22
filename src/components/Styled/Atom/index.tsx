import styled from "styled-components";

const StyledAtom = styled.div<{ active: boolean }>`
	border: 1px solid gray;
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 9999;
	transition: 0.3s;
	transform: ${({ active }) => `scale(${active ? 1.2 : 1})`};

	.atom-shell {
		display: ${({ active }) => (active ? "block" : "none")};
	}
`;

export default StyledAtom;
