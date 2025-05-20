import { initSmoothScrolling, initStartButton, initMobileMenu } from './nav.js';
import { initPokemonCards } from './pokemon.js';
import { initCardCarousel } from './carousel.js';
import { initPixelCursor } from './cursor.js';
import { initCardForm } from './cardform.js';

document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initStartButton();
    initPokemonCards();
    initCardCarousel();
    initMobileMenu();
    initPixelCursor();
    initCardForm();
}); 