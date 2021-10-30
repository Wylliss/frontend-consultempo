import background from '../../assets/background.png'
import './style.css'


var sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${background})`
  };

const Body = () => {
    return (
        <section style={ sectionStyle }>
        </section>
      );
}
export default Body