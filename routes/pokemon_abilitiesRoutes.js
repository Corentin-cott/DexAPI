const express = require('express');
const router = express.Router();
const abilityController = require('../controllers/pokemon_abilityController.js');

router.get('/', abilityController.getAbilities);
router.get('/:id_poke', abilityController.getAbilityByDexId);
router.get('/:id_poke/:id_form', abilityController.getAbilityByDexIdAndForm);

module.exports = router;
