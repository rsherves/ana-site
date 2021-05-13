import logoLinked_grey50 from '../img/contact/linkedin_grey50_16.png';
import './index.css';

function PageFooter() {
  return (
    <footer className="PageFooter">
      <div className="placeholder">
        Web site developed and maintained by Rafael Sousa Hervés,&nbsp;
        <a 
          className="rsherves-contact-link"
          href="https://www.linkedin.com/in/rsherves/"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact here
          <img src={logoLinked_grey50} className="linkedin-logo" alt="LinkedIn logo" />
        </a>
      </div>
    </footer>
  );
}

export default PageFooter;
