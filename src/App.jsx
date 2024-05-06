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
    
  }

  return (
    <>
    <Header/>
    <CriarTarefa criarNovaTarefa={criarNovaTarefa}/>
    <ListaTarefas tarefas={tarefas} deletarTarefa={deletarTarefa} completarTarefa={completarTarefa}/>
    </>
  )
}


