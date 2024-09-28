type SliderOptions = {
	slider: HTMLElement;
	prevButton?: HTMLElement;
	nextButton?: HTMLElement;
};

const TOLERANCE = 10;

export function createHorizontalSlider({
	slider,
	prevButton,
	nextButton,
}: SliderOptions) {
	const firstChild = slider.firstElementChild;
	if (!firstChild) {
		throw new Error("Trying to create slider with no children", {
			cause: slider,
		});
	}

	const offset = firstChild.clientWidth;
	prevButton?.addEventListener("click", () => {
		if (slider.scrollLeft <= TOLERANCE) {
			slider.scroll({ left: slider.scrollWidth, behavior: "smooth" });
			return;
		}
		slider.scrollBy({ left: -offset, behavior: "smooth" });
	});

	nextButton?.addEventListener("click", () => {
		if (
			slider.scrollWidth <=
			slider.scrollLeft + slider.clientWidth + TOLERANCE
		) {
			slider.scroll({ left: 0, behavior: "smooth" });
			return;
		}

		slider.scrollBy({ left: offset, behavior: "smooth" });
	});
}
