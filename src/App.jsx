import "./global.css"
import { useState } from 'react';

import { Header } from "./components/Header"
import { CriarTarefa } from './components/CriarTarefa'
import { ListaTarefas } from "./components/ListaTarefas"

export function App() {

  const [tarefas, setTarefas] = useState([1, 2]);

  function criarNovaTarefa() {
    setTarefas([...tarefas, tarefas.length + 1])
  }

  
  return (
    <>
    <Header/>
    <CriarTarefa criarNovaTarefa={criarNovaTarefa}/>
    <ListaTarefas tarefas={tarefas}/>
    </>
  )
}


