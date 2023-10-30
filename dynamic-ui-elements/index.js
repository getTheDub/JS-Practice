// ------------------------------------------------------- //
// -------------------- DOM Factories -------------------- //
// ------------------------------------------------------- //

function elFactory(type, attributes, children = []) {
	return { type, attributes, children };
}

function htmlFactory(obj) {
	const el = document.createElement(obj.type);
	const { attributes } = obj;

	Object.entries(attributes).forEach((pair) => {
		const key = pair[0];
		const value = pair[1];
		if (key !== 'dataset') {
			el[key] = value;
		} else {
			// Special directions needed to set "data-" properties
			Object.entries(value).forEach((prop) => {
				const dataProp = prop[0];
				const dataVal = prop[1];
				el.dataset[dataProp] = dataVal;
			});
		}
	});

	obj.children?.forEach((child) => {
		// Allows for conditionally adding children upstream by
		// setting "" as the alternative to elFactory()
		if (child) {
			el.appendChild(htmlFactory(child));
		}
	});

	return el;
}

// ------------------------------------------------------- //
// ------------------ Dropdown Builder ------------------- //
// ------------------------------------------------------- //

function createDropdown(
	dropdownName,
	dropdownContent = [{ text: 'Replace Me!', link: '#' }]
) {
	const contentList = elFactory('ul', { classList: 'marlatte-drop-content' });

	dropdownContent.forEach((item) => {
		contentList.children.push(
			elFactory('li', {}, [
				elFactory('a', {
					classList: 'marlatte-drop-item',
					textContent: item.text,
					href: item.link,
				}),
			])
		);
	});

	const dropdownStructure = elFactory(
		'li',
		{ classList: 'marlatte-drop', dataset: { dropdownName } },
		[
			elFactory('button', {
				type: 'button',
				classList: 'marlatte-drop-btn',
				textContent: 'Dropdown',
				dataset: { dropTarget: dropdownName },
			}),
			contentList,
		]
	);
	return htmlFactory(dropdownStructure);
}

function handleDropClick(e) {
	document.querySelectorAll('.marlatte-drop').forEach((dropdown) => {
		if (dropdown.dataset.dropdownName === e.target.dataset.dropTarget) {
			dropdown
				.querySelector('.marlatte-drop-content')
				.classList.toggle('expanded');
		}
	});
}

function addDropListeners() {
	document.querySelectorAll('.marlatte-drop-btn').forEach((button) => {
		button.addEventListener('click', handleDropClick);
	});
}

const hiddenLinks = [1, 2, 3].map((linkNum) => ({
	text: `hidden ${linkNum}`,
	link: '#',
}));

document
	.getElementById('menu-bar')
	.appendChild(createDropdown('drop-1', hiddenLinks));

addDropListeners();

// ------------------------------------------------------- //
// ------------------ Image Carousel -------------------- //
// ------------------------------------------------------- //
let slideIndex = 0;

function showSlide() {
	const allSlides = document.querySelectorAll('.slide');
	allSlides.forEach((slide) => {
		slide.classList.remove('active');
	});

	allSlides[slideIndex].classList.add('active');
}

function changeSlide(newIndex) {
	slideIndex = newIndex;
}

showSlide();
