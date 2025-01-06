function classificarHeroi() {
    const experiencia = parseInt(document.getElementById('experiencia').value);
    const habilidade = parseInt(document.getElementById('habilidade').value);
    const conquistas = parseInt(document.getElementById('conquistas').value);
    const vitorias = parseInt(document.getElementById('vitorias').value);

    let nivel = "";

    if (experiencia >= 10000 || habilidade >= 90 || conquistas >= 50) {
        nivel = "Mestre";
    } else if (experiencia >= 5000 || habilidade >= 70 || vitorias >= 100) {
        nivel = "Avançado";
    } else if (experiencia >= 1000 || habilidade >= 50 || vitorias >= 50) {
        nivel = "Intermediário";
    } else {
        nivel = "Novato";
    }

    document.getElementById('resultado').innerText = `O nível do herói é: ${nivel}`;
}
