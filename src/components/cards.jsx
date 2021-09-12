import React from 'react'
import './cards.css'
import { BsFillTrashFill } from "react-icons/bs";

function card(props){

    let apagarcard = function apagar(){
        props.deletarCard(props.id)
    }

            return(
                <div className='container'>
                    <div className='card' indice={props.indice}>
                        <h1 id='titulo1'>{props.titulo}</h1>
                        <p id='mensagem'>{props.mensagem}</p>
                        <button className='apagar' onClick={apagarcard} ><BsFillTrashFill/></button>
                    </div>
                </div>
            )
            }

export default card