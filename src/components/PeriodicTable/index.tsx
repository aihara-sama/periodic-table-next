import { FunctionComponent } from "react";

import Atom from "../Atom";
import StyledPeriodicTable from "../Styled/PeriodicTable";
import { IChemicalElement } from "../../Interfaces/element.interface";
import chemicalElements from "../../DB/chemical-elements.json";

const elements: IChemicalElement[] = chemicalElements as IChemicalElement[];

const PeriodicTable: FunctionComponent = () => {
	// ~~~~~ Redux state ~~~~~

	// ~~~~~ Hooks ~~~~~

	// ~~~~~ Cmp state ~~~~~

	// ~~~~~ Refs ~~~~~

	// ~~~~~ Effects ~~~~~

	// ~~~~~ Handlers ~~~~~

	return (
		<StyledPeriodicTable className="periodic-table">
			{elements.map((element, idx) => (
				<Atom key={idx} active={false} {...element} />
			))}
		</StyledPeriodicTable>
	);
};

export default PeriodicTable;
