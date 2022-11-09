import { useState, useEffect } from "react";
import './App.css';

function App() {

  //declarar as variaveis 
  
  const [preco, setPreco] = useState(0)
  const [data, setData] = useState('d')
 
  //const [conta1,setConta1] = useState(200)

  const [nome,setNome] = useState()
  const [tipo, setTipo] = useState()
  //const [classe,setClasse] = useState()
  
  const [baka, setBaka] = useState({})
  
  

  //faturas
  const [faturas,setFaturas] = useState([{nome:"choso",data:"20/02/2023", tipo:'entrada',preco:100},{nome:"Toji",data:"20/03/2023", tipo:'entrada',preco:230}, {nome:"Maki",data:"24/03/2023", tipo:'saida',preco:400}])

  //const [input,setInput] = useState({baka});
 



  
//função de somar
function somar(item){
    
  var tudo = item.length
  //console.log(somador.length)

//laço de repetição de todas as faturas
var n = 0
for( n = 0; n < tudo; n++){

 console.log(item[n].preco)

  //somar todos os valores dos objetos das faturas
  var somando = item[n].preco + item[1-n].preco

  //console.log(somando + ' total')
  //console.log(somando.length + '-- quanto somou')
  console.log(tudo + ' - tudo ')

  //somador = somando
  
  console.log(somando)
  return somando;

}

  }

  


useEffect(()=>{
  

},[faturas])


const [entrada,setEntrada] = useState() 
const [saida,setSaida] = useState() 
const [total,setTotal] = useState(somar(faturas))

function handleRegister(e){
    
  e.preventDefault();




  setTotal(total + parseInt(preco))

 


  setBaka({
    nome: nome,
    data:data, 
    tipo:tipo,
    preco:parseInt(preco)
  })


  //transformar o useState em um array



  
    
  //adiciona o elemento a lista sem precisar do "push" 
  setFaturas([...faturas,baka]);




  
 

  

//limpa o input
setTipo("")
setData('')
setPreco(0)
setNome("")
  //setInput(baka)

  
  
  



  //console.log(faturas + ' e Jeferson ' + input)
  console.log(faturas)
  console.log(nome)
  //console.log(classe)
  console.log(baka)
  console.log(faturas.preco + " coisa : ") 


    //somar os valores das variaveis  
  
   // setConta1( conta1 + parseInt(saida))
    //console.log(conta1 + ' essa é o valor antigo')
    //console.log(conta1 + parseInt(saida))

  
}
 // const [count, setCount] = useState(0);
var arr = faturas.map( fatura => (fatura.tipo === "entrada", fatura.preco))
var soma = arr.reduce(function(soma,i){

  if(arr === undefined){
    arr = 0;
    return soma + i;
  }else{

    return soma + i;

  }




})

  
 console.log(faturas[0].preco + ' objeto ')
 console.log(faturas.map( fatura => (fatura.tipo === "entrada")))
 console.log(faturas.map( fatura => (fatura.tipo === "entrada", fatura.preco)))
 console.log(faturas.find( ({ tipo }) => tipo === "entrada" ))
 console.log(soma)



       

 //quantidade de objetos dentro do array

 

 


 

 useEffect(() => {
  
 
  localStorage.setItem("@listaXamas", JSON.stringify(faturas))
  console.log(somar(faturas) + ' tem aqui')
 // console.log(total)
  

},[faturas])

  
  

  

  return (

    

    <div className="App">
      

      
    
    
    

      <section className="container-geral">

        <div className="container-nota-fiscal">
        <form onSubmit={handleRegister}>
      <input name="nome" placeholder="Nome da Fatura" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input name="data" type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      <input type="text" placeholder="tipo"  name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
      <input type="number" placeholder="preco"  name="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required/>

      <button>Enviar</button>
      
      </form>
        <table>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Preço</th>
            <th>Saida</th>

          </tr>
          <tr>
            <td>Conta 0001</td>
            <td>20/03/2023</td>
            <td>100</td>
            <td>Saida</td>

          </tr>
          
          {faturas.map( tarefa => (
            <tr key={tarefa.toString() } value={tarefa} >

            <td>{tarefa.nome}</td>
            <td>{tarefa.data}</td>
            <td>{tarefa.preco}</td>
            <td>{tarefa.tipo}</td>

            </tr>

            ))}

          



        </table>
        </div>

        <div className="fluxo-container">

        <div className="fluxo-single">

          <div className="entradas-container">
          <div className="teste-c"><span className="cabeca">Entradas</span></div>

            <h3>R$100,00</h3>

          </div>

          <div className="saidas-container">
          <div className="teste-c"><span className="cabeca">Saidas</span></div>

            <h3>R$100,00</h3>

          </div>

          <div className="total-container">
            <div className="teste-c"> <span className="cabeca">Total</span> </div>

            <h3>R${total}</h3>
           

          </div>

        </div>

        </div>

        

      </section>


      

    </div>
  );
}

export default App;
