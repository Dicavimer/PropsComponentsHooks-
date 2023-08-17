import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)
  const Lista = [{ Imagen: "https://i.pinimg.com/564x/4a/53/12/4a5312afe9ea2793df25af5d4a456288.jpg", Titulo: "Ten paz", Contenido: "Versículo", Boton: "Detalles",id:"1" },
  { Imagen: "https://i.pinimg.com/564x/78/fb/2e/78fb2e05b397cb78cd3b2908484f4ee9.jpg", Titulo: "Felicidad", Contenido: "Versículo", Boton: "Detalles",id:"2" },
  { Imagen: "https://i.pinimg.com/564x/cb/aa/62/cbaa6291eed58c83eaab4096808980d3.jpg", Titulo: "Confía", Contenido: "Versículo", Boton: "Detalles", id:"3" },
  { Imagen: "https://i.pinimg.com/564x/f1/03/88/f103886c54e6e25279a76375ed5761df.jpg", Titulo: "Honra", Contenido: "Versículo", Boton: "Detalles", id:"4" },
  { Imagen: "https://i.pinimg.com/564x/b7/50/67/b750671140a6545b818bc5b8246d1998.jpg", Titulo: "La oración", Contenido: "Versículo", Boton: "Detalles", id:"5" },
  { Imagen: "https://i.pinimg.com/564x/69/91/d6/6991d63bf2901c86774f4091e13d0e3d.jpg", Titulo: "Descansa", Contenido: "Versículo", Boton: "Detalles", id:"6"}]

  return (
    <>
      <div className="contador">
      <h2>Contador: {count}</h2>
      <Contador setCount={setCount} />
      </div>
      <Card Lista={Lista} Count={count}/>
    </>

  )
}

export default App
