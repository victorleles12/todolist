import React from 'react';
import './barraInput.css'


function barraInput(props){
    let titulo = document.getElementById('titulo')
    let mensagem = document.getElementById('mensagem')

    let mudar = function mudar(){
        props.funcaoAlterar(titulo.value, mensagem.value );
    }

    return(
        <div className='navMenu'>
            <div className='caixaInputs'>
                <input className='titulo' id='titulo' onFocus={props.onFocusTitulo} type='text' value={props.valueTitulo} onChange={mudar}></input>
                <input className='mensagem' id='mensagem' onFocus={props.onFocusMensagem} type='text' value={props.valueMensagem} onChange={mudar} ></input>
            </div>
            <div>
                <button className='btnGravar' onClick={props.gravar}>Gravar</button>
            </div>
        </div>
    )
}


export default barraInput;