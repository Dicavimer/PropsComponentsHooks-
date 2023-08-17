import React from 'react'



const Card = (props) => {
    return (
        <div className= "container">
            {
                props.Lista.map((ListaTwo)=>(
                    <div key={ListaTwo.id}>
                        <div className="card h-100" >
                            <img src={ListaTwo.Imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{ListaTwo.Titulo}</h5>
                                <h6 className="Content">Contador:{props.Count}</h6>
                                <p className="card-text">{ListaTwo.Contenido}</p>
                                <h6 className="card-cita">{ListaTwo.Cita}</h6>
                            </div>
                            <div className="footer">
                                <a href="https://www.biblia.es/reina-valera-1960.php">{ListaTwo.Boton}</a>
                            </div>
                        </div>
                    </div>
                ))

                
            }

        </div>
    )
}
export default Card

