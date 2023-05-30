let allPokemonsNumber,
    pokemontest,
    loadIntervall = 50,
    overlayToggle = false;

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
    let pokemonId = numberToStringID(pokemon);
    
    
    //! console.log(pokemon);
    
    generateHtmlMainPagePokemon(pokemon, i, pokemonId);
    renderPokemonTypes(pokemon, i);
  }
}

function renderPokemonTypes(pokemon, i){
  for (let j = 0; j < pokemon.types.length; j++) {
    let pokemonTypes = pokemon.types[j].type.name;
    let firstType = pokemon.types[0].type.name;
    
    if(overlayToggle == false){
      let cardId = 'main_pokemon_'
      generateHtmlPokemonTypes(pokemonTypes, i, j);
      generateHtmlBgTypeColor(cardId, pokemonTypes, firstType, i, j);
    }else{
      let cardId = 'overlay_pokemon_'
      generateHtmlBgTypeColor(cardId, pokemonTypes, firstType, i, j);
    }
  }
}

function toggleOverlay(){ 
  let overlay = document.getElementById('overlay'),
      body = document.getElementById('body');

  overlay.classList.toggle('d-none');
  body.classList.toggle('overflow-hidden');
  overlayToggle = !overlayToggle;
}

async function renderOverlayCard(i){
  let allPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}/`;
  let response = await fetch(allPokemonUrl);
  let pokemon = await response.json();
  let pokemonId = numberToStringID(pokemon);
  generatePokemonCard(pokemon, i, pokemonId);
  renderPokemonTypes(pokemon, i);
}