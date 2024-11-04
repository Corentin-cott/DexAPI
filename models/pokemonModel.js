const sqlite3 = require('sqlite3').verbose();
const path = require('path')
pokemon_db_path = '../databases/pokemon.db'

/*
TABLE pokemon
--> id INTEGER PRIMARY KEY,
--> dexId INT NOT NULL
--> nameEN VARCHAR(20)
--> nameFR VARCHAR(20)
--> descEN TEXT
--> descFR TEXT
--> form INT NOT NULL
--> height DECIMAL(3,1) NOT NULL
--> weight DECIMAL(4,1) NOT NULL
--> type1 VARCHAR(20) NOT NULL
--> type2 VARCHAR(20)
--> abilityOne VARCHAR(30) NOT NULL
--> abilityTwo VARCHAR(30) NOT NULL
--> abilityHidden VARCHAR(30) NOT NULL
--> baseHp INT NOT NULL
--> baseAtk INT NOT NULL
--> baseDfe INT NOT NULL
--> baseSpd INT NOT NULL
--> baseAts INT NOT NULL
--> baseDfs INT NOT NULL
--> evGivenHp INT DEFAULT 0
--> evGivenAtk INT DEFAULT 0
--> evGivenDfe INT DEFAULT 0
--> evGivenSpd INT DEFAULT 0
--> evGivenAts INT DEFAULT 0
--> evGivenDfs INT DEFAULT 0
--> experienceType INT NOT NULL
--> baseExperience INT NOT NULL
--> baseLoyalty INT NOT NULL
--> catchRate INT NOT NULL
--> femaleRate INT
--> hatchSteps INT NOT NULL
--> babyDbSymbol VARCHAR(20)
--> babyForm INT
*/

// Fonction pour récupérer TOUS les Pokémon
const getPokemon = (callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM Pokemon", (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Fonction pour récupérer un Pokémon par son dexId
const getPokemonByDexId = (dexId, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM Pokemon WHERE dexId = ? AND form = 0", [dexId], (err, row) => {
        callback(err, row);
    });
    db.close();
};

// Fonction pour récupérer un Pokémon par son dexId ET son id de forme
const getPokemonByDexIdAndForm = (dexId, form, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM Pokemon WHERE dexId = ? AND form = ?", [dexId, form], (err, row) => {
        callback(err, row);
    });
    db.close();
};

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getPokemon,
    getPokemonByDexIdAndForm,
    getPokemonByDexId
};
