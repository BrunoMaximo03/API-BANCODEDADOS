 import express, { request, response } from 'express'
 
 const app = express();
 app.use(express.json()); // permite receber JSON

 const ArrayDeUsuario = []; // irá receber e guardar os usuários

 /* 
        POST = criar
        PUT = editar vários
        GET = listar
        PATCH = editar um
        DELETE = delete

        app é o "SERVIDOR WEB", vai possuir todos os métodos,rotas

        Nas ROTAS é necessário saber

        1) Tipo da rota (get,put,post...)
        2) O endereço


 */

let proximoId = 1;

app.post('/usuarios', (req, res) => {

    const usuario = req.body;
    usuario.id = proximoId++;
    ArrayDeUsuario.push(usuario); // adiciona no array
    res.status(201).json(req.body);

})


app.get('/usuarios', (req, res) => {

    res.status(200).json(ArrayDeUsuario);

})


app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = ArrayDeUsuario.findIndex(usuario => usuario.id === id);

    if (index !== -1) {
        ArrayDeUsuario.splice(index, 1);
        res.status(200).send("Usuário excluído!");
    } else {
        res.status(404).send("Usuário não encontrado!");
    }
});

app.listen(3000) // faz o servidor Express "escutar" requisiçoes na porta 3000

