let allPokemonsNumber,
    pokemontest,
    loadIntervall = 251;

async function loadAllPokemons(){
  // load all Pokemons
  let allPokemonsUrls = `https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`;
  let response = await fetch(allPokemonsUrls);
  let respondPokemons = await response.json();
  let allPokemonsResultsUrl = respondPokemons['results'];
  let allPokemons = allPokemonsResultsUrl.length;

  allPokemonsNumber = allPokemons;

  //! console.log('Any Pokemon', allPokemonsNumber);

  renderPokemons();
}

async function renderPokemons(){
  for (let i = 1; i <= loadIntervall; i++) {
    let allPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = await fetch(allPokemonUrl);
    let respondPokemon = await response.json();
    let pokemon = respondPokemon;
    pokemontest = respondPokemon;//! test
    let pokemonId = pokemon['id'].toString().padStart(4,'0');
    
    
    //! console.log(pokemon);

    generateHtmlMainPagePokemon(pokemon, i, pokemonId);
    renderPokemonTypes(pokemon, i);
  }
}

function renderPokemonTypes(pokemon, i){
  for (let j = 0; j < pokemon.types.length; j++) {
    let pokemonTypes = pokemon.types[j].type.name;

    let firstType = pokemon.types[0].type.name;
    generateHtmlPokemonTypes(pokemonTypes, i, j);
    generateHtmlBgTypeColor(pokemonTypes, firstType, i, j);
  }
}

function generateHtmlMainPagePokemon(pokemon, i, pokemonId){
  document.getElementById('main-section').innerHTML += /*html*/`
    <div id="main_pokemon_${i}" class="main-pokemon">
      <h1 class="main-pokemon-name">${pokemon['name']}</h1>
      <div class="main-pokemon-infos">
        <div class="main-pokemon-infos-id_typ">
          <span class="main-pokemon-infos-id">#${pokemonId}</span>
          <div id="pokemon-typ-${i}" class="main-pokemon-infos-typs"></div>
        </div>
        <div class="main-pokemon-img-container">
          <img class="main-pokemon-img" src="${pokemon['sprites'].other['official-artwork']['front_default']}">
        </div>
      </div>
    </div>
`;
}


function generateHtmlPokemonTypes(pokemonTypes, i, j){
  document.getElementById(`pokemon-typ-${i}`).innerHTML += /*html */`
    <div id="pokemon-type-${i}${j}" class="main-pokemon-infos-typ">
      ${pokemonTypes}
    </div>
`;}

function generateHtmlBgTypeColor(pokemonTypes, firstType, i, j){
  let pokemonCardId = document.getElementById(`main_pokemon_${i}`);
  pokemonCardId.classList.add(`${firstType}`);

  let pokemonTypCardColor = document.getElementById(`pokemon-type-${i}${j}`);
  pokemonTypCardColor.classList.add(`background-color-${pokemonTypes}`)
}