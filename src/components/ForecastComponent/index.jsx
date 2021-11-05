import './style.css'
import Chart from './../ChartForecastComponent';
const ForecastComponent = () => {
  return (
    <>
      <div className="card_container2 card_row">
        <Chart />
        <div >
          <p> Segunda - vai cair o mundo </p>
          <p> Terça - vai cair o mundo </p>
          <p> Quarta - vai cair o mundo </p>
          <p> Quinta - vai cair o mundo </p>
          <p> Sexta - vai cair o mundo </p>
          <p> Sabado - vai cair o mundo </p>
          <p> Domingo - vai cair o mundo </p>          
        </div>
      </div>
    </>
  );
}

export default ForecastComponent