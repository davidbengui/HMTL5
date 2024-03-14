function contar(){
    let inicio=window.document.getElementById('txtnui')
    let fim=window.document.getElementById('txtnuf')
    let passo=window.document.getElementById('txtpass')
    let res = document.getElementById('res')
         if(inicio.value=='' || fim.value==''||passo.value==''){
            res.innerHTML=`Digite um valor valido`
                    }else {
                        res.innerHTML='contando: '
                        let i=Number(inicio.value)
                        let f=Number(fim.value)
                        let p=Number(passo.value)
                        if (p<=0){
                            window.alert('Passo invalido, considerando passo 1')
                            p=1
                        }if (i<f) {
                         
                        for (let ii=i;ii<=f;ii+=p){
                        res.innerHTML +=`${ii}  \u{1F449}`
                    }               
             
            
      }else {
              for (let ii=i;ii>=f;ii-=p){
             res.innerHTML +=`${ii}  \u{1F449}`
      }
    }
      res.innerHTML +=`\u{1F3C1}`
        }
    }
