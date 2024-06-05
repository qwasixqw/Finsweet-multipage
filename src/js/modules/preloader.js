export function initPreloader() {
    const preloader = document.getElementById('preloader');

    if (!preloader) {
        return;
    }

    const visitedBefore = localStorage.getItem('visitedBefore');

    if (visitedBefore) {
        preloader.style.display = 'none';
    } else {
        localStorage.setItem('visitedBefore', true);

        window.addEventListener('load', () => {
            preloader.style.display = 'none';
        });
    }
}
