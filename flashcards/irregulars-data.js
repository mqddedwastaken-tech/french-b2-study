// Les 16 verbes irréguliers — one row per verb.
// **bold** = can't be derived, memorize it.
// present: je · nous · ils (dire adds vous); subj: [que je, que nous?]; futur: stem for futur + conditionnel
const IRREGULARS_INTRO = "Imparfait and gérondif come from the nous column, the subjonctif from the ils column.";

const IRREGULARS_DATA = [
  { verb: "être",      present: ["**suis**", "**sommes**", "**sont**"],          futur: "**ser-**",      subj: ["**sois**", "soyons"],     participe: "**été**" },
  { verb: "avoir",     present: ["**ai**", "**avons**", "**ont**"],              futur: "**aur-**",      subj: ["**aie**", "ayons"],       participe: "**eu**" },
  { verb: "aller",     present: ["**vais**", "allons", "**vont**"],              futur: "**ir-**",       subj: ["**aille**", "allions"],   participe: "allé", aux: "être" },
  { verb: "faire",     present: ["fais", "faisons", "**font**"],                 futur: "**fer-**",      subj: ["**fasse**"],              participe: "fait" },
  { verb: "venir",     present: ["viens", "venons", "viennent"],                 futur: "viendr-",       subj: ["vienne", "venions"],      participe: "venu", aux: "être" },
  { verb: "prendre",   present: ["prends", "prenons", "prennent"],               futur: "prendr-",       subj: ["prenne", "prenions"],     participe: "**pris**" },
  { verb: "pouvoir",   present: ["**peux**", "pouvons", "peuvent"],              futur: "**pourr-**",    subj: ["**puisse**"],             participe: "**pu**" },
  { verb: "devoir",    present: ["dois", "devons", "doivent"],                   futur: "**devr-**",     subj: ["doive", "devions"],       participe: "**dû**" },
  { verb: "vouloir",   present: ["**veux**", "voulons", "veulent"],              futur: "**voudr-**",    subj: ["**veuille**", "voulions"], participe: "voulu" },
  { verb: "savoir",    present: ["sais", "savons", "savent"],                    futur: "**saur-**",     subj: ["**sache**"],              participe: "**su**" },
  { verb: "falloir",   present: ["**il faut**"],                                 futur: "**il faudr-**", subj: ["**qu'il faille**"],       participe: "fallu", impersonal: true },
  { verb: "mettre",    present: ["mets", "mettons", "mettent"],                  futur: "mettr-",        subj: ["mette"],                  participe: "**mis**" },
  { verb: "dire",      present: ["dis", "disons", "disent", "**dites**"],        futur: "dir-",          subj: ["dise"],                   participe: "dit" },
  { verb: "voir",      present: ["vois", "voyons", "voient"],                    futur: "**verr-**",     subj: ["voie", "voyions"],        participe: "vu" },
  { verb: "croire",    present: ["crois", "croyons", "croient"],                 futur: "croir-",        subj: ["croie", "croyions"],      participe: "cru" },
  { verb: "connaître", present: ["connais", "connaissons", "connaissent"],       futur: "connaîtr-",     subj: ["connaisse"],              participe: "connu" },
];
