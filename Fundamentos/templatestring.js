const nome = 'Rebeca'
const concatenacao = 'Olá '+nome + '!'
const template = `Olá
${nome}!` // essa linha faz interpolação do texto nome
console.log(concatenacao, template)

//expressões
console.log(`1+1 = ${1+1}`)


const up = texto =>texto.toUpperCase()//"toUpperCase" converte letras minusculas em maiusculas
console.log(`Ei...${up(`cuidado`)}!`)//Função convertendo as letras