const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

let clientes = [];
let pets = [];


app.get('/api/clientes', (req, res) => {
    res.json (clientes.slice(0, 20));

});

app.post('/api/clientes', (req, res) =>{
    const clientes = req.body;
    clientes.push(clientes);
    res.status(201).json(clientes);
});

app.get('/api/pets', (req, res) => {
    res.json(pets.slice(0, 20));
});

app.post('/api/pets', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.status(201).json(pet);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});