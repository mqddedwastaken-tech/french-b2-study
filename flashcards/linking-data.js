// B2 linking words (mots de liaison / connecteurs logiques)
// Same shape as VOCAB_DATA, plus: group (function of the connector), note (grammar), answers (accepted alternatives)
const LINKING_DATA = [
  // === CAUSE ===
  { id: 1001, category: "Mots de liaison", group: "Cause", french: "parce que", german: "weil", expression: "L'entreprise a recruté parce que la demande a fortement augmenté." },
  { id: 1002, category: "Mots de liaison", group: "Cause", french: "car", german: "denn", expression: "Nous devons agir vite, car la concurrence est rude.", note: "Plus soutenu que « parce que » ; jamais en début de phrase." },
  { id: 1003, category: "Mots de liaison", group: "Cause", french: "puisque", german: "da ja (bekannter Grund)", expression: "Puisque le budget est limité, nous allons réduire les dépenses." },
  { id: 1004, category: "Mots de liaison", group: "Cause", french: "comme", german: "da (am Satzanfang)", expression: "Comme le client était mécontent, nous lui avons proposé une remise.", note: "Toujours en début de phrase." },
  { id: 1005, category: "Mots de liaison", group: "Cause", french: "étant donné que", german: "angesichts der Tatsache, dass", expression: "Étant donné que les ventes stagnent, il faut revoir la stratégie.", answers: ["étant donné que", "vu que"] },
  { id: 1006, category: "Mots de liaison", group: "Cause", french: "grâce à", german: "dank (+ Nomen, positiv)", expression: "Grâce à cette campagne, la marque a gagné en notoriété." },
  { id: 1007, category: "Mots de liaison", group: "Cause", french: "à cause de", german: "wegen (+ Nomen, negativ)", expression: "À cause de la crise, l'entreprise a dû licencier." },
  { id: 1008, category: "Mots de liaison", group: "Cause", french: "en raison de", german: "aufgrund (+ Nomen, formell)", expression: "En raison de la grève, la livraison est retardée." },
  { id: 1009, category: "Mots de liaison", group: "Cause", french: "en effet", german: "tatsächlich, nämlich (Begründung)", expression: "Le projet est rentable. En effet, les coûts ont baissé de 20 %." },

  // === CONSÉQUENCE ===
  { id: 1010, category: "Mots de liaison", group: "Conséquence", french: "donc", german: "also", expression: "La demande augmente, donc nous devons produire davantage." },
  { id: 1011, category: "Mots de liaison", group: "Conséquence", french: "par conséquent", german: "folglich", expression: "Les coûts ont augmenté ; par conséquent, les prix vont monter." },
  { id: 1012, category: "Mots de liaison", group: "Conséquence", french: "c'est pourquoi", german: "deshalb, aus diesem Grund", expression: "Le marché est saturé, c'est pourquoi nous visons l'export." },
  { id: 1013, category: "Mots de liaison", group: "Conséquence", french: "ainsi", german: "so, auf diese Weise", expression: "Nous avons automatisé la production ; ainsi, nous gagnons du temps." },
  { id: 1014, category: "Mots de liaison", group: "Conséquence", french: "si bien que", german: "sodass", expression: "Les ventes ont chuté, si bien que l'entreprise a dû emprunter.", note: "+ indicatif" },
  { id: 1015, category: "Mots de liaison", group: "Conséquence", french: "d'où", german: "daher (+ Nomen)", expression: "Les clients sont satisfaits, d'où une forte fidélisation." },
  { id: 1016, category: "Mots de liaison", group: "Conséquence", french: "de ce fait", german: "infolgedessen", expression: "L'usine a fermé ; de ce fait, 200 emplois ont été supprimés." },

  // === OPPOSITION ===
  { id: 1017, category: "Mots de liaison", group: "Opposition", french: "mais", german: "aber", expression: "Le produit est innovant, mais il reste trop cher." },
  { id: 1018, category: "Mots de liaison", group: "Opposition", french: "cependant", german: "jedoch", expression: "Les résultats sont bons. Cependant, la marge reste faible." },
  { id: 1019, category: "Mots de liaison", group: "Opposition", french: "pourtant", german: "dennoch (unerwartet)", expression: "Le salaire est élevé ; pourtant, peu de candidats postulent." },
  { id: 1020, category: "Mots de liaison", group: "Opposition", french: "toutefois", german: "allerdings", expression: "Nous acceptons votre offre ; toutefois, le délai doit être respecté." },
  { id: 1021, category: "Mots de liaison", group: "Opposition", french: "néanmoins", german: "nichtsdestotrotz", expression: "La crise a été difficile ; néanmoins, l'entreprise a survécu." },
  { id: 1022, category: "Mots de liaison", group: "Opposition", french: "en revanche", german: "hingegen, dagegen", expression: "Les ventes baissent en France ; en revanche, elles progressent en Asie.", answers: ["en revanche", "par contre"] },
  { id: 1023, category: "Mots de liaison", group: "Opposition", french: "alors que", german: "während (Gegensatz)", expression: "Le chiffre d'affaires augmente alors que les bénéfices diminuent." },
  { id: 1024, category: "Mots de liaison", group: "Opposition", french: "tandis que", german: "wohingegen", expression: "Le marketing veut investir, tandis que la direction veut économiser." },
  { id: 1025, category: "Mots de liaison", group: "Opposition", french: "au contraire", german: "im Gegenteil", expression: "La crise n'a pas affaibli l'entreprise ; au contraire, elle l'a renforcée." },
  { id: 1026, category: "Mots de liaison", group: "Opposition", french: "au lieu de", german: "anstatt (+ Infinitiv / Nomen)", expression: "Au lieu de licencier, l'entreprise a réduit le temps de travail." },

  // === CONCESSION ===
  { id: 1027, category: "Mots de liaison", group: "Concession", french: "bien que", german: "obwohl", expression: "Bien que le marché soit difficile, nous restons optimistes.", note: "+ subjonctif", answers: ["bien que", "quoique"] },
  { id: 1028, category: "Mots de liaison", group: "Concession", french: "malgré", german: "trotz (+ Nomen)", expression: "Malgré la concurrence, l'entreprise a augmenté ses parts de marché." },
  { id: 1029, category: "Mots de liaison", group: "Concession", french: "même si", german: "selbst wenn, auch wenn", expression: "Même si le projet coûte cher, il est indispensable.", note: "+ indicatif" },
  { id: 1030, category: "Mots de liaison", group: "Concession", french: "certes", german: "zwar, gewiss", expression: "Certes, l'investissement est important, mais il sera vite rentable.", note: "Souvent suivi de « mais »." },
  { id: 1031, category: "Mots de liaison", group: "Concession", french: "il est vrai que", german: "es stimmt zwar, dass", expression: "Il est vrai que le télétravail présente des risques, mais il motive les salariés." },
  { id: 1032, category: "Mots de liaison", group: "Concession", french: "quand même", german: "trotzdem (mündlich)", expression: "Le prix était élevé, mais nous l'avons acheté quand même." },

  // === ADDITION ===
  { id: 1033, category: "Mots de liaison", group: "Addition", french: "de plus", german: "außerdem", expression: "Ce poste est bien payé. De plus, il offre des perspectives d'évolution." },
  { id: 1034, category: "Mots de liaison", group: "Addition", french: "en outre", german: "überdies, zudem (formell)", expression: "En outre, l'entreprise propose une formation continue." },
  { id: 1035, category: "Mots de liaison", group: "Addition", french: "par ailleurs", german: "im Übrigen (neuer Aspekt)", expression: "Par ailleurs, nous envisageons d'ouvrir une filiale en Espagne." },
  { id: 1036, category: "Mots de liaison", group: "Addition", french: "non seulement… mais aussi", german: "nicht nur … sondern auch", expression: "Cette stratégie permet non seulement de réduire les coûts, mais aussi d'attirer de nouveaux clients.", answers: ["non seulement mais aussi", "non seulement mais encore"] },
  { id: 1037, category: "Mots de liaison", group: "Addition", french: "d'une part… d'autre part", german: "einerseits … andererseits", expression: "D'une part, le télétravail réduit les coûts ; d'autre part, il améliore la qualité de vie." },
  { id: 1038, category: "Mots de liaison", group: "Addition", french: "également", german: "ebenfalls, auch", expression: "Nous avons également renforcé notre service client." },
  { id: 1039, category: "Mots de liaison", group: "Addition", french: "d'ailleurs", german: "übrigens", expression: "Ce fournisseur est fiable ; d'ailleurs, nous travaillons avec lui depuis dix ans." },

  // === BUT ===
  { id: 1040, category: "Mots de liaison", group: "But", french: "pour que", german: "damit", expression: "Nous baissons les prix pour que nos produits soient plus accessibles.", note: "+ subjonctif" },
  { id: 1041, category: "Mots de liaison", group: "But", french: "afin que", german: "damit (formell)", expression: "Afin que le projet réussisse, chaque équipe doit coopérer.", note: "+ subjonctif" },
  { id: 1042, category: "Mots de liaison", group: "But", french: "afin de", german: "um … zu (formell)", expression: "Afin de réduire les coûts, l'entreprise a délocalisé sa production.", note: "+ infinitif" },
  { id: 1043, category: "Mots de liaison", group: "But", french: "dans le but de", german: "mit dem Ziel, … zu", expression: "L'entreprise a lancé un sondage dans le but de mieux connaître ses clients.", note: "+ infinitif" },

  // === CONDITION ===
  { id: 1044, category: "Mots de liaison", group: "Condition", french: "à condition que", german: "unter der Bedingung, dass", expression: "Nous signerons le contrat à condition que le prix soit revu.", note: "+ subjonctif" },
  { id: 1045, category: "Mots de liaison", group: "Condition", french: "au cas où", german: "für den Fall, dass", expression: "Au cas où la livraison serait retardée, merci de nous prévenir.", note: "+ conditionnel" },
  { id: 1046, category: "Mots de liaison", group: "Condition", french: "à moins que", german: "es sei denn", expression: "Le projet sera lancé en mars, à moins que le budget ne soit refusé.", note: "+ subjonctif (souvent avec « ne » explétif)" },
  { id: 1047, category: "Mots de liaison", group: "Condition", french: "sinon", german: "sonst, andernfalls", expression: "Il faut innover, sinon nous perdrons des clients." },
  { id: 1048, category: "Mots de liaison", group: "Condition", french: "en cas de", german: "im Fall von (+ Nomen)", expression: "En cas de problème, contactez le service client." },

  // === TEMPS / STRUCTURE ===
  { id: 1049, category: "Mots de liaison", group: "Structure", french: "tout d'abord", german: "zunächst, zuerst", expression: "Tout d'abord, je vais présenter les résultats de l'année.", answers: ["tout d'abord", "d'abord", "premièrement"] },
  { id: 1050, category: "Mots de liaison", group: "Structure", french: "ensuite", german: "dann, anschließend", expression: "Ensuite, nous analyserons les causes de la baisse.", answers: ["ensuite", "puis"] },
  { id: 1051, category: "Mots de liaison", group: "Structure", french: "enfin", german: "schließlich (letzter Punkt)", expression: "Enfin, je proposerai quelques solutions.", answers: ["enfin", "finalement"] },
  { id: 1052, category: "Mots de liaison", group: "Temps", french: "lorsque", german: "wenn, als (formell)", expression: "Lorsque le contrat sera signé, nous commencerons la production." },
  { id: 1053, category: "Mots de liaison", group: "Temps", french: "dès que", german: "sobald", expression: "Dès que nous recevrons votre paiement, nous expédierons la commande." },
  { id: 1054, category: "Mots de liaison", group: "Temps", french: "pendant que", german: "während (zeitlich)", expression: "Pendant que l'équipe marketing prépare la campagne, les commerciaux démarchent les clients." },
  { id: 1055, category: "Mots de liaison", group: "Temps", french: "avant que", german: "bevor", expression: "Il faut agir avant que la situation ne s'aggrave.", note: "+ subjonctif" },
  { id: 1056, category: "Mots de liaison", group: "Temps", french: "après que", german: "nachdem", expression: "Après que la direction a validé le projet, l'équipe s'est mise au travail.", note: "+ indicatif (pas de subjonctif !)" },
  { id: 1057, category: "Mots de liaison", group: "Temps", french: "depuis que", german: "seitdem", expression: "Depuis que l'entreprise est cotée en Bourse, sa valeur a doublé." },
  { id: 1058, category: "Mots de liaison", group: "Temps", french: "jusqu'à ce que", german: "bis (Konjunktion)", expression: "Nous continuerons les négociations jusqu'à ce qu'un accord soit trouvé.", note: "+ subjonctif" },

  // === ILLUSTRATION / REFORMULATION ===
  { id: 1059, category: "Mots de liaison", group: "Illustration", french: "par exemple", german: "zum Beispiel", expression: "Certains secteurs, par exemple l'automobile, souffrent de la crise." },
  { id: 1060, category: "Mots de liaison", group: "Illustration", french: "notamment", german: "insbesondere, unter anderem", expression: "Nous exportons dans plusieurs pays, notamment en Allemagne." },
  { id: 1061, category: "Mots de liaison", group: "Illustration", french: "c'est-à-dire", german: "das heißt", expression: "Le chiffre d'affaires a stagné, c'est-à-dire qu'il n'a pas progressé.", answers: ["c'est-à-dire", "c'est à dire"] },
  { id: 1062, category: "Mots de liaison", group: "Illustration", french: "autrement dit", german: "mit anderen Worten", expression: "Les coûts dépassent les recettes ; autrement dit, l'entreprise perd de l'argent." },
  { id: 1063, category: "Mots de liaison", group: "Illustration", french: "en ce qui concerne", german: "was … betrifft, bezüglich", expression: "En ce qui concerne le salaire, il est négociable." },
  { id: 1064, category: "Mots de liaison", group: "Illustration", french: "quant à", german: "was … angeht (Kontrast)", expression: "Les ventes ont progressé. Quant aux bénéfices, ils restent stables." },
  { id: 1065, category: "Mots de liaison", group: "Illustration", french: "selon", german: "laut, gemäß", expression: "Selon une étude récente, 60 % des salariés souhaitent télétravailler.", answers: ["selon", "d'après"] },

  // === OPINION / CONCLUSION ===
  { id: 1066, category: "Mots de liaison", group: "Conclusion", french: "à mon avis", german: "meiner Meinung nach", expression: "À mon avis, cette réforme est nécessaire.", answers: ["à mon avis", "selon moi", "d'après moi"] },
  { id: 1067, category: "Mots de liaison", group: "Conclusion", french: "en conclusion", german: "abschließend", expression: "En conclusion, le télétravail présente plus d'avantages que d'inconvénients.", answers: ["en conclusion", "pour conclure"] },
  { id: 1068, category: "Mots de liaison", group: "Conclusion", french: "en somme", german: "alles in allem", expression: "En somme, l'année a été positive.", answers: ["en somme", "somme toute", "dans l'ensemble"] },
  { id: 1069, category: "Mots de liaison", group: "Conclusion", french: "bref", german: "kurz gesagt, kurzum", expression: "Bref, ce projet est une réussite.", answers: ["bref", "en bref"] },
];
