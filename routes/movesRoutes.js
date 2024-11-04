const express = require('express');
const router = express.Router();
const moveController = require('../controllers/moveController.js');

router.get('/', moveController.getMoves);
router.get('/:id_move', moveController.getMoveById);
router.get('/en/:name_move', moveController.getMoveByEnName);
router.get('/fr/:name_move', moveController.getMoveByFrName);
router.get('/type/:type_move', moveController.getMoveByType);

module.exports = router;
