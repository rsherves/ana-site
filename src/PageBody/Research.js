import './Research.css';
import research01 from '../img/research/research_01.png';
import research02 from '../img/research/research_02.png';
import research03 from '../img/research/research_03.png';

function Research() {
  return (
    <div className="Research">
      <div className="section-header">Research Interests:</div>
      <p>
        My research is focused on the synthesis and characterization of polymeric nanostructures with potential applications in biomedicine.
      </p>      
      <div className="gallery-wrapper">
        <div className="gallery-item-wrapper">
          <img src={research01} className="gallery-item" alt="Slide one" />
        </div>
        <div className="gallery-item-wrapper">
          <img src={research02} className="gallery-item" alt="Slide two" />
        </div>
        <div className="gallery-item-wrapper">
          <img src={research03} className="gallery-item" alt="Slide three" />
        </div>
      </div>
    </div>
  );
}

export default Research;