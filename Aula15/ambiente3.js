// Função para dividir dois números
function dividirNumeros(numero1, numero2) {
    try {
        if (numero2 === 0) {
            throw "Erro: divisão por zero nao pode ser possivel!";
        }
        return numero1 / numero2;
    } catch (erro) {
        return erro; // Retorna a mensagem de erro
    }
}

// Testando a função
let resultado1 = dividirNumeros(10, 2); // Deve retornar 5
let resultado2 = dividirNumeros(10, 0); // Deve retornar a mensagem de erro

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);