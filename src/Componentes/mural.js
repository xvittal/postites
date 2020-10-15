import React,{useEffect, useState} from 'react'
// import ReactDom from 'react-dom'
import '../App.css'
import PostIt from './card'

function Mural(props){

    const [contador, setContador] = useState(0);
    const [postites, setPostites] = useState([]);

    const postite = {
        id: 0,
        titulo: '',
        nota:'',
        data: ''
    }

    useEffect(() => {
        console.log(postites);
    }, [postites])

    function AdicionarPost(){
        setPostites([...postites, postite]);
        postite.id = contador;
        postite.data = new Date();
        setContador(contador+1);
    }

    const Remove = (valor) => { //funcionando 
        setPostites(postites.filter(item => item.id !== valor));
    }

    const AlterarTitulo = (e, index) => {
        postites.map( i => {
            if( i.id === index){
                i.titulo = e.target.value;
            }
            return setPostites([...postites]);
        })
    }

    function AlterarNota(e, index){
        postites.map( i => {
            if( i.id === index){
                i.nota = e.target.value;
            }
            return setPostites([...postites]);
        })
    }

    function AlteraCor(id, cor){
        const postId = document.getElementById(id);
        if(cor === 1)
            postId.style.background = 'aquamarine';
        if(cor === 2)
            postId.style.background = 'tomato';
        if(cor === 3)
            postId.style.background = 'violet';
        if(cor === 4)
            postId.style.background = 'khaki';
    }
    
    return(
        <div className="Mural">
         {postites.map( item =>{
             return(
                 <PostIt 
                    indice={item.id} 
                    key={item.id} 
                    data={item.data} 
                    removeId={Remove.bind(this)} 
                    alterarTitulo={AlterarTitulo.bind(this)} 
                    alterarNota={AlterarNota.bind(this)}
                    alteraCor = {AlteraCor.bind(this)}
                />
             );
           })
        }   
        <button className="novoBotao" onClick={() => AdicionarPost()}>+</button>
        </div>
    );
}
export default Mural;
// https://medium.com/@tyindpgood/add-delete-item-from-state-array-in-react-hook-9d7f73d66d80