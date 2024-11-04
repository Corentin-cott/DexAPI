const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const pokemon_db_path = '../databases/abilities.db'

/*
TABLE abilities
--> id INTEGER PRIMARY KEY,
--> nameEN TEXT
--> nameFR TEXT
--> descEN TEXT
--> descFR TEXT
*/

// Fonction pour récupérer TOUS les talents
const getAbilities = (callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM abilities", (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Fonction pour récupérer un talent par son Id
const getAbilityById = (abilityId, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM abilities WHERE id = ?", [abilityId], (err, row) => {
        callback(err, row);
    });
    db.close();
}

// Fonction pour récupérer un talent par son nom anglais
const getAbilityByEnName = (abilityName, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM abilities WHERE nameEN = ?", [abilityName], (err, row) => {
        callback(err, row);
    });
    db.close();
}

// Fonction pour récupérer un talent par son nom français
const getAbilityByFrName = (abilityName, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM abilities WHERE nameFR = ?", [abilityName], (err, row) => {
        callback(err, row);
    });
    db.close();
}

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getAbilities,
    getAbilityById,
    getAbilityByEnName,
    getAbilityByFrName
};
