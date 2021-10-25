import logo from '../../assets/logo.png'
import MenuIcon from '@material-ui/icons/Menu';

function HeaderComponent () {
    return (
        <header>
        <div>
            <img src={logo} alt="Consultempo" />
        </div>

        <div>
            <MenuIcon/>
        </div>

        </header>
    )
} 
export default HeaderComponent