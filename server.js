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

app.post('/usuarios', (req, res) => {
    
    ArrayDeUsuario.push(req.body); // adiciona no array
    res.send("Usuário criado!!");
})


app.get('/usuarios', (req, res) => {
    res.json(ArrayDeUsuario);
})


app.listen(3000) // faz o servidor Express "escutar" requisiçoes na porta 3000

