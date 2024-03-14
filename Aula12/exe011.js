var idade = 5
console.log(`Sua idade e ${idade}`)
if(idade >=16 && idade<18 || idade>=65) {
        console.log('Voto opcional')
} else {
    if (idade >18){
        console.log('Deve votar')
    }else if(idade<=16){         
            console.log('Nao vota')
        
    }
}