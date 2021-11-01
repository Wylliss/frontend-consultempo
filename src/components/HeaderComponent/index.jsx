import logo from '../../assets/logo.png'
import './style.css'
import { Link } from "react-router-dom";

const Header = ({page}) => {

    return (
        <nav>
            <div className='div-header' >
                <div>
                    <img src={logo} alt="Consultempo" />
                </div>
                <div className='btns'>                   
                    <Link to="/" className={page == "home" ? "selected" : ""}> 
                        Tempo Real
                    </Link>

                    <Link to="/previsao" className={page == "previsao" ? "selected" : ""}> 
                        Previsao do tempo
                    </Link>

                    <Link to="/historico" className={page == "historico" ? "selected" : ""}> 
                        Historico
                    </Link>                                                
                </div>
            </div>
        </nav>
    )
}
export default Header