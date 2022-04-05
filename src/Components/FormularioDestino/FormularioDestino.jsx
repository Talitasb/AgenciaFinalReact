import './FormularioDestino.css'

const FormularioDestino = () => {
    return (
        <div>
            <div className="row2">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" className="validate" />
                                <label>Nome do produto</label>
                        </div>
                        <div className="input-field col s12">
                            <input  type="text" className="validate" />
                                <label>Imagem</label>
                        </div>
                        <div className="input-field col s12">
                            <input  type="number" className="validate" />
                                <label>Preço</label>
                        </div>
                        <div className="col s12">
                        <button class="btn"><a href="#pacotes">Enviar</a></button>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default FormularioDestino