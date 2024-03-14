let num =[3,4,2,1]

num.push(7)
console.log(num)
num.sort()
 
let nnum =num.indexOf(77)
console.log(`o vetor tem ${num.length} posicoes que sao ${num} e o menor valor e ${num[0]}`)
if(nnum==-1){
    console.log(`valor nao encontraado`)
}else {
  console.log(`O valor 2 esta na posicao ${nnum}`)  
}
