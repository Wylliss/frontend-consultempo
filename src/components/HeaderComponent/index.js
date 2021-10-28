import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './style.css'

const Header = () => {
    return (
        <nav>
            <div className='div-header' >
                <div>
                    <img src={logo} alt="Consultempo" />
                </div>
                <div className='btns'>
                    <button type="button" className="botao"> Tempo Real</button>
                    <button type="button" className="botao"> Previsao do tempo</button>
                    <button type="button" className="botao"> Historico</button>
                </div>
            </div>
        </nav>
    )
}
export default Header