import React, { FunctionComponent } from "react";
import StyledElectron from "../Styled/Electron";

interface IProps {
	angle: number;
	radius: number;
}

const Electron: FunctionComponent<IProps> = ({ angle, radius }) => {
	// ~~~~~ Redux state ~~~~~

	// ~~~~~ Hooks ~~~~~

	// ~~~~~ Cmp state ~~~~~

	// ~~~~~ Refs ~~~~~

	// ~~~~~ Effects ~~~~~

	// ~~~~~ Handlers ~~~~~

	return <StyledElectron angle={angle} radius={radius} className="electron" />;
};

export default Electron;
