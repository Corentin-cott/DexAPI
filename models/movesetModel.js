const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const pokemon_db_path = '../databases/pokemon.db'

/*
TABLE moveseets
--> id INTEGER PRIMARY KEY
--> pokemon_id INT NOT NULL
--> form INT NOT NULL
--> move VARCHAR(20) NOT NULL
--> method VARCHAR(20) NOT NULL
--> level INT
--> FOREIGN KEY (pokemon_id) REFERENCES Pokemon(id)
*/

// Fonction pour récupérer TOUS les Pokémon
const getMovesets = (callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM movesets", (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Fonction pour récupérer un Pokémon par son dexId
const getMovesetByDexId = (dexId, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM movesets WHERE pokemon_id = ? AND form = 0", [dexId], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Fonction pour récupérer un Pokémon par son dexId ET son id de forme
const getMovesetByDexIdAndForm = (dexId, form, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM movesets WHERE pokemon_id = ? AND form = ?", [dexId, form], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getMovesets,
    getMovesetByDexIdAndForm,
    getMovesetByDexId
};
