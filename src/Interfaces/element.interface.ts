export interface IChemicalElement {
	atomic_number: number;
	chemical_symbol: string;
	atom_name: string;
	atomic_mass: number;
	chemical_structures: (
		| "BCC"
		| "FCC"
		| "HCP"
		| "cubic-body-centered"
		| "cubic"
		| "DHCP"
		| "ORTH"
		| "TETR"
		| "RHO"
		| "HEX"
		| "SC"
		| "DC"
		| "MON"
	)[];
	shells: Shell[];
}

interface Shell {
	electrons: number;
}
