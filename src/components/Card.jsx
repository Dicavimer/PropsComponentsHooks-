import React from 'react'

const Card = (props) => {

    return (
        <div className="container">
            {
                props.Lista.map((ListaTwo)=>(
                    <div className="row row-cols-1 row-cols-md-6 g-4"  key={ListaTwo.id}>
                    <div className="col">
                        <div className="card h-100" >
                            <img src={ListaTwo.Imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{ListaTwo.Titulo}</h5>
                                <h6>Contador: {props.Count}</h6>
                                <p className="card-text">{ListaTwo.Contenido}</p>
                            </div>
                            <div className="card-footer">
                                <a href="">{ListaTwo.Boton}</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))
                
            }

        </div>
    )
}
export default Card

