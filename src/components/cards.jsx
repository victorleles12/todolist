import React from 'react'
import './cards.css'
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

function card(props){

    let apagarcard = function apagar(){
        props.deletarCard(props.id)
    }

    let editar = function editardados(){
        props.editarDados(props.id, props.indice)
    }

            return(
                <div className='container'>
                    <div className='card'>
                        <h1 id='titulo1'>{props.titulo}</h1>
                        <p id='mensagem'>{props.mensagem}</p>
                        <button className='apagar' onClick={apagarcard} ><BsFillTrashFill/></button>
                        <button className='editar' onClick={editar}><BsPencil/></button>
                    </div>
                </div>
            )
            }

export default card