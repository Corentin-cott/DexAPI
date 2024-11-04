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

// Routes de abilitiesRoutes.js
const abilitiesRoutes = require('./routes/abilitiesRoutes.js');
app.use('/abilities', abilitiesRoutes);

// Routes de movesRoutes.js
const movesRoutes = require('./routes/movesRoutes.js');
app.use('/moves', movesRoutes);

// Routes de evolutionsRoutes.js
const evolutionsRoutes = require('./routes/evolutionsRoutes.js');
app.use('/evolutions', evolutionsRoutes);

// Routes de breedGroupsRoutes.js
const breedGroupsRoutes = require('./routes/breedGroupsRoutes.js');
app.use('/breedGroups', breedGroupsRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
    // On clear la console pour plus de lisibilité
    console.clear();
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
