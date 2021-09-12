import React from 'react'
import './cards.css'
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

function card(props){

    let apagarcard = function apagar(){
        props.deletarCard(props.id)
    }

    let editar = function editardados(){
        var novoInput = document.createElement("input");
        novoInput.setAttribute("id", "novoInput");
        var oldElement = document.getElementById("titulo1");
        var parentDiv = oldElement.parentNode;
        console.log(parentDiv)
        parentDiv.replaceChild(novoInput, oldElement)
  }

            return(
                <div className='container'>
                    <div className='card' indice={props.indice}>
                        <h1 id='titulo1'>{props.titulo}</h1>
                        <p id='mensagem'>{props.mensagem}</p>
                        <button className='apagar' onClick={apagarcard} ><BsFillTrashFill/></button>
                        <button className='editar' onClick={editar}><BsPencil/></button>
                    </div>
                </div>
            )
            }

export default card