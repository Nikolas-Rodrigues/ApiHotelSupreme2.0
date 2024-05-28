const express = require('express');
const quartoEX = require('./controllers/quartoEX');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.json());

// Rota para excluir um quarto
app.delete('/index/:quartoId', roomController.deleteRoom);

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});








