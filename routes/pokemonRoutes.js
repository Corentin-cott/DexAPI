const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController.js');

// Route pour récupérer un Pokémon par dexId et form
router.get('/Pokemon/:id_poke/:id_form', pokemonController.getPokemon);

module.exports = router;
