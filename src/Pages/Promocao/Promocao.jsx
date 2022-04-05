import Footer from '../../Components/Footer/Footer'
import CardPromocao from '../../Components/CardPromocao/CardPromocao'
import Jumbopromocao from '../../Components/JumboPromocao/Jumbopromocao';
import FormularioPromocao from '../../Components/FormularioPromocao/FormularioPromocao'

export default () => {
    return (
        <div>

            <Jumbopromocao></Jumbopromocao>
            <FormularioPromocao></FormularioPromocao>
            <CardPromocao></CardPromocao>
            <Footer></Footer>
        </div>
    );
} 