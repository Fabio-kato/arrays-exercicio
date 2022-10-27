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