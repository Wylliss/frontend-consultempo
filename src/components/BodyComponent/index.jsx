import './style.css'
import RealTimeComponent from '../RealTimeComponent';
const Body = ({ page }) => {

  if (page === "home") {
    return (
      <div class="bg_image">
        <RealTimeComponent />
      </div>
    );
  }

  if (page === "previsao") {
    return (
      <div class="bg_image">
        <p>previsao</p>
        <RealTimeComponent />
      </div>
    );
  }

  if (page === "historico") {
    return (
      <div class="bg_image">
        <p>historico</p>
        <RealTimeComponent />
      </div>
    );
  }

  return (
    <div class="bg_image">
      <div>DEU RUIM MANO</div>
    </div>
  );
}

export default Body