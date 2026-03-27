const LISTENING_DATA = {

  // =========================================================================
  // DICTATION — hear a sentence, type it exactly
  // =========================================================================
  dictation: [
    // ENTREPRISE
    { id: "dict-001", text: "L'entreprise a été fondée en 2015.", hint: "Création d'entreprise", difficulty: 1 },
    { id: "dict-002", text: "Le chiffre d'affaires a augmenté de 15 % cette année.", hint: "Résultats financiers", difficulty: 1 },
    { id: "dict-003", text: "Nous devons réduire les coûts de production.", hint: "Gestion", difficulty: 1 },
    { id: "dict-004", text: "Le directeur général a présenté la nouvelle stratégie.", hint: "Management", difficulty: 1 },
    { id: "dict-005", text: "Les actionnaires ont approuvé le budget prévisionnel.", hint: "Finance", difficulty: 2 },
    { id: "dict-006", text: "Il faut que nous investissions dans la recherche et le développement.", hint: "Subjonctif + entreprise", difficulty: 2 },
    { id: "dict-007", text: "La société a déposé le bilan l'année dernière.", hint: "Faillite", difficulty: 2 },
    { id: "dict-008", text: "Les partenaires commerciaux ont signé un accord de distribution.", hint: "Commerce", difficulty: 2 },
    { id: "dict-009", text: "Si nous avions investi plus tôt, nous aurions doublé nos bénéfices.", hint: "Conditionnel passé", difficulty: 3 },
    { id: "dict-010", text: "L'assemblée générale se tiendra le quinze mars prochain.", hint: "Futur", difficulty: 2 },

    // RESSOURCES HUMAINES
    { id: "dict-011", text: "Le candidat a envoyé sa lettre de motivation.", hint: "Recrutement", difficulty: 1 },
    { id: "dict-012", text: "L'entretien d'embauche aura lieu mardi à quatorze heures.", hint: "Rendez-vous", difficulty: 1 },
    { id: "dict-013", text: "Elle a été promue au poste de directrice des ressources humaines.", hint: "Carrière", difficulty: 2 },
    { id: "dict-014", text: "Les employés bénéficient d'une formation continue.", hint: "Formation", difficulty: 2 },
    { id: "dict-015", text: "Le comité d'entreprise a négocié une augmentation de salaire.", hint: "Négociation", difficulty: 2 },
    { id: "dict-016", text: "Bien que le poste soit exigeant, les conditions de travail sont excellentes.", hint: "Subjonctif + RH", difficulty: 3 },
    { id: "dict-017", text: "Il est essentiel que chaque salarié reçoive une évaluation annuelle.", hint: "Subjonctif", difficulty: 3 },
    { id: "dict-018", text: "Le taux de rotation du personnel a diminué grâce au télétravail.", hint: "RH + statistiques", difficulty: 2 },
    { id: "dict-019", text: "Les syndicats ont organisé une grève pour protester contre les licenciements.", hint: "Relations sociales", difficulty: 3 },
    { id: "dict-020", text: "Le contrat à durée indéterminée offre plus de sécurité que le contrat temporaire.", hint: "Types de contrats", difficulty: 2 },

    // MARKETING
    { id: "dict-021", text: "La campagne publicitaire a touché plus de deux millions de personnes.", hint: "Publicité", difficulty: 1 },
    { id: "dict-022", text: "Le lancement du nouveau produit est prévu pour septembre.", hint: "Produit", difficulty: 1 },
    { id: "dict-023", text: "Notre part de marché a progressé de trois points.", hint: "Concurrence", difficulty: 2 },
    { id: "dict-024", text: "Les consommateurs sont de plus en plus sensibles à la qualité des produits.", hint: "Tendances", difficulty: 2 },
    { id: "dict-025", text: "En analysant les données, nous avons identifié un nouveau segment de clientèle.", hint: "Gérondif + marketing", difficulty: 3 },
    { id: "dict-026", text: "Le référencement naturel est indispensable pour la visibilité en ligne.", hint: "Marketing digital", difficulty: 2 },
    { id: "dict-027", text: "Il faudrait que nous repensions notre stratégie de communication.", hint: "Conditionnel + subjonctif", difficulty: 3 },
    { id: "dict-028", text: "La marque a réussi à fidéliser sa clientèle grâce aux réseaux sociaux.", hint: "Fidélisation", difficulty: 2 },
    { id: "dict-029", text: "Les études de marché montrent une forte demande pour les produits biologiques.", hint: "Études de marché", difficulty: 2 },
    { id: "dict-030", text: "Si l'entreprise avait mieux ciblé son audience, elle n'aurait pas perdu autant de clients.", hint: "Conditionnel passé", difficulty: 3 },

    // GÉNÉRAL B2
    { id: "dict-031", text: "La mondialisation a profondément transformé les échanges commerciaux.", hint: "Économie", difficulty: 2 },
    { id: "dict-032", text: "Le développement durable est devenu une priorité pour les entreprises.", hint: "RSE", difficulty: 1 },
    { id: "dict-033", text: "Les nouvelles technologies bouleversent le monde du travail.", hint: "Technologie", difficulty: 1 },
    { id: "dict-034", text: "Il est important que les jeunes entrepreneurs soient accompagnés dans leurs démarches.", hint: "Subjonctif", difficulty: 3 },
    { id: "dict-035", text: "Après avoir obtenu son diplôme, elle a créé sa propre entreprise.", hint: "Infinitif passé", difficulty: 2 },
    { id: "dict-036", text: "Quand les résultats seront publiés, nous pourrons ajuster notre stratégie.", hint: "Futur", difficulty: 2 },
    { id: "dict-037", text: "L'économie circulaire vise à réduire le gaspillage des ressources naturelles.", hint: "Environnement", difficulty: 2 },
    { id: "dict-038", text: "En travaillant à l'étranger, on développe son ouverture d'esprit.", hint: "Gérondif", difficulty: 2 },
    { id: "dict-039", text: "Personne n'a répondu à l'annonce que nous avons publiée la semaine dernière.", hint: "Négation + pronom relatif", difficulty: 3 },
    { id: "dict-040", text: "C'est l'entreprise dont je vous ai parlé lors de notre dernière réunion.", hint: "Pronom relatif dont", difficulty: 3 },

    // FINANCE & COMMERCE
    { id: "dict-041", text: "Le taux d'intérêt a été revu à la hausse par la banque centrale.", hint: "Finance", difficulty: 1 },
    { id: "dict-042", text: "Les exportations ont dépassé les importations pour la première fois depuis cinq ans.", hint: "Commerce international", difficulty: 2 },
    { id: "dict-043", text: "Bien que les résultats soient encourageants, la direction reste prudente.", hint: "Subjonctif + finance", difficulty: 3 },
    { id: "dict-044", text: "Le service comptable doit clôturer les comptes avant la fin du mois.", hint: "Comptabilité", difficulty: 1 },
    { id: "dict-045", text: "La fusion entre les deux groupes a été approuvée par les autorités de la concurrence.", hint: "Fusions-acquisitions", difficulty: 2 },

    // LOGISTIQUE & PRODUCTION
    { id: "dict-046", text: "Les délais de livraison ont été rallongés en raison d'une pénurie de composants.", hint: "Logistique", difficulty: 2 },
    { id: "dict-047", text: "Si nous avions anticipé cette rupture de stock, nous aurions pu satisfaire tous nos clients.", hint: "Conditionnel passé + logistique", difficulty: 3 },
    { id: "dict-048", text: "L'usine fonctionne désormais vingt-quatre heures sur vingt-quatre.", hint: "Production", difficulty: 1 },

    // DROIT & RÉGLEMENTATION
    { id: "dict-049", text: "Il est impératif que tous les employés respectent la nouvelle réglementation.", hint: "Subjonctif + droit", difficulty: 3 },
    { id: "dict-050", text: "Le règlement intérieur interdit l'utilisation des téléphones personnels pendant les réunions.", hint: "Règlement", difficulty: 2 },

    // COMMUNICATION & NÉGOCIATION
    { id: "dict-051", text: "Nous avons conclu un accord après plusieurs semaines de négociations.", hint: "Négociation", difficulty: 1 },
    { id: "dict-052", text: "En préparant soigneusement sa présentation, il a réussi à convaincre les investisseurs.", hint: "Gérondif + communication", difficulty: 3 },
    { id: "dict-053", text: "La conférence à laquelle nous avons participé portait sur l'intelligence artificielle.", hint: "Pronom relatif composé", difficulty: 3 },
    { id: "dict-054", text: "Le porte-parole de l'entreprise a démenti les rumeurs de délocalisation.", hint: "Communication de crise", difficulty: 2 },
    { id: "dict-055", text: "Les clients auxquels nous avons envoyé le questionnaire n'ont pas encore répondu.", hint: "Pronom relatif composé + négation", difficulty: 3 },
  ],

  // =========================================================================
  // VOCABULARY LISTENING — hear French, pick the German translation
  // =========================================================================
  vocabListening: [
    { id: "vl-001", french: "le chiffre d'affaires", options: ["der Umsatz", "der Gewinn", "die Kosten", "die Rechnung"], correct: 0 },
    { id: "vl-002", french: "une levée de fonds", options: ["eine Kündigung", "eine Kapitalbeschaffung", "eine Beförderung", "eine Bilanz"], correct: 1 },
    { id: "vl-003", french: "l'entretien d'embauche", options: ["die Weiterbildung", "die Gehaltserhöhung", "das Vorstellungsgespräch", "der Arbeitsvertrag"], correct: 2 },
    { id: "vl-004", french: "le siège social", options: ["der Firmensitz", "das Büro", "die Filiale", "das Lager"], correct: 0 },
    { id: "vl-005", french: "la concurrence", options: ["die Zusammenarbeit", "die Konkurrenz", "der Markt", "die Nachfrage"], correct: 1 },
    { id: "vl-006", french: "un fournisseur", options: ["ein Kunde", "ein Mitarbeiter", "ein Lieferant", "ein Berater"], correct: 2 },
    { id: "vl-007", french: "le bénéfice", options: ["der Verlust", "der Umsatz", "der Gewinn", "die Steuer"], correct: 2 },
    { id: "vl-008", french: "une filiale", options: ["eine Tochtergesellschaft", "eine Zentrale", "eine Abteilung", "eine Fabrik"], correct: 0 },
    { id: "vl-009", french: "la gestion", options: ["die Verwaltung / das Management", "die Produktion", "die Werbung", "der Vertrieb"], correct: 0 },
    { id: "vl-010", french: "le recrutement", options: ["die Entlassung", "die Beförderung", "die Einstellung", "die Ausbildung"], correct: 2 },
    { id: "vl-011", french: "la comptabilité", options: ["die Buchhaltung", "die Logistik", "das Marketing", "die Informatik"], correct: 0 },
    { id: "vl-012", french: "un actionnaire", options: ["ein Gläubiger", "ein Aktionär", "ein Geschäftsführer", "ein Angestellter"], correct: 1 },
    { id: "vl-013", french: "les charges sociales", options: ["die Steuern", "die Sozialabgaben", "die Gehälter", "die Prämien"], correct: 1 },
    { id: "vl-014", french: "la rentabilité", options: ["die Liquidität", "die Rentabilität", "die Solvenz", "die Inflation"], correct: 1 },
    { id: "vl-015", french: "un stage", options: ["ein Praktikum", "ein Kurs", "eine Reise", "eine Prüfung"], correct: 0 },
    { id: "vl-016", french: "le droit du travail", options: ["das Handelsrecht", "das Arbeitsrecht", "das Steuerrecht", "das Vertragsrecht"], correct: 1 },
    { id: "vl-017", french: "l'empreinte carbone", options: ["der Stromverbrauch", "der CO₂-Fußabdruck", "die Recyclingquote", "der Wasserbedarf"], correct: 1 },
    { id: "vl-018", french: "une part de marché", options: ["ein Marktanteil", "ein Marktplatz", "eine Marktstudie", "eine Marktlücke"], correct: 0 },
    { id: "vl-019", french: "la sous-traitance", options: ["die Auslagerung", "die Übernahme", "die Fusion", "die Partnerschaft"], correct: 0 },
    { id: "vl-020", french: "le bilan comptable", options: ["die Gewinn-und-Verlust-Rechnung", "die Bilanz", "das Budget", "die Prognose"], correct: 1 },
    { id: "vl-021", french: "une réunion", options: ["eine Besprechung / ein Meeting", "eine Pause", "eine Feier", "eine Reise"], correct: 0 },
    { id: "vl-022", french: "la chaîne d'approvisionnement", options: ["die Produktionskette", "die Lieferkette", "die Wertschöpfungskette", "die Befehlskette"], correct: 1 },
    { id: "vl-023", french: "le télétravail", options: ["die Teilzeitarbeit", "die Schichtarbeit", "das Homeoffice", "die Überstunden"], correct: 2 },
    { id: "vl-024", french: "un licenciement", options: ["eine Einstellung", "eine Kündigung", "eine Versetzung", "eine Beförderung"], correct: 1 },
    { id: "vl-025", french: "la valeur ajoutée", options: ["der Mehrwert", "der Grundwert", "der Marktwert", "der Nennwert"], correct: 0 },
    { id: "vl-026", french: "un délai", options: ["eine Frist", "ein Rabatt", "ein Angebot", "ein Vertrag"], correct: 0 },
    { id: "vl-027", french: "la croissance", options: ["die Senkung", "die Krise", "das Wachstum", "die Stagnation"], correct: 2 },
    { id: "vl-028", french: "un devis", options: ["eine Rechnung", "ein Kostenvoranschlag", "eine Quittung", "ein Gutschein"], correct: 1 },
    { id: "vl-029", french: "la trésorerie", options: ["die Buchhaltung", "die Liquidität / Finanzmittel", "die Bilanz", "die Steuer"], correct: 1 },
    { id: "vl-030", french: "un avenant", options: ["ein Nachtrag / eine Vertragsänderung", "ein Kündigungsschreiben", "ein Protokoll", "ein Angebot"], correct: 0 },
    { id: "vl-031", french: "le chômage", options: ["die Rente", "der Streik", "die Arbeitslosigkeit", "die Überstunden"], correct: 2 },
    { id: "vl-032", french: "une prime", options: ["ein Gehalt", "eine Prämie / ein Bonus", "eine Strafe", "ein Vorschuss"], correct: 1 },
    { id: "vl-033", french: "la fiscalité", options: ["die Buchhaltung", "die Finanzierung", "das Steuerwesen", "die Versicherung"], correct: 2 },
    { id: "vl-034", french: "un appel d'offres", options: ["eine Bewerbung", "eine Ausschreibung", "eine Bestellung", "eine Anfrage"], correct: 1 },
    { id: "vl-035", french: "le brevet", options: ["das Patent", "die Marke", "das Urheberrecht", "die Lizenz"], correct: 0 },
  ],

  // =========================================================================
  // ORAL COMPREHENSION — listen to a passage, answer questions
  // =========================================================================
  comprehension: [
    {
      id: "comp-001",
      title: "Présentation d'entreprise",
      text: "Bonjour à tous. Je suis Marie Dupont, directrice commerciale chez TechnoVert. Notre entreprise, fondée en 2018, est spécialisée dans les solutions numériques pour le développement durable. Nous comptons aujourd'hui cinquante-deux employés et notre chiffre d'affaires a atteint huit millions d'euros l'année dernière. Notre objectif pour cette année est de nous développer sur le marché allemand.",
      speed: 0.9,
      questions: [
        { question: "Quel est le poste de Marie Dupont ?", type: "mc", options: ["Directrice générale", "Directrice commerciale", "Directrice financière", "Directrice technique"], correct: 1 },
        { question: "En quelle année l'entreprise a-t-elle été fondée ?", type: "mc", options: ["2015", "2016", "2018", "2020"], correct: 2 },
        { question: "Combien d'employés compte l'entreprise ?", type: "fill", answer: "52" },
        { question: "Quel est l'objectif de l'entreprise pour cette année ?", type: "mc", options: ["Recruter 100 employés", "Se développer en Allemagne", "Lancer un nouveau produit", "Réduire les coûts"], correct: 1 },
      ]
    },
    {
      id: "comp-002",
      title: "Entretien d'embauche",
      text: "Bonjour, je m'appelle Thomas Martin. J'ai vingt-huit ans et je suis diplômé de l'école de commerce de Lyon. Après mes études, j'ai travaillé pendant trois ans chez un cabinet de conseil en stratégie. J'ai ensuite rejoint une start-up dans le domaine de la fintech, où j'étais responsable du développement commercial. Je souhaite maintenant intégrer votre équipe parce que votre entreprise est un leader dans le secteur du commerce international.",
      speed: 0.9,
      questions: [
        { question: "Quel âge a Thomas ?", type: "fill", answer: "28" },
        { question: "Où a-t-il fait ses études ?", type: "mc", options: ["Paris", "Marseille", "Lyon", "Bordeaux"], correct: 2 },
        { question: "Combien de temps a-t-il travaillé en cabinet de conseil ?", type: "mc", options: ["Un an", "Deux ans", "Trois ans", "Cinq ans"], correct: 2 },
        { question: "Dans quel domaine était la start-up ?", type: "mc", options: ["Intelligence artificielle", "E-commerce", "Fintech", "Marketing digital"], correct: 2 },
      ]
    },
    {
      id: "comp-003",
      title: "Réunion d'équipe",
      text: "Bien, commençons la réunion. Le premier point à l'ordre du jour concerne les résultats du troisième trimestre. Les ventes ont augmenté de douze pour cent par rapport à l'année dernière. C'est une bonne nouvelle. Cependant, nos coûts de production ont également augmenté, principalement à cause de la hausse des prix des matières premières. Pour le quatrième trimestre, nous devons absolument réduire nos dépenses de marketing de quinze pour cent. Sophie, je vous charge de préparer un nouveau plan de communication.",
      speed: 0.85,
      questions: [
        { question: "De combien les ventes ont-elles augmenté ?", type: "mc", options: ["8 %", "10 %", "12 %", "15 %"], correct: 2 },
        { question: "Pourquoi les coûts de production ont-ils augmenté ?", type: "mc", options: ["À cause des salaires", "À cause des matières premières", "À cause du transport", "À cause de la technologie"], correct: 1 },
        { question: "De combien faut-il réduire les dépenses marketing ?", type: "fill", answer: "15" },
        { question: "Qui doit préparer le nouveau plan de communication ?", type: "fill", answer: "Sophie" },
      ]
    },
    {
      id: "comp-004",
      title: "Message téléphonique",
      text: "Bonjour, c'est Claire Moreau de la société Eurocom. Je vous appelle au sujet de notre commande numéro quatre-vingt-sept cinquante-trois. Nous avons reçu la livraison ce matin, mais il manque vingt cartons sur les cent cinquante commandés. De plus, trois cartons étaient endommagés. Pourriez-vous me rappeler dès que possible au zéro un quarante-trois vingt-deux quinze trente-six ? C'est assez urgent car nous avons besoin de la marchandise complète avant vendredi. Merci.",
      speed: 0.85,
      questions: [
        { question: "Quel est le numéro de la commande ?", type: "fill", answer: "8753" },
        { question: "Combien de cartons manquent ?", type: "mc", options: ["10", "15", "20", "30"], correct: 2 },
        { question: "Combien de cartons étaient endommagés ?", type: "fill", answer: "3" },
        { question: "Avant quel jour la marchandise est-elle nécessaire ?", type: "mc", options: ["Mercredi", "Jeudi", "Vendredi", "Lundi"], correct: 2 },
      ]
    },
    {
      id: "comp-005",
      title: "Publicité radio",
      text: "Vous rêvez de créer votre entreprise ? L'incubateur StartLab vous accompagne dans toutes les étapes de votre projet. Depuis deux mille seize, nous avons aidé plus de trois cents entrepreneurs à lancer leur activité. Nos services comprennent le mentorat personnalisé, l'aide au financement et la mise en réseau avec des investisseurs. Nos locaux sont situés au cœur de Paris, dans le onzième arrondissement. Inscrivez-vous sur notre site internet startlab point fr pour une consultation gratuite.",
      speed: 0.9,
      questions: [
        { question: "Depuis quand StartLab existe-t-il ?", type: "mc", options: ["2014", "2015", "2016", "2018"], correct: 2 },
        { question: "Combien d'entrepreneurs ont été accompagnés ?", type: "mc", options: ["100", "200", "300", "500"], correct: 2 },
        { question: "Dans quel arrondissement se trouvent les locaux ?", type: "fill", answer: "11" },
        { question: "Quel service est offert gratuitement ?", type: "mc", options: ["Le mentorat", "Le financement", "Une consultation", "Un bureau"], correct: 2 },
      ]
    },
    {
      id: "comp-006",
      title: "Formation interne",
      text: "Chers collaborateurs, je vous informe qu'une formation sur la gestion du temps sera organisée le jeudi dix avril dans la salle de conférence B. Cette formation, animée par un consultant externe, Monsieur Laurent Petit, durera trois heures, de neuf heures à midi. Elle est obligatoire pour tous les chefs de projet et fortement recommandée pour les autres membres de l'équipe. Les inscriptions se font auprès du service des ressources humaines avant le trente et un mars. Le nombre de places est limité à vingt-cinq participants. Un support de cours sera distribué le jour même.",
      speed: 0.9,
      questions: [
        { question: "Quel est le thème de la formation ?", type: "mc", options: ["La gestion de projet", "La gestion du temps", "La communication", "Le management d'équipe"], correct: 1 },
        { question: "Combien de temps dure la formation ?", type: "fill", answer: "3" },
        { question: "Pour qui la formation est-elle obligatoire ?", type: "mc", options: ["Tous les employés", "Les chefs de projet", "Les stagiaires", "Les directeurs"], correct: 1 },
        { question: "Combien de places sont disponibles ?", type: "fill", answer: "25" },
      ]
    },
    {
      id: "comp-007",
      title: "Bilan trimestriel",
      text: "Mesdames et messieurs, je vous présente le bilan du premier trimestre. Notre chiffre d'affaires s'élève à quatre millions deux cent mille euros, ce qui représente une hausse de huit pour cent par rapport au trimestre précédent. Cette croissance s'explique principalement par le succès de notre nouvelle gamme de produits lancée en janvier. En revanche, nos charges d'exploitation ont augmenté de cinq pour cent, notamment en raison de l'embauche de sept nouveaux collaborateurs. Pour le prochain trimestre, nous prévoyons d'ouvrir deux nouvelles agences, l'une à Marseille et l'autre à Strasbourg. Le budget prévisionnel sera validé lors du prochain conseil d'administration, le vingt mai.",
      speed: 0.85,
      questions: [
        { question: "Quel est le chiffre d'affaires du premier trimestre ?", type: "mc", options: ["3 800 000 €", "4 200 000 €", "4 500 000 €", "5 000 000 €"], correct: 1 },
        { question: "Combien de nouveaux collaborateurs ont été embauchés ?", type: "fill", answer: "7" },
        { question: "Dans quelle ville la deuxième agence sera-t-elle ouverte ?", type: "mc", options: ["Lyon", "Toulouse", "Strasbourg", "Bordeaux"], correct: 2 },
        { question: "Quand le budget prévisionnel sera-t-il validé ?", type: "mc", options: ["Le 15 mai", "Le 20 mai", "Le 25 mai", "Le 30 mai"], correct: 1 },
      ]
    },
  ]
};
