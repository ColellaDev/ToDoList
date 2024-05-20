
import styles from './ListaTarefas.module.css';
import { Tarefa } from "./Tarefa";
import { Vazio } from './Vazio';

export function ListaTarefas({ tarefas, deletarTarefa, completarTarefa}) {


    return (
        <div className={styles.listaTarefas}>

             <div className={styles.contadores}>
                <div className={styles.tarefasCriadas}>
                     <h3>Tarefas criadas</h3>
                     <span>{tarefas.length}</span>
                </div>
                <div className={styles.tarefasConcluidas}>
                     <h3>Concluídas</h3>
                     <span>{tarefas.filter(tarefa => tarefa.completed).length} de {tarefas.length}</span>
                </div>
            </div>

            <div>
                {tarefas.length > 0 ? (
                    <div className={styles.tarefas}>
                    {tarefas.map((tarefa, index) => {
                    return (
                        <Tarefa 
                         key={index} 
                         content={tarefa.content} 
                         completed={tarefa.completed}
                         onComplete={()=> completarTarefa(index)} 
                         onDelete={() => deletarTarefa(index)} 
                         />
                    );
                     })}
                     </div>
                 ) : (
                <Vazio/>
                 )}
           </div>
         
        </div>
    )
}