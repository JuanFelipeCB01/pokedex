const pokedex$$ = document.querySelector(".main-pokedex");
const arrayPokemons = []

const getAndDrawPokemons = async ()=>{
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

    const drawPokemon = (pokemons)=>{
        for(const pokemon of pokemons){
            // console.log(pokemon)
            let pokeDiv$$ = document.createElement("div")
            pokeDiv$$.setAttribute("class", `main-pokedex-card ${pokemon.type}`)
            pokeDiv$$.innerHTML =
            `
            <div class="main-pokedex-card-inner">
                <div class="main-pokedex-card-inner-front">
                    <img src="images/pokemon_card_backside.png" alt="Avatar" style="width:300px">
                </div>
                <div class="main-pokedex-card-inner-back">
                    <h2 class='card-title'>${pokemon.name}</h2>
                    <img src=${pokemon.image} alt="${pokemon.name}" class='card-image'/>
                    <p class='card-subtitle'>Type: ${pokemon.type}</p>
                </div>
            </div>
            `
            pokedex$$.appendChild(pokeDiv$$)
        }
    }
    drawPokemon(pokemons)
}

// const filterByType = (div$$)=>{
//     if(div$$)

// }


getAndDrawPokemons()


