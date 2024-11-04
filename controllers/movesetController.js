const movesetModel = require('../models/movesetModel');

const getMovesets = (req, res) => {
    movesetModel.getMovesets((err, moveset) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!moveset) {
            return res.status(404).json({ error: "Moveset non trouvé" });
        }
        res.json({ data: moveset });
    });
};

const getMovesetByDexId = (req, res) => {
    const { id_poke } = req.params;
    movesetModel.getMovesetByDexId(id_poke, (err, moveset) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!moveset) {
            return res.status(404).json({ error: "Moveset non trouvé" });
        }
        res.json({ data: moveset });
    });
};

const getMovesetByDexIdAndForm = (req, res) => {
    const { id_poke, id_form } = req.params;
    movesetModel.getMovesetByDexIdAndForm(id_poke, id_form, (err, moveset) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!moveset) {
            return res.status(404).json({ error: "Moveset non trouvé" });
        }
        res.json({ data: moveset });
    });
};

module.exports = {
    getMovesets,
    getMovesetByDexId,
    getMovesetByDexIdAndForm
};
