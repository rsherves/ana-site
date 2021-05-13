import './Research.css';
import research01 from '../img/research/research_01.png';
import research02 from '../img/research/research_02.png';
import research03 from '../img/research/research_03.png';

function Research() {
  return (
    <div className="Research">
      <div className="section-header">Research Interests:</div>
      <div className="research-description">
        <p>My research is focused on the synthesis and characterization of polymeric nanostructures with potential applications in biomedicine. I am author of 2 licensed patents, 3 book chapters and 24 articles in international peer-reviewed journals. My work has been highlighted on the cover of highest impact factor journals of my field (<em>Journal of Controlled Release, Theranostics</em>). My publications cumulate over 800 citations (H-index=15, source Google Scholar).</p>   
      </div>
         
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