import React from "react";
import './Home.css'
import { useEffect, useState } from 'react';


//Fazer 

//1.add item na lista de contas 
//2.somar apenas os preços das contas e colocar o total no final
//3.formatar data
//4.Segmentar pelas datas e pelas tags as prioridades





function Home(){
 
// let coisas = {id: 1, nome: "staio", idade: 12}

  //add a vairavel que vai ler o valor dos campos
  const [input, setInput] = useState('');
  const [preco,setPreco] = useState(0);
  const [data,setData] = useState('');
  const [tipo,setTipo] = useState('');
  const [recorrencia,setRecorrencia] = useState('')
 

  
  //add variaveis
  const [contas,setContas] = useState([
    
    {id: 1, nome: "staio", preco: 12,data:'10/10/2022',tipo:'Entrada',recorrencia:'Obrigatoria'},
    {id: 2, nome: "staio2", preco: 13,data:'12/10/2022',tipo:'Saída',recorrencia:'obrigatoria'}

]);

  //usando useEffect
  useEffect(()=>{
    //aramazenando no Localstorage
   // const contasStorage = localStorage.getItem('@contas');

    //transformar em JSON
    //if(contasStorage){}

 })

 var id = useState(parseInt(Math.random(1,100) * 10000))

 function handleRegister(e){
    e.preventDefault();

    

    //add na lista
    setContas([...contas,{id: id, nome: input,preco:parseFloat(preco),data:data,tipo:tipo, recorrencia:recorrencia}])

    //limpa
    setInput('')
    setPreco(0.0)
    setData('')
    setTipo('')
    setRecorrencia('')




 }

 const arrayPreco = [1]

 const arrayEntradas = []
 const arraySaidas = []

 function somarPreco(x){
    for(let i = 0; i < x.length; i++){

     //  x[i].preco 
     if(x[i].tipo === 'Entrada'){
        arrayEntradas.push(parseFloat(x[i].preco))
        console.log(x[i].preco + '- entrada')
     }else if(x[i].tipo === 'Saída'){
        arraySaidas.push(parseFloat(x[i].preco))
        console.log(x[i].preco + ' - saida')

     }else{
        console.log(x[i].preco)
        arrayPreco.push(parseFloat(x[i].preco))

        console.log(x[i].preco += 0 )

     }
        
       
    }


    

}


function somarValores(y){

    var soma = y.reduce(function(soma, i) {

        return parseFloat(soma + i);
    });

    return soma
    
}

//var total = 0
/*
function totalGeral(x,y,z){

    var total = x - y

    z = total

    console.log(total)
    return parseFloat(z)
    
 
 
 }

*/

somarPreco(contas)




//var ar = arrayPreco.reduce(function(soma, i) {

    //return soma + i;
//});

const entrada = somarValores(arrayEntradas)
const saida = somarValores(arraySaidas)
const total = entrada - saida


console.log('--------entrada---------')
console.log(arrayEntradas)
console.log('a soma é: '+ entrada)
console.log('---------saidas--------')
console.log(arraySaidas)
console.log('a soma é: '+ saida)

console.log('---------array de preço Total-----')
console.log('o total é: '+ total)
//console.log('o total é: '+ totalGeral(arrayEntradas,arraySaidas,total))
console.log('--------------------------')
console.log(arrayPreco)
//console.log(total + ' - aqui ó')


function dataAtualFormatada(x){
    var data = new Date(x),
        dia  = (data.getDate()+1).toString(),
        diaF = (dia.length === 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length === 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

var datinha = '2020-02-30'
console.log(dataAtualFormatada(datinha))

//var arr = [1,2,3,4,5,6,7,8,9,10];
//var soma = arrayPreco.reduce(function(soma, i) {

//    return soma + i;
//});
//console.log(soma);


//console.log(contas.reduce((a,b) => contas[0].preco + (contas[contas.length -1].preco || 0), 0) + ' olha')

  //console.log(contas.sum("preco"))

  //console.log(((contas.length *(contas.length + 1)) / 2) + '- rrericupter')


  
 
  




    
    //const [preco, setPreco] = useState('')
    //const [nome , setNome] = useState('')

    //console.log(parseInt(contas[0].preco))

    
        
    
    return(
        <div className="container">

            

            <h1>Financeiro</h1>
            

            <div className="fluxo-de-caixa">

                <div className="container-fluxo">

                <div className="entradas">
                    

                    <h3>Entradas</h3>

                   
                    <h2>{entrada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>

                    
                   

                </div>

                <div className="saidas">

                <h3>Saidas</h3>
                <h2>-{saida.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>

                </div>

                </div>

                

                <div className="total">

                <h3>Total</h3>
               
                <h1>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>

                </div>
            </div>

            <div className="tabela">


                <table>
                    <tr className="cabecalho">
                        <td className="nome">Nome</td>
                        <td>Data</td>
                        <td>Preço</td>
                        <td>Tipo</td>
                        <td>Recorrencia</td>
                    </tr>

                    

                    {contas.map( item => (

                    <tr className="infos" key={item.id}>
                        <td>{item.nome}</td>
                        <td>{dataAtualFormatada(item.data)}</td>
                        <td>{item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                        <td>{item.tipo}</td>
                        <td>{item.recorrencia}</td>
                        <td><a href="#">Alterar</a></td>
                        <td><a href="#" id="excluir">Excluir</a></td>
                    </tr>




                    ))}

                </table>

            </div>

            <br/>

            <div className="adicionar">

            
                <form onSubmit={handleRegister}>
                <h3>Adicione sua conta ou fatura</h3>
                <input type="text"  name="nome" placeholder="Nome na fatura" value={input} onChange={ (e) => setInput(e.target.value) }/>
                <input type="date"  name="data" value={data} onChange={ (e) => setData(e.target.value) }/>
                <input type="text"  name="preco" placeholder="Preço" value={preco} onChange={ (e) => setPreco(e.target.value) }/>

                <select name="tipo" value={tipo} onChange={ (e) => setTipo(e.target.value) }>
                    <option>Tipo</option>
                    <option>Entrada</option>
                    <option>Saída</option>

                </select>

                <select name="recorrencia" value={recorrencia} onChange={ (e) => setRecorrencia(e.target.value) }>
                    <option>Recorrencia</option>
                    <option>Mensal</option>
                    <option>Semanal</option>

                </select>

                <button>
                    Adicionar
                </button>
                </form>


            </div>

            

            



        </div>

    )
    


}

export default Home;