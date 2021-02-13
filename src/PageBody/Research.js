import './Research.css';
import illustration from '../img/woman-science-technology.jpg';

function Research() {
  const imgCreditUrl =
    "https://ec.europa.eu/research/infocentre/article_en.cfm?&artid=51905&caller=other";
  return (
    <div className="Research">
      <div className="img-wrapper">
        <img
          src={illustration}
          className="w-sci-tec-illustration"
          alt="women in science and technology"
        />
      </div>
      <div className="img-credits">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={imgCreditUrl}
        >
          © Naufal #317011810 source: stock.adobe.com 2020
        </a>
      </div>
    </div>
  );
}

export default Research;