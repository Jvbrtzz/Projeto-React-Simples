
import styles from "./Formulario.module.css"

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

function addDadoNome(){
    let nome = document.getElementById('nome').value;       
    let valor = document.getElementById('valor').value;        
    if(nome === "" ){
        nome = "Erro"
        valor = "Erro"
    }else{
        const novNome = document.createElement("p");
        const novValor = document.createElement("p");
        novNome.innerText = `Nome: ${nome}`;
        document.getElementById("formi").appendChild(novNome);            
        novValor.innerText = `Valor: ${valor}`;
        document.getElementById("formi").appendChild(novValor);
    }
}

    return(
        <>             
        <form className={styles.form} onSubmit={cadastrar} >
            <h1>Formulário</h1>
            <div className={styles.label}>
            <label htmlFor="nome">Nome:</label>
            
            <div>                
                <input id="nome" name="nome" className={styles.ipt} type = "text" placeholder="Nome "/>                
            </div>
            
            <label htmlFor="valor">Valor:</label>
            
            <div>
                <input id="valor" name="valor" className={styles.ipt} type = "number" placeholder="Valor "/>
            </div>
            </div>
            <div>                               
                <button className={styles.btn}onClick={()=> addDadoNome()}>cadastrar</button>
                <button className={styles.btn}onClick={()=> limpar()}>Limpar</button>
            </div>
            <div id="formi"></div>
        </form>
       
        </>
    )
}

export default Formulario