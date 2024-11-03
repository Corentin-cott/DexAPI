const abilityModel = require('../models/pokemon_abilityModel.js');

const getAbilities = (req, res) => {
    abilityModel.getAbilities((err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon ou talents non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

const getAbilityByDexId = (req, res) => {
    const { id_poke } = req.params;
    
    abilityModel.getAbilityByDexId(id_poke, (err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon ou talents non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

const getAbilityByDexIdAndForm = (req, res) => {
    const { id_poke, id_form } = req.params;
    
    abilityModel.getAbilityByDexIdAndForm(id_poke, id_form, (err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon ou talents non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

module.exports = {
    getAbilities,
    getAbilityByDexId,
    getAbilityByDexIdAndForm
};
