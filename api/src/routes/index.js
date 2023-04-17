const { Router } = require('express');
const {getAllpoke} = require ('../controllers/getAPIpoke.js') 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const pokemonRoute = require('./pokemonroute');
const typeRoute = require ('./typeroute') 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonRoute)
router.use('/types', typeRoute)

module.exports = router;
