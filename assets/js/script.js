let allPokemonsNumber,
    pokemontest,
    loadIntervall = 50;

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

function cardSelect(pokemon, i, pokemonId){

}