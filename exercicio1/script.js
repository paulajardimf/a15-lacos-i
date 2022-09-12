let conta = 0
let coxinha = prompt("Você quer uma coxinha? [S/N]");
let unidade = 0
const valorCoxinha = 2.5

while (coxinha.toUpperCase() == "S") {
    coxinha = prompt("Você deseja comer mais coxinhas? [S/N]");
    conta += valorCoxinha;
    unidade += 1;
}
console.log(`Você comeu ${unidade} coxinhas, e sua conta é no total de ${conta}`);