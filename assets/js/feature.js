function searchbarToggle(){
 let  searchbar = document.getElementById('searchbar'),
      main = document.getElementById('main');

  searchbar.classList.toggle('d-flex');
  main.classList.toggle('main-mtop');
}

async function searchPokemon(){
  let searchPokemon = document.getElementById('searchbar-input').value;
  document.getElementById('main-section').innerHTML = '';
  
  for (let i = 0; i < allPokemonsJson.length; i++) {
    let searchedPokemonJson = allPokemonsJson[i];
    let pokemonName = searchedPokemonJson['name'];
    
    if (pokemonName.includes(searchPokemon)) {
      filterPokemonMain(searchedPokemonJson, i);
    }
  }
}

async function filterPokemonMain(searchedPokemonJson, i){
  let pokemonResponseUrl = searchedPokemonJson.url;
  let searchResponse = await fetch(pokemonResponseUrl);
  let respondSearchedPokemon = await searchResponse.json();
  let pokemon = respondSearchedPokemon;
  let pokemonId = numberToStringID(pokemon);
  
  generateHtmlMainPagePokemon(pokemon, i, pokemonId);
  renderPokemonTypes(pokemon, i);
}