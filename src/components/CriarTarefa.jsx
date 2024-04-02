import styles from './CriarTarefa.module.css';
import { FiPlusCircle } from "react-icons/fi";

export function CriarTarefa({criarNovaTarefa}) {

    function onCriar() {
       console.log("oi")
    }

    return (
        <div className={styles.criar}>
            <input className={styles.input} placeholder="Adicione uma nova tarefa" />
            <button className={styles.button}>Criar <FiPlusCircle/></button>
        </div>
        
    )
}