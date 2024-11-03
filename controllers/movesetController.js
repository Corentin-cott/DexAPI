const movesetModel = require('../models/movesetModel');

const getMovesets = (req, res) => {
    movesetModel.getMovesets((err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Moveset non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

const getMovesetByDexId = (req, res) => {
    const { id_poke } = req.params;
    
    movesetModel.getMovesetByDexId(id_poke, (err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Moveset non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

const getMovesetByDexIdAndForm = (req, res) => {
    const { id_poke, id_form } = req.params;
    
    movesetModel.getMovesetByDexIdAndForm(id_poke, id_form, (err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Moveset non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

module.exports = {
    getMovesets,
    getMovesetByDexId,
    getMovesetByDexIdAndForm
};
