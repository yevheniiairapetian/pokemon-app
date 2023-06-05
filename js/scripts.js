// created an array of objects: array is a list of pokemons, 
// each object is a pokemon with respective properties. 
//add the IIFE containing the pokemonList array
window.onload = function () {
    document.querySelector('.logo-link').style.animation = 'nav-link-animation 3s linear';
}

let pokemonRepository = (function () {
    let pokemonList = [];

    // a promise URL

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=850';

    // this function add an item to the array of pokemons checking
    // the type of entry

    function add(pokemon) {
        // 
        if (typeof pokemon === 'object' &&
            "name" in pokemon) {
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
    //function to show a loading message when the promise is executing

    // function showLoadingMessage(){
    //     let message = document.createElement('p');
    //     message.innerText  = 'Loading data...';
    //     message.classList.add('message');
    //     let main = document.querySelector('main');
    //     main.appendChild(message);

    // }

    //function to hide a loading message when the promise has stopped executing

    // function hideLoadingMessage() {
    //     let message = document.getElementsByClassName('message');
    //     message.style.display = 'none';
    // }
    //function with the promise to show the details about the pokemons
    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    function loadList() {

        // showLoadingMessage();
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {

                // hideLoadingMessage();
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            // hideLoadingMessage();

            console.error(e);

        })
    }


    function loadDetails(pokemon) {
        // showLoadingMessage();
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // hideLoadingMessage();
            // Now we add the details to the item
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
        }).catch(function (e) {
            // hideLoadingMessage();
            console.error(e);
        });
    }
    // this return statement returns the object with methods
    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails
    };

})();



// a forEach function to iterate through the Pokemon list and print their values

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
})