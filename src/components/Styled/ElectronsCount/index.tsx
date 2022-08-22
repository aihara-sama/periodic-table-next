import styled from "styled-components";

const StyledElectronsCount = styled.div<{ level: number }>`
	position: absolute;
	right: 5px;
	top: ${({ level = 1 }) => (level === 1 ? 5 : 15 * level - 10)}px;
	transition: 0.3 opacity;
	opacity: 0;
`;

export default StyledElectronsCount;
