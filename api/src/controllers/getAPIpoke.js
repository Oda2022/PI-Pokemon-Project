const axios = require('axios');
const {Pokemon, Type} = require('../db')

const endpoint = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=60';

async function getAPIpoke(){
    const response = await axios.get(endpoint);
    
    const apiresponse = response.data.results.map((poke)=>axios.get(poke.url));
    console.log(apiresponse);
    const database = await Pokemon.findAll({include:Type})

    const pokeDB = database?.map((poke)=>{
        return{
            id: poke.id,
            name: poke.name,
            image: poke.image,
            hp: poke.hp,
            attack: poke.attack,
            defense: poke.defense,
            speed: poke.speed,
            height: poke.height,
            weight: poke.weight,
            types: poke.Types.map((pokety)=>{
                return{name: pokety.name};
            }),
          

        }
    })

    

    const pokefromAPI = await axios.all(apiresponse);

    const pokeAPI = pokefromAPI.map((poke)=>{
      const pokedataAPI ={
        id: poke.data.id,
        name: poke.data.name.split(' ').map(w => w.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '),
        image: poke.data.sprites.other.home.front_default,
        hp: poke.data.stats[0].base_stat,
        attack: poke.data.stats[1].base_stat,
        defense: poke.data.stats[2].base_stat,
        speed: poke.data.stats[5].base_stat,
        height: poke.data.height,
        weight: poke.data.weight,
        types: poke.data.types.map((pokety)=>{
            return{name: pokety.type.name};
        }),
      }
      return pokedataAPI;
    });

    const allpoke = pokeAPI.concat(pokeDB);
    return allpoke;
    
}

getAPIpoke()

