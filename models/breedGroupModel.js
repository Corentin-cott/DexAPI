const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const pokemon_db_path = '../databases/pokemon.db'

/*
TABLE breedGroups
--> id INTEGER PRIMARY KEY
--> pokemon_id INT
--> form INT NOT NULL
--> breedGroupOne INT
--> breedGroupTwo INT
--> FOREIGN KEY (pokemon_id) REFERENCES Pokemon(id)
*/

// Fonction pour récupérer TOUTES les groupes d'oeufs de Pokémon
const getBreedGroups = (callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM breedGroups", (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Fonction pour récupérer un groupe d'oeufs de Pokémon par son dexId
const getBreedGroupByDexId = (dexId, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM breedGroups WHERE pokemon_id = ? AND form = 0", [dexId], (err, rows) => {
        callback(err, rows);
    });
    db.close()
};

// Fonction pour récupérer un groupe d'oeufs de Pokémon par son dexId ET son id de forme
const getBreedGroupByDexIdAndForm = (dexId, form, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM breedGroups WHERE pokemon_id = ? AND form = ?", [dexId, form], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Fonction pour récupérer un groupe d'oeufs de Pokémon par son groupe d'oeufs 1 ou 2
const getBreedGroupByBreedGroup = (breedGroup, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM breedGroups WHERE breedGroupOne = ? OR breedGroupTwo = ?", [breedGroup, breedGroup], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Fonction pour récupérer un groupe d'oeufs de Pokémon par son groupe d'oeufs 1
const getBreedGroupByBreedGroupOne = (breedGroupOne, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM breedGroups WHERE breedGroupOne = ?", [breedGroupOne], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Fonction pour récupérer un groupe d'oeufs de Pokémon par son groupe d'oeufs 2
const getBreedGroupByBreedGroupTwo = (breedGroupTwo, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM breedGroups WHERE breedGroupTwo = ?", [breedGroupTwo], (err, rows) => {
        callback(err, rows);
    });
    db.close();
};

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getBreedGroups,
    getBreedGroupByDexIdAndForm,
    getBreedGroupByDexId,
    getBreedGroupByBreedGroupOne,
    getBreedGroupByBreedGroupTwo,
    getBreedGroupByBreedGroup
};
