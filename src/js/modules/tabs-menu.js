export function initTabsMenu(filterSelector, cardSelector) {
	const filterItems = document.querySelectorAll(filterSelector);
	const menuCards = document.querySelectorAll(cardSelector);

	filterItems.forEach((item) => {
		item.addEventListener('click', (event) => {
			const tabsTitleTarget = event.target.getAttribute('data-tab');

			filterItems.forEach((item) => {
				item.classList.remove('active');
			});

			menuCards.forEach((item) => {
				item.classList.remove('active');
			});

			item.classList.add('active');
			document.getElementById(tabsTitleTarget).classList.add('active');
		});
	});
}
