console.log('Olá, Javascript!');






                    // Variáveis //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(nome)       // Obetr o valor da variável
// console.log(typeof nome)        // Obter o tipo da variável

var userName = 'Emanuel';
document.getElementById('user-name').innerHTML = userName;





                        // Operadores matemáticos //
                        // + - * / 

// var n1 = 5;
// var n2 = 5;
// var total = n1 + n2;
// console.log(total)

// var n3 = 5;
// var n4 = '5';
// var total2 = n3 + parseInt(n4);
// console.log(total2)



                        // Operadores de comparação //
                        // == != === !== > >= < <=

// var v1 = 5;
// var v2 = 5;
// var resultado = v1 === v2;
// console.log(resultado)





                        // Funções //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }
// soma(5, 10)

// function boasVindas(nome) {
//     alert(nome + ', seja bem vindo')
// }
// boasVindas('Javascript')

// function soma1(n1, n2) {
//     return n1 + n2;
// }
// var resultado = soma1(5,5)
// console.log(resultado)





                    // Controle de fluxos //
                    // em BDD



// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando eu faço um saque de 500 reais
// Então o valor do saldo deve ser deduzido do meu saldo

                // var saldo = 1000

                // function saque(valor) {
                //     saldo = saldo - valor
                // }
                // saque(500)
                // console.log('saldo: ', saldo)

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando eu faço um saque de 1500 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

                    // var saldo2 = 1000

                    // function saque(valor2) {

                    //     if(valor2 > saldo2){
                    //         console.log('Valor do saque superior ao saldo')
                    //     } else {
                    //         saldo2 = saldo2 - valor2
                    //     }

                        
                    // }
                    // saque(1500)
                    // console.log('saldo: ', saldo2)

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando eu faço um saque de 800 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido

// var saldo3 = 1000

// function saque(valor3) {

//     if(valor3 > saldo3){
//         console.log('Valor do saque superior ao saldo')
//     } else if(valor3 > 700) {
//         console.log('Valor do saque superior ao máximo permitido por operação')
//     } else {
//         saldo3 = saldo3 - valor3
//     }

    
// }
// saque(1500)
// console.log('saldo: ', saldo3)

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
// console.log(gaveteiro[0])

// var personagens = ['C3PO', 'Chewbacca', 'Hansolo', 'Leia']

// personagens.push('Luke') //para adicionar um item ao array
// console.log(personagens)

// personagens.pop() //para remover o último item adicionado
// console.log(personagens)

// personagens = personagens.filter(function(p) {
//     return p !== 'Leia' 
// }) // filtro para tirar um item específico
// console.log(personagens)

// personagens = personagens.filter(function(p) {
//     return p === 'C3PO' 
// }) // filtro para trazer um item específico
// console.log(personagens)





        // Controles/Laços de Repetição (loops) //


// var personagens = ['Yoda', 'Luke', 'Vader', 'R2D2']

// // console.log(personagens[0])
// // console.log(personagens[1])
// // console.log(personagens[2])
// // console.log(personagens[3])

// // for each
// personagens.forEach(function(p) {
//     console.log(p)
// })

// // for in
// for (var i in personagens) {
//     console.log(personagens[i])
// }

// // for (var i = 0; i <= 10; i++) {          (mais utilizado em programação)
// //     console.log(i)
// // }



                    // Objetos //

// var yoda = {}
// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true

// console.log(yoda)

// var objeto = {
//     nome: 'JavaScript',
//     objeto: true,
//     ano: 2024,
//     mostraAno: function() {
//         console.log('Ano atual: ', this.ano)
//         console.log(`O ano atual é o ${this.ano}`)
//     }
// }
// console.log(objeto)
// objeto.mostraAno()





                        // Constantes

// var nome = 'Vader'
// console.log(nome)
// nome = 'Yoda'
// console.log(nome)
//          -> dessa forma serão imprimidos dois nomes, pois 'nome' é uma variável

// const nome1 = 'Vader1'
// console.log(nome1)
// nome1 = 'Yoda1'      -> dessa forma irá retornar erro, pois o 'nome1' é uma constante
// console.log(nome1)