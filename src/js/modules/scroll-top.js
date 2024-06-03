export function initScrollToTop() {
	const scrollToTopButton = document.getElementById('scrollToTop');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 600) {
			scrollToTopButton.style.display = 'block';
		} else {
			scrollToTopButton.style.display = 'none';
		}
	});

	scrollToTopButton.addEventListener('click', (e) => {
		e.preventDefault();

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
}
