const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes.js');
const favicon = require('serve-favicon');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000; // Port par défaut

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'assets/logos/', 'dexAPI-gear.png')));

// Utiliser les routes définies dans pokemonRoutes.js
app.use(pokemonRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
