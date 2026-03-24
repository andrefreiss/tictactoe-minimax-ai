# 🧠 AI Lab | Tic-Tac-Toe Minimax Strategy

Interface moderna de Jogo da Velha (Tic-Tac-Toe) que utiliza o algoritmo **Minimax** para garantir uma jogabilidade estratégica perfeita. O projeto demonstra conceitos avançados de Inteligência Artificial determinística e busca em árvore.

## 🚀 Status do Projeto
O motor de IA está em sua versão **Imbatível**. Através de cálculos recursivos, a máquina analisa todas as possibilidades do tabuleiro para impedir a vitória do usuário, resultando em vitória da IA ou empate perfeito.

## 🛠️ Tecnologias Utilizadas
- **HTML5 & CSS3**: Estrutura e estilização com estética Neon/Dark Mode.
- **JavaScript (ES6+)**: Lógica do jogo e motor de decisão.
- **Minimax Algorithm**: Implementação de recursão para tomada de decisão ótima.

## 🤖 Como funciona o Algoritmo?
Diferente de modelos que aprendem por tentativa e erro, este motor utiliza o **Minimax**:
1. Ele simula recursivamente todas as jogadas possíveis a partir do estado atual.
2. Atribui pontuações (+1 para vitória da IA, -1 para vitória do humano e 0 para empate).
3. Escolhe o movimento que maximiza a pontuação da IA, assumindo que o humano também jogará de forma ótima para minimizar essa pontuação.

## 🎮 Funcionalidades Atuais
- **IA Estratégica**: Motor de decisão que antecipa as jogadas do usuário.
- **Interface Neon**: Design focado em UX (User Experience) com feedback visual de "IA Calculando".
- **Arquitetura Modular**: Código separado em Regras (Game), Estratégia (Agent) e Interface (UI).

## 🎮 Níveis de Dificuldade
O projeto agora conta com um sistema de seleção dinâmica de desafio:

* **Imbatível (Hard):** Utiliza o algoritmo **Minimax** em 100% das jogadas. Através de busca exaustiva em árvore, a IA garante a jogada ótima, tornando a derrota da máquina impossível.
* **Médio:** A IA utiliza o raciocínio estratégico em 70% das jogadas, introduzindo uma margem de erro de 30% para permitir oportunidades ao jogador.
* **Fácil:** Focado em usuários iniciantes, a IA joga de forma aleatória em 70% do tempo, utilizando o Minimax apenas como suporte ocasional (30%).
