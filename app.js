
import express from "express";
import pets from "./pets.js";

const app = express();
const port = 3000;

app.use(express.json());

//LISTA
app.get("/", (requisicao, resposta) => {
    resposta.send(pets);
});

//BUSCA
app.get("/:tutor", (requisicao, resposta) => {

    const tutorInformado = requisicao.params.tutor.toLowerCase();

    const pet = pets.find(
        (infopet) => infopet.tutor.toLowerCase() === tutorInformado
    );

    resposta.send(pet);
});

//ATUALIZA INFO
app.put("/:nome", (requisicao, resposta) => {

    const nomeInformado = requisicao.params.nome.toLowerCase();

    const nomeSelecionado = pets.find(
        (infoPet) => infoPet.nome.toLowerCase() === nomeInformado
    );

    const campos = Object.keys(requisicao.body);

    for (let campo of campos) {
        nomeSelecionado[campo] = requisicao.body[campo];
    }

    resposta.status(200).send(nomeSelecionado);
});

//CADASTRA NOVO PET
app.post("/", (req, res) => {

    const campos = ["nome", "idade", "email"];

    const nomeSelecionado = {};

    for (let campo of campos) {
        nomeSelecionado[campo] = req.body[campo];
    }

    pets.push(nomeSelecionado);

    res.status(200).send(nomeSelecionado);
});


//EXCLUIR 
app.delete("/:nome", (req, res) => {

    const nomeInformado = req.params.nome.toLowerCase();

    const indicePetSelecionado = pets.findIndex(
        (pet) => pet.nome === nomeInformado
    );

    const petRemovido = pets.splice(indicePetSelecionado, 1);

    res.status(200).send(petRemovido);
});


app.listen(port, () => {
    console.log(`Servidor rodando com sucesso na porta ${port}`);
});
