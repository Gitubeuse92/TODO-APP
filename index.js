// import de express
const express = require ('express');

//impot json-server
const jsonServer = require('json-server');

//appeller le server
const app = express();

//la fonction listen va faire démarrer le serveur sur le port 3000 
app.listen(3000, () => console.log('Le serveur est lancé sur le port 3000'));

//file système, pour l'edition du doc json
const fs = require ('fs');

//permet de créer les pages dynamiques
const bodyParser = require ('body-parser');

//