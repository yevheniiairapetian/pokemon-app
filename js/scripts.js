// created an array of objects: array is a list of pokemons, 
// each object is a pokemon with respective properties. 
//add the IIFE containing the pokemonList array
window.onload = function(){
    document.querySelector('.logo-link').style.animation = 'nav-link-animation 3s linear';
}

let pokemonRepository = (function () {
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // this function add an item to the array of pokemons checking
    // the type of entry

    function add(pokemon) {
        // 
        if (typeof pokemon === 'object' &&
        "name" in pokemon)
         {
            return pokemonList.push(pokemon);
        } else {
            return 'Not allowed'
        }

    }

    //this function returns the array of pokemons

    function getAll() {
        return pokemonList;
    }

//creates a list of pokemons and shows them when clicked

    function addListItem(pokemon) {
        let pokemonListContainer = document.querySelector('.pokemon-list');
        let pokemonListItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('default-button');
        pokemonListContainer.appendChild(pokemonListItem);
        pokemonListItem.appendChild(button);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        })

    }
//logs the pokemon object to the console

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }


      function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
          pokemon.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }
    // this return statement returns the object with add. addListItem, showDetails and getAll methods
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };

})();



// a forEach function to iterate through the Pokemon list and print their values

pokemonRepository.getAll().forEach(function (pokemon) {

    pokemonRepository.addListItem(pokemon);
})

