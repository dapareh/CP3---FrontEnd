// Efeito de cursor pixel art
function initPixelCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'pixel-cursor';
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    const interactiveElements = document.querySelectorAll('a, button, .pokemon-item, .card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('active'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}
export { initPixelCursor }; 