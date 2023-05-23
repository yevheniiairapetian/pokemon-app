// created an array of objects: array is a list of pokemons, 
// each object is a pokemon with respective properties. 
let pokemonList = [
//Bulbasaur
        {name: 'Bulbasaur', 
        height: 0.7,
        abilities: ['Chlorophyll', 'Overgrow'],
        weight: 6.9,
        catchRate: 0,
        eggGroups:['Monster', 'Grass'],
        genderRatio:{male:87.5, female:12.5},
        hatchSteps: 5100        
    },
    {
//Ivysaur
        name: 'Ivysaur', 
        height: 1,
        abilities: ['Chlorophyll', 'Overgrow'],
        weight: 13,
        catchRate: 0,
        eggGroups:['Monster', 'Grass'],
        genderRatio:{male:87.5, female:12.5},
        hatchSteps: 5100    
    },
    {
//Venusaur
        name: 'Venusaur', 
        height: 2,
        abilities: ['Chlorophyll', 'Overgrow'],
        weight: 100,
        catchRate: 0,
        eggGroups:['Monster', 'Grass'],
        genderRatio:{male:87.5, female:12.5},
        hatchSteps: 5100    
    },
    {
//Charmander
        name: 'Charmander', 
        height: 0.6,
        abilities: ['Blaze', 'Solar-power'],
        weight: 8.5,
        catchRate: 0,
        eggGroups:['Monster', 'Dragon'],
        genderRatio:{male:87.5, female:12.5},
        hatchSteps: 5100    
    },
    {
//Charmeleon
        name: 'Charmeleon', 
        height: 1.1,
        abilities: ['Blaze', 'Solar-power'],
        weight: 19,
        catchRate: 0,
        eggGroups:['Monster', 'Dragon'],
        genderRatio:{male:87.5, female:12.5},
        hatchSteps: 5100    
    }
];


// a for loop to iterate through the Pokemon list and print their values

for(i = 0; i < pokemonList.length; i++){
    document.write(
    '<div class="pokemon-items">' + 
        '<p>' + 'Pokemon\'s Name: '+ pokemonList[i].name + '</p>' + 
        '<p>' + 'Height:' + pokemonList[i].height + 'm'+ '</p>' + 
        '<p>' + 'Abilities:' + pokemonList[i].abilities + '</p>' + 
        '<p>' + 'Weight:' + pokemonList[i].weight + 'kg' + '</p>' + 
        '<p>' + 'Catch Rate:' + pokemonList[i].catchRate + '</p>' + 
        '<p>' + 'Egg Groups:' + pokemonList[i].eggGroups + '</p>' + 
        '<p>' + 'Gender Ratio:' + '<br>' + '</p>' + 
        '<p class="additional-info">' + 'Male - ' + '</p>' + 
        pokemonList[i].genderRatio.male + 
        '<p class="additional-info"> ' + 'Female - ' + '</p>' 
        + pokemonList[i].genderRatio.female + '<p>' + 
        'Hatch Steps:' + pokemonList[i].hatchSteps + '</p>' + 
    '</div>');
        if(pokemonList[i].height === 2 && pokemonList[i].name === 'Venusaur'){
            document.write('<p class="additional-info">' + 'WOW! That\'s a big height!' + '</p>');
        }else if(pokemonList[i].height === 0.6 && pokemonList[i].name === 'Charmander'){
            document.write('<p class="additional-info">' + 'WOW! So tiny!' + '</p>');
        }
}