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

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
