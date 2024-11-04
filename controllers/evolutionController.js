const evolutionModel = require('../models/evolutionModel');

const getEvolutions = (req, res) => {
    evolutionModel.getEvolutions((err, evolution) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!evolution) {
            return res.status(404).json({ error: "Méthode d'évolution non trouvé" });
        }
        res.json({ data: evolution });
    });
};

const getEvolutionByDexId = (req, res) => {
    const { id_poke } = req.params;
    evolutionModel.getEvolutionByDexId(id_poke, (err, evolution) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!evolution) {
            return res.status(404).json({ error: "Méthode d'évolution non trouvé" });
        }
        res.json({ data: evolution });
    });
};

const getEvolutionByDexIdAndForm = (req, res) => {
    const { id_poke, id_form } = req.params;
    evolutionModel.getEvolutionByDexIdAndForm(id_poke, id_form, (err, evolution) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!evolution) {
            return res.status(404).json({ error: "Méthode d'évolution non trouvé" });
        }
        res.json({ data: evolution });
    });
};

const getSubEvolutionByDbSymbol = (req, res) => {
    const { dbSymbol } = req.params;
    evolutionModel.getSubEvolutionByDbSymbol(dbSymbol, (err, evolution) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!evolution) {
            return res.status(404).json({ error: "Méthode d'évolution non trouvé" });
        }
        res.json({ data: evolution });
    });
}

module.exports = {
    getEvolutions,
    getEvolutionByDexId,
    getEvolutionByDexIdAndForm,
    getSubEvolutionByDbSymbol
};
