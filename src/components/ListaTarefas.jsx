
import styles from './ListaTarefas.module.css';
import { Tarefa } from "./Tarefa";

export function ListaTarefas({ tarefas, deletarTarefa, completarTarefa }) {


    return (
        <div className={styles.listaTarefas}>

             <div className={styles.contadores}>
                <div className={styles.tarefasCriadas}>
                     <h3>Tarefas criadas</h3>
                     <span>{tarefas.length}</span>
                </div>
                <div className={styles.tarefasConcluidas}>
                     <h3>Concluídas</h3>
                     <span>0 de {tarefas.length}</span>
                </div>
            </div>

            <div className={styles.tarefas}>
                {tarefas.map((tarefa, index) => {
                 return <Tarefa key={index} content={tarefa} onComplete={()=> completarTarefa(index)} onDelete={() => deletarTarefa(index)} />
             })}
            </div>
            
        </div>
    )
}