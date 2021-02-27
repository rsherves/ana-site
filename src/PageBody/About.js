import './About.css';
import anaOffice from '../img/ana-office.jpg';

function About() {
  const imgCreditUrl = "https://www.freepik.com/vectors/female-scientist";
  return (
    <div className="About">
      <div className="flex-container">
        <div className="flex-item-img">
          <img src={anaOffice} className="ana-office" alt="Photo in the office" />
        </div>
        <div className="flex-item-txt">
          <p>I received my PhD (Extraordinary Doctorate Award) from the University of Santiago de Compostela in 2011 after working on the preparation of dendritic nanostructures for biomedical applications in the group of Prof. R. Riguera and Prof. E. Fernandez-Megia.</p>
          <p>In 2012 I was awarded a Marie Curie Intra-European Fellowship to carry out my postdoctoral research at Freie Universität Berlin, under the supervision of Prof. M. Calderón and Prof. R. Haag. My work in Berlin was focused on the preparation of responsive nanogels and polymer-drug conjugates for applications in drug and gene delivery.</p>
          <p>In 2015 I joined the Glycosystems Laboratory under the supervision of Dr. J. Rojo (IIQ, CSIC, Sevilla), where I worked first as a Talent Hub Fellow (Marie Curie COFUND) and then as a Juan de la Cierva Incorporación Researcher preparing glycodendritic nanostructures for their interaction with biologically relevant lectins.</p>
          <p>Since November 2019 I work as Lecturer in Organic Chemistry (Prof. Ayudante Doctor) at the Faculty of Pharmacy of the University of Castilla-La Mancha. My research interests include the development of light-sensitive nanostructures with applications in biomedicine.</p>
          <div className="academic-links-wrapper no-user-select">
            <span className="button-link orcid">ORCID</span>
            <span className="button-link research-gate">ResearchGate</span>
            <span className="button-link scorpus">Scopus</span>
            <span className="button-link google-scholar">Google Scholar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;