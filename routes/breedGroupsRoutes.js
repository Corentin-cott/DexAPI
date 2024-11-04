const express = require('express');
const router = express.Router();
const breedGroupController = require('../controllers/breedGroupController.js');

router.get('/', breedGroupController.getBreedGroups);
router.get('/groups/:id_group', breedGroupController.getBreedGroupByBreedGroup);
router.get('/:id_poke', breedGroupController.getBreedGroupByDexId);
router.get('/:id_poke/:id_form', breedGroupController.getBreedGroupByDexIdAndForm);

module.exports = router;
