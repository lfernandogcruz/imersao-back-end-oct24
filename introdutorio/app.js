alert('Boas vindas ao jogo do Número secreto!');

let numeroSecreto = 5;

let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
  alert(`você descobriu o numero secreto (${numeroSecreto})`);
  
} else {
  if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`)
  } else {
    alert(`O número secreto é maior que ${chute}`)
  }
};
