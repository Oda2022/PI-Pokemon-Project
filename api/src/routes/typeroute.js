const {Router} = require('express');
const axios = require ('axios');

const {Type} = require ('../db');

const typeRoute = Router();

typeRoute.get('/', async(req,res) =>{
    try{

        const dbType = await Type.findAll();

        if(!dbType.length){
            let apiType = await axios.get(`https://pokeapi.co/api/v2/type`);
            apiType = await apiType.data.results.map((poketype)=>{
                return {name: poketype.name}
            });

            await Type.bulkCreate(apiType);
            const typeINdb = await Type.findAll();
            return res.status(200).json(typeINdb) 
        }

        res.status(200).json(dbType)


    }catch(error){
        console.log(error)
    }
})

module.exports = typeRoute;