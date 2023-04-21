const {Router} = require ('express');
const {getAllpoke} = require ('../controllers/getAPIpoke.js')
const {Pokemon, Type} = require('../db')

const pokemonRoute = Router();

pokemonRoute.get('/', async(req, res)=>{

    const pokeGet = await getAllpoke();

    const {name} = req.query;

    if(name){
        const pokeFind = pokeGet.find((poke)=>poke.name == name);
        res.status(200).json(pokeFind)
    }else{
        res.status(200).json(pokeGet)
    }

});

pokemonRoute.get('/:id', async(req, res)=>{

    try{
        const {id} = req.params;
        const pokeGet = await getAllpoke();

        const pokeFind = pokeGet.find((poke)=>poke.id == id);
        if(pokeFind){
            res.status(200).json(pokeFind);
        }else{
            res.status(404).send('No existe ese pokemon')
        }
    }catch(error){
        console.log(error);
    }

});

pokemonRoute.post('/', async(req,res)=>{
    try{
        const{name, image, hp, attack, defense, speed, height, weight, types} = req.body;

        const pokecreate = await Pokemon.create({
            name, image, hp, attack, defense, speed, height, weight, types
        });

        const typeDatabase= await Type.findAll({
            where: {name: types}
        });

        await pokecreate.addType(typeDatabase);
        res.send('Pokemon creado de manera exitosa')
    }catch(error){
        console.log(error)
    }
})



module.exports= pokemonRoute;