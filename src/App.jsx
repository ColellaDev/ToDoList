import "./global.css"
import { useState } from 'react';

import { Header } from "./components/Header"
import { CriarTarefa } from './components/CriarTarefa'
import { ListaTarefas } from "./components/ListaTarefas"

export function App() {

  const [tarefas, setTarefas] = useState([]);
  
  function criarNovaTarefa(novaTarefa) {
    setTarefas([...tarefas, novaTarefa]);
  }

  function deletarTarefa(index) {
    const newTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(newTarefas);
  }

  
  function completarTarefa(index) {
    const novasTarefas = tarefas.map((tarefa, i) => {
      if (i === index) {
        return { ...tarefa, completed: !tarefa.completed };
      }
      return { ...tarefa };
    });
    setTarefas(novasTarefas);
  }


  return (
    <>
    <Header/>
    <CriarTarefa criarNovaTarefa={criarNovaTarefa}/>
    <ListaTarefas tarefas={tarefas} deletarTarefa={deletarTarefa} completarTarefa={completarTarefa}/>
    </>
  )
}


