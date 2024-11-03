const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 2999; // Port par défaut

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'assets/logos/', 'dexAPI-gear.png')));

// Renvoie si l'API est en ligne
app.get('/', (req, res) => {
    res.json({ online: true });
});

// Routes de pokemonRoutes.js
const pokemonRoutes = require('./routes/pokemonRoutes.js');
app.use('/pokemon', pokemonRoutes);

// Routes de movesetsRoutes.js
const movesetsRoutes = require('./routes/movesetsRoutes.js');
app.use('/moveset', movesetsRoutes);

// Routes de pokemon_abilitiesRoutes.js
const abilitiesRoutes = require('./routes/pokemon_abilitiesRoutes.js');
app.use('/abilities', abilitiesRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
