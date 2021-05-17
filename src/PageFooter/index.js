import logoLinked_grey50 from '../img/contact/linkedin_grey50_16.png';
import './index.css';

function PageFooter() {
  return (
    <footer className="PageFooter">
      <div className="footer-content-wrapper">
        <div className="developer-credits">
          <span>Web site developed and maintained by </span>
          <span className="ws-nowrap">Rafael Sousa Hervés,</span>
          <span> </span> {/* on purpose wrappable white space */}
          <span className="ws-nowrap">
            <a
              href="https://www.linkedin.com/in/rsherves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact here
              <img src={logoLinked_grey50} className="linkedin-logo" alt="LinkedIn logo" />
            </a>
          </span>
        </div>
      </div>        
    </footer>
  );
}

export default PageFooter;
