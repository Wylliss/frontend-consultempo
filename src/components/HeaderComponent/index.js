import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';

const Header = () => {

    return (
        <Router>
            <nav>
                <div className='div-header' >
                    <div>
                        <img src={logo} alt="Consultempo" />
                    </div>
                    <div className='btns'>                   
                        <Link Redirect to="/home" className="botao"> Tempo Real</Link>
                        <Link to="/previsao" className="botao"> Previsao do tempo</Link>
                        <Link to="/historico" className="botao"> Historico</Link>                                                
                    </div>
                </div>
            </nav>
            
        </Router>
        
    )
}
export default Header