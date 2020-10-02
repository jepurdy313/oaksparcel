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
//list all pokemon's pokedex number, name and height
for (let i = 0; i < pokemonList.length; i++) {
    document.write("#" + pokemonList[i].pokedexNumber + " " + pokemonList[i].name + " ");
 //creates conditional that if a pokemon is a certain height a phrase will be added on
    if (pokemonList[i].height >= 1.5) {
        document.write("(height: " + pokemonList[i].height + ") - Wow that's big!</br>")
    }
    else if (pokemonList[i].height < 1.5)
        document.write("(height: " + pokemonList[i].height + ")</br>")
};