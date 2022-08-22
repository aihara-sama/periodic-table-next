import { FunctionComponent, useState } from "react";
import { IChemicalElement } from "../../Interfaces/element.interface";
import AtomShell from "../AtomShell";
import StyledAtom from "../Styled/Atom";
import StyledAtomicMass from "../Styled/AtomicMass";
import StyledAtomicNumber from "../Styled/AtomicNumber";
import StyledAtomMeta from "../Styled/AtomMeta";
import StyledAtomName from "../Styled/AtomName";
import StyledAtomOverlay from "../Styled/AtomOverlay";
import StyledAtomStructure from "../Styled/AtomStructure";
import StyledChemicalSymbol from "../Styled/ChemicalSymbol";

const Atom: FunctionComponent<IChemicalElement & { active: boolean }> = (
	props
) => {
	// ~~~~~ Redux state ~~~~~

	// ~~~~~ Hooks ~~~~~

	// ~~~~~ Cmp state ~~~~~
	const [isActive, setIsActive] = useState(false);

	// ~~~~~ Refs ~~~~~

	// ~~~~~ Effects ~~~~~

	// ~~~~~ Handlers ~~~~~

	return (
		<StyledAtom active={isActive} className="atom">
			<StyledAtomOverlay
				onMouseEnter={() => {
					setIsActive(true);
				}}
				onMouseOut={() => {
					setIsActive(false);
				}}
			></StyledAtomOverlay>
			<StyledAtomicNumber className="atomic-number">
				{props.atomic_number}
			</StyledAtomicNumber>
			{props.chemical_structures.map((structure, idx) => (
				<StyledAtomStructure
					key={idx}
					className={`atom-structure-${structure}`}
					level={idx + 1}
				>
					<img
						width={20}
						src={`/assets/images/crystal-structure/${structure}.svg`}
						alt="hexagonal"
					/>
				</StyledAtomStructure>
			))}
			<StyledAtomMeta>
				<StyledChemicalSymbol className="chemical-symbol">
					{props.chemical_symbol}
				</StyledChemicalSymbol>
				<StyledAtomName className="atom-name">{props.atom_name}</StyledAtomName>
				<StyledAtomicMass>{props.atomic_mass}</StyledAtomicMass>
			</StyledAtomMeta>
			{props.shells.map((shell, idx) => (
				<AtomShell key={idx} level={idx + 4} electrons={shell.electrons} />
			))}
		</StyledAtom>
	);
};

export default Atom;
