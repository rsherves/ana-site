import imgAEI from '../img/funding/AEI.jpg';
import imgCierva from '../img/funding/cierva.png';
import imgDiputacion from '../img/funding/diputacion.jpg';
import imgDSR from '../img/funding/DRS.jpg';
import imgFeyct from '../img/funding/feyct.png';
import imgJuntaUe1 from '../img/funding/junta-ue1.gif';
import imgJuntaUe2 from '../img/funding/junta-ue2.jpg';
import imgMcActions from '../img/funding/McActions.jpg';
import imgMcCofund from '../img/funding/McCofund.jpg';
import imgMinisterio from '../img/funding/ministerio.png';
import imgUclm from '../img/funding/uclm.png';
import './Funding.css';

function Funding() {
  return (
    <div className="Funding">
      <div className="flex-container row-wrap center">
        <div className="flex-item"><img src={imgMcActions} alt="Marie Curie Actions" /></div>
        <div className="flex-item"><img src={imgMcCofund} alt="Marie Curie Cofund" /></div>
      </div>
      <div className="flex-container row-wrap center">
        <div className="flex-item"><img src={imgCierva} alt="Juan de la Cierva" /></div>
        <div className="flex-item"><img src={imgMinisterio} alt="Ministerio de Ciencia e Innovación" /></div>
        <div className="flex-item"><img src={imgAEI} alt="Agencia Estatal de Investigación" /></div>
      </div>
      <div className="flex-container row-wrap center">
        <div className="flex-item"><img src={imgJuntaUe1} alt="Junta de Andalucía" /></div>
        <div className="flex-item"><img src={imgJuntaUe2} alt="Europen Union" /></div>
      </div>
      <div className="flex-container row-wrap center">
        <div className="flex-item"><img src={imgFeyct} alt="Fundación Española para la Ciencia y Technología" /></div>
        <div className="flex-item"><img src={imgDSR} alt="Dahlem Research School" /></div>
      </div>
      <div className="flex-container row-wrap center">
        <div className="flex-item"><img src={imgUclm} alt="Universidad de Castilla-La Mancha" /></div>
        <div className="flex-item"><img src={imgDiputacion} alt="Diputación de Albacete" /></div>
      </div>
    </div>
  );
}

export default Funding;