const pokedex$$ = document.querySelector("#pokedex");
const arrayPokemons = []

const getPokemons = async ()=>{
    for (let i = 1; i <= 150; i++) {   
        const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const poke = await pokemons.json()
        arrayPokemons.push(poke)
    } 
}

const pokemon = arrayPokemons.map((poke)=>({
    name: poke.name,
    image: poke.sprites.front_default,
    type: poke.types.map((type) => type.type.name).join(', '),
    id: poke.id
}))



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



getPokemons()
console.log(pokemon)
drawPokemon(pokemon)
