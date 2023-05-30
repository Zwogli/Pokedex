function generateHtmlMainPagePokemon(pokemon, i, pokemonId){
  document.getElementById('main-section').innerHTML += /*html*/`
    <div id="main_pokemon_${i}" onclick="toggleOverlay(), renderOverlayCard(${i})" class="main-pokemon">  
      <h1 class="main-pokemon-name">${pokemon['name']}</h1>
      <div class="main-pokemon-infos">
        <div class="main-pokemon-infos-id_typ">
          <span class="main-pokemon-infos-id">#${pokemonId}</span>
          <div id="pokemon-typ-${i}" class="main-pokemon-infos-typs"></div>
        </div>
        <div class="main-pokemon-img-container">
          <img class="main-pokemon-img  main-pokemon-img-shadow" src="${pokemon['sprites'].other['official-artwork']['front_default']}">
        </div>
      </div>
      <img class="main-pokemon-bg" src="assets/img/pokeball_bg.png" alt="pokeball-bg">
    </div>
`;
}


function generateHtmlPokemonTypes(pokemonTypes, i, j){
  document.getElementById(`pokemon-typ-${i}`).innerHTML += /*html */`
    <div id="pokemon-type-${i}${j}" class="main-pokemon-infos-typ">
      ${pokemonTypes}
    </div>
`;}

function generateHtmlBgTypeColor(cardId, pokemonTypes, firstType, i, j){
  let pokemonCardId = document.getElementById(`${cardId}${i}`);
  pokemonCardId.classList.add(`${firstType}`);

  let pokemonTypCardColor = document.getElementById(`pokemon-type-${i}${j}`);
  pokemonTypCardColor.classList.add(`background-color-${pokemonTypes}`)
}

function generatePokemonCard(pokemon, i, pokemonId){
  let pokemonCard = document.getElementById('overlay');

  pokemonCard.innerHTML = /*html*/`
    <div id="overlay_pokemon_${i}" onclick="event.stopPropagation()" class="overlay-pokemon">  
      <h1 class="main-pokemon-name overlay-pokemon-name">${pokemon['name']}</h1>
      <div class="main-pokemon-infos">
        <div class="main-pokemon-infos-id_typ">
          <span class="main-pokemon-infos-id">#${pokemonId}</span>
          <div id="overlay-pokemon-typ-${i}" class="main-pokemon-infos-typs"></div>
        </div>
        <div class="main-pokemon-img-container">
          <img class="main-pokemon-img" src="${pokemon['sprites'].other['official-artwork']['front_default']}">
        </div>
      </div>
      <img class="main-pokemon-bg" src="assets/img/pokeball_bg.png" alt="pokeball-bg">
    </div>
  `;
}