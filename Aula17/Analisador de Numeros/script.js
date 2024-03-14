 
let num=window.document.querySelector('input#fnum')
let lista=window.document.querySelector('select#flista')
let res=window.document.querySelector('div#res')
let valores=[]

function isnumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true 
    }else{
    return false
}
}
function inlista(n,l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item=document.createElement('option')
        item.text=`Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert('Valor invalido')
    }
    num.value=''
    num.focus()
}


function finalisar(){
    if(valores.length==0){
        window.alert('Sem valores para finalizar')
    }else{
        let tot =valores.length    
        let maior=valores[0]
        let menor=valores[0]
        let soma=0
        let media=0
        for(let pos in valores){
            soma +=valores[pos]
            if(valores[pos]>maior){
                maior=valores[pos]
            }else if(valores[pos]<menor){
                menor=valores[pos]

            }
        }
        media=soma/tot
        res.innerHTML=''
        res.innerHTML +=`<p>Ao total temos ${tot} valores</p>`
        res.innerHTML+=`<p>O maior numero e ${maior} </p>`
        res.innerHTML+=`<p>O menor numero e ${menor} </p>`
        res.innerHTML+=`<p>A soma de todos e ${soma} </p>`
        res.innerHTML+=`<p>A media de todos e ${media} </p>`
        }

    }


    
    
 
