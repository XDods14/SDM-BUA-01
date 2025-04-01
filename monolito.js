const express = require("express") // Importando o express
const app = express() // Inicializando o express

app.use(express.json()) // Habilitando o uso de JSON

let usuarios = [] // Array para armazenar usuários
let pedidos = [] // Array para armazenar pedidos

app.post("/usuarios", (req, res) => { // Rota para cadastrar usuários
    const usuario = req.body
    usuarios.push(usuario)
    res.send({message: "Usuario cadastrado com sucesso", usuario})

})

app.get("/dados", (req,res) => {
    res.send({usuarios})
})
app.listen(3000, () => console.log("Servidor monolitico ok, na porta 3000")) // Inicializando o servidor na porta 3000 

/*app.post("/pedidos", (req, res) => {
    const pedidos = req.body
    pedidos.push(pedidos)
    res.send({message: "Pedido cadastrado com sucesso", pedidos})
})

app.get("/dados", (req,res)=> {
    res.send({pedidos})
})

app.listen(4000,() => console.log("Servidor monolitico ok, na porta 4000")) // Inicializando o servidor na porta 4000 */