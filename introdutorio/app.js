alert('Boas vindas ao jogo do Número secreto!');

let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e 10');

  if (chute == numeroSecreto) {
    break;
    
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`)
    } else {
      alert(`O número secreto é maior que ${chute}`)
    }
    tentativas++;
  }
}

if (tentativas == 1) {
  alert(`você descobriu o numero secreto (${numeroSecreto}) com ${tentativas} tentativa`);
} else {
  alert(`você descobriu o numero secreto (${numeroSecreto}) com ${tentativas} tentativas`);
}
