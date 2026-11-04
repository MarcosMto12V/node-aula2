
document.getElementById("verificarComprimento").addEventListener("click", () => {

    const texto = document.getElementById("textInput").value;

    const comprimento = texto.length;

    document.getElementById("resultado").textContent =
        `O comprimento do texto é: ${comprimento}`;

});
