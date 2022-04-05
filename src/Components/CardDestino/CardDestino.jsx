import './CardDestino.css'
import api from '../../api'

import { useState, useEffect } from 'react'

const CardDestino = () => {

    const [destino, setDestino] = useState([])

    useEffect(() => {
        api.get('/destino')
            .then((rest) => {
                setDestino(rest.data)
                console.log(rest.data)
            })
            .catch((erro) => console.log(erro))
    }, [])
   

    return (
        <div>
            <div className="row">
                {destino.map((destino) => (
                    <div className="col divCard">
                        <div className="card" key={destino.id}>
                            <div className="card-image">
                                <img src={destino.foto} />
                                <span className="card-title">{destino.nome}</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="bi bi-trash"></i></a>
                            </div>
                            <div className="card-content">
                                <h5>{destino.preco}</h5>
                            </div>
                        </div>
                    </div>
                ))

                }

            </div>
        </div>
    )
}

export default CardDestino