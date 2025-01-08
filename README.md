# Classificador de Nível de Herói

Este é um sistema que permite classificar o nível de um herói com base em três atributos principais: **Experiência (XP)**, **Habilidade** e **Vitórias em Batalhas**. O usuário pode inserir esses dados manualmente ou escolher entre um conjunto de heróis de exemplo. O sistema calcula o nível do herói com base nos valores inseridos e exibe uma classificação: **Ferro**, **Bronze**, **Prata**, **Ouro**, **Platina Diamente**,**Ascendente**, **Imortal** ou **Radiante**.

## Funcionalidades

- **Entrada de dados do herói:** O usuário pode inserir a experiência (XP), habilidade, conquistas e vitórias em batalhas de um herói.
- **Botões de heróis de exemplo:** O sistema oferece cinco heróis prontos para teste (Aragon, Xena, Thor, Mulher-Maravilha e Flash) com dados predefinidos.
- **Classificação de nível:** Com base nos dados inseridos ou selecionados, o sistema calcula o nível do herói (Ferro, Bronze, Prata, Ouro, Platina Diamente, Ascendente, Imortal ou Radiante).

## Como Usar

1. **Inserir dados manualmente:**
   - Preencha os campos de **Experiência (XP)**, **Habilidade**, **Conquistas** e **Vitórias em Batalhas**.
   - Clique no botão **"Classificar Herói"** para ver o nível do herói.

2. **Usar os heróis de exemplo:**
   - Clique no botão de qualquer herói na seção "Escolha um herói" para preencher automaticamente os campos com os dados do herói selecionado.

3. **Ver o resultado:**
   - Após inserir os dados ou selecionar um herói de exemplo, o sistema exibirá o nível do herói, como **Ferro**, **Bronze**, **Prata**, **Ouro**,**Platina Diamente**,**Ascendente**, **Imortal** ou **Radiante**.

## Estrutura do Projeto

### Arquivos

- `index.html`: O arquivo HTML contém a estrutura da página, incluindo o formulário para entrada de dados e os botões para selecionar heróis de exemplo.
- `style.css`: O arquivo CSS contém os estilos para a página, incluindo o layout, os botões e a responsividade para dispositivos móveis.
- `script.js`: O arquivo JavaScript contém a lógica para preencher os campos com dados dos heróis de exemplo e classificar o nível do herói com base nos dados inseridos.

### Como Funciona

1. **HTML (index.html):**
   O HTML define a estrutura da página, incluindo os campos de entrada de dados, os botões de exemplo para heróis e o botão para classificar o herói. O sistema também exibe o resultado da classificação.

2. **CSS (style.css):**
   O CSS define o layout e o estilo da página. Ele inclui regras para botões, campos de entrada e uma seção de resultados. O design é responsivo, o que significa que o sistema funciona bem em dispositivos móveis e desktops.

3. **JavaScript (script.js):**
   O JavaScript contém a lógica do sistema:
   - **Função `classificarHeroi()`:** Recebe os dados inseridos, calcula o nível do herói e exibe o resultado.
   - **Funções de preenchimento automático (`preencherHeroi()`):** Preenche os campos de entrada com os dados de heróis de exemplo.
   - **Eventos de clique nos botões:** Quando o usuário clica em um dos botões de herói de exemplo, os campos são preenchidos automaticamente com os dados daquele herói.

### Lógica de Classificação

O sistema classifica o nível do herói com base nas seguintes condições:

- **Radiante** Se a experiência (XP) for maior a 10.001.
- **Imortal:** Se a experiência (XP) for entre 9001 e 10000.
- **Ascendente:** Se a experiência (XP) for entre 8001 e 9000.
- **Platina Diamante:** Se a experiência (XP) for entre 7001 e 8000.
- **Ouro:** Se a experiência (XP) for entre 5001 e 7000.
- **Prata:** Se a experiência (XP) for entre 2001 e 5000.
- **Bronze:** Se a experiência (XP) for entre 1001 e 2000.
- **Ferro:** Caso contrário.

## Exemplos de Heróis

O sistema inclui os seguintes heróis de exemplo:

1. **Aragon**
   - XP: 12.000
   - Habilidade: 95
   - Conquistas: 60
   - Vitórias em Batalhas: 150
   - Nível: **Radiante**

2. **Xena**
   - XP: 4.500
   - Habilidade: 80
   - Conquistas: 30
   - Vitórias em Batalhas: 120
   - Nível: **Prata**

3. **Thor**
   - XP: 6.000
   - Habilidade: 85
   - Conquistas: 40
   - Vitórias em Batalhas: 90
   - Nível: **Ouro**

4. **Mulher-Maravilha**
   - XP: 8.000
   - Habilidade: 65
   - Conquistas: 15
   - Vitórias em Batalhas: 45
   - Nível: **Platina Diamante**

5. **Flash**
   - XP: 800
   - Habilidade: 80
   - Conquistas: 10
   - Vitórias em Batalhas: 19
   - Nível: **Ferro**

## Responsividade

O design do sistema é totalmente **responsivo** e funciona bem em dispositivos móveis, tablets e desktops. O layout é ajustado automaticamente para diferentes tamanhos de tela, garantindo uma experiência de usuário consistente.

## Conclusão

Este sistema permite que o usuário classifique o nível de um herói com base em diversos atributos e, ao mesmo tempo, forneça uma maneira fácil e interativa de testar com heróis de exemplo. A implementação é simples e usa HTML, CSS e JavaScript, tornando-o ideal para fins educacionais ou como uma base para expandir funcionalidades adicionais.

---

**Licença**: MIT (Caso queira adicionar uma licença, você pode modificar de acordo com suas necessidades)
