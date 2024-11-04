const pokemonModel = require('../models/pokemonModel');

const getPokemon = (req, res) => {
    pokemonModel.getPokemon((err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

const getPokemonByDexId = (req, res) => {
    const { id_poke } = req.params;
    pokemonModel.getPokemonByDexId(id_poke, (err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

const getPokemonByDexIdAndForm = (req, res) => {
    const { id_poke, id_form } = req.params;
    pokemonModel.getPokemonByDexIdAndForm(id_poke, id_form, (err, pokemon) => {
        // console.log(`Récupération du Pokémon N°${id_poke} en forme N°${id_form}`)

        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

const getPokemonNationalDex = (req, res) => {
    pokemonModel.getPokemonNationalDex((err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon non trouvé" });
        }
        res.json({ data: pokemon });
    });
}

module.exports = {
    getPokemon,
    getPokemonByDexId,
    getPokemonByDexIdAndForm,
    getPokemonNationalDex
};
