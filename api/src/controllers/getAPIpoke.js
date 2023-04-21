const axios = require('axios');
const {Pokemon, Type} = require('../db')

const endpoint = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=60';

async function getAPIpoke(){
    try{
        const response = await axios.get(endpoint);
    
        const apiresponse = response.data.results.map((poke)=>axios.get(poke.url));

        const pokefromAPI = await axios.all(apiresponse);

        const pokeAPI = pokefromAPI.map((poke)=>{
            const pokedataAPI ={
                id: poke.data.id,
                name: poke.data.name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' '),
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
        // console.log(pokeAPI)
        return pokeAPI;
    }catch(error){
        console.log(error)
    }
}


async function getDBpoke(){
    try{
        const responseDB = await Pokemon.findAll({
            include:{
                model:Type,
                attributes:['name'],
                through:{
                    attributes:[],
                }
            }
        })
        
        return responseDB;
        
    }catch(error){
        console.log(error)
    }
}





    async function getAllpoke(){
        try{
            const pokemonAPI=await getAPIpoke();
            const pokemonDB=await getDBpoke();
            if (pokemonDB?.length > 0) return [...pokemonAPI, ...pokemonDB]
            return pokemonAPI
        }catch(error){
            console.log(error)
        }
    }

module.exports = {
    getAPIpoke,
    getDBpoke,
    getAllpoke
}
