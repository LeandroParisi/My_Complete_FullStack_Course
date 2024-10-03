Para um exercício onde o aluno deve programar um jogo de xadrez em JavaScript, aqui está uma ideia desafiadora, porém prática, que pode ser desenvolvida em etapas:

---

### Exercício: Programando um Jogo de Xadrez em JavaScript

Você vai criar uma versão simplificada de um jogo de xadrez em JavaScript. O objetivo é praticar a criação de funções, manipulação de arrays e objetos, além de aplicar lógica condicional para mover as peças.

#### Requisitos
1. **Tabuleiro de Xadrez:**
   - O tabuleiro deve ser representado como uma matriz 8x8.
   - Cada célula do tabuleiro conterá uma peça ou estará vazia (representada por `null`).
   
2. **Peças de Xadrez:**
   - Crie objetos para representar diferentes peças: `rei`, `rainha`, `torre`, `bispo`, `cavalo`, `peão`.
   - Cada peça deve ter:
     - Um nome,
     - Uma cor (`branco` ou `preto`),
     - Sua posição atual no tabuleiro.
     
3. **Movimentação:**
   - Crie funções para mover cada tipo de peça de acordo com as regras do xadrez. Por exemplo:
     - O **rei** pode mover-se uma casa em qualquer direção.
     - A **rainha** pode mover-se em qualquer número de casas na horizontal, vertical ou diagonal.
     - A **torre** pode mover-se em qualquer número de casas na horizontal ou vertical.
     - O **bispo** pode mover-se em qualquer número de casas na diagonal.
     - O **cavalo** move-se em "L" (duas casas em uma direção e uma casa em direção perpendicular).
     - O **peão** move-se uma casa à frente (ou duas na sua primeira jogada), e captura peças adversárias na diagonal.

4. **Regras de Captura:**
   - Quando uma peça move-se para uma casa ocupada por uma peça adversária, a peça adversária é capturada (removida do tabuleiro).
   - O jogo termina quando o **rei** de uma das cores for capturado.

5. **Interface Simplificada:**
   - Utilize `console.log` para imprimir o estado atual do tabuleiro após cada jogada.
   - Exemplo de um tabuleiro representado no console:
     ```txt
     [ "T", "C", "B", "Q", "K", "B", "C", "T" ]
     [ "P", "P", "P", "P", "P", "P", "P", "P" ]
     [ null, null, null, null, null, null, null, null ]
     [ null, null, null, null, null, null, null, null ]
     [ null, null, null, null, null, null, null, null ]
     [ null, null, null, null, null, null, null, null ]
     [ "p", "p", "p", "p", "p", "p", "p", "p" ]
     [ "t", "c", "b", "q", "k", "b", "c", "t" ]
     ```
     (Peças brancas em maiúsculo e peças pretas em minúsculo).

#### Instruções:
1. **Inicialize o Tabuleiro:**
   - Crie uma função `inicializarTabuleiro` para configurar o tabuleiro com as peças em suas posições iniciais.

2. **Movimentação das Peças:**
   - Implemente uma função `moverPeca(origem, destino)` que move uma peça de uma casa para outra. A função deve verificar se o movimento é válido conforme as regras de cada peça.

3. **Validação de Movimentos:**
   - Valide se o movimento é permitido para a peça selecionada e se não há outras peças bloqueando o caminho (exceto para o cavalo).

4. **Verificação de Captura:**
   - Implemente a lógica de captura, onde uma peça da cor adversária é removida se a casa de destino estiver ocupada.

5. **Finalização do Jogo:**
   - O jogo termina quando o **rei** de uma cor é capturado, e uma mensagem deve ser exibida no console indicando o vencedor.

---

### Exemplo Simples de Código Início:
```js
// Inicializa o tabuleiro com as peças em suas posições iniciais
const tabuleiro = [
  ['T', 'C', 'B', 'Q', 'K', 'B', 'C', 'T'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['t', 'c', 'b', 'q', 'k', 'b', 'c', 't']
];

// Função para imprimir o estado atual do tabuleiro
const imprimirTabuleiro = (tabuleiro) => {
  tabuleiro.forEach(linha => console.log(linha));
};

// Chamada inicial
imprimirTabuleiro(tabuleiro);
```

Os alunos podem expandir esse código simples com funções para mover as peças e implementar as regras do jogo de xadrez.