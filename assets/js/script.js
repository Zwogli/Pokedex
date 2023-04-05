let currentPokemon;

    async function loadPokemon(){
      let url = 'https://pokeapi.co/api/v2/pokemon/1';
      let response = await fetch(url);
      currentPokemon =  await response.json();

      console.log('Any Pokemon', currentPokemon)

      renderPokemonInfo();
    }

    function renderPokemonInfo(){
      document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
      document.getElementById('pokemonImg').src = currentPokemon['sprites']['front_default'];
      
    }