const WRITING_DATA = {
  exercises: [
    // === EXPRESSION ÉCRITE (Structured Essays) ===
    {
      id: 'essay-1',
      type: 'essay',
      title: 'Le Black Friday et les petits commerces',
      prompt: 'Le Black Friday est-il dangereux pour les petits commerces ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Organisez en 3 parties : introduction (contexte + problématique), développement (2-3 arguments), conclusion (prise de position).' },
        { label: 'Argument 1', text: 'Pensez à la concurrence déloyale : les grandes enseignes peuvent se permettre des réductions que les petits commerces ne peuvent pas offrir.' },
        { label: 'Argument 2', text: 'Considérez l\'impact sur les habitudes de consommation : les clients attendent le Black Friday et reportent leurs achats, ce qui nuit aux ventes régulières.' },
        { label: 'Argument 3', text: 'Nuancez : certains petits commerces profitent du Black Friday pour attirer de nouveaux clients et écouler leurs stocks.' },
        { label: 'Connecteurs utiles', text: 'Tout d\'abord / Ensuite / En revanche / De plus / Néanmoins / En conclusion / Force est de constater que / Il convient de souligner que' },
        { label: 'Vocabulaire B2', text: 'la surconsommation, le pouvoir d\'achat, la concurrence déloyale, les marges bénéficiaires, fidéliser la clientèle, une opération commerciale, les détaillants' }
      ],
      sampleAnswer: 'Le Black Friday, importé des États-Unis, suscite un vif débat en France quant à son impact sur les petits commerces. Cette opération commerciale représente-t-elle une menace pour les détaillants locaux ?\n\nTout d\'abord, force est de constater que les grandes enseignes disposent de moyens financiers considérables pour proposer des réductions importantes. Les petits commerçants, dont les marges bénéficiaires sont déjà limitées, ne peuvent pas rivaliser avec de telles promotions. Cette concurrence déloyale risque de détourner la clientèle vers les grandes surfaces.\n\nDe plus, le Black Friday modifie les habitudes de consommation. Les clients reportent leurs achats en attendant les promotions, ce qui affecte les ventes régulières des commerces de proximité pendant plusieurs semaines.\n\nNéanmoins, certains petits commerces tirent parti de cet événement pour attirer de nouveaux clients et écouler leurs stocks. En proposant des offres ciblées, ils peuvent fidéliser une clientèle locale.\n\nEn conclusion, bien que le Black Friday présente des risques pour les petits commerces, une stratégie adaptée peut transformer cette menace en opportunité.'
    },
    {
      id: 'essay-2',
      type: 'essay',
      title: 'Le télétravail : avantages et inconvénients',
      prompt: 'Le télétravail est-il bénéfique pour les employés et les entreprises ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Introduction (contexte post-Covid), développement (avantages puis inconvénients), conclusion (votre avis nuancé).' },
        { label: 'Avantages', text: 'Flexibilité horaire, économie de temps de transport, meilleur équilibre vie pro/perso, réduction des coûts immobiliers pour l\'entreprise.' },
        { label: 'Inconvénients', text: 'Isolement social, difficulté à séparer vie pro/perso, manque de cohésion d\'équipe, risque de surcharge de travail.' },
        { label: 'Connecteurs', text: 'D\'une part / D\'autre part / Certes... mais / Par ailleurs / Toutefois / En somme' },
        { label: 'Vocabulaire B2', text: 'la productivité, le bien-être, le management à distance, la cohésion d\'équipe, l\'autonomie, la qualité de vie au travail, le droit à la déconnexion' }
      ],
      sampleAnswer: 'Depuis la pandémie de Covid-19, le télétravail s\'est imposé comme une nouvelle norme dans le monde professionnel. Mais cette évolution est-elle véritablement bénéfique pour toutes les parties ?\n\nD\'une part, le télétravail offre une flexibilité appréciable aux employés. L\'économie du temps de transport et la possibilité d\'organiser librement sa journée contribuent à un meilleur équilibre entre vie professionnelle et personnelle. Pour les entreprises, cela permet de réduire les coûts immobiliers tout en maintenant la productivité.\n\nD\'autre part, le travail à distance comporte des risques non négligeables. L\'isolement social peut nuire au bien-être des salariés et la cohésion d\'équipe s\'en trouve fragilisée. De plus, la frontière entre vie professionnelle et personnelle tend à s\'estomper.\n\nEn somme, le télétravail représente une avancée significative à condition d\'être encadré. Un modèle hybride, alternant présence au bureau et travail à domicile, semble constituer le meilleur compromis.'
    },
    {
      id: 'essay-3',
      type: 'essay',
      title: 'Les réseaux sociaux en entreprise',
      prompt: 'Les réseaux sociaux sont-ils un atout ou un danger pour les entreprises ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Introduction (omniprésence des réseaux), développement (atouts marketing vs risques de réputation), conclusion.' },
        { label: 'Atouts', text: 'Visibilité accrue, communication directe avec les clients, publicité ciblée à moindre coût, renforcement de l\'image de marque.' },
        { label: 'Dangers', text: 'Bad buzz, atteinte à la réputation, distraction des employés, gestion de crise complexe.' },
        { label: 'Connecteurs', text: 'En premier lieu / Qui plus est / Cependant / Malgré tout / Il n\'en demeure pas moins que / À cet égard' },
        { label: 'Vocabulaire B2', text: 'la notoriété, la e-réputation, le community management, le buzz, la stratégie digitale, le retour sur investissement, fidéliser' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'essay-4',
      type: 'essay',
      title: 'L\'ubérisation de l\'économie',
      prompt: 'L\'ubérisation transforme-t-elle positivement le monde du travail ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Introduction (définir l\'ubérisation), arguments pour et contre, conclusion nuancée.' },
        { label: 'Aspects positifs', text: 'Flexibilité pour les travailleurs, innovation dans les services, prix plus compétitifs, accès facilité pour les consommateurs.' },
        { label: 'Aspects négatifs', text: 'Précarité de l\'emploi, absence de protection sociale, concurrence déloyale envers les entreprises traditionnelles.' },
        { label: 'Connecteurs', text: 'Il est indéniable que / En effet / À l\'inverse / Or / C\'est pourquoi / En définitive' },
        { label: 'Vocabulaire B2', text: 'la précarité, l\'autoentrepreneur, la disruption, le statut d\'indépendant, la protection sociale, la dérégulation, un modèle économique' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'essay-5',
      type: 'essay',
      title: 'La transition écologique des entreprises',
      prompt: 'Les entreprises doivent-elles placer l\'écologie au cœur de leur stratégie ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Introduction (urgence climatique + rôle des entreprises), arguments, conclusion.' },
        { label: 'Pour', text: 'Responsabilité sociétale, attentes des consommateurs, avantage concurrentiel, réduction des coûts à long terme (énergie, déchets).' },
        { label: 'Contre/Nuances', text: 'Coût de la transition, risque de greenwashing, petites entreprises moins capables d\'investir.' },
        { label: 'Connecteurs', text: 'Face à ce constat / Il apparaît clairement que / Bien que / En dépit de / Somme toute' },
        { label: 'Vocabulaire B2', text: 'la RSE, le développement durable, l\'empreinte carbone, le greenwashing, la responsabilité sociétale, la chaîne d\'approvisionnement, les énergies renouvelables' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'essay-6',
      type: 'essay',
      title: 'L\'impact des réseaux sociaux sur l\'image des entreprises',
      prompt: 'Les réseaux sociaux ont-ils fondamentalement changé la manière dont les entreprises gèrent leur image ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Introduction (omniprésence des réseaux sociaux dans la communication corporate), développement (opportunités vs risques), conclusion (prise de position nuancée).' },
        { label: 'Argument 1', text: 'Les réseaux sociaux permettent une communication directe et instantanée avec les consommateurs, renforçant la proximité et la transparence.' },
        { label: 'Argument 2', text: 'Cependant, un bad buzz peut se propager en quelques heures et causer des dommages considérables à la réputation d\'une entreprise.' },
        { label: 'Argument 3', text: 'Les entreprises doivent adapter leur stratégie en recrutant des community managers et en mettant en place une veille permanente.' },
        { label: 'Connecteurs utiles', text: 'Il est indéniable que / En effet / Cependant / À cet égard / Force est de constater / Il n\'en demeure pas moins que / En définitive' },
        { label: 'Vocabulaire B2', text: 'la e-réputation, le bad buzz, le community management, la viralité, la transparence, la veille numérique, l\'image de marque, la communication de crise, les influenceurs' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'essay-7',
      type: 'essay',
      title: 'Le management interculturel : un défi pour les entreprises mondiales',
      prompt: 'Comment les entreprises internationales peuvent-elles relever le défi du management interculturel ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Introduction (mondialisation et diversité des équipes), développement (défis puis solutions), conclusion (votre avis).' },
        { label: 'Argument 1', text: 'Les différences culturelles peuvent engendrer des malentendus dans la communication, les méthodes de travail et la prise de décision.' },
        { label: 'Argument 2', text: 'La diversité culturelle constitue aussi une richesse : elle favorise la créativité, l\'innovation et une meilleure compréhension des marchés locaux.' },
        { label: 'Argument 3', text: 'Les entreprises doivent investir dans la formation interculturelle et promouvoir un management inclusif pour tirer parti de cette diversité.' },
        { label: 'Connecteurs utiles', text: 'De nos jours / Tout d\'abord / Par ailleurs / Malgré tout / Il convient de souligner que / En somme / C\'est pourquoi' },
        { label: 'Vocabulaire B2', text: 'le management interculturel, la diversité, l\'inclusion, les barrières culturelles, les malentendus, la cohésion d\'équipe, la mobilité internationale, l\'adaptabilité, les compétences interculturelles' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'essay-8',
      type: 'essay',
      title: 'Faut-il favoriser le « made in local » face à la mondialisation ?',
      prompt: 'Les consommateurs et les entreprises devraient-ils privilégier la production locale face à la mondialisation ?',
      instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
      wordTarget: 170,
      tips: [
        { label: 'Structure', text: 'Introduction (tendance du consommer local vs économie mondialisée), développement (pour et contre), conclusion nuancée.' },
        { label: 'Argument 1', text: 'La production locale réduit l\'empreinte carbone liée au transport et soutient l\'emploi dans les territoires.' },
        { label: 'Argument 2', text: 'Toutefois, la mondialisation permet l\'accès à des produits variés et à moindre coût, ce qui profite au pouvoir d\'achat des consommateurs.' },
        { label: 'Argument 3', text: 'Un compromis pourrait être trouvé : favoriser le local quand c\'est possible tout en maintenant des échanges internationaux raisonnés.' },
        { label: 'Connecteurs utiles', text: 'Face à ce constat / Il apparaît clairement que / Certes... mais / Bien que / Néanmoins / Somme toute / En définitive' },
        { label: 'Vocabulaire B2', text: 'le circuit court, la production locale, la mondialisation, le pouvoir d\'achat, l\'empreinte carbone, la relocalisation, le protectionnisme, la compétitivité, le commerce équitable' }
      ],
      sampleAnswer: ''
    },

    // === E-MAILS DE MOTIVATION ===
    {
      id: 'email-1',
      type: 'email',
      title: 'Coordinateur/Coordinatrice marketing — Tourbillon',
      prompt: 'Rédigez votre e-mail de motivation en réponse à l\'annonce suivante.',
      instruction: 'Écrivez un e-mail de motivation (~120 mots). N\'oubliez pas : objet, formule d\'appel, corps structuré, formule de politesse.',
      wordTarget: 120,
      jobAd: {
        company: 'Tourbillon (Swatch Group)',
        position: 'Coordinateur/Coordinatrice marketing',
        location: 'Bienne, Suisse',
        mission: 'Traiter et gérer les activités marketing. Organisation des événements et expositions. Gestion du matériel marketing. Mise à jour du site internet. Gestion des appels d\'offres. Suivi du budget marketing.',
        profile: 'Excellente présentation, sens des relations, flexibilité, esprit créatif, goût des voyages. Expérience dans le marketing et les relations publiques. Études universitaires.',
        languages: 'Français ou allemand, anglais courant. Autre langue = avantage.',
        contact: 'Madame Daphné Léchenne'
      },
      tips: [
        { label: 'Format e-mail', text: 'Objet : Candidature au poste de Coordinateur/trice marketing\nMadame Léchenne,\n[corps]\nFormule de politesse + signature' },
        { label: 'Paragraphe 1', text: 'Exprimez votre intérêt pour le poste et la marque. Mentionnez où vous avez vu l\'annonce.' },
        { label: 'Paragraphe 2', text: 'Présentez vos compétences clés en lien avec le profil recherché : expérience marketing, langues, qualités personnelles.' },
        { label: 'Paragraphe 3', text: 'Montrez votre motivation et proposez un entretien.' },
        { label: 'Formules utiles', text: 'Je me permets de vous adresser ma candidature... / Fort(e) de mon expérience en... / Je serais ravi(e) de... / Dans l\'attente de votre réponse... / Veuillez agréer, Madame, l\'expression de mes salutations distinguées.' },
        { label: 'Vocabulaire B2', text: 'postuler, une candidature, les compétences, polyvalent(e), bilingue, un atout, contribuer à, mettre en œuvre' }
      ],
      sampleAnswer: 'Objet : Candidature au poste de Coordinatrice marketing\n\nMadame Léchenne,\n\nVotre annonce pour un poste de coordinateur marketing chez Tourbillon a vivement retenu mon attention. Passionnée par l\'univers du luxe et de l\'horlogerie, je souhaite mettre mes compétences au service de votre maison.\n\nDiplômée en marketing et communication, je dispose de trois ans d\'expérience dans la gestion de projets événementiels et le suivi de campagnes marketing. Polyvalente et créative, je maîtrise le français, l\'allemand et l\'anglais, ce qui constitue un atout pour un groupe international comme Swatch Group.\n\nJe serais ravie de vous présenter ma candidature lors d\'un entretien. Dans l\'attente de votre réponse, je vous prie d\'agréer, Madame, l\'expression de mes salutations distinguées.\n\n[Prénom Nom]'
    },
    {
      id: 'email-2',
      type: 'email',
      title: 'Stage en communication — Startup tech',
      prompt: 'Rédigez un e-mail de motivation pour un stage de 6 mois en communication dans une startup technologique à Paris.',
      instruction: 'Écrivez un e-mail de motivation (~120 mots). N\'oubliez pas : objet, formule d\'appel, corps structuré, formule de politesse.',
      wordTarget: 120,
      jobAd: {
        company: 'NovaTech Solutions',
        position: 'Stagiaire en communication',
        location: 'Paris, France',
        mission: 'Rédaction de contenus pour les réseaux sociaux et le blog. Création de supports visuels. Organisation d\'événements internes. Veille concurrentielle et analyse des tendances du marché.',
        profile: 'Étudiant(e) en communication ou marketing. Créatif/ve, autonome, à l\'aise avec les outils numériques. Bonne capacité rédactionnelle.',
        languages: 'Français natif, anglais B2 minimum.',
        contact: 'Monsieur Thomas Durand'
      },
      tips: [
        { label: 'Format e-mail', text: 'Objet : Candidature pour le stage en communication\nMonsieur Durand,\n[corps]\nFormule de politesse + signature' },
        { label: 'Paragraphe 1', text: 'Présentez-vous brièvement (formation, année d\'études) et exprimez votre intérêt pour le stage.' },
        { label: 'Paragraphe 2', text: 'Mettez en avant vos compétences : réseaux sociaux, rédaction, créativité, outils numériques.' },
        { label: 'Paragraphe 3', text: 'Expliquez pourquoi cette startup vous attire et ce que vous pouvez apporter.' },
        { label: 'Formules utiles', text: 'Actuellement étudiant(e) en... / Je souhaiterais intégrer votre équipe... / Ma formation m\'a permis de développer... / Je suis convaincu(e) que... / Cordialement' },
        { label: 'Vocabulaire B2', text: 'un stage, une candidature spontanée, les compétences rédactionnelles, la veille, le community management, la stratégie digitale' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'email-3',
      type: 'email',
      title: 'Réclamation — Livraison défectueuse',
      prompt: 'Vous avez commandé du matériel de bureau pour votre entreprise. La livraison est arrivée avec des articles endommagés. Rédigez un e-mail de réclamation.',
      instruction: 'Écrivez un e-mail formel de réclamation (~120 mots). Soyez poli mais ferme. Demandez une solution concrète.',
      wordTarget: 120,
      tips: [
        { label: 'Format', text: 'Objet : Réclamation — Commande n°XXXX\nMadame, Monsieur,\n[corps]\nFormule de politesse' },
        { label: 'Paragraphe 1', text: 'Rappelez les faits : date de commande, numéro, ce qui a été commandé.' },
        { label: 'Paragraphe 2', text: 'Décrivez le problème : articles endommagés, quantité incorrecte, etc.' },
        { label: 'Paragraphe 3', text: 'Demandez une solution : remplacement, remboursement, avoir. Fixez un délai.' },
        { label: 'Formules utiles', text: 'Je me permets de vous contacter au sujet de... / J\'ai le regret de constater que... / Je vous saurais gré de bien vouloir... / Dans l\'attente d\'une réponse rapide de votre part...' },
        { label: 'Vocabulaire B2', text: 'une réclamation, un litige, un dédommagement, un avoir, le bon de commande, la livraison, un article défectueux, le service après-vente' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'email-4',
      type: 'email',
      title: 'Demande de renseignements — Formation',
      prompt: 'Vous souhaitez suivre une formation en gestion de projet dans un institut professionnel. Rédigez un e-mail pour demander des informations.',
      instruction: 'Écrivez un e-mail formel (~120 mots). Posez des questions sur le programme, les tarifs, et les modalités d\'inscription.',
      wordTarget: 120,
      tips: [
        { label: 'Format', text: 'Objet : Demande de renseignements — Formation en gestion de projet\nMadame, Monsieur,\n[corps]\nFormule de politesse' },
        { label: 'Paragraphe 1', text: 'Présentez-vous et expliquez comment vous avez entendu parler de la formation.' },
        { label: 'Paragraphe 2', text: 'Posez vos questions : dates, durée, programme détaillé, prérequis, tarifs, possibilité de financement.' },
        { label: 'Paragraphe 3', text: 'Remerciez et demandez si un rendez-vous est possible.' },
        { label: 'Formules utiles', text: 'Je me permets de vous écrire afin de... / Pourriez-vous me communiquer... / Je souhaiterais savoir si... / Je vous remercie par avance pour votre réponse...' },
        { label: 'Vocabulaire B2', text: 'une formation professionnelle, les modalités d\'inscription, un prérequis, le programme, la certification, les frais de scolarité, un financement' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'email-5',
      type: 'email',
      title: 'Proposition commerciale — Partenariat',
      prompt: 'Vous travaillez pour une agence de communication. Rédigez un e-mail à une entreprise pour proposer un partenariat marketing.',
      instruction: 'Écrivez un e-mail professionnel (~120 mots). Présentez votre agence, proposez une collaboration concrète.',
      wordTarget: 120,
      tips: [
        { label: 'Format', text: 'Objet : Proposition de partenariat marketing\nMadame, Monsieur,\n[corps]\nFormule de politesse' },
        { label: 'Paragraphe 1', text: 'Présentez brièvement votre agence et son expertise.' },
        { label: 'Paragraphe 2', text: 'Expliquez en quoi un partenariat serait mutuellement bénéfique. Proposez des actions concrètes.' },
        { label: 'Paragraphe 3', text: 'Proposez une rencontre pour discuter des détails.' },
        { label: 'Formules utiles', text: 'Nous nous permettons de vous contacter... / Notre agence est spécialisée dans... / Nous serions ravis de... / Nous restons à votre disposition pour...' },
        { label: 'Vocabulaire B2', text: 'un partenariat, une synergie, une collaboration, la visibilité, une stratégie commune, le retour sur investissement, une proposition commerciale' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'email-6',
      type: 'email',
      title: 'Demande de congé exceptionnel',
      prompt: 'Vous devez vous absenter pour des raisons personnelles urgentes. Rédigez un e-mail formel à votre service des ressources humaines pour demander un congé exceptionnel de trois jours.',
      instruction: 'Écrivez un e-mail formel (~120 mots). Expliquez la raison, précisez les dates et proposez des solutions pour assurer la continuité du travail.',
      wordTarget: 120,
      jobAd: {
        company: 'Votre entreprise actuelle',
        position: 'Votre poste actuel',
        location: 'France',
        mission: 'Demande de congé exceptionnel pour raisons personnelles urgentes.',
        profile: 'Salarié(e) souhaitant obtenir une autorisation d\'absence.',
        languages: 'Français',
        contact: 'Madame Isabelle Renard, Responsable RH'
      },
      tips: [
        { label: 'Format', text: 'Objet : Demande de congé exceptionnel\nMadame Renard,\n[corps]\nFormule de politesse' },
        { label: 'Paragraphe 1', text: 'Expliquez brièvement la raison de votre demande (raisons familiales, personnelles) sans entrer dans les détails intimes.' },
        { label: 'Paragraphe 2', text: 'Précisez les dates souhaitées et la durée de l\'absence.' },
        { label: 'Paragraphe 3', text: 'Proposez des solutions : délégation de tâches, rattrapage, collègue qui assure l\'intérim.' },
        { label: 'Formules utiles', text: 'Je me permets de solliciter... / En raison de circonstances exceptionnelles... / Je m\'engage à... / Je reste joignable par e-mail en cas d\'urgence... / Je vous remercie de votre compréhension...' },
        { label: 'Vocabulaire B2', text: 'un congé exceptionnel, une autorisation d\'absence, la continuité du service, déléguer, assurer l\'intérim, les circonstances, une dérogation' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'email-7',
      type: 'email',
      title: 'Compte rendu de réunion',
      prompt: 'Vous venez de participer à une réunion d\'équipe importante. Rédigez un e-mail à vos collègues pour leur envoyer le compte rendu avec les décisions prises et les actions à mener.',
      instruction: 'Écrivez un e-mail professionnel (~120 mots). Résumez les points abordés, les décisions et les responsabilités de chacun.',
      wordTarget: 120,
      jobAd: {
        company: 'Votre entreprise actuelle',
        position: 'Votre poste actuel',
        location: 'France',
        mission: 'Envoi du compte rendu de la réunion du 24 mars concernant le projet de refonte du site web.',
        profile: 'Membre de l\'équipe projet chargé(e) de la rédaction du compte rendu.',
        languages: 'Français',
        contact: 'L\'équipe projet'
      },
      tips: [
        { label: 'Format', text: 'Objet : Compte rendu — Réunion projet du [date]\nChers collègues / Chers tous,\n[corps]\nCordialement' },
        { label: 'Paragraphe 1', text: 'Rappelez le contexte : date, participants, objet de la réunion.' },
        { label: 'Paragraphe 2', text: 'Résumez les points principaux abordés et les décisions prises. Utilisez une liste si nécessaire.' },
        { label: 'Paragraphe 3', text: 'Précisez les actions à mener, les responsables et les échéances. Invitez les collègues à vous signaler toute correction.' },
        { label: 'Formules utiles', text: 'Comme convenu lors de notre réunion... / Les points suivants ont été abordés... / Il a été décidé que... / Chacun est prié de... / N\'hésitez pas à me signaler toute inexactitude...' },
        { label: 'Vocabulaire B2', text: 'un compte rendu, l\'ordre du jour, les points abordés, une décision, une action à mener, une échéance, un responsable, le suivi' }
      ],
      sampleAnswer: ''
    },
    {
      id: 'email-8',
      type: 'email',
      title: 'Proposition d\'amélioration interne',
      prompt: 'Vous avez identifié un processus inefficace dans votre service. Rédigez un e-mail à votre responsable pour proposer une amélioration concrète.',
      instruction: 'Écrivez un e-mail professionnel (~120 mots). Décrivez le problème actuel, proposez une solution et expliquez les bénéfices attendus.',
      wordTarget: 120,
      jobAd: {
        company: 'Votre entreprise actuelle',
        position: 'Votre poste actuel',
        location: 'France',
        mission: 'Proposition de dématérialisation du processus de validation des notes de frais, actuellement géré en format papier.',
        profile: 'Collaborateur/trice souhaitant améliorer l\'efficacité du service.',
        languages: 'Français',
        contact: 'Monsieur Philippe Garnier, Chef de service'
      },
      tips: [
        { label: 'Format', text: 'Objet : Proposition d\'amélioration — Processus de validation des notes de frais\nMonsieur Garnier,\n[corps]\nFormule de politesse' },
        { label: 'Paragraphe 1', text: 'Exposez le problème actuel : lenteur du processus papier, risques d\'erreur, perte de documents.' },
        { label: 'Paragraphe 2', text: 'Proposez votre solution : outil numérique, nouveau workflow, automatisation. Soyez concret.' },
        { label: 'Paragraphe 3', text: 'Expliquez les bénéfices : gain de temps, réduction des erreurs, meilleure traçabilité. Proposez d\'en discuter.' },
        { label: 'Formules utiles', text: 'Je me permets de vous soumettre une proposition... / J\'ai constaté que... / Il me semble que... / Cette solution permettrait de... / Je reste à votre disposition pour en discuter...' },
        { label: 'Vocabulaire B2', text: 'une amélioration, un processus, l\'optimisation, la dématérialisation, l\'efficacité, la traçabilité, un gain de productivité, une proposition, mettre en place' }
      ],
      sampleAnswer: ''
    }
  ],

  // Feedback criteria for the correction system
  criteria: {
    essay: {
      structure: {
        intro: ['tout d\'abord', 'en premier lieu', 'il est indéniable', 'force est de constater', 'il convient de', 'de nos jours', 'actuellement', 'depuis quelques années', 'face à', 'la question se pose'],
        development: ['de plus', 'en outre', 'par ailleurs', 'qui plus est', 'en effet', 'c\'est pourquoi', 'à cet égard', 'd\'une part', 'd\'autre part', 'certes', 'néanmoins', 'cependant', 'toutefois', 'en revanche', 'à l\'inverse', 'malgré', 'bien que', 'quoique', 'or'],
        conclusion: ['en conclusion', 'en somme', 'en définitive', 'pour conclure', 'somme toute', 'il apparaît que', 'en fin de compte', 'au final', 'il n\'en demeure pas moins']
      },
      b2markers: ['subjonctif', 'conditionnel', 'gérondif', 'dont', 'auquel', 'duquel', 'ce qui', 'ce que', 'bien que', 'quoique', 'afin que', 'pour que', 'à condition que', 'à moins que', 'il est essentiel que', 'il est nécessaire que'],
      sophisticatedVocab: ['indéniable', 'considérable', 'significatif', 'fondamental', 'primordial', 'légitime', 'nuancé', 'substantiel', 'pertinent', 'croissant', 'prépondérant', 'notoire', 'préoccupant', 'bénéfique', 'néfaste', 'susciter', 'engendrer', 'favoriser', 'compromettre', 'entraîner', 's\'avérer', 'contribuer']
    },
    email: {
      greetings: ['madame', 'monsieur', 'cher', 'chère'],
      closings: ['salutations distinguées', 'cordialement', 'salutations', 'sentiments distingués', 'haute considération', 'meilleures salutations', 'veuillez agréer', 'je vous prie'],
      formalMarkers: ['je me permets', 'je souhaiterais', 'je serais', 'pourriez-vous', 'auriez-vous', 'je vous saurais gré', 'je vous remercie', 'dans l\'attente', 'suite à', 'concernant', 'en ce qui concerne', 'je reste à votre disposition']
    }
  }
};
