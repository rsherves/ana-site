export default function PublicationData() {

  const sortByDate = (a, b) => a.date.getTime() - b.date.getTime();
  const sortByTitle = (a, b) => a.title.localeCompare(b.title);
  const reverse = (f) => {
    return (a, b) => f(b, a);
  };
  const defaultSort = reverse(sortByDate);

  const sortFunctions = new Map();
  sortFunctions.set('date', sortByDate);
  sortFunctions.set('title', sortByTitle);

  /* todo */
  return {
    getAll(sortOptions) {
      const f = getSortFunction(sortOptions);
      return getAll().sort(f);
    }
  };


  /* auxiliary functions */

  function getSortFunction(sortOptions) {
    if (!sortOptions || !sortFunctions.has(sortOptions.colName)) {
      console.warn('sortOptions is not valid');
      return defaultSort;
    } else {
      const f = sortFunctions.get(sortOptions.colName);
      return sortOptions.desc === true ? reverse(f) : f;
    }
  }

  function getAll() {
    return [
      {
				title: "Aggregation-Induced Emission Properties in Fully π-Conjugated Polymers, Dendrimers, and Oligomers",
				authors: "A. Sánchez-Ruiz, A. Sousa-Herves, J. Tolosa Barrilero, A. Navarro, J. C. Garcia-Martinez",
				source: "Polymers 13, 213",
				date: new Date(new Date("2021-01-10")),
			  link: "https://www.mdpi.com/2073-4360/13/2/213",
			},
			{
				title: "Glyconanogels as a versatile platform for the multivalent presentation of carbohydrates: From monosaccharides to dendritic glycostructures",
				authors: "N. de la Cruz Ruiz, A. Sousa-Herves*, J. Rojo*",
				source: "European Polymer Journal, 140, 110023",
				date: new Date("2020-09-15"),
				link: "https://www.sciencedirect.com/science/article/pii/S0014305720317377"
			},
			{
				title: "Polyglutamic acid-based crosslinked doxorubicin nanogels as an anti-metastatic treatment for triple negative breast cancer",
				authors: "A. Sousa-Herves‡, Aroa Duro-Castano‡, Ana Armiñán, David Charbonnier, Juan José Arroyo-Crespo, Stefanie Wedepohl, Marcelo Calderón, María J.Vicent",
				source: "Journal of Controlled Release, 332, 10",
				date: new Date("2021-02-13"),
				link: "https://www.sciencedirect.com/science/article/pii/S0168365921000523",
			},
			{
				title: "Influence of the reducing-end anomeric configuration of the Man 9 epitope on DC-SIGN recognition",
				authors: "N. de la Cruz; J. Ramos-Soriano; J. J. Reina; J. L. de Paz; M. Thépaut; F. Fieschi; A. Sousa-Herves; J. Rojo",
				source: "Organic & Biomolecular Chemistry,  18, 6086",
				date: new Date("2020-07-27"),
				link: "https://pubs.rsc.org/en/content/articlehtml/2020/ob/d0ob01380c",
			},
			{
				title: "Matrix Metalloproteinase-sensitive Multistage Nanogels Promote Drug Transport in 3D Tumor Model",
				authors: "G. Nagel; A. Sousa-Herves; S. Wedepohl; M. Calderon",
				source: "Theranostics. 10, pp.91",
				date: new Date("2020-01-01"),
				link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6929628/"
			},
			{
				title: "Co-targeting the tumor endothelium and P-selectin-expressing glioblastoma cells leads to a remarkable therapeutic outcome",
				authors: "A. Sousa-Herves‡; S. Ferber‡; G. Tiram‡; et al; R. Satchi-Fainaro.",
				source: "eLife. pp.e25281",
				date: new Date("2017-10-04"),
				link: "https://elifesciences.org/articles/25281"
			},
			{
				title: "Perspectives of Carbohydrates in Drug Discovery",
				type: "Book chapter",
				authors: "J. Rojo, A. Sousa-Herves, A. Mascaraque",
				source: "Comprehensive Medicinal Chemistry III. Elsevier. ISBN 9780128032008.",
				date: new Date("2017-06-13"),
				link: "https://www.sciencedirect.com/science/article/pii/B978012409547212311X?via%3Dihub"
			},
			{
				title: "A Dendrimer-Hydrophobic Interaction Synergy Improves the Stability of Polyion Complex Micelles",
				authors: "M. Fernández Villamarin; A. Sousa-Herves; S. Porto; R. Riguera; N. Guldris; J. Martínez-Costas; E. Fernandez-Megia",
				source: "Polymer Chemistry. 8, 2528",
				date: new Date("2017-03-28"),
				link: "https://pubs.rsc.org/--/content/articlehtml/2017/py/c7py00304h"

			},
			{
				title: "Medicinal Applications of Dendrimers",
				type: "Book chapter",
				authors: "A. Mascaraque; A. Sousa-Herves; F. J. Rojo",
				source: "Comprehensive Supramolecular Chemistry II. Elsevier. ISBN 9780128031995.",
				date: new Date("2017-06-29"),
				link: "https://www.sciencedirect.com/science/article/pii/B9780124095472125715?via%3Dihub"
			},
			{
				title: "The Effect of PEGylation on Multivalent Binding: A Surface Plasmon Resonance and Isothermal Titration Calorimetry Study with Structurally Diverse PEG-Dendritic GATG Copolymers",
				authors: "M. Fernández Villamarin; A. Sousa-Herves; J. Correa; E. M. Munoz; P. Taboada; R. Riguera; E. Fernandez-Megia",
				source: "ChemNanoMat., 2, 437",
				date: new Date("2016-02-23"),
				link: "https://onlinelibrary.wiley.com/doi/full/10.1002/cnma.201600008"
			},

			{
				title: "One-pot synthesis of doxorubicin-loaded multiresponsive nanogels based on hyperbranched polyglycerol",
				authors: "A. Sousa-Herves; S. Wedepohl; M. Calderón.",
				source: "Chemical Communications, 51, 5264",
				date: new Date("2015-03-23"),
				link: "https://pubs.rsc.org/en/content/articlelanding/2015/cc/c5cc00644a#!divAbstract"
			},

			{
				title: "In situ nanofabrication of hybrid PEG-dendritic-inorganic nanoparticles and preliminary evaluation of their biocompatibility",
				authors: "A. Sousa-Herves; C. Sánchez Espinel; A. Fahmi; A. González-Fernández; E. Fernandez-Megia",
				source: "Nanoscale, 7, 3933",
				date: new Date("2015-01-02"),
				link: "https://pubs.rsc.org/en/content/articlelanding/2015/nr/c4nr06155a#!divAbstract"
			},
			{
				title: "Facile ultrasonication approach for the efficient synthesis of ethylene glycol-based thermoresponsive nanogels",
				authors: "A. Sousa-Herves‡; C. Biglione‡; M. Menger; S. Wedepohl; M. Calderón; M.C. Strumia.",
				source: "RSC Advances. 5, 15407.",
				date: new Date("2015-01-26"),
				link: "https://pubs.rsc.org/en/content/articlelanding/2015/ra/c4ra15784b#!divAbstract"
			},
			{
				title: "Dendritic polyglycerol sulfate as a novel platform for paclitaxel delivery: Pitfalls of ester linkage",
				authors: "A. Sousa-Herves; P. Würfel; N. Wegner; J. Khandare; K. Licha; R. Haag; P. Welker; M. Calderón.",
				source: "Nanoscale, 7, 3923",
				date: new Date("2015-01-01"),
				link: "https://pubs.rsc.org/en/content/articlelanding/2015/nr/c4nr04428b#!divAbstract"
			},
			{
				title: "Aplicaciones Biomédicas de nanogeles dendríticos termosensibles",
				authors: "M. Molina; J. Bergueiro; A. Sousa-Herves; M. Calderón.",
				source: "Revista Iberoamericana de Polímeros. 16-3, 164-172. ",
				date: new Date("2015-05-01"),
				link: "http://www.ehu.eus/reviberpol/pdf/MAY15/molina.pdf"
			},

			{
				title: "Synthesis and supramolecular assembly of clicked anionic dendritic polymers into polyion complex micelles",
				authors: "A. Sousa-Herves; E. Fernandez-Megia; R. Riguera",
				source: "Chemical communications, 27, 3136",
				date: new Date("2008-05-12"),
				link: "https://pubs.rsc.org/en/content/articlelanding/2008/cc/b805208e#!divAbstract"
			},
			{
				title: "Anionic Dendritic Polymers for Biomedical Applications",
				authors: "A. Sousa-Herves; D. Gröger; M. Calderón; E. Fernandez-Megia; R. Haag",
				source: "Dendrimers in Biomedical Applications. The Royal Society of Chemistry. pp.56-72. ISBN 9781849736114",
				type: "book chapter",
				date: new Date("2013-06-14"),
				link: "https://pubs.rsc.org/en/content/chapter/bk9781849736114-00056/978-1-84973-611-4"
			},
			{
				title: "Dendrimers as potential inhibitors of the dimerization of the capsid protein of HIV-1",
				authors: "R. Doménech, O. Abian, R. Bocanegra, J. Correa, A. Sousa-Herves, R. Riguera, M. G. Mateu, E. Fernandez-Megia, A. Velázquez-Campoy, J. L. Neira",
				source: "Biomacromolecules, 11, 2069",
				date: new Date("2010-07-13"),
				link: "https://pubs.acs.org/doi/10.1021/bm100432x"
			},
			{
				title: "Core− shell dendriplexes with sterically induced stoichiometry for gene delivery",
				authors: "M. Ravina, M.de La Fuente, J. Correa, A. Sousa-Herves, J. Pinto, E. Fernandez-Megia, R. Riguera, A. Sanchez, M. J. Alonso",
				source: "Macromolecules, 43, ,6953,",
				date: new Date("2010-08-06"),
				link: "https://pubs.acs.org/doi/10.1021/ma100785m"
			},
			{
				title: "PEG-dendritic block copolymers for biomedical applications",
				authors: "A. Sousa-Herves; R. Riguera; E. Fernandez-Megia",
				source: "New Journal of Chemistry, 36, 205",
				date: new Date("2012-01-01"),
				link: "https://pubs.rsc.org/en/content/articlehtml/2012/nj/c2nj20849k"
			},
			{
				title: "Click chemistry for drug delivery nanosystems",
				authors: "E. Lallana; A. Sousa-Herves; F. Fernandez-Trillo; R. Riguera; E. Fernandez-Megia.",
				source: "Pharmaceutical Research, 29, 1.",
				date: new Date("2012-01-10"),
				link: "https://link.springer.com/article/10.1007/s11095-011-0568-5"
			},
			{
				title: "Polypeptides and polyaminoacids in drug delivery ",
				authors: "A. Sousa-Herves‡; J. V. González-Aramundiz‡; M. V. Lozano‡; E. Fernandez-Megia; N. Csaba.",
				source: "Expert Opinion on Drug Delivery, 9, 183",
				date: new Date("2012-02-02"),
				link: "https://doi.org/10.1517/17425247.2012.647906"
			},
			{
				title: "Click chemistry with polymers, dendrimers, and hydrogels for drug delivery",
				authors: "E. Lallana; F. Fernandez-Trillo; A. Sousa-Herves; R. Riguera; E. Fernandez-Megia.",
				source: "Pharmaceutical Research, 29, 902",
				date: new Date("2012-04-02"),
				link: "https://link.springer.com/article/10.1007/s11095-012-0683-y"
			},
			{
				title: "Functional nanogels for biomedical applications",
				authors: "A. Sousa-Herves‡; M. Asadian-Birjand‡; D. Steinhilber; J. C. Cuggino; M. Calderon",
				source: "Current medicinal chemistry, 19, 5029",
				date: new Date("2012-10-01"),
				link: "https://www.ingentaconnect.com/content/ben/cmc/2012/00000019/00000029/art00013"
			},
			{
				title: "Exploring the efficiency of gallic acid-based dendrimers and their block copolymers with PEG as gene carriers",
				authors: "M. De La Fuente; M. Raviña; A. Sousa-Herves; J. Correa; R. Riguera; E. Fernandez-Megia; A. Sánchez; M. J. Alonso. ",
				source: "Nanomedicine. Future Medicine, 7, 1667-1681.",
				date: new Date("2012-12-04"),
				link: "https://doi.org/10.2217/nnm.12.51"
			},
			{
				title: "Dendrimers reduce toxicity of Aβ 1-28 peptide during aggregation and accelerate fibril formation",
				authors: "B. Klajnert; T. Wasiak; M. Ionov; M. Fernandez-Villamarin; A. Sousa-Herves; J. Correa; R. Riguera; E. Fernandez-Megia.",
				source: "Nanomedicine: Nanotechnology, Biology and Medicine. 8, 1372.",
				date: new Date("2012-03-27"),
				link: "https://www.sciencedirect.com/science/article/pii/S1549963412001001"
			},
			{
				title: "GATG dendrimers and PEGylated block copolymers: From synthesis to bioapplications ",
				authors: "A. Sousa-Herves; R. Novoa-Carballal; R. Riguera; E. Fernandez-Megia.",
				source: "AAPS Journal, 16, pp.948",
				date: new Date("2014-02-23"),
				link: "https://onlinelibrary.wiley.com/doi/full/10.1002/cnma.201600008https://link.springer.com/article/10.1208/s12248-014-9642-3"
			},
    ];
  }
}