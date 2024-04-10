import styles from './CriarTarefa.module.css';
import { FiPlusCircle } from "react-icons/fi";
import { useState } from 'react';

export function CriarTarefa({criarNovaTarefa}) {

    const [inputValue, setInputValue] = useState("")

    const handleCriarTarefa = () => {
        criarNovaTarefa(inputValue);
        setInputValue("");
    };

    return (
        <div className={styles.criar}>

            <input
                className={styles.input}
                placeholder="Adicione uma nova tarefa"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button
             onClick={handleCriarTarefa}
             className={styles.button}>
             Criar <FiPlusCircle/>
            </button>

        </div>
        
    )
}