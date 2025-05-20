const teclado = require('prompt-sync')();

function mostrarTabuada(numero: number): void {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function iniciarTabuadas(): void {
    let continuar: string = 's';

    while (continuar === 's') {
        const numero: number = parseInt(teclado('Digite a tabuada: '));

        mostrarTabuada(numero);

        continuar = teclado('Deseja ver outra tabuada? (s/n): ');
    }

    console.log('Programa encerrado.');
}

iniciarTabuadas();
