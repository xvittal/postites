import React from 'react';
import '../App.css';

export default (props) => {
    return(
        <div id={'post-'+props.indice} className="postIt" style={{background:"khaki"}}>
            <div className='cabecalho'>
                <input value={props.titulo} onChange={(e)=>props.alterarTitulo(e,props.indice)}/>
                <button className='close' onClick={()=>props.removeId(props.indice)}>X</button>
            </div>
            <textarea value={props.nota} onChange={(e)=>props.alterarNota(e,props.indice)}/>
            <div className="coresCard">
                <button className="btn1" onClick={()=>props.alteraCor('post-'+props.indice, 1)}/>
                <button className="btn2" onClick={()=>props.alteraCor('post-'+props.indice, 2)}/>
                <button className="btn3" onClick={()=>props.alteraCor('post-'+props.indice, 3)}/>
                <button className="btn4" onClick={()=>props.alteraCor('post-'+props.indice, 4)}/>
            </div>
            <p className='dataCriacao'>{props.data.getDate()}/{props.data.getMonth()+1}/{props.data.getFullYear()}</p>
        </div>
    );
}

// ideia para a função das das cores, fazer uma lista pegando um valor e definir pra ele a cor que eu quero, 
// por exemplo ao clicar no botão 1 ele retorna esse valor, e apartir desse valor ele me retorna a cor listada