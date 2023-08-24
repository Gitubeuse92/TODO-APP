// import de express
const express = require ('express');

//impot json-server
const jsonServer = require('json-server');

//la fonction listen va faire démarrer le serveur sur le port 3000 
app.listen(3000, () => console.log('Le serveur est lancé sur le port 3000'));

//file système, pour l'edition du doc json
const fs = require ('fs');

//permet de créer les pages dynamiques
const bodyParser = require ('body-parser');

//ajouter une route
app.get('/', (req, res) =>{
    res.send('Coucou');
});

//---VARIABLES-----

//middlewhare quand une requete doit s'éxecuter et où
const jsm = jsonServer.router('db.json');

//appeller le server
const app = express();

//-----app USE and SET

//pour ne pas convertir en objet
app.use(bodyParser.urlencoded({ extended: false }));

//dire ce qu'on va traiter c'est en Json
app.use(bodyParser.json());

//lors qu'on va être sur l'appli elle seront traitées sur le middleware

app.use('/api, jsm');

//