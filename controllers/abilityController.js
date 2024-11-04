const abilityModel = require('../models/abilityModel.js');

const getAbilities = (req, res) => {
    abilityModel.getAbilities((err, ability) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!ability) {
            return res.status(404).json({ error: "Talents non trouvé" });
        }
        res.json({ data: ability });
    });
};

const getAbilityById = (req, res) => {
    const abilityId = req.params.id_ability;
    abilityModel.getAbilityById(abilityId , (err, ability) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!ability) {
            return res.status(404).json({ error: "Talent non trouvé" });
        }
        res.json({ data: ability });
    });
};

const getAbilityByEnName = (req, res) => {
    const abilityName = req.params.name_ability;
    abilityModel.getAbilityByEnName(abilityName , (err, ability) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!ability) {
            return res.status(404).json({ error: "Talent non trouvé" });
        }
        res.json({ data: ability });
    });
}

const getAbilityByFrName = (req, res) => {
    const abilityName = req.params.name_ability;
    abilityModel.getAbilityByFrName(abilityName , (err, ability) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!ability) {
            return res.status(404).json({ error: "Talent non trouvé" });
        }
        res.json({ data: ability });
    });
}

module.exports = {
    getAbilities,
    getAbilityById,
    getAbilityByEnName,
    getAbilityByFrName
};
