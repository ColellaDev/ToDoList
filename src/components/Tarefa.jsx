import styles from "./Tarefa.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";



export function Tarefa({content, onDelete, onComplete, completed}) {
    return (
        <div className={styles.tarefa}>

            <button className={styles.checkTarefa} onClick={onComplete}>
             <FaRegCircle />
            </button>

           <p>{content}</p> 

           <button className={styles.deletarTarefa} onClick={onDelete} title="Deletar tarefa">
                <FaRegTrashAlt />
           </button>

         </div>
    )
}