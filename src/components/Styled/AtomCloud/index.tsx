import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledAtomShell = styled.div<{ size: number; speed: number }>`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border: 0.5px solid gray;
	/* box-shadow: inset 0px 0px 5px 1px #c3d5ff; */
	border-radius: 50%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: ${rotate} linear infinite;
	animation-duration: ${({ speed }) => speed}s;
	/* transition: 0.3s opacity;
	opacity: 0; */
	display: none;
`;

export default StyledAtomShell;
