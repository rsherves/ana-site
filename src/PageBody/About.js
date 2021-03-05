import AcademicLink from './util/AcademicLink';
import anaOffice from '../img/ana-office.jpg';
import './About.css';

function About() {
  return (
    <div className="About">
      <div className="flex-container about-container">
        <div className="flex-item-img">
          <img src={anaOffice} className="ana-office" alt="Ana in the office" />
        </div>
        <div className="flex-item-txt">
          <p>I received my PhD (Extraordinary Doctorate Award) from the University of Santiago de Compostela in 2011 after working on the preparation of dendritic nanostructures for biomedical applications in the group of Prof. R. Riguera and Prof. E. Fernandez-Megia.</p>
          <p>In 2012 I was awarded a Marie Curie Intra-European Fellowship to carry out my postdoctoral research at Freie Universität Berlin, under the supervision of Prof. M. Calderón and Prof. R. Haag. My work in Berlin was focused on the preparation of responsive nanogels and polymer-drug conjugates for applications in drug and gene delivery.</p>
          <p>In 2015 I joined the Glycosystems Laboratory under the supervision of Dr. J. Rojo (IIQ, CSIC, Sevilla), where I worked first as a Talent Hub Fellow (Marie Curie COFUND) and then as a Juan de la Cierva Incorporación Researcher preparing glycodendritic nanostructures for their interaction with biologically relevant lectins.</p>
          <p>Since November 2019 I work as Lecturer in Organic Chemistry (<em>Prof. Ayudante Doctor</em>) at the Faculty of Pharmacy of the University of Castilla-La Mancha. My research interests as a member of the Pharmaceutical Organic Chemistry group include the development of light-sensitive nanostructures with applications in biomedicine.</p>

          <div className="academic-links-wrapper">
            <div className="flex-container row-wrap">
              <AcademicLink
                className="orcid"
                text="ORCID"
                link="https://orcid.org/0000-0003-0111-9057"
              />
              <AcademicLink
                className="publons"
                text="Publons"
                link="https://publons.com/researcher/2431688/ana-sousa-herves/"
              />
              <AcademicLink
                className="research-gate"
                text="ResearchGate"
                link="https://www.researchgate.net/profile/Ana-Sousa-Herves"
              />
              <AcademicLink
                className="scorpus"
                text="Scopus"
                link="https://www.scopus.com/authid/detail.uri?authorId=24448692900"
              />
              <AcademicLink
                className="google-scholar"
                text="Google Scholar"
                link="https://scholar.google.com/citations?user=unPmtLMAAAAJ&hl=en&oi=ao"
              />
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default About;