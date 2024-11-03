const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController.js');

router.get('/', pokemonController.getPokemon);
router.get('/:id_poke', pokemonController.getPokemonByDexId);
router.get('/:id_poke/:id_form', pokemonController.getPokemonByDexIdAndForm);

module.exports = router;
