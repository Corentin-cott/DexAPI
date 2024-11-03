const sqlite3 = require('sqlite3').verbose();
const path = require('path')
pokemon_db_path = '../databases/pokemon.db'

// Fonction pour récupérer un Pokémon par son dexId et son id de forme
const getPokemonByDexIdAndForm = (dexId, form, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM Pokemon WHERE dexId = ? AND form = ?", [dexId, form], (err, row) => {
        callback(err, row);
    });
    db.close();
};

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getPokemonByDexIdAndForm
};
