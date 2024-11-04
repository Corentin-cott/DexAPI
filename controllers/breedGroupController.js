const breedGroupModel = require('../models/breedGroupModel');

const getBreedGroups = (req, res) => {
    breedGroupModel.getBreedGroups((err, breedGroup) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!breedGroup) {
            return res.status(404).json({ error: "Groupe d'oeufs non trouvé" });
        }
        res.json({ data: breedGroup });
    });
};

const getBreedGroupByDexId = (req, res) => {
    const { id_poke } = req.params;
    breedGroupModel.getBreedGroupByDexId(id_poke, (err, breedGroup) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!breedGroup) {
            return res.status(404).json({ error: "Groupe d'oeufs non trouvé" });
        }
        res.json({ data: breedGroup });
    });
};

const getBreedGroupByDexIdAndForm = (req, res) => {
    const { id_poke, id_form } = req.params;
    breedGroupModel.getBreedGroupByDexIdAndForm(id_poke, id_form, (err, breedGroup) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!breedGroup) {
            return res.status(404).json({ error: "Groupe d'oeufs non trouvé" });
        }
        res.json({ data: breedGroup });
    });
};

const getBreedGroupByBreedGroup = (req, res) => {
    const { id_group } = req.params;
    breedGroupModel.getBreedGroupByBreedGroup(id_group, (err, breedGroup) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!breedGroup) {
            return res.status(404).json({ error: "Groupe d'oeufs non trouvé" });
        }
        res.json({ data: breedGroup });
    });
}

const getBreedGroupByBreedGroupOne = (req, res) => {
    const { breedGroupOne } = req.params;
    breedGroupModel.getBreedGroupByBreedGroupOne(breedGroupOne, (err, breedGroup) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!breedGroup) {
            return res.status(404).json({ error: "Groupe d'oeufs non trouvé" });
        }
        res.json({ data: breedGroup });
    });
};

const getBreedGroupByBreedGroupTwo = (req, res) => {
    const { breedGroupTwo } = req.params;
    breedGroupModel.getBreedGroupByBreedGroupTwo(breedGroupTwo, (err, breedGroup) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!breedGroup) {
            return res.status(404).json({ error: "Groupe d'oeufs non trouvé" });
        }
        res.json({ data: breedGroup });
    });
};

module.exports = {
    getBreedGroups,
    getBreedGroupByDexId,
    getBreedGroupByDexIdAndForm,
    getBreedGroupByBreedGroupOne,
    getBreedGroupByBreedGroupTwo,
    getBreedGroupByBreedGroup
};
