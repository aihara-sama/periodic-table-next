const getPointCoords = (
	center: number,
	radius: number,
	angle: number,
	axis: "x" | "y",
	size: number,
	distance: number = 1
) => {
	return (
		center +
		radius *
			Math[axis === "y" ? "sin" : "cos"]((-angle * Math.PI) / 180) *
			distance -
		size / 2
	);
};

export { getPointCoords };
