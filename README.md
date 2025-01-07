# Classificador de Nível de Herói

Este é um sistema que permite classificar o nível de um herói com base em três atributos principais: **Experiência (XP)**, **Habilidade** e **Vitórias em Batalhas**. O usuário pode inserir esses dados manualmente ou escolher entre um conjunto de heróis de exemplo. O sistema calcula o nível do herói com base nos valores inseridos e exibe uma classificação: **Novato**, **Intermediário**, **Avançado** ou **Mestre**.

## Funcionalidades

- **Entrada de dados do herói:** O usuário pode inserir a experiência (XP), habilidade, conquistas e vitórias em batalhas de um herói.
- **Botões de heróis de exemplo:** O sistema oferece cinco heróis prontos para teste (Aragon, Xena, Thor, Mulher-Maravilha e Flash) com dados predefinidos.
- **Classificação de nível:** Com base nos dados inseridos ou selecionados, o sistema calcula o nível do herói (Novato, Intermediário, Avançado ou Mestre).

## Como Usar

1. **Inserir dados manualmente:**
   - Preencha os campos de **Experiência (XP)**, **Habilidade**, **Conquistas** e **Vitórias em Batalhas**.
   - Clique no botão **"Classificar Herói"** para ver o nível do herói.

2. **Usar os heróis de exemplo:**
   - Clique no botão de qualquer herói na seção "Escolha um herói" para preencher automaticamente os campos com os dados do herói selecionado.

3. **Ver o resultado:**
   - Após inserir os dados ou selecionar um herói de exemplo, o sistema exibirá o nível do herói, como **Novato**, **Intermediário**, **Avançado** ou **Mestre**.

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

- **Mestre:** Se a experiência (XP) for maior ou igual a 10.000, ou se a habilidade for maior ou igual a 90, ou se o número de conquistas for maior ou igual a 50.
- **Avançado:** Se a experiência (XP) for maior ou igual a 5.000, ou se a habilidade for maior ou igual a 70, ou se o número de vitórias for maior ou igual a 100.
- **Intermediário:** Se a experiência (XP) for maior ou igual a 1.000, ou se a habilidade for maior ou igual a 50, ou se o número de vitórias for maior ou igual a 50.
- **Novato:** Caso contrário.

## Exemplos de Heróis

O sistema inclui os seguintes heróis de exemplo:

1. **Aragon**
   - XP: 12.000
   - Habilidade: 95
   - Conquistas: 60
   - Vitórias em Batalhas: 150
   - Nível: **Mestre**

2. **Xena**
   - XP: 4.500
   - Habilidade: 80
   - Conquistas: 30
   - Vitórias em Batalhas: 120
   - Nível: **Avançado**

3. **Thor**
   - XP: 6.000
   - Habilidade: 85
   - Conquistas: 40
   - Vitórias em Batalhas: 90
   - Nível: **Avançado**

4. **Mulher-Maravilha**
   - XP: 2.000
   - Habilidade: 65
   - Conquistas: 15
   - Vitórias em Batalhas: 45
   - Nível: **Intermediário**

5. **Flash**
   - XP: 800
   - Habilidade: 50
   - Conquistas: 10
   - Vitórias em Batalhas: 20
   - Nível: **Novato**

## Responsividade

O design do sistema é totalmente **responsivo** e funciona bem em dispositivos móveis, tablets e desktops. O layout é ajustado automaticamente para diferentes tamanhos de tela, garantindo uma experiência de usuário consistente.

## Conclusão

Este sistema permite que o usuário classifique o nível de um herói com base em diversos atributos e, ao mesmo tempo, forneça uma maneira fácil e interativa de testar com heróis de exemplo. A implementação é simples e usa HTML, CSS e JavaScript, tornando-o ideal para fins educacionais ou como uma base para expandir funcionalidades adicionais.

---

**Licença**: MIT (Caso queira adicionar uma licença, você pode modificar de acordo com suas necessidades)
