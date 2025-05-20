// Carrossel de cards
function initCardCarousel() {
    const cardContainer = document.querySelector('.card-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    if (cardContainer && prevBtn && nextBtn) {
        const cards = cardContainer.querySelectorAll('.card');
        const totalCards = cards.length;
        function updateCarousel() {
            const offset = -currentIndex * 100;
            cardContainer.style.transform = `translateX(${offset}%)`;
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex === totalCards - 1 ? '0.5' : '1';
        }
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        nextBtn.addEventListener('click', function() {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
        updateCarousel();
    }
}
export { initCardCarousel }; 