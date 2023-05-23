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
    document.write('Pokemon\'s Name: '+ pokemonList[i].name + '<br>' + ' Height:' + pokemonList[i].height + ')' + '<br>' + 'Abilities:' + pokemonList[i].abilities + '<br>' + 'Weight:' + pokemonList[i].weight + '<br>'+ 'Catch Rate:' + pokemonList[i].catchRate + '<br>' + 'Egg Groups:' + pokemonList[i].eggGroups + '<br>' + 'Gender Ratio:' + pokemonList[i].genderRatio + '<br>' + 'Hatch Steps:' + pokemonList[i].hatchSteps + '<br>');

}