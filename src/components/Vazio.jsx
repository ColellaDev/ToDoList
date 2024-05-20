import styles from "./Vazio.module.css";
import notas from "../assets/notas.svg"

export function Vazio() {
    return (
        <div className={styles.vazio}>

            <div className={styles.risco}></div>

            <div>
            <img src={notas} alt="Bloco de Notas" />
            </div>

            <div className={styles.conteudo}>
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

         </div>
    )
}