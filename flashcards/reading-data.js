const READING_DATA = [

  // =========================================================================
  // TEXT 1 — Au fait, c'est quoi une start-up ? (PDF p.4)
  // =========================================================================
  {
    id: "read-001",
    title: "Au fait, c'est quoi une start-up ?",
    source: "Capital.fr — Ingrid de Chevigny",
    theme: "Création d'entreprise",
    wordCount: 430,
    text: `Les start-up déchaînent les passions. Et pour cause, on les associe souvent à la multitude de réussites dont la Silicon Valley a le secret. Mais les géants Google ou Facebook, sont-ils toujours des start-up ? Et comment les différencier des autres entreprises ?

Traduit littéralement de l'anglais, le terme signifie « société qui démarre ». La commission spécialisée de terminologie et de néologie en matière économique et financière a traduit ce terme par « jeune pousse ». Et pourtant, sur toutes les entreprises qui se lancent, seule une petite fraction rentre dans cette catégorie. Par exemple, on n'aurait pas idée de qualifier de start-up la nouvelle boulangerie du coin.

Pour Patrick Fridenson, directeur d'études à l'Ecole des hautes études en sciences sociales (Ehess), ce n'est ni l'âge, ni la taille, ni le secteur d'activité, qui font d'une entreprise une start-up, mais les trois critères suivants : 1) la perspective d'une forte croissance, 2) l'usage d'une technologie nouvelle, et 3) le besoin d'un financement massif, par des levées de fonds.

La start-up est une entreprise pionnière. « Elle est liée à une notion d'exploration », commente Fridenson, « et développe une activité sur un marché nouveau, dont le risque est très difficile à évaluer ». Conséquence : au terme de cette phase de recherche, la start-up cesse d'être start-up. « Ce n'est finalement qu'un état temporaire de l'entreprise », explique Fridenson. Soit parce que l'activité échoue et que la start-up disparaît, soit parce qu'elle réussit, et dans ce cas, elle est absorbée par un grand groupe, ou elle devient elle-même une entreprise avec un cadre traditionnel et un modèle économique établi.

« Une PME n'est pas forcément une start-up, et une start-up ne reste pas longtemps une PME, si elle réussit », résume finalement Hervé Lebret, enseignant-chercheur à l'Ecole Polytechnique de Lausanne et auteur de « Start-up : the book ».

C'est pour cette raison que Google, Apple, ou Free ne sont plus des start-up. Chez Google, par exemple, la transition a été marquée par l'arrivée d'Éric Schmidt comme P-DG en 2001, note Fridenson : « il a normalisé l'entreprise, en établissant des cadres clairs, notamment l'organigramme ». À l'inverse, Uber ou Airbnb peuvent encore prétendre à cette appellation, « ces entreprises sont déjà des géants, mais leur modèle économique n'est pas encore assuré. »

Mais les grands groupes sont eux aussi nombreux à revendiquer un « esprit start-up ». C'est-à-dire avoir un mode de fonctionnement qui stimule l'innovation, renforce l'esprit d'équipe et rend plus réactif. Sur ce point, Google en est un bon exemple, avec sa fameuse politique des 20% du temps de travail consacré à un projet personnel.`,
    vocab: [
      { fr: "une jeune pousse", de: "ein Start-up (frz. Übersetzung)" },
      { fr: "une levée de fonds", de: "eine Kapitalbeschaffung" },
      { fr: "un marché nouveau", de: "ein neuer Markt" },
      { fr: "échouer", de: "scheitern" },
      { fr: "être absorbé(e) par", de: "aufgekauft werden von" },
      { fr: "un modèle économique", de: "ein Geschäftsmodell" },
      { fr: "une PME", de: "ein KMU (Klein- und Mittelunternehmen)" },
      { fr: "l'organigramme (m.)", de: "das Organigramm" },
      { fr: "revendiquer", de: "beanspruchen / einfordern" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Selon Patrick Fridenson, quels sont les trois critères qui définissent une start-up ?",
        options: [
          "L'âge, la taille et le secteur d'activité",
          "Forte croissance, technologie nouvelle, financement massif",
          "Innovation, équipe jeune, siège à la Silicon Valley",
          "Chiffre d'affaires élevé, rentabilité, internationalisation"
        ],
        correctIndex: 1,
        explanation: "Fridenson cite 3 critères : 1) perspective de forte croissance, 2) usage d'une technologie nouvelle, 3) besoin d'un financement massif par des levées de fonds."
      },
      {
        type: "mc",
        question: "Pourquoi Google n'est-elle plus considérée comme une start-up ?",
        options: [
          "Parce qu'elle a déménagé de la Silicon Valley",
          "Parce qu'elle a été absorbée par un grand groupe",
          "Parce qu'elle a été normalisée avec un cadre traditionnel",
          "Parce qu'elle n'utilise plus de technologie nouvelle"
        ],
        correctIndex: 2,
        explanation: "L'arrivée d'Éric Schmidt comme P-DG a normalisé l'entreprise avec des « cadres clairs, notamment l'organigramme »."
      },
      {
        type: "truefalse",
        statement: "Toute nouvelle entreprise peut être qualifiée de start-up.",
        correct: "false",
        explanation: "Le texte dit que « seule une petite fraction rentre dans cette catégorie » — ex. : une boulangerie n'est pas une start-up."
      },
      {
        type: "truefalse",
        statement: "Être une start-up est un état permanent de l'entreprise.",
        correct: "false",
        explanation: "Fridenson explique que « ce n'est finalement qu'un état temporaire de l'entreprise »."
      },
      {
        type: "fill",
        question: "La commission a traduit le terme start-up par « jeune ___ ».",
        answer: "pousse",
        explanation: "La traduction officielle française de start-up est « jeune pousse » (ein junges Unternehmen)."
      },
      {
        type: "open",
        question: "Que devient une start-up à la fin de sa phase de recherche selon Fridenson ?",
        modelAnswer: "Soit l'activité échoue et la start-up disparaît, soit elle réussit et dans ce cas elle est absorbée par un grand groupe ou elle devient elle-même une entreprise avec un cadre traditionnel et un modèle économique établi."
      }
    ]
  },

  // =========================================================================
  // TEXT 2 — Les flops du marketing (PDF p.34-35)
  // =========================================================================
  {
    id: "read-002",
    title: "Les flops du marketing",
    source: "Influencia.net, mai 2015",
    theme: "Marketing",
    wordCount: 480,
    text: `On parle peu d'échecs. Et pourtant, plus de la moitié des innovations en grande consommation finissent aux oubliettes. Produits arrivés trop tôt (Le Betamax de Sony, le Lisa d'Apple…), diversifications hasardeuses (Parfums Bic…), changements de formules à moindre valeur ajoutée (New Coke, Crystal Pepsi…).

Coca-Cola : Séduire et fidéliser le consommateur ne suffit pas, il faut lui éviter tout changement brutal. Aveuglé par la bataille qu'il livrait à Pepsi et trop occupé à conquérir les parts de marché de son concurrent, Coca-Cola a bien failli perdre ses clients fidèles – 300 millions de bouteilles sont bues quotidiennement dans 155 pays. En 1985, le géant du cola annonce l'arrivée du New Coke, une formule modifiée de l'ancien Coca, désormais supprimé. Catastrophe : 60'000 appels et lettres d'insultes, des manifestations dans les rues d'Atlanta et de Chicago, l'apparition d'un marché noir et surtout la chute des ventes. Trois mois après, le bon vieux Coca réintègre les magasins. « L'erreur commise n'est pas d'avoir modifié la formule mythique, explique Jean-Noël Kapferer, mais de ne pas avoir écouté les consommateurs, qui voulaient pouvoir choisir entre les deux produits. »

Bic : En lançant son parfum, Bic a commis un autre péché : commercialiser un produit en totale contradiction avec son image. Après le succès des stylos, rasoirs et briquets jetables, Bic lance le parfum jetable à 20 francs français (environ 3 €). En 1992, après trois ans de tentatives (changement de distributeur, nouvelles campagnes de publicité), l'aventure s'arrête. « La marque Bic, traditionnellement axée sur une technologie à la portée de tous, pouvait difficilement incarner l'image du luxe », estime Jacques Séguéla.

Essensis de Danone : Un yaourt comme produit de beauté ! Censé « nourrir la peau de l'intérieur » au packaging rose vif, il a envahi les linéaires en janvier 2007. Un lancement d'importance pour Danone sur ce marché de niche précurseur de la « cosmétofood » venue d'Asie. Et un échec à la hauteur des ambitions : problèmes de nom, de packaging, de cible, de goût, de « posologie ». Échec qui n'a pas empêché le concurrent Nestlé d'essayer trois ans après Nesfluid, « la boisson qui hydrate », elle aussi enterrée dans le cimetière des innovations ratées.

Gap : Un logo emblématique intouchable. La marque américaine l'a pourtant fait discrètement mais à l'heure des réseaux sociaux, difficile de passer inaperçu ! Le changement de logo de Gap, en octobre 2010, déchaîne les foudres de ses fans : 725 000 avis négatifs en un jour, parfois outranciers, sur la page Facebook de la marque. Laquelle a tenté d'expliquer sa démarche de rajeunissement, avec même un essai de crowd sourcing. Rien à faire : Gap a cédé, réintroduisant son célèbre logo.

Orangina : Un scandale qui reste dans les mémoires car il a été l'un des premiers dans la course aux fans. En février 2012, Orangina et son agence Fred & Farid sont accusés d'avoir acheté des « j'aime (likes) ». Si Orangina s'est excusée, l'agence a reconnu, via son community manager, avoir créé des profils ! Depuis, les professionnels ont, semble-t-il, appris que la course aux fans ne servait pas à grand-chose sinon à faire baisser l'engagement.`,
    vocab: [
      { fr: "un échec", de: "ein Misserfolg / ein Scheitern" },
      { fr: "les parts de marché (f.pl.)", de: "die Marktanteile" },
      { fr: "fidéliser le consommateur", de: "den Konsumenten binden" },
      { fr: "commercialiser", de: "vermarkten" },
      { fr: "jetable", de: "Einweg- / zum Wegwerfen" },
      { fr: "le linéaire", de: "das Regal (im Supermarkt)" },
      { fr: "un marché de niche", de: "ein Nischenmarkt" },
      { fr: "la valeur ajoutée", de: "der Mehrwert" },
      { fr: "déchaîner les foudres", de: "einen Sturm der Entrüstung auslösen" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Quelle a été l'erreur fondamentale de Coca-Cola selon Jean-Noël Kapferer ?",
        options: [
          "Avoir modifié la formule du Coca",
          "Ne pas avoir écouté les consommateurs",
          "Avoir fixé un prix trop élevé",
          "Avoir copié la recette de Pepsi"
        ],
        correctIndex: 1,
        explanation: "Kapferer explique que l'erreur n'est pas d'avoir modifié la formule, mais de « ne pas avoir écouté les consommateurs, qui voulaient pouvoir choisir entre les deux produits »."
      },
      {
        type: "mc",
        question: "Pourquoi le parfum Bic a-t-il échoué ?",
        options: [
          "Le prix était trop élevé",
          "Le parfum avait une mauvaise odeur",
          "Le produit contredisait l'image de la marque",
          "La publicité était insuffisante"
        ],
        correctIndex: 2,
        explanation: "Bic a « commercialisé un produit en totale contradiction avec son image » — une marque de produits jetables ne peut pas incarner le luxe."
      },
      {
        type: "truefalse",
        statement: "Le New Coke est resté sur le marché pendant un an avant d'être retiré.",
        correct: "false",
        explanation: "Le texte dit que « trois mois après, le bon vieux Coca réintègre les magasins »."
      },
      {
        type: "truefalse",
        statement: "Gap a maintenu son nouveau logo malgré les critiques.",
        correct: "false",
        explanation: "« Rien à faire : Gap a cédé, réintroduisant son célèbre logo. »"
      },
      {
        type: "fill",
        question: "Plus de la moitié des innovations en grande consommation finissent aux ___.",
        answer: "oubliettes",
        explanation: "Finir aux oubliettes = tomber dans l'oubli, être complètement oublié (in Vergessenheit geraten)."
      },
      {
        type: "open",
        question: "Résumez l'erreur marketing d'Orangina. Pourquoi était-ce un scandale ?",
        modelAnswer: "Orangina et son agence ont été accusés d'avoir acheté des « likes » sur Facebook. L'agence a même créé de faux profils. C'était un scandale car c'était l'un des premiers cas de fraude dans la « course aux fans » sur les réseaux sociaux."
      }
    ]
  },

  // =========================================================================
  // TEXT 3 — L'Ubérisation (PDF p.43-44)
  // =========================================================================
  {
    id: "read-003",
    title: "L'Ubérisation",
    source: "Lafinancepourtous.com, novembre 2020",
    theme: "Économie numérique",
    wordCount: 450,
    text: `Néologisme créé à partir du nom de l'entreprise californienne de transport (Uber), le terme Ubérisation correspond à l'émergence de plateformes numériques sur lesquelles clients et travailleurs indépendants peuvent entrer en contact directement, gratuitement et en temps réel. Ce sont les dernières innovations mobiles qui constituent les principales « disruptions » engendrées par l'Ubérisation (accès partout et à toute heure, géolocalisation, notation, réservation immédiate, flexibilité totale du travail).

Un accroissement de l'offre et de la concurrence : En permettant à des particuliers et semi-professionnels de prendre part à la création de valeur dans certains marchés, l'Ubérisation contribue à augmenter l'offre. Ceci a pour effet d'accroître la taille des marchés quand la demande n'est pas entièrement satisfaite. Airbnb a permis d'augmenter la capacité d'accueil touristique dans de nombreuses villes. L'introduction des chauffeurs VTC à Paris a permis de rééquilibrer un marché des taxis en forte pénurie.

La concurrence oblige les professions « attaquées » à se remettre en cause. Les taxis offrent plus de services, les hôtels traditionnels devraient baisser leurs prix.

Les limites de ce nouveau modèle : Rares sont les entreprises qui parviennent à dégager des résultats financiers positifs. Depuis sa création en 2009, Uber n'a réalisé qu'un seul exercice bénéficiaire. En 2019, l'entreprise a enregistré des pertes records de près de 8,6 milliards de dollars. Take Eat Easy, une société de livraison de plats cuisinés, a fait faillite en juillet 2016.

Ces nouvelles sociétés créent de l'emploi, mais il s'agit d'un travail essentiellement mal rémunéré et à temps partiel. Le travailleur commence et finit de travailler quand il veut. C'est une flexibilité totale mais également un mode de vie précaire.

L'intervention nécessaire des pouvoirs publics : Le service UberPop donnait la possibilité aux particuliers de transporter d'autres particuliers, avec très peu de contraintes. Face à la révolte des taxis, le gouvernement français a décidé d'interdire ce service.

Le développement d'Airbnb a, dans certains cas, eu un effet néfaste sur le marché du logement. La rentabilité d'une location sur Airbnb étant supérieure à une location traditionnelle, de nombreux propriétaires sont tentés de louer leur(s) bien(s) exclusivement sur Airbnb. Ceci provoque une pénurie de l'offre dans le logement locatif traditionnel et pénalise la population locale (loyers plus élevés, exode du centre-ville). À Paris, la mairie interdit de louer un bien sur Airbnb plus de 120 jours par an.`,
    vocab: [
      { fr: "un néologisme", de: "ein Neologismus / Neuwort" },
      { fr: "un travailleur indépendant", de: "ein Selbstständiger" },
      { fr: "la géolocalisation", de: "die Geolokalisierung" },
      { fr: "un accroissement", de: "eine Zunahme / ein Anstieg" },
      { fr: "la pénurie", de: "der Mangel / die Knappheit" },
      { fr: "un exercice bénéficiaire", de: "ein profitables Geschäftsjahr" },
      { fr: "faire faillite", de: "Konkurs gehen / Pleite machen" },
      { fr: "précaire", de: "prekär / unsicher" },
      { fr: "néfaste", de: "schädlich / nachteilig" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Qu'est-ce que l'ubérisation ?",
        options: [
          "Le développement de l'entreprise Uber uniquement",
          "L'émergence de plateformes numériques connectant clients et indépendants directement",
          "La transformation de taxis en VTC",
          "L'interdiction des services de transport privé"
        ],
        correctIndex: 1,
        explanation: "L'ubérisation = « l'émergence de plateformes numériques sur lesquelles clients et travailleurs indépendants peuvent entrer en contact directement »."
      },
      {
        type: "mc",
        question: "Combien Uber a-t-il perdu en 2019 ?",
        options: [
          "1,5 milliard de dollars",
          "4,2 milliards de dollars",
          "8,6 milliards de dollars",
          "12 milliards de dollars"
        ],
        correctIndex: 2,
        explanation: "Le texte indique des « pertes records de près de 8,6 milliards de dollars » en 2019."
      },
      {
        type: "truefalse",
        statement: "Le service UberPop est toujours autorisé en France.",
        correct: "false",
        explanation: "Le texte dit que « le gouvernement français a décidé d'interdire ce service » face à la révolte des taxis."
      },
      {
        type: "truefalse",
        statement: "L'ubérisation a uniquement des effets positifs sur l'économie.",
        correct: "false",
        explanation: "Le texte décrit de nombreuses limites : emplois précaires, entreprises non rentables, effets néfastes sur le logement."
      },
      {
        type: "fill",
        question: "À Paris, la mairie interdit de louer un bien sur Airbnb plus de ___ jours par an.",
        answer: "120",
        explanation: "Depuis 2016, la limite est de 120 jours/an pour les locations Airbnb à Paris."
      },
      {
        type: "open",
        question: "Quels sont les effets négatifs d'Airbnb sur le marché du logement selon le texte ?",
        modelAnswer: "Pénurie dans le logement locatif traditionnel, loyers plus élevés, exode du centre-ville. Les propriétaires préfèrent louer sur Airbnb car c'est plus rentable, ce qui pénalise la population locale."
      }
    ]
  },

  // =========================================================================
  // TEXT 4 — Le management participatif (PDF p.41-42)
  // =========================================================================
  {
    id: "read-004",
    title: "Le management participatif",
    source: "Management.savoir.fr, petite-entreprise.net",
    theme: "Management",
    wordCount: 400,
    text: `Le management participatif est un concept de gestion qui incite le personnel à contribuer aux projets d'entreprise susceptibles d'apporter des améliorations en termes d'innovations et de progressions des performances.

C'est une culture d'entreprise qui encourage le dialogue, la communication, le respect des autres, la délégation de pouvoir et surtout l'égalité des chances. Une politique qui encouragera tous les salariés à participer à tout projet en osant émettre leurs avis. Le manager participatif va consulter ses employés, discuter du problème pour une prise de décision commune.

Les principes du management participatif : Le management participatif s'appuie sur 5 principes fondamentaux : la mobilisation du personnel, une politique active de développement du personnel permettant la collaboration et le partage d'informations, la délégation de pouvoir qui favorise tout déblocage pour une prise de décision rapide, la résolution des problèmes à leur niveau, et des dispositifs de régulation tels que l'auto-contrôle, le droit à l'erreur et l'audit interne.

Les avantages du management participatif : La méthode apporte de la satisfaction aussi bien aux employés qu'aux dirigeants. Elle rend l'entreprise plus sociale, plus humaine, accorde aux employés le droit à la parole, favorise le respect de chacun et l'estime de soi. L'employé s'y sent utile et non comme élément d'une chaîne sans âme, ce qui accroît la productivité et augmente l'efficacité des équipes.

Les limites du management participatif : Problème de temps et de coût — la participation de tout l'effectif pour la résolution d'un problème peut être inutile et coûteuse. Remise en cause de la structure formelle de l'entreprise — les relations hiérarchiques subissent certains changements, la montée de leaders naturels nécessite parfois la redéfinition des responsabilités. Résistance du personnel — le concept ne peut être compris par tout le monde de la même manière, certains n'éprouvent pas l'envie ni le besoin d'une participation plus grande. Incapacités d'adaptation aux situations de crise.

Conclusion : Le modèle du management participatif reste évolutif et peut s'adapter à n'importe quel type d'entreprise. Beaucoup de petites entreprises l'adaptent et c'est une réussite totale vu l'implication directe de tous les salariés.`,
    vocab: [
      { fr: "inciter à", de: "anregen zu / ermutigen zu" },
      { fr: "la délégation de pouvoir", de: "die Machtübertragung" },
      { fr: "l'égalité des chances (f.)", de: "die Chancengleichheit" },
      { fr: "oser", de: "wagen / sich trauen" },
      { fr: "un déblocage", de: "eine Entsperrung / Lösung" },
      { fr: "l'estime de soi (f.)", de: "das Selbstwertgefühl" },
      { fr: "accroître", de: "steigern / erhöhen" },
      { fr: "la remise en cause", de: "die Infragestellung" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Quel est le but principal du management participatif ?",
        options: [
          "Réduire les coûts de personnel",
          "Inciter le personnel à contribuer aux projets d'entreprise",
          "Remplacer les managers par les employés",
          "Éliminer la hiérarchie complètement"
        ],
        correctIndex: 1,
        explanation: "Le management participatif « incite le personnel à contribuer aux projets d'entreprise susceptibles d'apporter des améliorations »."
      },
      {
        type: "mc",
        question: "Quelle est une limite du management participatif en situation de crise ?",
        options: [
          "Il est trop efficace",
          "Il coûte trop cher",
          "Il ne permet pas de prendre des décisions rapides",
          "Les employés refusent de participer"
        ],
        correctIndex: 2,
        explanation: "Le texte mentionne les « incapacités d'adaptation aux situations de crise » car les décisions doivent être prises rapidement."
      },
      {
        type: "truefalse",
        statement: "Tous les employés accueillent positivement le management participatif.",
        correct: "false",
        explanation: "Le texte mentionne la « résistance du personnel » — certains « n'éprouvent pas l'envie ni le besoin d'une participation plus grande »."
      },
      {
        type: "truefalse",
        statement: "Le management participatif augmente la productivité selon le texte.",
        correct: "true",
        explanation: "Le texte dit que l'employé « s'y sent utile, ce qui accroît la productivité et augmente l'efficacité des équipes »."
      },
      {
        type: "fill",
        question: "Le management participatif encourage le dialogue, la communication et la ___ de pouvoir.",
        answer: "délégation",
        explanation: "La délégation de pouvoir = Machtübertragung — un principe clé du management participatif."
      },
      {
        type: "open",
        question: "Quels sont les cinq principes fondamentaux du management participatif ?",
        modelAnswer: "1) La mobilisation du personnel, 2) Une politique active de développement du personnel, 3) La délégation de pouvoir, 4) La résolution des problèmes à leur niveau, 5) Des dispositifs de régulation (auto-contrôle, droit à l'erreur, audit interne)."
      }
    ]
  },

  // =========================================================================
  // TEXT 5 — Le modèle économique (PDF p.53-54)
  // =========================================================================
  {
    id: "read-005",
    title: "Le modèle économique d'une entreprise",
    source: "Creerentreprise.fr, 2021",
    theme: "Création d'entreprise",
    wordCount: 420,
    text: `Le modèle économique ou « business model » est la manière dont l'entreprise génère ou va générer de la rentabilité. C'est une description ou une représentation cohérente des moyens de tirer des revenus d'une activité.

Le modèle économique touche à différentes fonctions de l'entreprise : le marketing (une « proposition de valeur faite au client »), l'organisation (une organisation cohérente et performante), et les finances (un « modèle de revenus » en même temps qu'un « modèle de coût »).

Les différents modèles économiques d'entreprise :

1) L'achat-revente : un modèle simple qui ne repose pas sur l'innovation produit mais sur les efforts de commercialisation d'un produit existant.

2) La récupération pour revente : un modèle qui tire profit d'un approvisionnement gratuit, en vue de mettre en valeur des objets encore utilisables. Ex. : entreprises de recyclage, brocantes.

3) La fabrication d'un produit : fabriquer son propre produit avec un caractère qualitatif ou innovant. Ex. : Apple avec l'iPhone.

4) L'abonnement : générer des revenus réguliers en fidélisant automatiquement sa clientèle. Ex. : box par abonnement, logiciels en SaaS.

5) La vente directe : éliminer les intermédiaires dans le circuit de distribution pour regagner la marge. Ex. : e-commerce, vente à la ferme.

6) Le commissionnement : mettre en relation fournisseurs et clients en prélevant une commission. Ex. : Booking, Airbnb.

7) Le modèle du gratuit avec options payantes (freemium) : proposer un service de base gratuit tout en proposant des fonctionnalités premium payantes.

8) Le modèle de l'appât ou de l'imprimante : proposer un produit à un prix très attractif et rendre indispensable l'achat d'accessoires complémentaires. Ex. : imprimantes et cartouches, rasoirs et lames, Amazon et Kindle.

9) Le modèle à bas prix (low-cost) : développer un avantage concurrentiel basé sur le prix, rendu possible par des efforts organisationnels importants. Ex. : Ryanair.`,
    vocab: [
      { fr: "la rentabilité", de: "die Rentabilität / Wirtschaftlichkeit" },
      { fr: "une proposition de valeur", de: "ein Wertversprechen" },
      { fr: "l'approvisionnement (m.)", de: "die Beschaffung / Versorgung" },
      { fr: "le circuit de distribution", de: "der Vertriebskanal" },
      { fr: "le commissionnement", de: "die Provisionsabrechnung" },
      { fr: "un intermédiaire", de: "ein Zwischenhändler" },
      { fr: "prélever une commission", de: "eine Provision erheben" },
      { fr: "l'avantage concurrentiel (m.)", de: "der Wettbewerbsvorteil" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Quel modèle utilise Airbnb selon le texte ?",
        options: [
          "L'abonnement",
          "Le freemium",
          "Le commissionnement",
          "La vente directe"
        ],
        correctIndex: 2,
        explanation: "Airbnb utilise le commissionnement : il met en relation propriétaires et clients en prélevant une commission."
      },
      {
        type: "mc",
        question: "Quel est le principe du modèle « freemium » ?",
        options: [
          "Tout est gratuit pour l'utilisateur",
          "Un service de base gratuit avec des options payantes",
          "Un prix très bas pour attirer les clients",
          "Vente directe sans intermédiaire"
        ],
        correctIndex: 1,
        explanation: "Le freemium = « proposer un service de base gratuit (free) tout en proposant des fonctionnalités à valeur ajoutée payantes (premium) »."
      },
      {
        type: "truefalse",
        statement: "Le modèle de l'achat-revente repose sur l'innovation produit.",
        correct: "false",
        explanation: "Le texte dit exactement le contraire : c'est « un modèle simple, qui ne repose pas sur l'innovation produit »."
      },
      {
        type: "truefalse",
        statement: "Ryanair est cité comme exemple du modèle low-cost.",
        correct: "true",
        explanation: "Le texte cite Ryanair comme exemple du « modèle économique à bas prix (low-cost) »."
      },
      {
        type: "fill",
        question: "Le modèle de l'___ consiste à proposer un produit pas cher et vendre des accessoires complémentaires.",
        answer: "appât",
        explanation: "Le modèle de l'appât (der Köder) : produit attractif + accessoires indispensables (ex. : imprimante + cartouches)."
      },
      {
        type: "open",
        question: "Quelles sont les trois fonctions de l'entreprise auxquelles touche le modèle économique ?",
        modelAnswer: "1) Le marketing — proposition de valeur au client, 2) L'organisation — organisation cohérente et performante, 3) Les finances — modèle de revenus et modèle de coût."
      }
    ]
  },

  // =========================================================================
  // TEXT 6 — Histoires d'entrepreneurs (PDF p.48)
  // =========================================================================
  {
    id: "read-006",
    title: "Comment sont nées ces entreprises qui rapportent des millions ?",
    source: "Management.fr",
    theme: "Création d'entreprise",
    wordCount: 400,
    text: `James Dyson — L'aspirateur sans sac : Un jour de 1978, alors qu'il passe l'aspirateur, James Dyson constate que de la poussière sort. Le sac pourtant vide est bouché. Durant cinq ans, il fera des essais seul chez lui, mettant au point 5'127 prototypes. « Cela fait 5'126 échecs, mais j'ai appris de chacun. » Lorsqu'il présente son invention aux leaders du marché (Hoover, Electrolux), aucun ne veut l'exploiter. Il finit par vendre un modèle sous licence, au Japon, en 1986. Succès immédiat. En 1992, il construit une usine au Royaume-Uni. Il ignore les études de marché qui lui conseillent de fixer un prix élevé. « Ma démarche est inverse. Je crée le produit que je pense utile, puis je fais estimer son coût. » Aujourd'hui, Dyson (5'500 salariés dont 2'500 ingénieurs) affiche un chiffre d'affaires de 1,3 milliard d'euros.

Travis Kalanick — Uber : L'entreprise est américaine mais c'est à Paris, un soir de décembre 2008, qu'est né le concept d'Uber. Travis Kalanick, 31 ans, participe à la conférence LeWeb. Il ne trouve pas de taxi. Il rêve alors d'un service qui permettrait de réserver une limousine en appuyant sur un bouton. Quelques mois plus tard, il fonde Uber à San Francisco. Aujourd'hui, la société est présente dans 250 villes et valorise 40 milliards de dollars.

Éric Favre — La capsule de café : En 1975, Éric Favre, ingénieur au département d'emballage de Nestlé, s'ennuie. Un jour, il assiste à une conférence du directeur marketing monde. Il décide de s'intéresser au café, avec l'objectif de faire le meilleur expresso du monde. Il développe une capsule en cachette. Mais, lorsqu'il la présente à ses supérieurs, l'accueil est glacial : « Ridicule ! » On lui interdit même de travailler sur ce projet. Il continue à développer son prototype, aidé par ses collègues. En 1986, le PDG le nomme à la tête de la filiale Nespresso, créée pour l'occasion. En quelques mois, la filiale est rentable et Nespresso devient un succès planétaire.`,
    vocab: [
      { fr: "mettre au point", de: "entwickeln / fertigstellen" },
      { fr: "un prototype", de: "ein Prototyp" },
      { fr: "exploiter", de: "nutzen / verwerten" },
      { fr: "sous licence", de: "unter Lizenz" },
      { fr: "le chiffre d'affaires", de: "der Umsatz" },
      { fr: "en cachette", de: "heimlich / im Verborgenen" },
      { fr: "l'accueil (m.) glacial", de: "der eisige Empfang" },
      { fr: "une filiale", de: "eine Tochtergesellschaft" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Combien de prototypes James Dyson a-t-il créés ?",
        options: ["127", "1'527", "5'127", "10'127"],
        correctIndex: 2,
        explanation: "Le texte indique 5'127 prototypes, soit « 5'126 échecs, mais j'ai appris de chacun »."
      },
      {
        type: "mc",
        question: "Où est née l'idée d'Uber ?",
        options: [
          "À San Francisco",
          "À New York",
          "À Paris",
          "À Londres"
        ],
        correctIndex: 2,
        explanation: "« C'est à Paris, un soir de décembre 2008, qu'est né le concept d'Uber » lors de la conférence LeWeb."
      },
      {
        type: "truefalse",
        statement: "Les supérieurs d'Éric Favre ont immédiatement soutenu son projet de capsule.",
        correct: "false",
        explanation: "L'accueil a été « glacial » — on lui a dit « Ridicule ! » et on lui a même interdit de travailler sur ce projet."
      },
      {
        type: "truefalse",
        statement: "Dyson a suivi les conseils des études de marché pour fixer son prix.",
        correct: "false",
        explanation: "Dyson dit « Ma démarche est inverse. Je crée le produit que je pense utile, puis je fais estimer son coût. »"
      },
      {
        type: "fill",
        question: "Dyson affiche un chiffre d'___ de 1,3 milliard d'euros.",
        answer: "affaires",
        explanation: "Le chiffre d'affaires (CA) = der Umsatz — le total des ventes d'une entreprise."
      },
      {
        type: "open",
        question: "Quel point commun partagent les trois entrepreneurs de ce texte ?",
        modelAnswer: "Les trois ont fait face à des obstacles majeurs (refus des entreprises existantes, scepticisme des supérieurs) mais ont persévéré dans leur vision. Leur succès est venu de leur obstination et de leur capacité à innover malgré le rejet initial."
      }
    ]
  },

  // =========================================================================
  // TEXT 7 — Le télétravail
  // =========================================================================
  {
    id: "read-007",
    title: "Le télétravail : un nouveau modèle de travail",
    source: "Article B2",
    theme: "Entreprise",
    wordCount: 300,
    text: `Depuis la pandémie de 2020, le télétravail s'est imposé comme une composante majeure du monde professionnel. En France, près d'un salarié sur trois pratique désormais le travail à distance au moins un jour par semaine. Cette évolution a profondément transformé l'organisation des entreprises.

Les avantages du télétravail sont nombreux. Pour les salariés, il permet de réduire le temps de transport, d'améliorer l'équilibre entre vie professionnelle et vie privée, et de travailler dans un environnement plus calme. Pour les entreprises, il contribue à réduire les coûts immobiliers et à élargir le bassin de recrutement au-delà des zones géographiques traditionnelles.

Cependant, le télétravail présente aussi des défis. L'isolement social peut affecter le bien-être des employés. La frontière entre le travail et la vie personnelle devient floue, ce qui peut conduire à un risque d'épuisement professionnel — le fameux « burn-out ». La gestion d'équipe à distance exige également de nouvelles compétences managériales.

Pour réussir la mise en place du télétravail, les experts recommandent un modèle hybride : deux à trois jours au bureau et le reste à domicile. Il est également crucial de maintenir des rituels d'équipe — réunions hebdomadaires, pauses café virtuelles — pour préserver la cohésion du groupe.

Les outils numériques jouent un rôle central dans cette transformation. Les plateformes de visioconférence, les espaces de travail collaboratif et les messageries instantanées sont devenus indispensables. Toutefois, il convient de fixer des règles claires pour éviter la surcharge informationnelle et respecter le droit à la déconnexion.`,
    vocab: [
      { fr: "le télétravail", de: "das Homeoffice / die Telearbeit" },
      { fr: "un salarié", de: "ein Arbeitnehmer" },
      { fr: "l'équilibre (m.) vie pro/privée", de: "die Work-Life-Balance" },
      { fr: "l'épuisement professionnel", de: "das Burn-out" },
      { fr: "un modèle hybride", de: "ein hybrides Modell" },
      { fr: "la cohésion du groupe", de: "der Zusammenhalt der Gruppe" },
      { fr: "le droit à la déconnexion", de: "das Recht auf Nichterreichbarkeit" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Quel modèle les experts recommandent-ils ?",
        options: [
          "100 % en télétravail",
          "Un modèle hybride (2–3 jours au bureau)",
          "Uniquement le travail au bureau",
          "Un jour par semaine à domicile"
        ],
        correctIndex: 1,
        explanation: "Les experts recommandent « un modèle hybride : deux à trois jours au bureau et le reste à domicile »."
      },
      {
        type: "truefalse",
        statement: "Le télétravail aide les entreprises à économiser sur les frais de bureau.",
        correct: "true",
        explanation: "Le texte mentionne que le télétravail « contribue à réduire les coûts immobiliers »."
      },
      {
        type: "truefalse",
        statement: "Le texte affirme que le télétravail n'a aucun inconvénient.",
        correct: "false",
        explanation: "Le texte mentionne plusieurs défis : isolement social, burn-out, difficulté de management à distance."
      },
      {
        type: "fill",
        question: "Le texte parle du « droit à la ___ » pour les salariés.",
        answer: "déconnexion",
        explanation: "Le droit à la déconnexion = le droit de ne pas être joignable en dehors des heures de travail."
      },
      {
        type: "mc",
        question: "Quelle proportion de salariés français télétravaille au moins un jour par semaine ?",
        options: ["Un sur deux", "Un sur quatre", "Un sur trois", "Deux sur cinq"],
        correctIndex: 2,
        explanation: "Le texte indique « près d'un salarié sur trois »."
      },
      {
        type: "open",
        question: "Quels sont les trois principaux avantages du télétravail pour les salariés ?",
        modelAnswer: "1) Réduction du temps de transport, 2) Meilleur équilibre entre vie professionnelle et vie privée, 3) Environnement de travail plus calme."
      }
    ]
  },

  // =========================================================================
  // TEXT 8 — La RSE
  // =========================================================================
  {
    id: "read-008",
    title: "La RSE : un engagement devenu incontournable",
    source: "Article B2",
    theme: "Entreprise",
    wordCount: 285,
    text: `La Responsabilité Sociale des Entreprises (RSE) désigne l'ensemble des pratiques mises en œuvre par les entreprises pour intégrer les préoccupations sociales, environnementales et économiques dans leurs activités. Longtemps perçue comme un simple outil de communication, la RSE est devenue un véritable levier de performance.

Sur le plan environnemental, les entreprises s'engagent à réduire leur empreinte carbone, à limiter le gaspillage et à favoriser l'économie circulaire. Certaines entreprises ont fixé des objectifs ambitieux de neutralité carbone d'ici 2030.

Sur le plan social, la RSE concerne le bien-être des salariés, la diversité et l'inclusion, ainsi que les conditions de travail tout au long de la chaîne d'approvisionnement. Les entreprises responsables veillent à l'égalité entre les femmes et les hommes, proposent des formations continues et encouragent le dialogue social.

Du point de vue économique, la RSE favorise l'innovation et la compétitivité. Les consommateurs, en particulier les jeunes générations, privilégient de plus en plus les marques engagées. Selon une étude récente, 72 % des millennials sont prêts à payer plus pour un produit issu d'une entreprise responsable.

En France, la loi PACTE de 2019 a renforcé les obligations des entreprises en matière de RSE. Elle a introduit la notion d'« entreprise à mission », qui inscrit dans ses statuts des objectifs sociaux et environnementaux. Cette évolution juridique illustre la prise de conscience collective de la nécessité de repenser le rôle de l'entreprise dans la société.`,
    vocab: [
      { fr: "la RSE", de: "die CSR (Corporate Social Responsibility)" },
      { fr: "l'empreinte carbone (f.)", de: "der CO₂-Fussabdruck" },
      { fr: "l'économie circulaire (f.)", de: "die Kreislaufwirtschaft" },
      { fr: "la chaîne d'approvisionnement", de: "die Lieferkette" },
      { fr: "une entreprise à mission", de: "ein missionsorientiertes Unternehmen" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Quel pourcentage de millennials sont prêts à payer plus pour un produit responsable ?",
        options: ["52 %", "62 %", "72 %", "82 %"],
        correctIndex: 2,
        explanation: "Le texte indique « 72 % des millennials »."
      },
      {
        type: "mc",
        question: "Qu'a introduit la loi PACTE de 2019 ?",
        options: ["L'obligation de recycler", "La notion d'entreprise à mission", "Un impôt écologique", "La semaine de 4 jours"],
        correctIndex: 1,
        explanation: "La loi PACTE « a introduit la notion d'entreprise à mission »."
      },
      {
        type: "truefalse",
        statement: "La RSE a toujours été considérée comme un levier de performance.",
        correct: "false",
        explanation: "Elle était « longtemps perçue comme un simple outil de communication »."
      },
      {
        type: "truefalse",
        statement: "La RSE concerne uniquement l'aspect environnemental.",
        correct: "false",
        explanation: "La RSE intègre trois dimensions : sociale, environnementale et économique."
      },
      {
        type: "fill",
        question: "Les entreprises s'engagent à réduire leur ___ carbone.",
        answer: "empreinte",
        explanation: "L'empreinte carbone = der CO₂-Fussabdruck."
      },
      {
        type: "open",
        question: "Quels sont les engagements sociaux des entreprises responsables selon le texte ?",
        modelAnswer: "Égalité femmes-hommes, formations continues, dialogue social, et bonnes conditions de travail dans la chaîne d'approvisionnement."
      }
    ]
  },

  // =========================================================================
  // TEXT 9 — La communication interculturelle
  // =========================================================================
  {
    id: "read-009",
    title: "Travailler dans un contexte interculturel",
    source: "Article B2",
    theme: "Entreprise",
    wordCount: 270,
    text: `La mondialisation a multiplié les situations de travail interculturel. Aujourd'hui, il est courant de collaborer avec des collègues ou des partenaires commerciaux issus de cultures différentes. Cette diversité est une richesse, mais elle peut aussi être source de malentendus si l'on n'y est pas préparé.

Les différences culturelles se manifestent dans de nombreux aspects du travail. Le rapport au temps, par exemple, varie selon les cultures. Dans les pays germaniques et scandinaves, la ponctualité est une valeur fondamentale. En revanche, dans les cultures méditerranéennes ou latino-américaines, un retard de quelques minutes est généralement accepté.

Le style de communication diffère également. Les cultures dites « à contexte fort » — comme le Japon ou la Chine — communiquent de manière indirecte et implicite. Les cultures « à contexte faible » — comme l'Allemagne ou les États-Unis — privilégient une communication directe et explicite. Un Français se situe souvent entre ces deux extrêmes.

La prise de décision reflète aussi les spécificités culturelles. En Allemagne, les décisions sont prises après une analyse approfondie et sont rarement remises en question. En France, le processus est souvent plus centralisé, avec une forte influence de la hiérarchie. Aux États-Unis, on valorise la rapidité de décision et la prise de risque.

Pour réussir dans un environnement interculturel, il est essentiel de développer son intelligence culturelle : observer sans juger, s'adapter sans renoncer à ses valeurs, et communiquer avec patience et ouverture d'esprit.`,
    vocab: [
      { fr: "la mondialisation", de: "die Globalisierung" },
      { fr: "un malentendu", de: "ein Missverständnis" },
      { fr: "la ponctualité", de: "die Pünktlichkeit" },
      { fr: "à contexte fort / faible", de: "mit hohem / niedrigem Kontext" },
      { fr: "l'intelligence culturelle (f.)", de: "die kulturelle Intelligenz" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Comment sont décrites les cultures japonaise et chinoise ?",
        options: ["Cultures à contexte faible", "Cultures à contexte fort", "Cultures individualistes", "Cultures directes"],
        correctIndex: 1,
        explanation: "Le Japon et la Chine = cultures « à contexte fort » qui communiquent de manière indirecte."
      },
      {
        type: "mc",
        question: "Comment le processus de décision est-il décrit en France ?",
        options: ["Rapide et décentralisé", "Lent et démocratique", "Centralisé avec forte influence hiérarchique", "Basé sur le consensus"],
        correctIndex: 2,
        explanation: "« En France, le processus est souvent plus centralisé, avec une forte influence de la hiérarchie. »"
      },
      {
        type: "truefalse",
        statement: "Dans les cultures méditerranéennes, la ponctualité stricte est la norme.",
        correct: "false",
        explanation: "« Un retard de quelques minutes est généralement accepté. »"
      },
      {
        type: "truefalse",
        statement: "Le style de communication français se situe entre la communication directe et indirecte.",
        correct: "true",
        explanation: "« Un Français se situe souvent entre ces deux extrêmes. »"
      },
      {
        type: "fill",
        question: "Pour réussir, il faut développer son intelligence ___.",
        answer: "culturelle",
        explanation: "L'intelligence culturelle = la capacité de s'adapter à différentes cultures."
      },
      {
        type: "open",
        question: "Quelles sont les trois qualités nécessaires pour réussir dans un environnement interculturel ?",
        modelAnswer: "Observer sans juger, s'adapter sans renoncer à ses valeurs, et communiquer avec patience et ouverture d'esprit."
      }
    ]
  },

  // =========================================================================
  // TEXT 10 — Le CV français
  // =========================================================================
  {
    id: "read-010",
    title: "Rédiger un CV et une lettre de motivation en français",
    source: "Adapté du Reader B2",
    theme: "Ressources Humaines",
    wordCount: 280,
    text: `Le CV français possède des caractéristiques spécifiques qui le distinguent des pratiques anglo-saxonnes. Contrairement aux pays anglophones, il est courant en France d'inclure une photo, sa date de naissance et sa situation familiale, bien que ces informations ne soient pas obligatoires et que la tendance évolue.

Un CV français efficace doit tenir sur une page — deux pages maximum pour les profils expérimentés. Il se compose généralement de cinq rubriques : les informations personnelles, la formation, l'expérience professionnelle, les compétences et les centres d'intérêt. L'ordre chronologique inversé est la norme : l'expérience la plus récente apparaît en premier.

La lettre de motivation, quant à elle, complète le CV en expliquant la démarche du candidat. Elle suit une structure en trois parties. Le premier paragraphe présente le contexte : pourquoi le candidat écrit et quel poste l'intéresse. Le deuxième paragraphe met en valeur les compétences et les expériences en lien avec le poste. Le troisième paragraphe exprime la motivation du candidat et propose un entretien.

Quelques erreurs fréquentes sont à éviter. Les fautes d'orthographe, surtout en français, sont rédhibitoires. Un ton trop familier ou trop formel peut nuire à la candidature. Il est également déconseillé de simplement répéter le contenu du CV dans la lettre de motivation.

Aujourd'hui, les candidatures se font majoritairement en ligne. Les plateformes de recrutement comme LinkedIn, Indeed et l'APEC sont devenues des outils incontournables. Certains recruteurs utilisent désormais l'intelligence artificielle pour effectuer un premier tri des candidatures.`,
    vocab: [
      { fr: "un CV (curriculum vitae)", de: "ein Lebenslauf" },
      { fr: "une lettre de motivation", de: "ein Motivationsschreiben" },
      { fr: "l'ordre chronologique inversé", de: "die umgekehrte chronologische Reihenfolge" },
      { fr: "rédhibitoire", de: "ein absolutes Ausschlusskriterium" },
      { fr: "nuire à", de: "schaden" },
    ],
    exercises: [
      {
        type: "mc",
        question: "Quelle est la longueur idéale d'un CV français ?",
        options: ["Trois pages minimum", "Une page, deux maximum", "Exactement deux pages", "Pas de limite"],
        correctIndex: 1,
        explanation: "« Un CV doit tenir sur une page — deux pages maximum pour les profils expérimentés. »"
      },
      {
        type: "mc",
        question: "Combien de parties comporte la lettre de motivation ?",
        options: ["Deux", "Trois", "Quatre", "Cinq"],
        correctIndex: 1,
        explanation: "La lettre « suit une structure en trois parties » : contexte, compétences, motivation."
      },
      {
        type: "truefalse",
        statement: "En France, il est obligatoire de mettre une photo sur le CV.",
        correct: "false",
        explanation: "« Ces informations ne soient pas obligatoires. »"
      },
      {
        type: "truefalse",
        statement: "Les fautes d'orthographe sont considérées comme éliminatoires.",
        correct: "true",
        explanation: "Le texte les qualifie de « rédhibitoires »."
      },
      {
        type: "fill",
        question: "L'ordre chronologique ___ est la norme : l'expérience la plus récente en premier.",
        answer: "inversé",
        explanation: "Chronologique inversé = la dernière expérience en haut."
      },
      {
        type: "open",
        question: "Quelles sont les cinq rubriques d'un CV français ?",
        modelAnswer: "1) Informations personnelles, 2) Formation, 3) Expérience professionnelle, 4) Compétences, 5) Centres d'intérêt."
      }
    ]
  }
];
