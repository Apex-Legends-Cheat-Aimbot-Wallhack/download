
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn, .cta-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Download starting... Please wait.');
        });
    });
});
