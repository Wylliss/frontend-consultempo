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

                <div >
                    tempo real
                </div>

                <div>
                    Previsao do tempo
                </div>

                <div >
                    Previsao do tempo
                </div>
            </div>
        </nav>
    )
}
export default Header