// Function untuk menampilkan gambar di Modal Pop-up
function showImage(imageSrc, captionText) {
    // Ambil elemen-elemen di dalam modal
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalTitle = document.getElementById('imageModalLabel');

    // Set sumber gambar
    modalImage.src = imageSrc;
    
    // Set caption gambar
    modalCaption.textContent = captionText;

    // Set judul modal
    modalTitle.textContent = "Galeri Foto: " + captionText;
}

// Tambahan styling sederhana untuk efek hover pada gambar (opsional, bisa juga di CSS)
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hover-zoom');
    images.forEach(img => {
        img.style.transition = 'transform 0.3s ease-in-out';
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1.0)';
        });
    });
});