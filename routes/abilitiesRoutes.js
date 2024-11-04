const express = require('express');
const router = express.Router();
const abilityController = require('../controllers/abilityController.js');

router.get('/', abilityController.getAbilities);
router.get('/:id_ability', abilityController.getAbilityById);
router.get('/en/:name_ability', abilityController.getAbilityByEnName);
router.get('/fr/:name_ability', abilityController.getAbilityByFrName);

module.exports = router;
