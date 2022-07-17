// Crie um array que receba 5 itens e exiba no console.

let dados = [
    "Amilton", 
    "Neto", 
    25,
    "cachorro",
    "computador"
  ]
  
  console.log(dados)
  
  // Utilize um método para adicionar um nome ao inicio do array.
  
  //dados.splice(0, 0, "andre")
  dados.unshift("andre")
  console.log(dados)
  
  // Utilize um método para remover o último nome do array.
  
  //dados.splice(5, 1)
  dados.pop()
  console.log(dados)
  
  // Utilize um método para adicionar dois nomes ao fim do array.
  
  //dados.splice(4, 0, "limao", "acucar")
  dados.push("limao", "acucar")
  console.log(dados)
  
  // Utilize um método para remover o primeiro nome do array.
  
  //dados.splice(0, 1)
  dados.shift()
  console.log(dados)
  
  // Utilize um método para organizar em ordem crescente o seguinte array:
  
  let numbers = [7,5,6,3,8,9,2,1,4]
  
  numbers.sort(function(a,b){
    return(a-b)
  })
  
  console.log(numbers)
  console.log(numbers.reverse())
  
  console.log(`Me chamo ${dados[0]} ${dados[1]}. Amo suco de ${dados[4]}, ainda mais se for com bastante ${dados[5]}. Tenho ${dados[2]} anos e meu pet é um ${dados[3]}.`)