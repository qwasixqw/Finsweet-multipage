export function initVideoPlayer(videoId, buttonId) {
    const video = document.getElementById(videoId);
    const playButton = document.getElementById(buttonId);

    if (!video && !playButton) {
        return;
    }

    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
        } else {
            video.pause();
            playButton.style.display = 'block';
        }
    };

    playButton.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    video.addEventListener('play', () => {
        playButton.style.display = 'none';
    });

    video.addEventListener('pause', () => {
        playButton.style.display = 'block';
    });

    video.addEventListener('ended', () => {
        playButton.style.display = 'block';
    });
}