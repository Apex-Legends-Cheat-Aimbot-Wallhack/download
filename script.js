document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('download-btn'); // Первая кнопка
    var ctaButton = document.querySelector('.cta-btn'); // Вторая кнопка

    if (downloadButton) {
        downloadButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'https://hqlauncher.github.io/download/';
        });
    }

    if (ctaButton) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'https://hqlauncher.github.io/download/';
        });
    }
});
