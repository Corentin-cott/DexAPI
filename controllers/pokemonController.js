const pokemonModel = require('../models/pokemonModel');

const getPokemon = (req, res) => {
    const { id_poke, id_form } = req.params;
    
    pokemonModel.getPokemonByDexIdAndForm(id_poke, id_form, (err, pokemon) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!pokemon) {
            return res.status(404).json({ error: "Pokémon non trouvé" });
        }
        res.json({ data: pokemon });
    });
};

module.exports = {
    getPokemon
};
