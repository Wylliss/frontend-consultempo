import logo from '../../assets/logo.png'
import './style.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {

    return (
        <Router>
            <nav>
                <div className='div-header' >
                    <div>
                        <img src={logo} alt="Consultempo" />
                    </div>
                    <div className='btns'>                   
                        <Link to="/" className="botao"> Tempo Real</Link>
                        <Link to="/previsao" className="botao"> Previsao do tempo</Link>
                        <Link to="/historico" className="botao"> Historico</Link>                                                
                    </div>
                </div>
            </nav>
            
        </Router>
        
    )
}
export default Header