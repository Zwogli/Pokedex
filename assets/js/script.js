let allPokemonsNumber,
    pokemontest,
    loadIntervall = 5;

async function loadAllPokemons(){
  // load all Pokemons
  let allPokemonsUrls = `https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`;
  let response = await fetch(allPokemonsUrls);
  let respondPokemons = await response.json();
  let allPokemonsResultsUrl = respondPokemons['results'];
  let allPokemons = allPokemonsResultsUrl.length;

  allPokemonsNumber = allPokemons;

  //! console.log('Any Pokemon', allPokemonsNumber);

  loadPokemons();
}

async function loadPokemons(){
  for (let i = 1; i <= loadIntervall; i++) {
    let allPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(allPokemonUrl);
    let respondPokemon = await response.json();
    let pokemon = respondPokemon;
    pokemontest = respondPokemon;

    //! console.log(pokemon);

    renderMainPagePokemon(pokemon, i);
    for (let j = 0; j < pokemon.types.length; j++) {
      let pokemonType = pokemon.types[j].type.name;

      renderPokemonType(pokemonType, i, j);
    }
  }
}

function renderMainPagePokemon(pokemon, i){
  document.getElementById('main-section').innerHTML += /*html*/`
    <div id="main_pokemon_${i}">
      <h1>${pokemon['name']}</h1>
      <span>#${pokemon['id']}</span>
      <img src="${pokemon['sprites'].other['official-artwork']['front_default']}">
      <div id="pokemon-typ-${i}"></div>
    </div>
`;
}

function renderPokemonType(pokemonType, i, j){
  document.getElementById(`pokemon-typ-${i}`).innerHTML += /*html */`
    <div id="pokemon-type-${i}${j}">
      ${pokemonType}
    </div>
    `;}