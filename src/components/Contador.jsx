import React from 'react'

const Contador = (props) => {

  return (
    <div>
    <button onClick={()=>props.setCount(e=>e+1)}> Aumentar </button>
    <button onClick={()=>props.setCount(e=>e-1)}> Disminuir </button>
    <button onClick={()=>props.setCount(0)}> Reset </button>
    </div>
    
  )
}

export default Contador
