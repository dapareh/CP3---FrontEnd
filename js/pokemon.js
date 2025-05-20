// Interações e filtros da seção de pokémons
function initPokemonCards() {
    const pokemonItems = document.querySelectorAll('.pokemon-item');
    const modalOverlay = document.getElementById('pokemon-modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const filterOptions = document.querySelectorAll('.filter-option');
    // Dados dos pokémons
    const pokedex = {
        'Bulbasaur': {
            height: '0.7', weight: '6.9', category: 'Seed', abilities: 'Overgrow', type: 'grass', weakness: 'fire',
            evolution: [
                { name: 'Bulbasaur', img: 'src/imgs/bulbasaur.png' },
                { name: 'Ivysaur', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png' },
                { name: 'Venusaur', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png' }
            ]
        },
        'Charmander': {
            height: '0.6', weight: '8.5', category: 'Lizard', abilities: 'Blaze', type: 'fire', weakness: 'water',
            evolution: [
                { name: 'Charmander', img: 'src/imgs/charmander.png' },
                { name: 'Charmeleon', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png' },
                { name: 'Charizard', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png' }
            ]
        },
        'Squirtle': {
            height: '0.5', weight: '9.0', category: 'Tiny Turtle', abilities: 'Torrent', type: 'water', weakness: 'electric',
            evolution: [
                { name: 'Squirtle', img: 'src/imgs/squirtle.png' },
                { name: 'Wartortle', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png' },
                { name: 'Blastoise', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png' }
            ]
        },
        'Pikachu': {
            height: '0.4', weight: '6.0', category: 'Mouse', abilities: 'Static', type: 'electric', weakness: 'ground',
            evolution: [
                { name: 'Pichu', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png' },
                { name: 'Pikachu', img: 'src/imgs/pikachu.png' },
                { name: 'Raichu', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png' }
            ]
        },
        'Clefairy': {
            height: '0.6', weight: '7.5', category: 'Fairy', abilities: 'Cute Charm', type: 'normal', weakness: 'steel',
            evolution: [
                { name: 'Cleffa', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png' },
                { name: 'Clefairy', img: 'src/imgs/clefairy.png' },
                { name: 'Clefable', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png' }
            ]
        },
        'Eevee': {
            height: '0.3', weight: '6.5', category: 'Evolution', abilities: 'Run Away', type: 'normal', weakness: 'fighting',
            evolution: [
                { name: 'Eevee', img: 'src/imgs/eevee.png' },
                { name: 'Vaporeon', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png' },
                { name: 'Jolteon', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png' }
            ]
        },
        'Growlithe': {
            height: '0.7', weight: '19.0', category: 'Puppy', abilities: 'Intimidate', type: 'fire', weakness: 'water',
            evolution: [
                { name: 'Growlithe', img: 'src/imgs/growlithe.png' },
                { name: 'Arcanine', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png' }
            ]
        },
        'Jigglypuff': {
            height: '0.5', weight: '5.5', category: 'Balloon', abilities: 'Cute Charm', type: 'normal', weakness: 'steel',
            evolution: [
                { name: 'Igglybuff', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png' },
                { name: 'Jigglypuff', img: 'src/imgs/jigglypuff.png' },
                { name: 'Wigglytuff', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png' }
            ]
        },
        'Krabby': {
            height: '0.4', weight: '6.5', category: 'River Crab', abilities: 'Hyper Cutter', type: 'water', weakness: 'electric',
            evolution: [
                { name: 'Krabby', img: 'src/imgs/krabby.png' },
                { name: 'Kingler', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png' }
            ]
        },
        'Lapras': {
            height: '2.5', weight: '220.0', category: 'Transport', abilities: 'Water Absorb', type: 'water', weakness: 'electric',
            evolution: [
                { name: 'Lapras', img: 'src/imgs/lapras.png' }
            ]
        },
        'Pidgey': {
            height: '0.3', weight: '1.8', category: 'Tiny Bird', abilities: 'Keen Eye', type: 'flying', weakness: 'electric',
            evolution: [
                { name: 'Pidgey', img: 'src/imgs/pidgey.png' },
                { name: 'Pidgeotto', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png' },
                { name: 'Pidgeot', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png' }
            ]
        },
        'Ponyta': {
            height: '1.0', weight: '30.0', category: 'Fire Horse', abilities: 'Run Away', type: 'fire', weakness: 'water',
            evolution: [
                { name: 'Ponyta', img: 'src/imgs/ponyta.png' },
                { name: 'Rapidash', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png' }
            ]
        },
        'Snorlax': {
            height: '2.1', weight: '460.0', category: 'Sleeping', abilities: 'Immunity', type: 'normal', weakness: 'fighting',
            evolution: [
                { name: 'Munchlax', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/446.png' },
                { name: 'Snorlax', img: 'src/imgs/snorlax.png' }
            ]
        },
        'Swablu': {
            height: '0.4', weight: '1.2', category: 'Cotton Bird', abilities: 'Natural Cure', type: 'flying', weakness: 'ice',
            evolution: [
                { name: 'Swablu', img: 'src/imgs/swablu.png' },
                { name: 'Altaria', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png' }
            ]
        }
    };
    const typeEmojis = {
        'fire': '🔥',
        'water': '💧',
        'grass': '🌱',
        'electric': '⚡',
        'normal': '⭐',
        'flying': '🦅',
        'ice': '❄️',
        'fighting': '👊',
        'steel': '⚙️',
        'ground': '🏔️'
    };
    // Filtros
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            filterOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            pokemonItems.forEach(item => {
                const pokemonName = item.getAttribute('data-pokemon') || item.getAttribute('data-name');
                const pokemonData = pokedex[pokemonName];
                if (filterType === 'all' || (pokemonData && pokemonData.type === filterType)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    // Modal
    pokemonItems.forEach(item => {
        item.addEventListener('click', function() {
            const pokemonName = this.getAttribute('data-pokemon') || this.getAttribute('data-name');
            const pokemonData = pokedex[pokemonName];
            if (pokemonData && modalOverlay) {
                // Atualiza o nome do Pokémon no header do modal
                const modalName = modalOverlay.querySelector('#modal-pokemon-name');
                if (modalName) modalName.textContent = pokemonName;
                // Atualiza o conteúdo
                const modalContent = modalOverlay.querySelector('.modal-content');
                modalContent.innerHTML = `
                    <div class="modal-info-item"><span class="modal-info-label">Altura:</span><span id="modal-pokemon-height">${pokemonData.height} m</span></div>
                    <div class="modal-info-item"><span class="modal-info-label">Peso:</span><span id="modal-pokemon-weight">${pokemonData.weight} kg</span></div>
                    <div class="modal-info-item"><span class="modal-info-label">Categoria:</span><span id="modal-pokemon-category">${pokemonData.category}</span></div>
                    <div class="modal-info-item"><span class="modal-info-label">Habilidades:</span><span id="modal-pokemon-abilities">${pokemonData.abilities}</span></div>
                    <div class="modal-info-item"><span class="modal-info-label">Tipo:</span><span id="modal-pokemon-type">${typeEmojis[pokemonData.type]}</span></div>
                    <div class="modal-info-item"><span class="modal-info-label">Fraqueza:</span><span id="modal-pokemon-weakness">${typeEmojis[pokemonData.weakness]}</span></div>
                `;
                const evolutionSection = modalOverlay.querySelector('.pokemon-evolution');
                evolutionSection.innerHTML = pokemonData.evolution.map((evo, index) => `
                    <div class="evolution-item"><img src="${evo.img}" alt="${evo.name}"><span>${evo.name}</span></div>
                    ${index < pokemonData.evolution.length - 1 ? '<span class="evolution-arrow">→</span>' : ''}
                `).join('');
                modalOverlay.classList.add('active');
            }
        });
    });
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
}
export { initPokemonCards }; 