

let teclado = require('prompt-sync')();

let continuar: string = 's';

while (continuar === 's') {
    let tab: number = parseInt(teclado(`Digite a tabuada:`));
    let cont: number = 0;

    while (cont <= 10) {
        console.log(`${tab} X ${cont} = ${tab * cont}`);
        cont++;
    }

    continuar = teclado('Deseja ver outra tabuada? (s/n): ');
}
