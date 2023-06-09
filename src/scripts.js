// created an array of objects: array is a list of pokemons, 
// each object is a pokemon with respective properties. 
//add the IIFE containing the pokemonList array
$(document).ready(function () {
    $('.sp').addClass('sp-none');
});


$(function () {
    //Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}());

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

let pokemonRepository = (function () {
    let pokemonList = [];

    // a promise URL

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1281';

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


    function loadList() {


        return fetch(apiUrl).then(function (response) {

            return response.json();

        }).then(function (json) {

            json.results.forEach(function (item) {

                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    id: item.id,
                    // gender:item.gender.name,



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
            item.id = details.id;
            item.imageUrl = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
            // item.gender = details.gender.name;
            showModal(item);
        }).catch(function (e) {
            console.error(e);
        });
    }


    //creates a list of pokemons and shows them when clicked

    function addListItem(pokemon) {
        let pokemonListContainer = $('.list-group');
        let pokemonListItem = $('<li class="list-group-item pokemon-item m-2 bg-light p-3" data-toggle="tooltip" data-placement="top" title="Click on the button to display the Pokemon"></li>');
        let button = $('<button class="btn primary-btn pokemon-button w-100 p-3 text-light border-primary rounded bg-primary"></button>');
        button.text(pokemon.name.toUpperCase());
        // button.classList.add('default-button');
        pokemonListContainer.append(pokemonListItem);
        pokemonListItem.append(button);
        button.attr('data-target', '#my-modal');
        button.attr('data-toggle', 'modal');

        button.on('click', function () {

            loadDetails(pokemon);
        })

    }





    function showDetails(pokemon) {
        // loadDetails(pokemon);
        // .then(function () {
        showModal(pokemon);
        // })

    }
    //function for showing the modal windows with the pokemon fetched results
    function showModal(pokemon) {
        // let modalBody = $(".modal-body");
        // modalBody.empty();
        let modalTitle = $(".modal-title");
        // modalTitle.empty();
        // let modalPokemonName = pokemon.name;

        modalTitle.text(pokemon.name.toUpperCase() + '\'s Stats');
        let modalID = $(".modal-ID");

        modalID.text(pokemon.name.toUpperCase() + '\'s ID: ' + pokemon.id);

        let modalImage = $(".modal-image");
        // modalImage.empty();
        modalImage.attr("src", pokemon.imageUrl);
        // let modalGender = $(".modal-gender");
        // modalGender.text('Gender: ' + pokemon.gender);
        let modalImageBack = $('.modal-image-back');
        // modalImageBack.empty();
        modalImageBack.attr("src", pokemon.imageUrlBack);
        let modalText = $(".modal-text");
        // modalText.text(pokemon.height)
        modalText.text("Height: " + pokemon.height / 10 + " m"); //

        let modalAbilities = $('.modal-abilities');
        modalAbilities.text("Weight: " + (pokemon.weight / 10) + 'kg');

    }

    $(document).ready(function () {
        $(".form-control").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $(".list-group li").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });

        });
    });








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