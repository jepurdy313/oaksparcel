//list of pokemon
let pokemonList = [
    {name: 'Bulbasaur',
    pokedexNumber: 1,
    height: 0.7,
    abilities: ['Chlorophyll', 'Overgrow'],
    type: ['grass', 'poison']
    },
    {name: 'Ivysaur',
    pokedexNumber: 2,
    height: 1,
    abilities: ['Chlorophyll', 'Overgrow'],
    type: ['grass', 'poison']
    },
    {name: 'Venusaur',
    pokedexNumber: 3,
    height: 2,
    abilities: ['Clorophyll', 'Overgrow'],
    type: ['grass', 'poison'],
    },
    {name: 'Charmander',
    pokedexNumber: 4,
    height: 0.6,
    abilities: ['Blaze','Solar-power'],
    type: ['fire']
    },
    {name: 'Charmeleon',
    pokedexNumber: 5,
    height: 1.1,
    abilities: ['Blaze', 'Solar-power'],
    type: ['fire']
    },
    {name: 'Charizard',
    pokedexNumber: 6,
    height: 1.7,
    abilities: ['Blaze', 'Solar-power'],
    type: ['fire', 'flying']
    },
    {name: 'Squirtle',
    pokedexNumber: 7,
    height: 0.5,
    abilities: ['Rain-dish', 'Torrent'],
    type: ['water']
    },
    {name: 'Wartortle',
    pokedexNumber: 8,
    height: 1,
    abilities: ['Rain-dish', 'Torrent'],
    type: ['water']
    },
    {name: 'Blastoise',
    pokedexNumber: 9,
    height: 1.6,
    abilities: ['Rain-dish', 'Torrent'],
    type: ['water']
    }
]

//creates a new function that calls and accesses the pokemonList to get information
function pokemon(pokemonList) {
    //writes the pokemon's pokedex number and name
    document.write("#" + pokemonList.pokedexNumber + " " + pokemonList.name + " ");
    //creates a if-else-if statement that changes based on a pokemon height, and finishes writing to DOM
    if (pokemonList.height >= 1.5) {
        document.write("(height: " + pokemonList.height + ") - Wow that's big!</br>")
    }
    else if (pokemonList.height < 1.5)
        document.write("(height: " + pokemonList.height + ")</br>")
}

//executes a forEach function using the paramater to call upon the pokemon function
pokemonList.forEach(pokemon)