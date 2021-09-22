import React, {useEffect, useState} from 'react';
import { dadosDoBd, postBd, deleteBd } from './controller/acessoApi';
import BarraInput from './components/barraInput'
import Card from './components/cards';
import './App.css';


function App(){
  //Renderização do card, usando res para guardar os valores
  const [res, setRes] = useState([]);
 
  // useState usado para guardar os valores do input
  const [titulo, setTitulo] = useState({titulo: 'Digite um titulo'})
  const [mensagem, setMensagem] = useState({mensagem: 'Digite uma mensagem'})
  
  let inputs = function conteudoDigitado(vtitulo, vmensagem){
    setTitulo({titulo: vtitulo})
    setMensagem({mensagem: vmensagem})
  }

  //função para gravar no banco
  function gravar(e){
    e.preventDefault()
    postBd({titulo: titulo, mensagem: mensagem})
  }
  
  //função para deletar o card
  async function deletarCard(id){
    deleteBd(id)
  }

  //deixa o campo input vazio quando clikado
  let focusTitulo = (e)=>{setTitulo({titulo: ''})}
  let focusMensagem = (e)=>{setMensagem({mensagem: ''})}


  //useEffect renderizadno o card
  useEffect(()=>{dadosDoBd().then(e =>{setRes(e.dados)})},[res])

  return (
    <div>
      <BarraInput valueTitulo={titulo.titulo} onFocusTitulo={focusTitulo}  onFocusMensagem={focusMensagem} valueMensagem={mensagem.mensagem} funcaoAlterar={inputs} gravar={gravar} />
      {res.map((e, indice) => {return <Card indice={indice} key={e.id} id={e.id} titulo={e.titulo} funcaoAlterar={inputs} mensagem={e.mensagem} deletarCard={deletarCard}/>}
      )}

    </div>
  )
}

export default App;
