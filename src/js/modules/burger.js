export function toggleBurgerMenu(iconSelector, menuSelector) {
	const menuIcon = document.querySelector(iconSelector);
	const navMenu = document.querySelector(menuSelector);

	menuIcon.classList.toggle('active');
	navMenu.classList.toggle('active');
	document.body.classList.toggle('lock');
	window.scrollTo(0, 0);
}
