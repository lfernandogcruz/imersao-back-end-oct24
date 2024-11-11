// contador progressivo com loop while
// indo de 0 até meta definida pelo usuário

let meta = prompt('Digite o número que define até onde contar');
let contador = 0;

while (contador <= meta) {
  console.log(`Contando... ${contador}`);
  contador++;
}
