// contador regressivo usando loop while
// onde contagem inicia no numero inserido pelo usuario

let contador = prompt('Digite o número que iniciará a contagem regressiva');

while (contador >= 0) {
  console.log(`Contando... ${contador}`);
  contador--;
}
