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
            });
        }).catch(function (e) {
           

            console.error(e);

        })
    }


    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            showModal(item);
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon);
    }

    function showModal(pokemon) {

        pokemonRepository.loadDetails(pokemon).then(function () {
            let modalContainer = document.querySelector("#modal-container");
            modalContainer.classList.add("is-visible");
            let modalTitle = document.querySelector("#modal-heading");

            modalTitle.innerText = pokemon.name;

            let modalImage = document.querySelector("#modal-image");

            modalImage.src = pokemon.imageUrl;

            let modalText = document.querySelector("#modal-text");

            modalText.innerText = "Height: " + pokemon.height;

            let modalCloseButton = document.querySelector("#close-modal-button");

            modalCloseButton.innerText = "x";

            modalCloseButton.addEventListener("click", function () {
                closeModal();
            });

        });

        function closeModal() {
            let modalContainer = document.querySelector("#modal-container");
            modalContainer.classList.remove("is-visible");
            modalContainer.classList.add("modal-container-hidden");
            modalCloseButton.innerHtml = '';
        }
    }

    // this return statement returns the object with methods
    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        showModal: showModal,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,

    };

})();

// a forEach function to iterate through the Pokemon list and print their values

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
})