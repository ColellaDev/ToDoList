import { useState } from 'react';
import styles from './ListaTarefas.module.css';
import { Tarefa } from "./Tarefa";

export function ListaTarefas() {

const [tarefas, setTarefas] = useState([1, 2])

function criarNovaTarefa() {
    setTarefas([...tarefas, tarefas.length + 1])
}

    return (
        <div className={styles.listaTarefas}>

             <div className={styles.contadores}>
                <div className={styles.tarefasCriadas}>
                     <h3>Tarefas criadas</h3>
                     <span>5</span>
                </div>
                <div className={styles.tarefasConcluidas}>
                     <h3>Concluídas</h3>
                     <span>2 de 5</span>
                </div>
            </div>

            <div className={styles.tarefas}>
                {tarefas.map((tarefa, index) => {
                 return <Tarefa key={index} content="teste" />
             })}
            </div>
            

        </div>
    )
}