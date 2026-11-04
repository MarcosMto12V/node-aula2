
import express from "express";
import pets from "./pets.js";

const app = express();
const port = 3000;

app.use(express.json());


app.get("/", (requisicao, resposta) => {
    resposta.send(pets);
});


app.get("/:tutor", (requisicao, resposta) => {

    const tutorInformado = requisicao.params.tutor.toLowerCase();

    const pet = pets.find(
        (infopet) => infopet.tutor.toLowerCase() === tutorInformado
    );

    resposta.send(pet);
});


app.post("/", (req, res) => {

    const campos = ["nome", "idade", "email"];

    const nomeSelecionado = {};

    for (let campo of campos) {
        nomeSelecionado[campo] = req.body[campo];
    }

    pets.push(nomeSelecionado);

    res.status(200).send(nomeSelecionado);
});


app.delete("/:nome", (req, res) => {

    const nomeInformado = req.params.nome.toLowerCase();

    const indicePetSelecionado = pets.findIndex(
        (pet) => pet.nome.toLowerCase() === nomeInformado
    );

    const petRemovido = pets.splice(indicePetSelecionado, 1);

    res.status(200).send(petRemovido);
});


app.listen(port, () => {
    console.log(`Servidor rodando com sucesso na porta ${port}`);
});
