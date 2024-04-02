import "./global.css"

import { Header } from "./components/Header"
import { CriarTarefa } from './components/CriarTarefa'
import { ListaTarefas } from "./components/ListaTarefas"

export function App() {
  
  return (
    <>
    <Header/>
    <CriarTarefa/>
    <ListaTarefas/>
    </>
  )
}


