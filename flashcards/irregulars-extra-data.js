// 26 more irregular base verbs, completing the B2 set (16 + 26 = 42 base verbs).
// Same format as IRREGULARS_DATA. **bold** = can't be derived, memorize it.
// present: je · nous · ils; subj: [que je, que nous?]; futur: stem for futur + conditionnel
//   family:   verbs that conjugate the same way, plus their quirks (shown after checking)
//   priority: 1 = common in business French, 2 = you'll meet it, but rarely in essays
// Loaded after irregulars-data.js; appends its rows (tagged extra: true) to IRREGULARS_DATA.

const IRREGULARS_EXTRA = [
  // --- priority 1: common in business French ---
  { verb: "recevoir",   present: ["reçois", "recevons", "reçoivent"],              futur: "**recevr-**",   subj: ["reçoive", "recevions"],    participe: "**reçu**", priority: 1, family: "apercevoir, concevoir, décevoir, percevoir · works like devoir, with ç before o and u" },
  { verb: "ouvrir",     present: ["**ouvre**", "ouvrons", "ouvrent"],              futur: "ouvrir-",       subj: ["ouvre"],                   participe: "**ouvert**", priority: 1, family: "offrir, couvrir, découvrir, souffrir · présent with -er endings · offert, couvert, découvert, souffert" },
  { verb: "partir",     present: ["**pars**", "partons", "partent"],               futur: "partir-",       subj: ["parte"],                   participe: "parti", aux: "être", priority: 1, family: "sortir (être) · dormir, sentir, servir, mentir (avoir) · the singular drops the consonant: je pars, je dors, je sers" },
  { verb: "écrire",     present: ["écris", "**écrivons**", "écrivent"],            futur: "écrir-",        subj: ["écrive"],                  participe: "écrit", priority: 1, family: "décrire, inscrire, prescrire" },
  { verb: "lire",       present: ["lis", "lisons", "lisent"],                      futur: "lir-",          subj: ["lise"],                    participe: "**lu**", priority: 1, family: "relire, élire" },
  { verb: "vivre",      present: ["vis", "vivons", "vivent"],                      futur: "vivr-",         subj: ["vive"],                    participe: "**vécu**", priority: 1, family: "survivre, revivre" },
  { verb: "suivre",     present: ["**suis**", "suivons", "suivent"],               futur: "suivr-",        subj: ["suive"],                   participe: "suivi", priority: 1, family: "poursuivre · je suis = « ich bin » (être) and « ich folge » (suivre)" },
  { verb: "conduire",   present: ["conduis", "**conduisons**", "conduisent"],      futur: "conduir-",      subj: ["conduise"],                participe: "conduit", priority: 1, family: "produire, réduire, construire, traduire, détruire, introduire · participles produit, réduit, construit…" },
  { verb: "craindre",   present: ["crains", "**craignons**", "craignent"],         futur: "craindr-",      subj: ["craigne"],                 participe: "craint", priority: 1, family: "all -aindre / -eindre / -oindre: plaindre, atteindre, peindre, éteindre, rejoindre · atteint, rejoint…" },
  { verb: "naître",     present: ["nais", "naissons", "naissent"],                 futur: "naîtr-",        subj: ["naisse"],                  participe: "**né**", aux: "être", priority: 1, family: "renaître · présent works like connaître" },
  { verb: "acquérir",   present: ["**acquiers**", "acquérons", "**acquièrent**"],  futur: "**acquerr-**",  subj: ["acquière", "acquérions"],  participe: "**acquis**", priority: 1, family: "conquérir, requérir" },
  { verb: "convaincre", present: ["convaincs", "**convainquons**", "convainquent"], futur: "convaincr-",   subj: ["convainque"],              participe: "convaincu", priority: 1, family: "vaincre · il convainc (no t at the end)" },
  { verb: "accueillir", present: ["**accueille**", "accueillons", "accueillent"],  futur: "**accueiller-**", subj: ["accueille"],              participe: "accueilli", priority: 1, family: "cueillir, recueillir · présent and futur with -er forms" },
  { verb: "résoudre",   present: ["résous", "**résolvons**", "résolvent"],         futur: "résoudr-",      subj: ["résolve"],                 participe: "**résolu**", priority: 1, family: "" },
  { verb: "envoyer",    present: ["envoie", "envoyons", "envoient"],               futur: "**enverr-**",   subj: ["envoie", "envoyions"],     participe: "envoyé", priority: 1, family: "renvoyer · y → i before a silent e, like all -oyer verbs (employer → j'emploie, j'emploierai)" },

  // --- priority 2: you'll meet them, but rarely in essays ---
  { verb: "boire",      present: ["bois", "**buvons**", "boivent"],                futur: "boir-",         subj: ["boive", "buvions"],        participe: "**bu**", priority: 2, family: "" },
  { verb: "courir",     present: ["cours", "courons", "courent"],                  futur: "**courr-**",    subj: ["coure"],                   participe: "couru", priority: 2, family: "parcourir, secourir, recourir, concourir" },
  { verb: "mourir",     present: ["**meurs**", "mourons", "meurent"],              futur: "**mourr-**",    subj: ["meure", "mourions"],       participe: "**mort**", aux: "être", priority: 2, family: "" },
  { verb: "valoir",     present: ["**vaux**", "valons", "valent"],                 futur: "**vaudr-**",    subj: ["**vaille**", "valions"],   participe: "valu", priority: 2, family: "équivaloir · mostly used as il vaut mieux / il vaudrait mieux" },
  { verb: "pleuvoir",   present: ["**il pleut**"],                                 futur: "**il pleuvr-**", subj: ["**qu'il pleuve**"],       participe: "**plu**", impersonal: true, priority: 2, family: "" },
  { verb: "rire",       present: ["ris", "rions", "rient"],                        futur: "rir-",          subj: ["rie", "**riions**"],       participe: "ri", priority: 2, family: "sourire" },
  { verb: "plaire",     present: ["plais", "plaisons", "plaisent"],                futur: "plair-",        subj: ["plaise"],                  participe: "**plu**", priority: 2, family: "déplaire · il plaît (with î): s'il vous plaît · plu is also the participle of pleuvoir" },
  { verb: "s'asseoir",  present: ["**assieds**", "asseyons", "asseyent"],          futur: "**assiér-**",   subj: ["asseye"],                  participe: "**assis**", aux: "être", priority: 2, family: "second correct set: j'assois, nous assoyons, ils assoient · futur assoir-" },
  { verb: "battre",     present: ["**bats**", "battons", "battent"],               futur: "battr-",        subj: ["batte"],                   participe: "battu", priority: 2, family: "combattre, débattre · one t in the singular: je bats, il bat" },
  { verb: "suffire",    present: ["suffis", "suffisons", "suffisent"],             futur: "suffir-",       subj: ["suffise"],                 participe: "**suffi**", priority: 2, family: "unlike dire (dit), the participle ends in -i" },
  { verb: "fuir",       present: ["fuis", "**fuyons**", "fuient"],                 futur: "fuir-",         subj: ["fuie", "fuyions"],         participe: "fui", priority: 2, family: "s'enfuir" },
];

