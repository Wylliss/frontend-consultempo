import { NavLink } from 'react-router-dom'
import background from '../../assets/background.png'
import './style.css'

const Body = () => {
    return (
        <div>
            <img className="div-background" src={background} alt="Consultempo" />
        </div>
    )
}
export default Body