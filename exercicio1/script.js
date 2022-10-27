const numeros = [4, 6, 2, 5, 8]

const strings = ['fabio', 'curso', 'programação']

const mista = [5, 'bete', true]

console.log('numeros', numeros)
console.log('strings', strings)
console.log('mista', mista)

/* # Exercício 2

Com os arrays criados, agora vamos observar os arrays. 
Faça o que se pede abaixo, utilizando `console.log()`: */

/* - Imprima a quantidade de itens de cada array 
(utilize um console.log() para cada impressão); */

console.log('numeros=', numeros.length, 'itens')
console.log('strings=', strings.length, 'itens')
console.log('mista=', mista.length, 'itens')


/* - Imprima o primeiro item do primeiro array, 
o segundo item do segundo array, e o terceiro item do terceiro array; */

console.log('1° item de numeros', numeros[0])
console.log('2° item de strings', strings[1])
console.log('3° item de mista', mista[2])


/* - Verifique se um item está incluído no primeiro 
array e depois no terceiro array e imprima o resultado destas 
verificações no console.log(). A primeira impressão deve 
retornar um booleano true e a segunda deve retornar um booleano false.  */

console.log('este array possui o número 4?', numeros.includes(4))
console.log('este array possui o booleano false?', mista.includes(false))

console.log('---------------')

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