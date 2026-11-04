import express from "express";
import pets from "./pets.js";

const app = express();
const port = 3000;

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

for (let campo of campos) {

    nomeSelecionado[campo] = req.body[campo];

}

    res.status(200).send(nomeSelecionado)
app.post("/", (req, res) => {
    const novoPet = req.body;~
    pets.push (novoPet);
    res.status(200).send(novoPet);
})
app.listen(port, () => {
    console.log(`Servidor rodando com sucesso na porta ${port}`);
});