import './App.css';
import React, {useState} from "react";

function App() {

  const [state, setState] = useState({
    conta: "",
    pessoas:"",
    msg1:"",
    msg2:"",
    gorjeta:""
  })

  const [stateConta, setStateConta] = useState({
    valorTotal:"",
    valorPessoa:"",
    garçom:""
  })

  const Zerar = () =>
  {
    setStateConta( {
      valorTotal: "",
      valorPessoa: "",
      garçom : ""
    })

    setState({
      conta:"",
      pessoas:"",
      msg1:"",
      msg2:"",
      gorjeta:""
    })
  }
  const Pagamento = () =>
  {
      if(state.conta=="")
      {
        setState({
          ...state,
          msg1:"Valor da conta não informado."
        });
        return;
      }
      if(state.pessoas=="")
      {
        setState({
          ...state,
          msg2:"Quantidade de pessoas não informado."
        });
        return;
      }
      
      
      let garçom = parseInt(state.conta*(state.gorjeta/100))
      let conta = parseInt(state.conta)
      let total = conta+garçom;
      let pessoa = total/state.pessoas;
      const formatadoGarçom = garçom.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const formatadoTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const formatadoPessoa = pessoa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      setStateConta( {
        valorPessoa: formatadoPessoa,
        garçom : formatadoGarçom,
        valorTotal: formatadoTotal

      })

     
  }
  let saida =

            <>
                <div id="conteudo">
                  <div>
                    <h3>Conta</h3>
                    <input type="number" value={state.conta}
                      onChange={(event)=> setState({...state, conta:event.target.value, msg1:""})}/>
                    <h4>{state.msg1}</h4>
                    <h3>Pessoas na Mesa</h3>
                    <input type="number" value={state.pessoas}
                    onChange={(event)=> setState({...state, pessoas: event.target.value, msg2:""})}/>
                    <h4>{state.msg2}</h4>
                  </div>
                  <div >
                    <h3>Gorjeta</h3>
                    <input type="number" value={state.gorjeta}
                    onChange={(event)=> setState({...state, gorjeta: event.target.value, msg:""})}/> %
                    <button type="button" onClick={Pagamento}>Calcular
                    </button>
                    <button onClick={Zerar}>Zerar</button>
                  </div>
                  <hr/>
                  <div>
                    <h3>Gorjeta: {stateConta.garçom}</h3>
                    <h3>Total a pagar: {stateConta.valorTotal}</h3>
                    <h3>Total a pagar por pessoa: {stateConta.valorPessoa}</h3>
                  </div>
                </div>
              </>
  return (saida);
}

export default App;
