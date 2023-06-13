// created an array of objects: array is a list of pokemons, 
// each object is a pokemon with respective properties. 
//add the IIFE containing the pokemonList array
// window.onload = function () {
//     document.querySelector('.logo-link').style.animation = 'nav-link-animation 3s linear';
// }

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
        let pokemonListContainer = $('.list-group');
        let pokemonListItem = $('<li class="list-group-item"></li>');
        let button = $('<button class="btn primary-btn pokemon-button"></button>');
        button.text(pokemon.name);
        // button.classList.add('default-button');
        pokemonListContainer.append(pokemonListItem);
        pokemonListItem.append(button);
        button.attr('data-target','#my-modal');
        button.attr('data-toggle','modal');
        button.on('click', function () {
            
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
                    detailsUrl: item.url,
                    weight: item.weight,

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
            item.weight = details.weight;
            showModal(item);
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon);
    }
    //function for showing the modal windows with the pokemon fetched results
    function showModal(pokemon) {

        let modalHeader = $('.modal-header')
        let modalBody = $(".modal-body");
        // modalContainer.classList.remove("modal-container-hidden");
        // modalContainer.classList.add("is-visible");
        let modalTitle = $('<h3>' + pokemon.name + '</h3>');
        modalBody.empty();
        modalTitle.empty();
        
        

        let modalImage = $('<img class="modal-image">');

        modalImage.attr('src', pokemon.imageUrl);

        let modalText = $('<p class="modal-text">' + 'Pokemon\'s Height: ' +pokemon.height + '</p>');

        // modalText.text("Height: " + pokemon.height);

        let modalAbilities = $('<p>' + 'Pokemon\s Weight: ' + pokemon.weight/10 +'</p>');
        // modalAbilities.text("Weight: " + (pokemon.weight/10) + 'kg');
        modalHeader.append(modalTitle)
        modalTitle.append(modalPokemonName.toUpperCase());
        modalBody.append(modalAbilities);
        modalBody.append(modalText);
        modalBody.append(modalAbilities);
        modalBody.append(modalImage);


        // let modalCloseButton = document.querySelector("#close-modal-button");

        // modalCloseButton.innerText = "x";
        // modalContainer.addEventListener('click', (e) => {
        //     let target = e.target;
        //     if (target === modalContainer) {
        //         closeModal();
        //     }
        // });

        // modalCloseButton.addEventListener("click", function () {
        //     closeModal();
        //     //hides modal when clicked outside
            

        // });


        //function hiding the modal window
        // function closeModal() {
        //     let modalContainer = document.querySelector("#modal-container");
        //     modalContainer.classList.remove("is-visible");
        //     modalContainer.classList.add("modal-container-hidden");
        //     modalCloseButton.innerHtml = '';
        // }
        // //hides modal when escape is pressed
        // window.addEventListener('keydown', (e) => {
        //     let modalContainer = document.querySelector("#modal-container");
        //     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        //         closeModal();
        //     }


        // });
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