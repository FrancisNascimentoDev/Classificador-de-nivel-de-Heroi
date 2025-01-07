// Função para classificar o herói com os valores inseridos
function classificarHeroi() {
    const experiencia = parseInt(document.getElementById('experiencia').value);
    const habilidade = parseInt(document.getElementById('habilidade').value);
    const conquistas = parseInt(document.getElementById('conquistas').value);
    const vitorias = parseInt(document.getElementById('vitorias').value);

    let nivel = "";

    if (experiencia >= 10001 ) {
      nivel = "Radiante";
    } else if (experiencia >= 9001 && 10000 ) {
      nivel = "Imortal";
    } else if (experiencia >= 8001 && 9000 ) {
      nivel = "Ascendente";
    } else if (experiencia >= 7001 && 8000 ) {
      nivel = "Platina Diamante";
    } else if (experiencia >= 5001 && 7000 ) {
      nivel = "Ouro";
    } else if (experiencia >= 2001 && 5000 ) {
      nivel = "Prata";
    } else if (experiencia >=1001 && 2000 ) {
      nivel = "Bronze";
    } else {
      nivel = "Ferro";
    }
    

    document.getElementById('resultado').innerText = `O nível do herói é: ${nivel}`;
}

// Funções para preencher os campos com os valores dos heróis de exemplo
function preencherHeroi(hero) {
    const herois = {
        "Aragon": { xp: 12000, habilidade: 95, conquistas: 60, vitorias: 150 },
        "Xena": { xp: 4500, habilidade: 80, conquistas: 30, vitorias: 120 },
        "Thor": { xp: 6000, habilidade: 53, conquistas: 40, vitorias: 90 },
        "Mulher-Maravilha": { xp: 8000, habilidade: 65, conquistas: 15, vitorias: 45 },
        "Flash": { xp: 800, habilidade: 18, conquistas: 10, vitorias: 19 }
    };

    const heroData = herois[hero];
    if (heroData) {
        document.getElementById('experiencia').value = heroData.xp;
        document.getElementById('habilidade').value = heroData.habilidade;
        document.getElementById('conquistas').value = heroData.conquistas;
        document.getElementById('vitorias').value = heroData.vitorias;
    }
}

// Adicionando eventos de clique para os botões
document.getElementById('aragonBtn').addEventListener('click', function() { preencherHeroi('Aragon'); });
document.getElementById('xenaBtn').addEventListener('click', function() { preencherHeroi('Xena'); });
document.getElementById('thorBtn').addEventListener('click', function() { preencherHeroi('Thor'); });
document.getElementById('mulherMaravilhaBtn').addEventListener('click', function() { preencherHeroi('Mulher-Maravilha'); });
document.getElementById('flashBtn').addEventListener('click', function() { preencherHeroi('Flash'); });
