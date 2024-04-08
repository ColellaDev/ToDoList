import styles from './CriarTarefa.module.css';
import { FiPlusCircle } from "react-icons/fi";

export function CriarTarefa({criarNovaTarefa}) {


    return (
        <div className={styles.criar}>
            <input className={styles.input} placeholder="Adicione uma nova tarefa" />
            <button onClick={criarNovaTarefa}className={styles.button}>Criar <FiPlusCircle/></button>
        </div>
        
    )
}