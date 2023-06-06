function generateHtmlMainPagePokemon(pokemon, i, pokemonId){
  document.getElementById('main-section').innerHTML += /*html*/`
    <div id="main_pokemon_${i}" onclick="toggleOverlay(), renderOverlayCard(${i})" class="main-pokemon c-pointer">  
      <h1 class="main-pokemon-name">${pokemon['name']}</h1>
      <div class="main-pokemon-infos">
        <div class="main-pokemon-infos-id_typ">
          <span class="main-pokemon-infos-id">#${pokemonId}</span>
          <div id="main_pokemon_typ-${i}" class="main-pokemon-infos-typs"></div>
        </div>
        <div class="main-pokemon-img-container">
          <img class="main-pokemon-img  main-pokemon-img-shadow" src="${pokemon['sprites'].other['official-artwork']['front_default']}">
        </div>
      </div>
      <img class="main-pokemon-bg" src="assets/img/pokeball_bg.png" alt="pokeball-bg">
    </div>
`;
}


function generateHtmlPokemonTypes(cardId, pokemonTypes, i, j){
  document.getElementById(`${cardId}typ-${i}`).innerHTML += /*html */`
    <div id="${cardId}type-${i}${j}" class="main-pokemon-infos-typ">
      ${pokemonTypes}
    </div>
`;}

function generateHtmlBgTypeColor(cardId, pokemonTypes, firstType, i, j){
  let pokemonCardId = document.getElementById(`${cardId}${i}`);
  pokemonCardId.classList.add(`${firstType}`);

  let pokemonTypCardColor = document.getElementById(`${cardId}type-${i}${j}`);
  pokemonTypCardColor.classList.add(`background-color-${pokemonTypes}`)
}

function generatePokemonCard(pokemon, i, pokemonId){
  let pokemonCard = document.getElementById('overlay');

  pokemonCard.innerHTML = /*html*/`
    <div id="overlay_pokemon_${i}" onclick="event.stopPropagation()" class="overlay-pokemon">  
      <h1 class="main-pokemon-name overlay-pokemon-name c-default">${pokemon['name']}</h1>
      <img onclick="toggleOverlay()" class="img-close" src="assets/img/icon/cancel.svg" alt="close">
      <div class="main-pokemon-infos overlay-pokemon-infos">
        <div class="main-pokemon-infos-id_typ">
          <span class="main-pokemon-infos-id c-default">#${pokemonId}</span>
          <div id="overlay_pokemon_typ-${i}" class="main-pokemon-infos-typs overlay-pokemon-infos-typ c-default"></div>
        </div>
        <div class="main-pokemon-img-container">
          <img class="main-pokemon-img overlay-pokemon-img" src="${pokemon['sprites'].other['official-artwork']['front_default']}">
        </div>
      </div>
      <img class="main-pokemon-bg" src="assets/img/pokeball_bg.png" alt="pokeball-bg">
    </div>
    <div id="overlay-pokemon-more" onclick="event.stopPropagation()" class="overlay-pokemon-more">
      <div class="overlay-pokemon-more-headline">
        <img onclick="overlayPokemonGallery(-1, ${i})" class="overlay-pokemon-more-headline-arrow c-pointer" src="assets/img/icon/arrow_left.png" alt="arrow left">
        <span id="about-headline${i}" onclick="overlayMoreSection('about-', ${i})" class="c-pointer">About</span>
        <span id="baseStat-headline${i}" onclick="overlayMoreSection('baseStat-', ${i})" class="fw-bold c-pointer">Base Stat</span>
        <span id="moves-headline${i}" onclick="overlayMoreSection('moves-', ${i})" class="c-pointer">Moves</span>
        <img onclick="overlayPokemonGallery(1, ${i})" class="overlay-pokemon-more-headline-arrow c-pointer" src="assets/img/icon/arrow_right.png" alt="arrow right">
      </div>

      <div class="overlay-pokemon-infos">
        <div id="about-${i}" class="overlay-pokemon-infos-about d-none c-default"></div>
        <div id="baseStat-${i}" class="c-default"></div>
        <div id="moves-${i}" class="overlay-pokemon-infos-moves d-none c-default" ></div>
      </div>

    </div>
  `;
}

function generatePokemonAboutHtml(pokemon, i){
  return /*html*/`
  <table class="border-box">
    <tr>
      <td>Base Experience:</td>
      <td>${pokemon.base_experience}</td>
    </tr>
    <tr>
      <td>Height:</td>
      <td>${pokemon.height}</td>
    </tr>
    <tr>
      <td>Weight:</td>
      <td>${pokemon.weight}</td>
    </tr>
    <tr>
      <td>Typ:</td>
      <td><span id="about-typ-${i}"></span></td>
    </tr>
  </table>
   `
}