// Families of the original 16, so every row lists all the verbs it covers and their quirks.
const IRREGULARS_FAMILIES = {
  "être": "",
  "avoir": "",
  "aller": "",
  "faire": "refaire, défaire, satisfaire (futur satisfer-)",
  "venir": "devenir, revenir, intervenir, parvenir, se souvenir (être) · prévenir, convenir (avoir) · tenir, obtenir, maintenir, soutenir, appartenir, contenir, retenir, entretenir, détenir (avoir, futur tiendr-, participle tenu)",
  "prendre": "comprendre, apprendre, entreprendre, surprendre",
  "pouvoir": "",
  "devoir": "recevoir and all -cevoir verbs work the same way (see recevoir)",
  "vouloir": "",
  "savoir": "",
  "falloir": "",
  "mettre": "permettre, promettre, admettre, transmettre, soumettre",
  "dire": "redire · interdire, prédire, contredire: vous interdisez, vous prédisez (not -dites)",
  "voir": "revoir · prévoir has a regular futur: je prévoirai",
  "croire": "",
  "connaître": "reconnaître, paraître, apparaître, disparaître",
};

if (typeof IRREGULARS_DATA !== "undefined") {
  IRREGULARS_DATA.forEach(row => {
    if (row.family === undefined && IRREGULARS_FAMILIES[row.verb] !== undefined) { row.family = IRREGULARS_FAMILIES[row.verb]; row.priority = 1; }
  });
  IRREGULARS_EXTRA.forEach(row => row.extra = true);
  IRREGULARS_DATA.push(...IRREGULARS_EXTRA);
}
