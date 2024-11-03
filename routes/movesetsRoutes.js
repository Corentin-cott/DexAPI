const express = require('express');
const router = express.Router();
const movesetController = require('../controllers/movesetController.js');

router.get('/', movesetController.getMovesets);
router.get('/:id_poke', movesetController.getMovesetByDexId);
router.get('/:id_poke/:id_form', movesetController.getMovesetByDexIdAndForm);

module.exports = router;
