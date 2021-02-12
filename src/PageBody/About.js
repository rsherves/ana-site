import './About.css';
import scientist from '../img/female-scientist-illustration.jpg';

function About() {
  const imgCreditUrl = "https://www.freepik.com/vectors/female-scientist";
  return (
    <div className="About">
      <div className="construction-msg">Page under construction</div>
        <div className="flex-container">
          <div className="flex-item-img">
            <img src={scientist} className="sci-illustration" alt="female scientist illustration" />
            <div className="img-credits">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={imgCreditUrl}
              >
                Illustration created by pikisuperstar
              </a>
            </div>
          </div>
          <div className="flex-item-txt">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum porta pellentesque. Praesent porta malesuada orci, in viverra risus sollicitudin vitae.</p>
            <p>Nunc varius lorem augue. Vivamus et iaculis risus. Phasellus a iaculis massa. Etiam at mauris nisi. Phasellus ac volutpat augue, quis commodo justo. Integer congue id leo accumsan ultrices. Sed eu mattis tortor. Cras posuere hendrerit mi, nec sollicitudin est lacinia vel. Maecenas gravida nunc a magna volutpat euismod.</p>
            <p>Praesent cursus orci vel arcu finibus luctus. Donec sollicitudin nulla vel dapibus tristique. Duis egestas sodales venenatis. Sed vehicula eget mi eu maximus. Mauris luctus volutpat mattis. Phasellus nisl ipsum, suscipit in molestie ut, ultrices sed augue. Nunc sed pretium tortor, maximus dignissim nulla. Donec tempus dui tristique ante placerat, pretium porta risus vestibulum. Proin pretium lorem id odio gravida, tincidunt finibus orci vehicula.</p>
            <p>Sed consectetur mi non diam elementum dapibus. In sit amet ultricies velit. Aenean ac tellus id massa dapibus auctor. Sed eu sem finibus, elementum turpis sed, sagittis nisl. Praesent blandit ex vel sem molestie viverra.</p>
          </div>
        </div>
    </div>
  );
}

export default About;