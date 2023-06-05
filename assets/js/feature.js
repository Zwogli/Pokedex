function searchbarToggle(){
 let  searchbar = document.getElementById('searchbar'),
      main = document.getElementById('main');

  searchbar.classList.toggle('d-flex');
  main.classList.toggle('main-mtop');
}

// async function emptySearchbar(){
//   let searchPokemon = document.getElementById('searchbar-input').value;
//   if(searchPokemon == ''){
//     document.getElementById('main-section').innerHTML = '';
//     loadedPokemon = 1;
//     renderPokemons();
//   }else{
//     searchPokemons();
//   }
// }

async function searchPokemons(){
  let searchPokemon = document.getElementById('searchbar-input').value;
  let searchPokemonToLowerCase = searchPokemon.toLowerCase();
  document.getElementById('main-section').innerHTML = '';
  
  if(searchPokemonToLowerCase == ''){
    loadedPokemon = 1;
    renderPokemons();
  }else{
    for (let i = 0; i < allPokemonsJson.length; i++) {
      let searchedPokemonJson = allPokemonsJson[i];
      let pokemonName = searchedPokemonJson['name'];
    
      if (pokemonName.includes(searchPokemonToLowerCase) && searchPokemon != '') {
        filterPokemonMain(searchedPokemonJson, i);
      }else if(searchPokemon != ''){
        renderPokemons();
      }
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