/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. 
Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
e faça o que se pede abaixo nas cópias dos arrays originais; */

const numerosCopia = numeros.slice()
const stringsCopia = strings.slice()
const mistaCopia = mista.slice()

/* - Adicione um item `number` ao início do primeiro array.
 Utilize `console.log()` para exibir o original e a cópia; */

numerosCopia.unshift(1)
console.log(numeros)
console.log(numerosCopia)
console.log('---------------')

/* - Remova o último item do segundo array. 
Utilize `console.log()` para exibir o original e a cópia; */

stringsCopia.pop('programação')
console.log(strings)
console.log(stringsCopia)
console.log('---------------')

/* - Remova o segundo item do terceiro array. 
Utilize `console.log()` para exibir o original e a cópia; */

mistaCopia.splice(1,1)
console.log(mista)
console.log(mistaCopia)
console.log('---------------')