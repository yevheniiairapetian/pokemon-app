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

    // this return statement returns the object with add and getAll methods
    return {
        add: add,
        getAll: getAll
    };

})();



// a forEach function to iterate through the Pokemon list and print their values

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(
        '<div class="pokemon-items">' +
        '<p>' + 'Pokemon\'s Name: ' + pokemon.name + '</p>' +
        '<p>' + 'Height:' + pokemon.height + 'm' + '</p>' +
        '<p>' + 'Abilities:' + pokemon.abilities + '</p>' +
        '<p>' + 'Weight:' + pokemon.weight + 'kg' + '</p>' +
        '<p>' + 'Catch Rate:' + pokemon.catchRate + '</p>' +
        '<p>' + 'Egg Groups:' + pokemon.eggGroups + '</p>' +
        '<p>' + 'Gender Ratio:' + '<br>' + '</p>' +
        '<p class="additional-info">' + 'Male - ' + '</p>' +
        pokemon.genderRatio.male +
        '<p class="additional-info"> ' + 'Female - ' + '</p>' +
        pokemon.genderRatio.female + '<p>' +
        'Hatch Steps:' + pokemon.hatchSteps + '</p>' +
        '</div>');
    if (pokemon.height === 2 && pokemon.name === 'Venusaur') {
        document.write('<p class="additional-info">' + 'WOW! That\'s a big height!' + '</p>');
    } else if (pokemon.height === 0.6 && pokemon.name === 'Charmander') {
        document.write('<p class="additional-info">' + 'WOW! So tiny!' + '</p>');
    }
})