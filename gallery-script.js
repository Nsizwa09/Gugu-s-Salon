function openLightbox(src) {
    const overlayId = 'lightboxOverlay';
    let overlay = document.getElementById(overlayId);

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = overlayId;
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = '<button class="close-lightbox" aria-label="Close image">&times;</button><img alt="Expanded gallery image">';
        document.body.appendChild(overlay);

        overlay.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                closeLightbox();
            }
        });
    }

    const image = overlay.querySelector('img');
    image.src = src;
    overlay.classList.add('active');
}

function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    setTimeout(function () {
        if (overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }, 250);
}
