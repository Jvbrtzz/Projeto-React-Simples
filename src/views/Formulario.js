import styles from "./Formulario.module.css"
import CampoTexto from "../Components/CampoTexto";
import { useState } from "react";
function Formulario(){
    function cadastrar(e){
        e.preventDefault()
    }

function  limpar(){
    let p = document.getElementById('formi')
    document.getElementById('nome').value = ""; 
    document.getElementById('valor').value = "";   
    p.innerHTML = ""
    
}    

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')

    function Addcard(){
        const card = document.createElement('p')
        card.innerHTML = `${nome} e ${valor}`
        document.getElementById("formi").appendChild(card);  
    }

    return(
        <>             
        <form className={styles.form} onSubmit={cadastrar} >
            <h1>Formulário</h1>
            <div>                
                <CampoTexto                 
                    id="nome" 
                    name="nome" 
                    type = "text" 
                    label ='Nome' 
                    placeholder ='Name'
                    campoValor = {nome}
                    aoAlterado = {campoValor => setNome(campoValor)}
                />             
            </div>          
            <div>
            <CampoTexto                 
                    id="valor" 
                    name="valor" 
                    type = "number" 
                    label ='Valor' 
                    placeholder ='Valor'
                    campoValor = {valor}
                    aoAlterado = {campoValor => setValor(campoValor)}
            />
            </div>
          
            <div>                               
                <button className={styles.btn}onClick={()=> Addcard()}>cadastrar</button>
                <button className={styles.btn}onClick={()=> limpar()}>Limpar</button>
            </div>
            <div id="formi"></div>
        </form>
       
        </>
    )
}

export default Formulario