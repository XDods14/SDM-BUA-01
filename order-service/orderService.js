const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON request bodies

let orders = {}; //Array criada


app.post('/pedidos', (req, res) => {
    const {id,product,quantity} = req.body; // Desestruturação do pedido
    if(!id || !product || !quantity) {
        return res.status(400).send({message: 'Pedido inválido!'}); // Verifica se o pedido é válido
    }
    const newOrder = ({id,product,quantity}); // Cria um novo pedido
    orders.push(newOrder); // Adiciona o pedido ao array de pedidos
    res.status(201).send({message: 'Pedido recebido com sucesso!', pedido: newOrder}); // Retorna o pedido criado
});

app.get('/pedidos', (req, res) => {
    res.status(200).json(orders) // Retorna todos os pedidos
    
});

app.get('/pedidos/:id', (req, res) => {
    const orderId = req.params.id; // Pega o id do pedido
    const order = orders.find(o => o.id === orderId); // Busca o pedido pelo id
    if (!order) {
        return res.status(404).send({ message: 'Pedido não encontrado!' }); // Retorna erro se o pedido não for encontrado
    }
    res.status(200).json(order); // Retorna o pedido encontrado
});


app.put('/pedidos/:id', (req, res) => {
    const orderId = req.params.id; // Pega o id do pedido
    const orderIndex = orders.findIndex(o => o.id === orderId); // Busca o pedido pelo id
    if (orderIndex === -1) {
        return res.status(404).send({ message: 'Pedido não encontrado!' }); // Retorna erro se o pedido não for encontrado
    }
    const { product, quantity } = req.body; // Desestruturação do pedido
    if (!product || !quantity) {
        return res.status(400).send({ message: 'Pedido inválido!' }); // Verifica se o pedido é válido
    }    
    orders[orderIndex] = { id: orderId, product, quantity }; // Atualiza o pedido
    res.status(200).send({ message: 'Pedido atualizado com sucesso!', pedido: orders[orderIndex] }); // Retorna o pedido atualizado
});

app.delete('/pedidos/:id', (req, res) => {
    const orderId = req.params.id; // Pega o id do pedido
    const orderIndex = orders.findIndex(o => o.id === orderId); // Busca o pedido pelo id
    if (orderIndex === -1) {
        return res.status(404).send({ message: 'Pedido não encontrado!' }); // Retorna erro se o pedido não for encontrado
    }
    orders.splice(orderIndex, 1); // Remove o pedido do array de pedidos
    res.status(200).send({ message: 'Pedido removido com sucesso!' }); // Retorna mensagem de sucesso
});

app.listen(4000, () => console.log('Order Service rodando na porta 4000'));

