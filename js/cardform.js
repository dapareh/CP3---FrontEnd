// Atualização do preview da carta personalizada
function initCardForm() {
    const cardForm = document.getElementById('card-creator-form');
    const cardPreview = document.getElementById('card-preview');
    const previewName = document.getElementById('preview-name');
    const previewHP = document.getElementById('preview-hp');
    const previewImage = document.getElementById('preview-image');
    const previewAttack = document.getElementById('preview-attack');
    const previewResistance = document.getElementById('preview-resistance');
    const previewCategory = document.getElementById('preview-category');
    const nameInput = document.getElementById('card-name');
    const hpInput = document.getElementById('card-hp');
    const pokemonSelect = document.getElementById('card-pokemon');
    const attackInput = document.getElementById('card-attack');
    const categorySelect = document.getElementById('card-category');
    const resistanceInput = document.getElementById('card-resistance');
    if (!cardForm) return;
    // Atualiza nome
    nameInput.addEventListener('input', function() {
        previewName.textContent = this.value || 'Nome da Carta';
    });
    // Atualiza HP
    hpInput.addEventListener('input', function() {
        previewHP.textContent = 'HP ' + (this.value || '0');
    });
    // Atualiza imagem e tipo
    pokemonSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const pokemonType = selectedOption.getAttribute('data-type');
        const pokemonName = this.value;
        // Atualiza classe de tipo
        cardPreview.className = 'custom-pokemon-card';
        if (pokemonType) cardPreview.classList.add(pokemonType);
        // Atualiza imagem
        const pokemonImgs = {
            pikachu: 'src/imgs/pikachu.png',
            charmander: 'src/imgs/charmander.png',
            squirtle: 'src/imgs/squirtle.png',
            bulbasaur: 'src/imgs/bulbasaur.png',
            jigglypuff: 'src/imgs/jigglypuff.png',
            mewtwo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
            articuno: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png'
        };
        if (pokemonImgs[pokemonName]) {
            previewImage.innerHTML = `<img src='${pokemonImgs[pokemonName]}' alt='${pokemonName}'>`;
        } else {
            previewImage.innerHTML = '<span>?</span>';
        }
    });
    // Atualiza ataque
    attackInput.addEventListener('input', function() {
        previewAttack.textContent = this.value || 'Ataque';
    });
    // Atualiza categoria
    categorySelect.addEventListener('change', function() {
        const categoryText = this.options[this.selectedIndex].text;
        previewCategory.textContent = categoryText || 'Categoria';
        cardPreview.classList.remove('common', 'rare', 'ultra-rare', 'legendary');
        if (this.value) cardPreview.classList.add(this.value);
    });
    // Atualiza resistência
    resistanceInput.addEventListener('input', function() {
        previewResistance.textContent = this.value || 'Resistência';
    });
    // Envio do formulário
    cardForm.addEventListener('submit', function(e) {
        e.preventDefault();
        cardPreview.style.transform = 'scale(1.05)';
        setTimeout(() => {
            cardPreview.style.transition = 'transform 0.3s ease';
            cardPreview.style.transform = 'scale(1)';
        }, 200);
        alert('Sua carta foi criada com sucesso!');
    });
}
export { initCardForm }; 