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
        title: "Click chemistry for drug delivery nanosystems",
        authors: "Enrique Lallana, Ana Sousa-Herves, Francisco Fernandez-Trillo, Ricardo Riguera, Eduardo Fernandez-Megia",
        source: "Pharmaceutical research 29 (1), 1-34",
        date: new Date(2012, 0),
      },
      {
        title: "Click chemistry with polymers, dendrimers, and hydrogels for drug delivery",
        authors: "Enrique Lallana, Francisco Fernandez-Trillo, Ana Sousa-Herves, Ricardo Riguera, Eduardo Fernandez-Megia",
        source: "Pharmaceutical research 29 (4), 902-921",
        date: new Date(2012, 3),
      },
      {
        title: "Matrix metalloproteinase-sensitive multistage nanogels promote drug transport in 3d tumor model",
        authors: "G Nagel, A Sousa-Herves, S Wedepohl, M Calderón",
        source: "Theranostics 10 (1), 91",
        date: new Date(2020, 0),
      },
      {
        title: "Co-targeting the tumor endothelium and P-selectin-expressing glioblastoma cells leads to a remarkable therapeutic outcome",
        authors: "Shiran Ferber, Galia Tiram, Ana Sousa-Herves, Anat Eldar-Boock, Adva Krivitsky, Anna Scomparin, Eilam Yeini, Paula Ofek, Dikla Ben-Shushan, Laura Isabel Vossen, Kai Licha, Rachel Grossman, Zvi Ram, Jack Henkin, Eytan Ruppin, Noam Auslander, Rainer Haag, Marcelo Calderón, Ronit Satchi-Fainaro",
        source: "Elife 6, e25281",
        date: new Date(2017, 9),
      },
      {
        title: "Aggregation-Induced Emission Properties in Fully π-Conjugated Polymers, Dendrimers, and Oligomers",
        authors: "Antonio Sánchez-Ruiz, Ana Sousa-Hervés, Juan Tolosa Barrilero, Amparo Navarro, Joaquín C Garcia-Martinez",
        source: "Polymers 13 (2), 213",
        date: new Date(2021, 0),
      },
      /*{
        title: "",
        authors: "",
        source: "",
        date: new Date(2021, 1),
      },*/
    ];
  }
}