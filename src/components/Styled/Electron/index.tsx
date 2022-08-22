import styled from "styled-components";
import { getPointCoords } from "../../../Utils";

const StyledElectron = styled.div<{ angle: number; radius: number }>`
	width: 6px;
	height: 6px;
	box-shadow: 0 0 10px 2px white;
	background-color: #02010f;
	border-radius: 50%;
	position: absolute;
	left: ${({ angle, radius }) =>
		getPointCoords(radius, radius, angle, "x", 6)}px;
	top: ${({ angle, radius }) =>
		getPointCoords(radius, radius, angle, "y", 6)}px;
`;

export default StyledElectron;
