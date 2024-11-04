const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const pokemon_db_path = '../databases/pokemon.db'

/*
TABLE evolutions
--> id INTEGER PRIMARY KEY
--> pokemon_id INT
--> form INT NOT NULL
--> evo_dbSymbol VARCHAR(20) NOT NULL
--> evo_form INT NOT NULL
--> condition TEXT
--> FOREIGN KEY (pokemon_id) REFERENCES Pokemon(id)
*/

// Fonction pour récupérer TOUTES les évolution de Pokémon
const getEvolutions = (callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM evolutions", (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Fonction pour récupérer une évolution de Pokémon par son dexId
const getEvolutionByDexId = (dexId, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM evolutions WHERE pokemon_id = ? AND form = 0", [dexId], (err, rows) => {
        callback(err, rows);
    });
    db.close()
};

// Fonction pour récupérer une évolution de Pokémon par son dexId ET son id de forme
const getEvolutionByDexIdAndForm = (dexId, form, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM evolutions WHERE pokemon_id = ? AND form = ?", [dexId, form], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Fonction pour récupérer une souus-évolution de Pokémon par son dbSymbol
const getSubEvolutionByDbSymbol = (dbSymbol, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM evolutions WHERE evo_dbSymbol = ?", [dbSymbol], (err, rows) => {
        console.log(`SELECT * FROM evolutions WHERE evo_dbSymbol = ${dbSymbol}`);
        callback(err, rows);
    });
    db.close();
};

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getEvolutions,
    getEvolutionByDexIdAndForm,
    getEvolutionByDexId,
    getSubEvolutionByDbSymbol
};
