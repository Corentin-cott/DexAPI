const moveModel = require('../models/moveModel.js');

const getMoves = (req, res) => {
    moveModel.getMoves((err, move) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!move) {
            return res.status(404).json({ error: "Attaques non trouvé" });
        }
        res.json({ data: move });
    });
};

const getMoveById = (req, res) => {
    const moveId = req.params.id_move;
    moveModel.getMoveById(moveId , (err, move) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!move) {
            return res.status(404).json({ error: "Attaque non trouvé" });
        }
        res.json({ data: move });
    });
};

const getMoveByEnName = (req, res) => {
    const moveName = req.params.name_move;
    moveModel.getMoveByEnName(moveName , (err, move) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!move) {
            return res.status(404).json({ error: "Attaque non trouvé" });
        }
        res.json({ data: move });
    });
}

const getMoveByFrName = (req, res) => {
    const moveName = req.params.name_move;
    moveModel.getMoveByFrName(moveName , (err, move) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!move) {
            return res.status(404).json({ error: "Attaque non trouvé" });
        }
        res.json({ data: move });
    });
}

const getMoveByType = (req, res) => {
    const moveType = req.params.type_move;
    moveModel.getMoveByType(moveType , (err, move) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!move) {
            return res.status(404).json({ error: "Attaque non trouvé" });
        }
        res.json({ data: move });
    });
}

module.exports = {
    getMoves,
    getMoveById,
    getMoveByEnName,
    getMoveByFrName,
    getMoveByType
};
