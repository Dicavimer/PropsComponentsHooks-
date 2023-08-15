import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)
  const Lista = [{ Imagen: "./Imagenes/Eagerness.jpg", Titulo: "Ten paz", Contenido: "Versículo", Boton: "Detalles",id:"1" },
  { Imagen: "./Imagenes/Hapy.jpg", Titulo: "Felicidad", Contenido: "Versículo", Boton: "Detalles",id:"2" },
  { Imagen: "./Imagenes/Herence.jpg", Titulo: "Hijos", Contenido: "Versículo", Boton: "Detalles", id:"3" },
  { Imagen: "./Imagenes/Honor.jpg", Titulo: "Honra", Contenido: "Versículo", Boton: "Detalles", id:"4" },
  { Imagen: "./Imagenes/Pray.jpg", Titulo: "La oración", Contenido: "Versículo", Boton: "Detalles", id:"5" },
  { Imagen: "./Imagenes/Rest.jpg", Titulo: "Descansa", Contenido: "Versículo", Boton: "Detalles", id:"6"}]

  return (
    <>
      <h2>Practice one</h2>
      <Card Lista={Lista} Count={count}/>
      <Contador setCount={setCount} />
      <h2>Contador: {count}</h2>
    </>

  )
}

export default App
