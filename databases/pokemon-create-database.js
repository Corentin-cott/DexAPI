const sqlite3 = require('sqlite3').verbose();

// Dans la base pokemon.dn
const db = new sqlite3.Database('./pokemon.db');

// Je demande la table Pokemon
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Pokemon (
            id INTEGER PRIMARY KEY,
            dexId INT NOT NULL,
            nameEN VARCHAR(20),
            nameFR VARCHAR(20),
            descEN TEXT,
            descFR TEXT,
            form INT NOT NULL,
            height DECIMAL(3,1) NOT NULL,
            weight DECIMAL(4,1) NOT NULL,
            type1 VARCHAR(20) NOT NULL,
            type2 VARCHAR(20),
            abilityOne VARCHAR(30) NOT NULL,
            abilityTwo VARCHAR(30) NOT NULL,
            abilityHidden VARCHAR(30) NOT NULL,
            baseHp INT NOT NULL,
            baseAtk INT NOT NULL,
            baseDfe INT NOT NULL,
            baseSpd INT NOT NULL,
            baseAts INT NOT NULL,
            baseDfs INT NOT NULL,
            evGivenHp INT DEFAULT 0,
            evGivenAtk INT DEFAULT 0,
            evGivenDfe INT DEFAULT 0,
            evGivenSpd INT DEFAULT 0,
            evGivenAts INT DEFAULT 0,
            evGivenDfs INT DEFAULT 0,
            experienceType INT NOT NULL,
            baseExperience INT NOT NULL,
            baseLoyalty INT NOT NULL,
            catchRate INT NOT NULL,
            femaleRate INT,
            hatchSteps INT NOT NULL,
            babyDbSymbol VARCHAR(20),
            babyForm INT
        );
    `)
});

// Je demande la table Evolutions
db.serialize(() => {
    db.run(`
            CREATE TABLE Evolutions (
            id INTEGER PRIMARY KEY,
            pokemon_id INT,
            form INT NOT NULL,
            evo_dbSymbol VARCHAR(20) NOT NULL,
            evo_form INT NOT NULL,
            condition TEXT,
            FOREIGN KEY (pokemon_id) REFERENCES Pokemon(id)
        );
    `)
});

// Je demande la table BreedGroups
db.serialize(() => {
    db.run(`
        CREATE TABLE BreedGroups (
            id INTEGER PRIMARY KEY,
            pokemon_id INT,
            form INT NOT NULL,
            breedGroupOne INT,
            breedGroupTwo INT,
            FOREIGN KEY (pokemon_id) REFERENCES Pokemon(id)
        );
    `)
});

db.close();
console.log("Base de données initialisée avec succès.");
