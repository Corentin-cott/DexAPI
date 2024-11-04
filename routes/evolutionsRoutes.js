const express = require('express');
const router = express.Router();
const evolutionController = require('../controllers/evolutionController.js');

router.get('/', evolutionController.getEvolutions);
router.get('/sub/:dbSymbol', evolutionController.getSubEvolutionByDbSymbol);
router.get('/:id_poke', evolutionController.getEvolutionByDexId);
router.get('/:id_poke/:id_form', evolutionController.getEvolutionByDexIdAndForm);

module.exports = router;
