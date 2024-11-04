const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const pokemon_db_path = '../databases/moves.db'

/*
TABLE moves
--> id INTEGER PRIMARY KEY
--> en_name TEXT
--> fr_name TEXT
--> en_desc TEXT
--> fr_desc TEXT
--> type TEXT
--> power INTEGER
--> accuracy INTEGER
--> PP INTEGER
--> category TEXT
--> movecriticalRate INTEGER
--> priority INTEGER
--> isAuthentic BOOLEAN
--> isBallistics BOOLEAN
--> isBite BOOLEAN
--> isBlocable BOOLEAN
--> isCharge BOOLEAN
--> isDance BOOLEAN
--> isDirect BOOLEAN
--> isDistance BOOLEAN
--> isEffectChance BOOLEAN
--> isGravity BOOLEAN
--> isHeal BOOLEAN
--> isKingRockUtility BOOLEAN
--> isMagicCoatAffected BOOLEAN
--> isMental BOOLEAN
--> isMirrorMove BOOLEAN
--> isNonSkyBattle BOOLEAN
--> isPowder BOOLEAN
--> isPulse BOOLEAN
--> isPunch BOOLEAN
--> isRecharge BOOLEAN
--> isSnatchable BOOLEAN
--> isSoundAttack BOOLEAN
--> isUnfreeze BOOLEAN
--> battleEngineAimedTarget TEXT
--> battleStageMod TEXT
--> moveStatus TEXT
--> effectChance INTEGER
--> isSlicingAttack BOOLEAN
--> isWind BOOLEAN
*/

// Fonction pour récupérer TOUTES les attaques
const getMoves = (callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM moves", (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Fonction pour récupérer une attaque par son Id
const getMoveById = (moveId, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM moves WHERE id = ?", [moveId], (err, row) => {
        callback(err, row);
    });
    db.close();
}

// Fonction pour récupérer une attaque par son nom anglais
const getMoveByEnName = (moveName, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM moves WHERE en_name = ?", [moveName], (err, row) => {
        callback(err, row);
    });
    db.close();
}

// Fonction pour récupérer une attaque par son nom français
const getMoveByFrName = (moveName, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.get("SELECT * FROM moves WHERE fr_name = ?", [moveName], (err, row) => {
        callback(err, row);
    });
    db.close();
}

// Fonction pour récupérer une attaque par son type
const getMoveByType = (moveType, callback) => {
    const db = new sqlite3.Database(path.resolve(__dirname, pokemon_db_path));
    db.all("SELECT * FROM moves WHERE type = ?", [moveType], (err, rows) => {
        callback(err, rows);
    });
    db.close();
}

// Exporter les fonctions pour les utiliser dans le contrôleur
module.exports = {
    getMoves,
    getMoveById,
    getMoveByEnName,
    getMoveByFrName,
    getMoveByType
};
