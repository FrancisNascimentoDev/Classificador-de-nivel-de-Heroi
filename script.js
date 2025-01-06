// Função para classificar o herói com os valores inseridos
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

// Funções para preencher os campos com os valores dos heróis de exemplo
function preencherHeroi(hero) {
    const herois = {
        "Aragon": { xp: 12000, habilidade: 95, conquistas: 60, vitorias: 150 },
        "Xena": { xp: 4500, habilidade: 80, conquistas: 30, vitorias: 120 },
        "Thor": { xp: 6000, habilidade: 85, conquistas: 40, vitorias: 90 },
        "Mulher-Maravilha": { xp: 2000, habilidade: 65, conquistas: 15, vitorias: 45 },
        "Flash": { xp: 800, habilidade: 50, conquistas: 10, vitorias: 20 }
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
