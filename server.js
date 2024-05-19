const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//const port =  3001;
app.use(bodyParser.json());
app.use(cors());


app.post('/botao', (req, res) => {
    const { inputCpfl, inputCondo, inputFaculdade, inputCartao, inputIoutros, inputPensao, inputCasa, inputInternet } = req.body;

    const pagamentoTotal = 
   
        (parseFloat(inputCpfl) || 0) - 
        (parseFloat(inputCondo) || 0) - 
        (parseFloat(inputCasa) || 0) - 
        (parseFloat(inputCartao) || 0) - 
        (parseFloat(inputFaculdade) || 0) - 
        (parseFloat(inputInternet) || 0) - 
        (parseFloat(inputIoutros) || 0) - 
        (parseFloat(inputPensao) || 0);

    res.json({resultado:pagamentoTotal });
});


    
module.exports = app;