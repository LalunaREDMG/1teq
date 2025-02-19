document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.products-grid');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    
    let currentPosition = 0;
    const cardWidth = 260; // Width of each card (300px - 40px margin)
    const visibleCards = 3;

    function slideProducts(direction) {
        const container = document.querySelector('.products-grid');
        const cards = container.children;
        const totalCards = cards.length;
        const maxPosition = -(totalCards - visibleCards) * cardWidth;

        if (direction === 'next' && currentPosition > maxPosition) {
            currentPosition -= cardWidth;
        } else if (direction === 'prev' && currentPosition < 0) {
            currentPosition += cardWidth;
        }

        container.style.transform = `translateX(${currentPosition}px)`;
        updateButtons();
    }

    function updateButtons() {
        const container = document.querySelector('.products-grid');
        const cards = container.children;
        const totalCards = cards.length;
        const maxPosition = -(totalCards - visibleCards) * cardWidth;

        prevButton.disabled = currentPosition >= 0;
        nextButton.disabled = currentPosition <= maxPosition;

        // Update button visibility
        prevButton.style.opacity = prevButton.disabled ? "0.5" : "1";
        nextButton.style.opacity = nextButton.disabled ? "0.5" : "1";
    }

    // Add click event listeners
    prevButton.addEventListener('click', () => slideProducts('prev'));
    nextButton.addEventListener('click', () => slideProducts('next'));

    // Initialize button states
    updateButtons();
});
