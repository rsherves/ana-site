import AcademicLink from './util/AcademicLink';
import ContactLink from './util/ContactLink';
import anaOffice from '../img/ana-office.jpg';
import logoTwitter from '../img/contact/twitter_64.png';
import logoLinked from '../img/contact/linkedin_64.png';

import './About.css';

function About() {
  return (
    <div className="About">
      <div className="flex-container about-container">
        <div className="flex-item-img">
          <img src={anaOffice} className="ana-office" alt="Ana in the office" />
        </div>
        <div className="flex-item-txt">
          <p>I received my PhD (Extraordinary Doctorate Award) from the University of Santiago de Compostela in 2011 after working on the preparation of dendritic nanostructures for biomedical applications in the group of Prof. R. Riguera and Prof. E. Fernandez-Megia (Dpt. of Organic Chemistry and CIQUS).
          </p>
          <p>In 2012 I was awarded a Marie Curie Intra-European Fellowship (<em>"SMART NANOGELS"</em>) to carry out my postdoctoral research at Freie Universität Berlin in the groups of Prof. M. Calderón and Prof. R. Haag. My work in Berlin was focused on the preparation of responsive nanogels and polymer-drug conjugates for applications in drug and gene delivery.
          </p>
          <p>In 2015 I joined the Glycosystems Laboratory, led by Dr. J. Rojo, at the Instituto de Investigaciones Químicas (IIQ, CSIC, Seville) to develop my project <em>"GLYCONANO4VIRUS"</em>. I worked at the group first as a Talent Hub Fellow (Marie Curie COFUND) and then as a Juan de la Cierva Incorporación Researcher preparing glycodendritic structures that could interact with biologically relevant lectins such as those implicated in viral infections.
          </p>
          <p>Since November 2019 I work as Lecturer in Organic Chemistry (<em>Prof. Contratado Doctor</em>) at the Faculty of Pharmacy of the University of Castilla-La Mancha. I am PI of a project devoted to prepare antibacterial surfaces. I belong to the Pharmaceutical Organic Chemistry group, based at The Regional Center for Biomedical Research (CRIB), where I develop a research line devoted to the preparation of light-sensitive nanogels with applications in biomedicine. 
          </p>

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

          <div className="contact-wrapper">
            <div className="contact-label">Contact:</div>
            <div className="contact-info">
              <p>Dr. Ana Sousa Hervés.</p>
              <p>Facultad de Farmacia. Universidad de Castilla-La Mancha (UCLM).</p>
              <p>Tel: (+34) 967 599 200. Ext: 2633.</p>
            </div>
            <div className="contact-links-wrapper flex-container row-nowrap">
              <ContactLink
                altText="Logo Twitter"
                imgSource={logoTwitter}
                link="https://twitter.com/anasousaherves"
              />
              <ContactLink
                altText="Logo LinkedIn"
                imgSource={logoLinked}
                link="https://www.linkedin.com/in/ana-sousa-herv%C3%A9s/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;