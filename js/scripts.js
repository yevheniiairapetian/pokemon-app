// created an array of objects: array is a list of pokemons, 
// each object is a pokemon with respective properties. 
//add the IIFE containing the pokemonList array

let pokemonRepository = (function () {
    let pokemonList = [
        //Bulbasaur
        {
            name: 'Bulbasaur',
            height: 0.7,
            abilities: ['Chlorophyll', 'Overgrow'],
            weight: 6.9,
            catchRate: 0,
            eggGroups: ['Monster', 'Grass'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Ivysaur
            name: 'Ivysaur',
            height: 1,
            abilities: ['Chlorophyll', 'Overgrow'],
            weight: 13,
            catchRate: 0,
            eggGroups: ['Monster', 'Grass'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Venusaur
            name: 'Venusaur',
            height: 2,
            abilities: ['Chlorophyll', 'Overgrow'],
            weight: 100,
            catchRate: 0,
            eggGroups: ['Monster', 'Grass'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Charmander
            name: 'Charmander',
            height: 0.6,
            abilities: ['Blaze', 'Solar-power'],
            weight: 8.5,
            catchRate: 0,
            eggGroups: ['Monster', 'Dragon'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Charmeleon
            name: 'Charmeleon',
            height: 1.1,
            abilities: ['Blaze', 'Solar-power'],
            weight: 19,
            catchRate: 0,
            eggGroups: ['Monster', 'Dragon'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Charizard
            name: 'Charizard',
            height: 1.7,
            abilities: ['Blaze', 'Solar-power'],
            weight: 90.5,
            catchRate: 0,
            eggGroups: ['Monster', 'Dragon'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Squirtle
            name: 'Squirtle',
            height: 0.5,
            abilities: ['Rain-dish', 'Torrent'],
            weight: 9,
            catchRate: 0,
            eggGroups: ['Monster', 'Water 1'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Wartortle
            name: 'Wartortle',
            height: 1,
            abilities: ['Rain-dish', 'Torrent'],
            weight: 22.5,
            catchRate: 0,
            eggGroups: ['Monster', 'Water 1'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Blastoise
            name: 'Blastoise',
            height: 1.6,
            abilities: ['Rain-dish', 'Torrent'],
            weight: 85.5,
            catchRate: 0,
            eggGroups: ['Monster', 'Water 1'],
            genderRatio: {
                male: 87.5,
                female: 12.5
            },
            hatchSteps: 5100
        },
        {
            //Caterpie
            name: 'Caterpie',
            height: 0.3,
            abilities: ['Shield-dust', 'Run-away'],
            weight: 2.9,
            catchRate: 0,
            eggGroups: ['Bug'],
            genderRatio: {
                male: 50,
                female: 50
            },
            hatchSteps: 3825
        }
    ];

    // this function add an item to the array of pokemons checking
    // the type of entry

    function add(item) {
        // 
        if (typeof item === 'object') {
            return pokemonList.push(item);
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