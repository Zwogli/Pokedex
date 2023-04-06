let currentPokemon;

    async function loadPokemon(){
      let url = 'https://pokeapi.co/api/v2/pokemon/1';
      let response = await fetch(url);
      currentPokemon =  await response.json();

      console.log('Any Pokemon', currentPokemon);

      renderMainPagePokemon();
    }

    function renderMainPagePokemon(){
      document.getElementById('main_pokemon_name').innerHTML = currentPokemon['name'];
      document.getElementById('main_pokemon_id').innerHTML = /*html*/`
      #${currentPokemon['id']}
      `;
      document.getElementById('main_pokemon_img').src = currentPokemon['sprites']['front_default'];
      document.getElementById('main_pokemon_types').innerHTML = currentPokemon['types'];
    }