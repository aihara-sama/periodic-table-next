import styled from "styled-components";

const StyledAtomStructure = styled.div<{ level: number }>`
	position: absolute;
	top: ${({ level = 1 }) => (level === 1 ? 5 : 25 * level - 20)}px;
	right: 5px;
`;
export default StyledAtomStructure;
