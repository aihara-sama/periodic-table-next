import { FunctionComponent } from "react";
import Electron from "../Electron";
import StyledAtomShell from "../Styled/AtomCloud";

interface IProps {
	electrons: number;
	level: number;
}

const AtomShell: FunctionComponent<IProps> = ({ electrons, level }) => {
	// ~~~~~ Redux state ~~~~~

	// ~~~~~ Hooks ~~~~~

	// ~~~~~ Cmp state ~~~~~

	// ~~~~~ Refs ~~~~~

	// ~~~~~ Effects ~~~~~

	// ~~~~~ Handlers ~~~~~

	return (
		<div style={{ position: "absolute" }}>
			<StyledAtomShell
				speed={level * 5}
				size={level * 20}
				className="atom-shell"
			>
				{new Array(electrons).fill(0).map((_, idx) => (
					<Electron
						key={idx}
						radius={(level * 20) / 2}
						angle={(360 / electrons) * (idx + 1)}
					/>
				))}
			</StyledAtomShell>
		</div>
	);
};

export default AtomShell;
