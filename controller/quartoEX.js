const quartos = [
    { id: 1, type: 'simples', preco: 50 },
    { id: 2, type: 'duplo', preco: 80 },
    { id: 3, type: 'suite', preco: 150 }
];

// Função para excluir um quarto
const deleteQuarto = (req, res) => {
    const quartoId = parseInt(req.params.quartoId);
    const index = quartos.findIndex(quarto => quarto.id === quartoId);
    if (index !== -1) {
        quartos.splice(index, 1);
        res.status(200).json({ message: 'Quarto excluído com sucesso!' });
    } else {
        res.status(404).json({ message: 'Quarto não encontrado.' });
    }
};

module.exports = {
    deleteQuarto
};