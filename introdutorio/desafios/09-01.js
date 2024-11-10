let diaDaSemana = prompt('Que dia da semana é hoje?');

let mensagem = '';

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
  mensagem = 'Bom fim de semana!';
} else {
  mensagem = 'Boa semana!';
}

alert(mensagem);
