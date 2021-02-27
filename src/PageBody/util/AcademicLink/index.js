import './index.css';

function AcademicLink(props) {
  return (
    <div className="AcademicLink no-user-select">
      <a 
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="link-content">
          <span className={props.className}>{props.text}</span>
        </div>       
      </a>
    </div>      
  );
}

export default AcademicLink;