//Array em js é heterogeneo
const valores = [7.7 , 8.9 , 6.3 , 9.2]
console.log(valores[0],valores[3])// le os valores do indice 0 ao 3
console.log(valores[4])

valores[4] = 10 //atribui o valor 10 ao array [4]
console.log(valores)
console.log(valores.length)//.length acessa a quantidades de elementos no array

valores.push({id:3},false, null , 'teste')//.push adiciona novos elementos no array
console.log(valores)

console.log(valores.pop())// retira o ultimo valor do array
delete valores[0]// deleta o elemento do array
console.log(valores)
console.log(typeof valores)
// boas praticas em array é separar os tipos de dados