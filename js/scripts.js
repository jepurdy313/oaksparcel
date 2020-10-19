//wrapped pokemonList inside IIFE
var pokemonRepository = (function () {
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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        getAll: getAll,
        add: add
    };
})();

//creates a new variable that pushes the contents of the pokemonRepository.pokemonList to a global variable
var pokemonListGLB = pokemonRepository.getAll()
//creates a new function that calls and accesses the pokemonList to get information
function pokemon(pokemonListGLB) {
    //writes the pokemon's pokedex number and name
    document.write("#" + pokemonListGLB.pokedexNumber + " " + pokemonListGLB.name + " ");
    //creates a if-else-if statement that changes based on a pokemon height, and finishes writing to DOM
    if (pokemonListGLB.height >= 1.5) {
        document.write("(height: " + pokemonListGLB.height + ") - Wow that's big!</br>")
    }
    else if (pokemonListGLB.height < 1.5)
        document.write("(height: " + pokemonListGLB.height + ")</br>")
}

//executes a forEach function using the paramater to call upon the pokemon function
pokemonListGLB.forEach(pokemon)