const sqlite3 = require('sqlite3').verbose();
const path = require('path')
pokemon_db_path = '../databases/pokemon.db'

// Fonction pour récupérer TOUS les Pokémon
const getAbilities = (callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM abilities", (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Fonction pour récupérer un Pokémon par son dexId
const getAbilityByDexId = (dexId, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM abilities WHERE pokemon_id = ? AND form = 0", [dexId], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Fonction pour récupérer un Pokémon par son dexId ET son id de forme
const getAbilityByDexIdAndForm = (dexId, form, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM abilities WHERE pokemon_id = ? AND form = ?", [dexId, form], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getAbilities,
    getAbilityByDexIdAndForm,
    getAbilityByDexId
};
