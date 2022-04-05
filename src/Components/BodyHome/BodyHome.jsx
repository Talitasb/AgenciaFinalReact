import Miami from '../../assets/img/miami.jpg'
import BuenosAires from '../../assets/img/buenosaires.jpg'
import Disney from '../../assets/img/disney.jpg'

import './BodyHome.css'

export default () =>{
    return(
      
        <section id="pacotes" className="pacotes ">
            <div className="pacotes-titulo ">
                <h1>Conheça nossos Pacotes</h1>
            </div>
            <div className="pacotes-cards ">
                <div className="card ">

                    <div className="card-tag card-tag-top ">
                        <p>Pacotes Promocionais</p>
                    </div>

                    <div className="card-tag card-tag-bottom ">
                        <p>a partir R$1000,00</p>
                    </div>

                    <img src={Miami} alt="Cards de Fotos" />
                    <div className="card-content ">
                        <h1>Miami</h1>
                        <ul>
                            <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                            <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            <li><i className="fas fa-bus"></i>Translado</li>
                            <li><i className="fas fa-route"></i>Passeio Turistico</li>
                        </ul>
                    </div>
                </div>

                <div className="card ">

                    <div className="card-tag card-tag-top ">
                        <p>Pacotes Promocionais</p>
                    </div>

                    <div className="card-tag card-tag-bottom ">
                        <p>a partir R$200,00</p>
                    </div>

                    <img src={BuenosAires} alt="Cards de Fotos" />
                    <div className="card-content ">
                        <h1>Buenos Aires</h1>
                        <ul>
                            <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                            <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            <li><i className="fas fa-bus"></i>Translado</li>
                            <li><i className="fas fa-route"></i>Passeio Turistico</li>
                        </ul>
                    </div>
                </div>
                
                <div className="card ">

                    <div className="card-tag card-tag-top ">
                        <p>Pacotes Promocionais</p>
                    </div>

                    <div className="card-tag card-tag-bottom ">
                        <p>a partir R$200,00</p>
                    </div>

                    <img src={Disney} alt="Cards de Fotos" />
                    <div className="card-content ">
                        <h1>Disney</h1>
                        <ul>
                            <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                            <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            <li><i className="fas fa-bus"></i>Translado</li>
                            <li><i className="fas fa-route"></i>Passeio Turistico</li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>
    );
}