const express = require('express');

const app = express()

app.get('/',(request,response)=>{
    return response.json({
        evento:'Hello world 11.0',
        aluno:'Teste'});
});

app.listen(3333)