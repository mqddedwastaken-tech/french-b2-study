const SPEAKING_DATA = {
  prompts: [
    // === MONOLOGUE STRUCTURÉ ===
    {
      id: 'speak-1',
      type: 'monologue',
      title: 'Le télétravail et la productivité',
      topic: 'Le télétravail améliore-t-il réellement la productivité des employés ?',
      instruction: 'Présentez votre point de vue de manière structurée. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Introduction (contexte + thèse) → Argument 1 + exemple → Argument 2 + exemple → Nuance/concession → Conclusion' },
        { label: 'Introduction', text: 'Situez le sujet : "Depuis la pandémie, le télétravail s\'est généralisé..." puis annoncez votre position.' },
        { label: 'Connecteurs', text: 'Tout d\'abord / En outre / Certes... cependant / En définitive' },
        { label: 'Vocabulaire', text: 'la productivité, l\'autonomie, la flexibilité, la cohésion d\'équipe, le management à distance, le droit à la déconnexion, l\'équilibre vie pro/perso' }
      ],
      sampleOutline: '1. Intro : le télétravail, nouvelle norme post-Covid\n2. Avantages : flexibilité → meilleure concentration, moins de temps de transport\n3. Risques : isolement, surcharge, difficulté de management\n4. Nuance : modèle hybride comme compromis\n5. Conclusion : bénéfique si encadré'
    },
    {
      id: 'speak-2',
      type: 'monologue',
      title: 'Les réseaux sociaux en entreprise',
      topic: 'Les réseaux sociaux représentent-ils un atout ou un danger pour les entreprises ?',
      instruction: 'Présentez votre point de vue de manière structurée. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Introduction → Atouts (visibilité, communication) → Dangers (bad buzz, distraction) → Prise de position → Conclusion' },
        { label: 'Introduction', text: '"À l\'ère du numérique, les réseaux sociaux sont devenus incontournables pour les entreprises..."' },
        { label: 'Connecteurs', text: 'D\'une part / D\'autre part / Il n\'en demeure pas moins que / Force est de constater' },
        { label: 'Vocabulaire', text: 'la e-réputation, le community management, la stratégie digitale, le bad buzz, la notoriété, fidéliser la clientèle, le retour sur investissement' }
      ],
      sampleOutline: '1. Intro : omniprésence des réseaux sociaux\n2. Atouts : marketing ciblé, communication directe, visibilité\n3. Dangers : bad buzz, distraction, gestion de crise\n4. Solution : stratégie encadrée par des professionnels\n5. Conclusion : atout si bien maîtrisé'
    },
    {
      id: 'speak-3',
      type: 'monologue',
      title: 'L\'intelligence artificielle au travail',
      topic: 'L\'intelligence artificielle va-t-elle remplacer les emplois humains ou en créer de nouveaux ?',
      instruction: 'Présentez votre point de vue de manière structurée. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Introduction (révolution numérique) → Emplois menacés → Nouveaux métiers créés → Importance de la formation → Conclusion' },
        { label: 'Introduction', text: '"L\'essor de l\'intelligence artificielle suscite autant d\'espoirs que de craintes dans le monde du travail..."' },
        { label: 'Connecteurs', text: 'Il est indéniable que / Néanmoins / Par ailleurs / En ce qui concerne / Somme toute' },
        { label: 'Vocabulaire', text: 'l\'automatisation, la disruption, la reconversion professionnelle, les compétences numériques, la formation continue, l\'obsolescence des métiers' }
      ],
      sampleOutline: '1. Intro : l\'IA transforme le marché du travail\n2. Emplois menacés : tâches répétitives, administration\n3. Nouveaux métiers : data science, prompt engineering, éthique de l\'IA\n4. Clé : formation et adaptation\n5. Conclusion : transformation plutôt que remplacement'
    },
    {
      id: 'speak-4',
      type: 'monologue',
      title: 'La transition écologique des entreprises',
      topic: 'Les entreprises doivent-elles placer l\'écologie au cœur de leur stratégie, même au détriment de leur rentabilité ?',
      instruction: 'Présentez votre point de vue de manière structurée. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Introduction (urgence climatique) → Responsabilité des entreprises → Coûts vs bénéfices → Risque de greenwashing → Conclusion' },
        { label: 'Introduction', text: '"Face à l\'urgence climatique, la question de la responsabilité des entreprises se pose avec acuité..."' },
        { label: 'Connecteurs', text: 'Face à ce constat / Bien que / Quoi qu\'il en soit / Il apparaît clairement que / En fin de compte' },
        { label: 'Vocabulaire', text: 'la RSE, le développement durable, l\'empreinte carbone, le greenwashing, la chaîne d\'approvisionnement, les parties prenantes, la rentabilité' }
      ],
      sampleOutline: '1. Intro : urgence climatique et rôle des entreprises\n2. Arguments pour : RSE, attentes consommateurs, avantage concurrentiel\n3. Obstacles : coûts, compétitivité mondiale\n4. Greenwashing : danger de la fausse écologie\n5. Conclusion : nécessité d\'une approche sincère et progressive'
    },
    {
      id: 'speak-5',
      type: 'monologue',
      title: 'L\'ubérisation de l\'économie',
      topic: 'L\'ubérisation est-elle une chance ou une menace pour le monde du travail ?',
      instruction: 'Présentez votre point de vue de manière structurée. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Introduction (définir l\'ubérisation) → Avantages pour les travailleurs/consommateurs → Précarité et risques → Régulation nécessaire → Conclusion' },
        { label: 'Introduction', text: '"Depuis une dizaine d\'années, le terme ubérisation désigne la transformation de secteurs économiques par des plateformes numériques..."' },
        { label: 'Connecteurs', text: 'En premier lieu / Qui plus est / Toutefois / Malgré tout / C\'est pourquoi' },
        { label: 'Vocabulaire', text: 'la précarité, l\'autoentrepreneur, la disruption, la dérégulation, le statut d\'indépendant, la protection sociale, la flexibilité' }
      ],
      sampleOutline: '1. Intro : définition et contexte\n2. Avantages : flexibilité, innovation, prix bas\n3. Risques : précarité, pas de protection sociale\n4. Solution : adapter le cadre juridique\n5. Conclusion : trouver un équilibre'
    },

    // === EXPOSÉ ARGUMENTÉ ===
    {
      id: 'speak-6',
      type: 'expose',
      title: 'Le Black Friday en France',
      topic: 'Vous avez lu un article sur l\'interdiction potentielle du Black Friday en France. Présentez les enjeux et donnez votre opinion.',
      instruction: 'Résumez les arguments puis exprimez votre point de vue personnel. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Résumé des enjeux → Arguments pour l\'interdiction → Arguments contre → Votre opinion → Conclusion' },
        { label: 'Contexte', text: 'Le Black Friday, importé des États-Unis, suscite un débat en France : surconsommation vs liberté commerciale. Des députés proposent d\'encadrer les publicités.' },
        { label: 'Connecteurs', text: 'Selon l\'article / Les partisans de... estiment que / À l\'inverse / Pour ma part / En définitive' },
        { label: 'Vocabulaire', text: 'la surconsommation, les pratiques commerciales, les détaillants, le boycott, les soldes, les marges bénéficiaires, l\'impact environnemental' }
      ],
      sampleOutline: '1. Résumé : Black Friday controversé en France\n2. Pour l\'interdiction : surconsommation, concurrence déloyale, environnement\n3. Contre : liberté commerciale, emploi, demande des consommateurs\n4. Mon opinion : encadrer plutôt qu\'interdire\n5. Conclusion'
    },
    {
      id: 'speak-7',
      type: 'expose',
      title: 'La semaine de 4 jours',
      topic: 'Certaines entreprises expérimentent la semaine de 4 jours. Présentez les avantages et inconvénients et donnez votre avis.',
      instruction: 'Présentez les différents aspects du sujet puis exprimez votre opinion. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Introduction du concept → Avantages → Inconvénients → Exemples concrets → Votre position' },
        { label: 'Contexte', text: 'Plusieurs pays (Islande, Espagne, Japon) testent la semaine de 4 jours avec des résultats encourageants sur la productivité et le bien-être.' },
        { label: 'Connecteurs', text: 'D\'après les études / Il s\'avère que / En contrepartie / À mon sens / Tout bien considéré' },
        { label: 'Vocabulaire', text: 'la productivité, le bien-être au travail, la charge de travail, l\'absentéisme, la rétention des talents, la compétitivité' }
      ],
      sampleOutline: '1. Intro : expérimentations dans plusieurs pays\n2. Avantages : productivité, bien-être, attractivité employeur\n3. Inconvénients : surcharge, pas adapté à tous les secteurs\n4. Exemples : résultats en Islande, Microsoft Japon\n5. Mon avis : à adapter selon les secteurs'
    },
    {
      id: 'speak-8',
      type: 'expose',
      title: 'Le management participatif',
      topic: 'Le management participatif est-il plus efficace que le management traditionnel hiérarchique ?',
      instruction: 'Comparez les deux approches et donnez votre avis argumenté. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Définitions → Management traditionnel (avantages/limites) → Management participatif (avantages/limites) → Comparaison → Conclusion' },
        { label: 'Contexte', text: 'Le management participatif implique les employés dans les décisions. Il favorise l\'engagement mais peut ralentir la prise de décision.' },
        { label: 'Connecteurs', text: 'Contrairement à / Tandis que / Il convient de souligner / En revanche / Pour conclure' },
        { label: 'Vocabulaire', text: 'la hiérarchie, la prise de décision, l\'autonomie, la motivation, l\'engagement, le leadership, la gouvernance, la responsabilisation' }
      ],
      sampleOutline: '1. Intro : évolution des styles de management\n2. Traditionnel : efficace pour décisions rapides, mais démotivant\n3. Participatif : engagement fort, mais lent\n4. Hybride : adapter selon le contexte\n5. Conclusion : tendance vers plus de participation'
    },
    {
      id: 'speak-9',
      type: 'expose',
      title: 'La diversité en entreprise',
      topic: 'La diversité en entreprise est-elle un facteur de performance ou simplement une obligation légale ?',
      instruction: 'Analysez les différentes perspectives et présentez votre point de vue. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Introduction (contexte légal) → Diversité comme performance → Diversité comme obligation → Au-delà du débat → Conclusion' },
        { label: 'Contexte', text: 'La loi impose des quotas (parité, handicap). Mais des études montrent aussi que la diversité stimule l\'innovation et la créativité.' },
        { label: 'Connecteurs', text: 'Il est vrai que / Cela étant / De surcroît / Quant à / En dernière analyse' },
        { label: 'Vocabulaire', text: 'la parité, l\'inclusion, les quotas, la discrimination, l\'égalité des chances, la culture d\'entreprise, la performance collective' }
      ],
      sampleOutline: '1. Intro : cadre légal de la diversité\n2. Argument économique : innovation, créativité, image\n3. Limites : quotas artificiels, résistances\n4. Vision plus large : culture inclusive authentique\n5. Conclusion : à la fois utile et juste'
    },

    // === DÉBAT ===
    {
      id: 'speak-10',
      type: 'debat',
      title: 'Le revenu universel',
      topic: 'Êtes-vous pour ou contre l\'instauration d\'un revenu universel ? Défendez votre position.',
      instruction: 'Choisissez un camp et argumentez. Anticipez les objections et répondez-y. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Position claire → Argument 1 → Argument 2 → Objection anticipée + réponse → Argument 3 → Conclusion forte' },
        { label: 'Pour', text: 'Réduction de la pauvreté, simplification administrative, liberté de choix de carrière, adaptation à l\'automatisation.' },
        { label: 'Contre', text: 'Coût énorme, risque de désincitatif au travail, inflation possible, financement non résolu.' },
        { label: 'Connecteurs', text: 'Je suis convaincu(e) que / On pourrait objecter que... cependant / Il ne faut pas oublier que / En dernier ressort' },
        { label: 'Vocabulaire', text: 'la redistribution, le filet de sécurité, le seuil de pauvreté, la précarité, le financement, les charges sociales, l\'aide sociale' }
      ],
      sampleOutline: '1. Position : pour (ou contre)\n2. Argument principal + exemple\n3. Deuxième argument\n4. "On m\'objectera que..." → réponse\n5. Conclusion : réaffirmer sa position'
    },
    {
      id: 'speak-11',
      type: 'debat',
      title: 'La publicité : information ou manipulation ?',
      topic: 'La publicité informe-t-elle les consommateurs ou les manipule-t-elle ? Prenez position.',
      instruction: 'Défendez votre point de vue en anticipant les arguments adverses. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Thèse claire → Exemples concrets → Concession à l\'adversaire → Réfutation → Conclusion' },
        { label: 'Information', text: 'Permet de comparer, informe sur les nouveautés, stimule la concurrence donc baisse les prix.' },
        { label: 'Manipulation', text: 'Crée des besoins artificiels, cible les enfants, techniques psychologiques, incite à la surconsommation.' },
        { label: 'Connecteurs', text: 'Il est indéniable que / Certes... mais / On ne saurait nier que / Malgré cela / En définitive' },
        { label: 'Vocabulaire', text: 'le matraquage publicitaire, la cible marketing, les techniques de persuasion, le consommateur averti, la réglementation, l\'influence' }
      ],
      sampleOutline: '1. Thèse : principalement manipulation\n2. Techniques psychologiques + exemples\n3. Concession : rôle informatif existe\n4. Mais : l\'aspect manipulateur domine\n5. Solution : éducation médiatique + régulation'
    },
    {
      id: 'speak-12',
      type: 'debat',
      title: 'Faut-il interdire les voitures en centre-ville ?',
      topic: 'Certaines villes interdisent les voitures dans leur centre. Êtes-vous pour ou contre cette mesure ?',
      instruction: 'Défendez votre position avec des arguments solides. Durée : 3 à 5 minutes.',
      prepTime: 120,
      speakMinTime: 180,
      speakMaxTime: 300,
      tips: [
        { label: 'Structure', text: 'Position → Argument environnemental → Argument qualité de vie → Objection (praticité) → Réponse → Conclusion' },
        { label: 'Pour', text: 'Réduction de la pollution, qualité de vie, espaces piétons, transports en commun, santé publique.' },
        { label: 'Contre', text: 'Accessibilité pour les personnes âgées/handicapées, impact sur les commerces, alternatives insuffisantes.' },
        { label: 'Connecteurs', text: 'À mon avis / Il est essentiel de / Bien entendu / Cela dit / En somme' },
        { label: 'Vocabulaire', text: 'la mobilité urbaine, les transports en commun, les zones piétonnes, la pollution, l\'empreinte carbone, l\'accessibilité, la qualité de l\'air' }
      ],
      sampleOutline: '1. Position claire\n2. Environnement : pollution, bruit\n3. Qualité de vie : piétons, terrasses, enfants\n4. Objection : accessibilité → solutions alternatives\n5. Conclusion : vision de la ville de demain'
    }
  ],

  fluencyMetrics: {
    fillerWords: ['euh', 'ben', 'bah', 'hein', 'voilà', 'genre', 'en fait', 'du coup', 'quoi', 'bon'],
    b2Connectors: [
      'néanmoins', 'par ailleurs', 'en revanche', 'de surcroît', 'en définitive',
      'certes', 'toutefois', 'quant à', 'en ce qui concerne', 'il convient de',
      'force est de constater', 'il n\'en demeure pas moins', 'c\'est pourquoi',
      'tout d\'abord', 'en outre', 'd\'une part', 'd\'autre part', 'qui plus est',
      'bien que', 'malgré', 'en somme', 'somme toute', 'il apparaît que',
      'il est indéniable', 'à cet égard', 'en premier lieu', 'par conséquent'
    ],
    sophisticatedVocab: [
      'indéniable', 'prépondérant', 'primordial', 'susciter', 'engendrer',
      'favoriser', 'compromettre', 'considérable', 'fondamental', 'légitime',
      'substantiel', 'pertinent', 'croissant', 'néfaste', 'bénéfique',
      'contribuer', 's\'avérer', 'entraîner', 'nuancé', 'significatif'
    ]
  }
};
