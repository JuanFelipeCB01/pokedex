const pokedex$$ = document.querySelector("#pokedex");
const arrayPokemons = []
const mappedPokemons = []

const getPokemons = async ()=>{
    for (let i = 1; i <= 150; i++) {   
        const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const poke = await pokemons.json()
        arrayPokemons.push(poke)
    }

    const pokemons = arrayPokemons.map((pokemon)=>({
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        type: pokemon.types.map((type) => type.type.name).join(', '),
        id: pokemon.id
    }))

    mappedPokemons.push(pokemons)

    const drawPokemon = (pokemons)=>{
        for(const pokemon of pokemons){
            let pokeDiv$$ = document.createElement("div")
            pokeDiv$$.innerHTML =
            `
                <h2>${pokemon.name}</h2>
                <img src=${pokemon.image} alt="${pokemon.name}"/>
                <p>${pokemon.type}</p>
            `
            pokedex$$.appendChild(pokeDiv$$)
        }
    }
    console.log(mappedPokemons)
    drawPokemon(mappedPokemons)
}

getPokemons()


