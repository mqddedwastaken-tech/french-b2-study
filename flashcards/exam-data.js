const EXAM_DATA = [
  // ============================
  // EXAM 1
  // ============================
  {
    id: 'exam-1',
    title: 'Test écrit n°1 — Le commerce équitable',
    duration: 120,
    sections: [
      // --- I. Compréhension écrite /20 ---
      {
        id: 's1',
        title: 'I. Compréhension écrite',
        points: 20,
        text: {
          title: 'Le commerce équitable en pleine expansion',
          source: 'Le Monde Économie, 15 mai 2023',
          content: `Le commerce équitable connaît un essor remarquable en France. En 2022, les ventes de produits labellisés commerce équitable ont atteint 2,1 milliards d'euros, soit une hausse de 8 % par rapport à l'année précédente. Ce succès s'explique par une prise de conscience croissante des consommateurs français qui souhaitent donner du sens à leurs achats.\n\nLe principe du commerce équitable repose sur une rémunération juste des producteurs, notamment dans les pays en développement. Contrairement au commerce conventionnel, les prix ne sont pas fixés par les seules lois du marché, mais intègrent les coûts réels de production et permettent aux producteurs de vivre dignement de leur travail.\n\nCependant, le commerce équitable fait face à plusieurs défis. Le premier est celui du prix : les produits équitables coûtent en moyenne 20 à 30 % plus cher que leurs équivalents conventionnels. Dans un contexte d'inflation, cette différence de prix constitue un frein pour de nombreux ménages. Le deuxième défi concerne la grande distribution, qui représente désormais 55 % des ventes de produits équitables. Si cette présence en supermarché améliore l'accessibilité, certains puristes du mouvement craignent une dilution des valeurs fondatrices.\n\nPar ailleurs, la multiplication des labels crée une confusion chez les consommateurs. Entre Fairtrade, Max Havelaar, Biopartenaire et d'autres certifications, il devient difficile de s'y retrouver. Une étude récente révèle que 62 % des Français ne font pas la différence entre les différents labels.\n\nMalgré ces obstacles, les perspectives restent encourageantes. Le gouvernement français a annoncé un plan de soutien au commerce équitable, avec l'objectif de doubler les ventes d'ici 2030. Les entreprises françaises sont également de plus en plus nombreuses à intégrer des produits équitables dans leur politique de responsabilité sociale.`
        },
        exercises: [
          {
            type: 'vrai-faux',
            title: 'I.1 Vrai, Faux ou Non-mentionné',
            points: 6,
            items: [
              { statement: 'Les ventes de produits équitables ont dépassé 2 milliards d\'euros en 2022.', answer: 'vrai' },
              { statement: 'Le commerce équitable garantit un prix minimum aux producteurs indépendamment du marché.', answer: 'vrai' },
              { statement: 'Les produits équitables sont principalement vendus dans des magasins spécialisés.', answer: 'faux' },
              { statement: 'La France est le premier pays européen en termes de ventes de produits équitables.', answer: 'nm' },
              { statement: 'Plus de la moitié des Français confondent les différents labels équitables.', answer: 'vrai' },
              { statement: 'Le gouvernement prévoit de rendre obligatoire l\'achat de produits équitables pour les entreprises.', answer: 'nm' }
            ]
          },
          {
            type: 'synonymes',
            title: 'I.2 Choisissez le synonyme qui convient',
            points: 4,
            items: [
              { word: 'essor', options: ['déclin', 'croissance', 'stabilité'], correct: 1 },
              { word: 'frein', options: ['obstacle', 'avantage', 'accélération'], correct: 0 },
              { word: 'dilution', options: ['renforcement', 'affaiblissement', 'disparition'], correct: 1 },
              { word: 'perspectives', options: ['résultats', 'problèmes', 'prévisions'], correct: 2 }
            ]
          },
          {
            type: 'mc',
            title: 'I.3 Choisissez la bonne réponse',
            points: 3,
            items: [
              {
                question: 'Le prix des produits équitables est plus élevé parce que :',
                options: ['les distributeurs prennent une marge excessive', 'ils intègrent une rémunération juste pour les producteurs', 'les labels de certification sont très coûteux'],
                correct: 1
              },
              {
                question: 'La présence des produits équitables en grande distribution :',
                options: ['est unanimement saluée par le mouvement équitable', 'divise les acteurs du commerce équitable', 'est interdite par certains labels'],
                correct: 1
              },
              {
                question: 'L\'objectif du gouvernement pour le commerce équitable est de :',
                options: ['multiplier les ventes par deux d\'ici 2030', 'créer un label unique pour simplifier le choix', 'imposer des quotas de produits équitables'],
                correct: 0
              }
            ]
          },
          {
            type: 'open',
            title: 'I.4 Compréhension globale — Répondez en 2-3 phrases',
            points: 7,
            items: [
              { question: 'Quels sont les deux principaux défis du commerce équitable mentionnés dans le texte ?', guideline: 'Mentionner le prix plus élevé et la confusion des labels (ou la dilution des valeurs via la grande distribution).' },
              { question: 'Pourquoi la présence en grande distribution est-elle à la fois positive et problématique ?', guideline: 'Positive : accessibilité pour les consommateurs. Problématique : risque de dilution des valeurs fondatrices du mouvement.' },
              { question: 'Quels éléments montrent que le commerce équitable a un avenir prometteur en France ?', guideline: 'Croissance des ventes (+8%), plan gouvernemental, engagement croissant des entreprises dans la RSE.' }
            ]
          }
        ]
      },
      // --- II. Terminologie et grammaire /32 ---
      {
        id: 's2',
        title: 'II. Connaissances de terminologie et grammaire',
        points: 32,
        exercises: [
          {
            type: 'definition',
            title: 'II.1 Choisissez la bonne définition',
            points: 6,
            items: [
              { term: 'le chiffre d\'affaires', options: ['le nombre d\'employés', 'le total des ventes d\'une entreprise', 'le bénéfice net', 'le capital social'], correct: 1 },
              { term: 'une filiale', options: ['un fournisseur régulier', 'un concurrent direct', 'une entreprise contrôlée par une autre', 'un partenaire commercial'], correct: 2 },
              { term: 'la marge bénéficiaire', options: ['la différence entre le prix de vente et le coût de production', 'le salaire du directeur', 'le budget marketing', 'le montant des impôts'], correct: 0 },
              { term: 'un créneau', options: ['un horaire de travail', 'un segment de marché spécifique', 'un type de contrat', 'une formation professionnelle'], correct: 1 },
              { term: 'la sous-traitance', options: ['le licenciement collectif', 'la délocalisation', 'confier une partie du travail à une autre entreprise', 'la fusion de deux entreprises'], correct: 2 },
              { term: 'un brevet', options: ['un diplôme universitaire', 'un document protégeant une invention', 'un contrat de travail', 'un rapport annuel'], correct: 1 }
            ]
          },
          {
            type: 'fill-terminology',
            title: 'II.2 Complétez avec le terme qui convient',
            points: 6,
            items: [
              { sentence: 'L\'entreprise a décidé de ______________ ses activités en Asie pour conquérir de nouveaux marchés.', options: ['délocaliser', 'licencier', 'fusionner'], correct: 0 },
              { sentence: 'Le département marketing a lancé une campagne pour améliorer la ______________ de la marque.', options: ['rentabilité', 'notoriété', 'concurrence'], correct: 1 },
              { sentence: 'Les ______________ ont voté contre la nouvelle stratégie lors de l\'assemblée générale.', options: ['actionnaires', 'fournisseurs', 'consommateurs'], correct: 0 },
              { sentence: 'Pour obtenir ce poste, il faut avoir au minimum cinq ans d\' ______________ dans le secteur.', options: ['ancienneté', 'expérience', 'absence'], correct: 1 },
              { sentence: 'La ______________ entre les deux géants du numérique s\'intensifie chaque année.', options: ['collaboration', 'concurrence', 'fusion'], correct: 1 },
              { sentence: 'L\'entreprise a réalisé un ______________ record grâce à ses exportations.', options: ['déficit', 'chiffre d\'affaires', 'licenciement'], correct: 1 }
            ]
          },
          {
            type: 'cloze',
            title: 'II.3 Complétez le texte avec les mots proposés',
            points: 8,
            instruction: 'Placez les mots suivants dans le texte. Deux mots sont en trop.',
            words: ['investisseurs', 'croissance', 'innovation', 'marché', 'concurrence', 'exportations', 'bénéfices', 'faillite', 'stratégie', 'consommateurs'],
            text: 'L\'industrie pharmaceutique suisse connaît une ____1____ exceptionnelle depuis plusieurs années. Les grandes entreprises du secteur investissent massivement dans l\' ____2____ pour développer de nouveaux médicaments. Le ____3____ mondial représente une opportunité considérable, mais la ____4____ des laboratoires asiatiques s\'intensifie. Pour maintenir leurs ____5____ , les groupes suisses misent sur une ____6____ d\'excellence et de qualité. Les ____7____ apprécient particulièrement la fiabilité des produits suisses, ce qui explique le succès des ____8____ vers l\'Europe et les États-Unis.',
            answers: ['croissance', 'innovation', 'marché', 'concurrence', 'bénéfices', 'stratégie', 'consommateurs', 'exportations'],
            extras: ['investisseurs', 'faillite']
          },
          {
            type: 'conjugation',
            title: 'II.4 Conjuguez les verbes entre parenthèses',
            points: 12,
            intro: 'La crise du logement en Suisse',
            items: [
              { before: 'Les prix de l\'immobilier', verb: 'augmenter', after: 'considérablement depuis dix ans.', tense: 'passé composé', answer: 'ont augmenté' },
              { before: 'Si les taux d\'intérêt continuent de monter, de nombreux ménages', verb: 'ne plus pouvoir', after: 'accéder à la propriété.', tense: 'futur simple', answer: 'ne pourront plus' },
              { before: 'Le gouvernement', verb: 'annoncer', after: 'hier de nouvelles mesures pour réguler le marché.', tense: 'passé composé', answer: 'a annoncé' },
              { before: 'Bien que les constructeurs', verb: 'promettre', after: 'de bâtir davantage de logements, la situation reste tendue.', tense: 'subjonctif présent', answer: 'promettent' },
              { before: 'Les loyers', verb: 'ne cesser', after: 'de grimper dans les grandes villes depuis 2015.', tense: 'passé composé', answer: 'n\'ont cessé' },
              { before: 'Il', verb: 'falloir', after: 'construire 50 000 logements par an pour répondre à la demande.', tense: 'conditionnel présent', answer: 'faudrait' },
              { before: 'Les experts', verb: 'prévoir', after: 'que la crise durera encore plusieurs années.', tense: 'présent', answer: 'prévoient' },
              { before: 'En', verb: 'investir', after: 'dans les zones rurales, on pourrait désengorger les villes.', tense: 'gérondif', answer: 'investissant' },
              { before: 'Le ministre', verb: 'souhaiter', after: 'que les communes participent activement à cet effort.', tense: 'présent', answer: 'souhaite' },
              { before: 'Avant que la loi', verb: 'être', after: 'votée, plusieurs amendements doivent être discutés.', tense: 'subjonctif présent', answer: 'soit' },
              { before: 'Les citoyens', verb: 's\'inquiéter', after: 'de la hausse constante des charges locatives.', tense: 'présent', answer: 's\'inquiètent' },
              { before: 'Si le parlement avait agi plus tôt, la situation', verb: 'ne pas se dégrader', after: 'à ce point.', tense: 'conditionnel passé', answer: 'ne se serait pas dégradée' }
            ]
          }
        ]
      },
      // --- III. Expression écrite /12 ---
      {
        id: 's3',
        title: 'III. Expression écrite',
        points: 12,
        exercise: {
          type: 'essay',
          prompt: 'Le commerce en ligne menace-t-il la survie des commerces de proximité ?',
          instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
          wordTarget: 170
        }
      },
      // --- IV. E-mail /12 ---
      {
        id: 's4',
        title: 'IV. E-mail professionnel',
        points: 12,
        exercise: {
          type: 'email',
          prompt: 'Rédigez un e-mail de motivation en réponse à l\'annonce suivante.',
          instruction: 'Écrivez un e-mail professionnel (~120 mots). N\'oubliez pas : objet, formule d\'appel, corps structuré, formule de politesse.',
          wordTarget: 120,
          jobAd: {
            company: 'GreenTech Solutions SA',
            position: 'Chef(fe) de projet développement durable',
            location: 'Genève, Suisse',
            mission: 'Piloter les projets de transition écologique de nos clients entreprises. Coordonner les équipes internes et externes. Élaborer les rapports RSE. Assurer la veille réglementaire environnementale.',
            profile: 'Formation supérieure en environnement ou gestion. 3 ans d\'expérience minimum. Rigueur, leadership, esprit d\'analyse. Sensibilité aux enjeux environnementaux.',
            languages: 'Français courant, anglais professionnel. Allemand un atout.',
            contact: 'Monsieur Jean-Marc Bertrand, directeur RH'
          }
        }
      }
    ]
  },

  // ============================
  // EXAM 2
  // ============================
  {
    id: 'exam-2',
    title: 'Test écrit n°2 — La transformation numérique',
    duration: 120,
    sections: [
      {
        id: 's1',
        title: 'I. Compréhension écrite',
        points: 20,
        text: {
          title: 'La transformation numérique des PME françaises',
          source: 'Les Échos, 22 septembre 2023',
          content: `La transformation numérique est devenue un enjeu majeur pour les petites et moyennes entreprises françaises. Selon une enquête de Bpifrance, 87 % des dirigeants de PME considèrent le numérique comme une opportunité, mais seulement 36 % ont véritablement entamé leur transition digitale.\n\nLe constat est préoccupant : les PME françaises accusent un retard significatif par rapport à leurs homologues européennes, notamment allemandes et nordiques. Ce retard s'explique par plusieurs facteurs : le manque de compétences internes, les coûts perçus comme prohibitifs et une certaine résistance au changement de la part des dirigeants les plus expérimentés.\n\nPourtant, les entreprises qui ont franchi le pas en tirent des bénéfices considérables. L'automatisation des processus administratifs permet de réduire les coûts de fonctionnement de 15 à 25 %. Le commerce en ligne ouvre de nouveaux marchés, parfois à l'international. Et l'analyse des données clients permet d'affiner les stratégies commerciales avec une précision inédite.\n\nLe gouvernement a lancé le programme « France Num » doté de 200 millions d'euros pour accompagner les PME dans cette transition. Des conseillers numériques sont déployés dans chaque région pour proposer des diagnostics gratuits et orienter les entreprises vers les solutions adaptées à leurs besoins.\n\nMais la transformation numérique ne se résume pas à l'adoption d'outils technologiques. Elle implique une refonte profonde de l'organisation, de la culture d'entreprise et des méthodes de travail. Les experts insistent sur la nécessité de former l'ensemble des collaborateurs, pas uniquement le service informatique, pour garantir le succès de cette transition.`
        },
        exercises: [
          {
            type: 'vrai-faux',
            title: 'I.1 Vrai, Faux ou Non-mentionné',
            points: 6,
            items: [
              { statement: 'La majorité des dirigeants de PME voient le numérique comme une chance.', answer: 'vrai' },
              { statement: 'Plus d\'un tiers des PME ont commencé leur transformation digitale.', answer: 'vrai' },
              { statement: 'Les PME allemandes sont en retard par rapport aux PME françaises.', answer: 'faux' },
              { statement: 'Le programme France Num est financé par l\'Union européenne.', answer: 'nm' },
              { statement: 'L\'automatisation peut réduire les coûts de fonctionnement d\'un quart.', answer: 'vrai' },
              { statement: 'Les PME du secteur industriel sont les plus avancées dans la transition.', answer: 'nm' }
            ]
          },
          {
            type: 'synonymes',
            title: 'I.2 Choisissez le synonyme qui convient',
            points: 4,
            items: [
              { word: 'entamé', options: ['terminé', 'commencé', 'abandonné'], correct: 1 },
              { word: 'prohibitifs', options: ['raisonnables', 'excessifs', 'négligeables'], correct: 1 },
              { word: 'affiner', options: ['simplifier', 'perfectionner', 'supprimer'], correct: 1 },
              { word: 'refonte', options: ['réorganisation complète', 'suppression', 'prolongation'], correct: 0 }
            ]
          },
          {
            type: 'mc',
            title: 'I.3 Choisissez la bonne réponse',
            points: 3,
            items: [
              {
                question: 'Le retard des PME françaises dans le numérique s\'explique notamment par :',
                options: ['un manque de volonté politique', 'des compétences insuffisantes et une résistance au changement', 'l\'absence de solutions technologiques adaptées'],
                correct: 1
              },
              {
                question: 'Le programme « France Num » propose :',
                options: ['des subventions directes à toutes les PME', 'des diagnostics gratuits et un accompagnement régional', 'des formations obligatoires pour les dirigeants'],
                correct: 1
              },
              {
                question: 'Selon les experts, la transformation numérique réussie exige :',
                options: ['uniquement l\'achat de nouveaux logiciels', 'la formation de tous les employés et un changement de culture', 'le recrutement massif d\'informaticiens'],
                correct: 1
              }
            ]
          },
          {
            type: 'open',
            title: 'I.4 Compréhension globale — Répondez en 2-3 phrases',
            points: 7,
            items: [
              { question: 'Quels bénéfices concrets la transformation numérique apporte-t-elle aux PME ?', guideline: 'Réduction des coûts (15-25%), accès à de nouveaux marchés (e-commerce international), meilleure analyse des données clients.' },
              { question: 'Pourquoi la transformation numérique ne se limite-t-elle pas à l\'aspect technologique ?', guideline: 'Elle implique une refonte de l\'organisation, de la culture d\'entreprise et la formation de tous les collaborateurs.' },
              { question: 'Quel est le rôle du gouvernement dans cette transition ?', guideline: 'Programme France Num (200M€), conseillers régionaux, diagnostics gratuits, orientation vers des solutions adaptées.' }
            ]
          }
        ]
      },
      {
        id: 's2',
        title: 'II. Connaissances de terminologie et grammaire',
        points: 32,
        exercises: [
          {
            type: 'definition',
            title: 'II.1 Choisissez la bonne définition',
            points: 6,
            items: [
              { term: 'le siège social', options: ['l\'usine principale', 'l\'adresse officielle de l\'entreprise', 'le bureau du directeur', 'la salle de réunion'], correct: 1 },
              { term: 'une OPA', options: ['une offre publique d\'achat', 'une organisation professionnelle', 'un ordre de paiement', 'une obligation de performance'], correct: 0 },
              { term: 'la trésorerie', options: ['le service comptable', 'l\'ensemble des liquidités disponibles', 'le coffre-fort', 'le budget prévisionnel'], correct: 1 },
              { term: 'un intérimaire', options: ['un stagiaire', 'un employé en période d\'essai', 'un travailleur temporaire', 'un cadre supérieur'], correct: 2 },
              { term: 'le seuil de rentabilité', options: ['le chiffre d\'affaires minimum pour couvrir les charges', 'le bénéfice net après impôts', 'le salaire minimum légal', 'le taux d\'intérêt bancaire'], correct: 0 },
              { term: 'une joint-venture', options: ['une entreprise en difficulté', 'une coentreprise créée par plusieurs partenaires', 'une start-up technologique', 'un contrat de travail international'], correct: 1 }
            ]
          },
          {
            type: 'fill-terminology',
            title: 'II.2 Complétez avec le terme qui convient',
            points: 6,
            items: [
              { sentence: 'Le directeur financier a présenté le ______________ prévisionnel pour l\'année prochaine.', options: ['budget', 'organigramme', 'entretien'], correct: 0 },
              { sentence: 'L\'entreprise a décidé de ______________ avec son principal concurrent pour dominer le marché.', options: ['licencier', 'fusionner', 'démissionner'], correct: 1 },
              { sentence: 'Le taux de ______________ dans cette entreprise est très bas, les employés sont satisfaits.', options: ['croissance', 'rotation du personnel', 'bénéfice'], correct: 1 },
              { sentence: 'Nous devons réduire les ______________ de production pour rester compétitifs.', options: ['coûts', 'ventes', 'employés'], correct: 0 },
              { sentence: 'L\'______________ annuelle des comptes est obligatoire pour les sociétés cotées en bourse.', options: ['analyse', 'audit', 'assemblée'], correct: 1 },
              { sentence: 'La PME a obtenu un ______________ bancaire pour financer son expansion.', options: ['prêt', 'bénéfice', 'dividende'], correct: 0 }
            ]
          },
          {
            type: 'cloze',
            title: 'II.3 Complétez le texte avec les mots proposés',
            points: 8,
            instruction: 'Placez les mots suivants dans le texte. Deux mots sont en trop.',
            words: ['recrutement', 'compétences', 'formation', 'candidats', 'salaire', 'entretien', 'motivation', 'expérience', 'diplôme', 'carrière'],
            text: 'Le processus de ____1____ dans les grandes entreprises a beaucoup évolué. Aujourd\'hui, les responsables RH ne se contentent plus d\'examiner le ____2____ des ____3____ . Ils évaluent surtout les ____4____ techniques et la ____5____ du postulant. L\' ____6____ d\'embauche permet de vérifier si le candidat possède l\' ____7____ nécessaire. Enfin, une ____8____ initiale est souvent proposée aux nouveaux employés pour faciliter leur intégration.',
            answers: ['recrutement', 'diplôme', 'candidats', 'compétences', 'motivation', 'entretien', 'expérience', 'formation'],
            extras: ['salaire', 'carrière']
          },
          {
            type: 'conjugation',
            title: 'II.4 Conjuguez les verbes entre parenthèses',
            points: 12,
            intro: 'L\'essor du commerce en ligne',
            items: [
              { before: 'Le commerce en ligne', verb: 'connaître', after: 'une croissance fulgurante ces dernières années.', tense: 'passé composé', answer: 'a connu' },
              { before: 'Les consommateurs', verb: 'préférer', after: 'de plus en plus acheter depuis leur domicile.', tense: 'présent', answer: 'préfèrent' },
              { before: 'Si les livraisons étaient plus rapides, les clients', verb: 'être', after: 'encore plus satisfaits.', tense: 'conditionnel présent', answer: 'seraient' },
              { before: 'Il est essentiel que les sites', verb: 'garantir', after: 'la sécurité des paiements.', tense: 'subjonctif présent', answer: 'garantissent' },
              { before: 'En', verb: 'développer', after: 'une application mobile, l\'entreprise a touché une nouvelle clientèle.', tense: 'gérondif', answer: 'développant' },
              { before: 'Les plateformes', verb: 'devoir', after: 'adapter leurs services aux normes européennes l\'année prochaine.', tense: 'futur simple', answer: 'devront' },
              { before: 'Depuis 2020, le nombre de colis livrés', verb: 'doubler', after: 'en France.', tense: 'passé composé', answer: 'a doublé' },
              { before: 'Bien que le e-commerce', verb: 'offrir', after: 'de nombreux avantages, il pose des problèmes écologiques.', tense: 'subjonctif présent', answer: 'offre' },
              { before: 'Les petits commerçants', verb: 's\'adapter', after: 'progressivement à la vente en ligne.', tense: 'présent', answer: 's\'adaptent' },
              { before: 'Si Amazon n\'avait pas existé, le commerce en ligne', verb: 'se développer', after: 'plus lentement.', tense: 'conditionnel passé', answer: 'se serait développé' },
              { before: 'Le gouvernement', verb: 'vouloir', after: 'que les géants du numérique paient davantage d\'impôts.', tense: 'présent', answer: 'veut' },
              { before: 'Les experts', verb: 'prédire', after: 'que 30% des achats se feront en ligne d\'ici 2030.', tense: 'présent', answer: 'prédisent' }
            ]
          }
        ]
      },
      {
        id: 's3',
        title: 'III. Expression écrite',
        points: 12,
        exercise: {
          type: 'essay',
          prompt: 'La transformation numérique crée-t-elle plus d\'emplois qu\'elle n\'en détruit ?',
          instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
          wordTarget: 170
        }
      },
      {
        id: 's4',
        title: 'IV. E-mail professionnel',
        points: 12,
        exercise: {
          type: 'email',
          prompt: 'Rédigez un e-mail de motivation en réponse à l\'annonce suivante.',
          instruction: 'Écrivez un e-mail professionnel (~120 mots).',
          wordTarget: 120,
          jobAd: {
            company: 'DigiCom Agency',
            position: 'Responsable communication digitale',
            location: 'Lausanne, Suisse',
            mission: 'Définir et mettre en œuvre la stratégie de communication digitale. Gérer les réseaux sociaux et le site web. Piloter les campagnes publicitaires en ligne. Analyser les performances et proposer des optimisations.',
            profile: 'Formation en communication/marketing digital. 2-3 ans d\'expérience. Maîtrise des outils analytics. Créativité et rigueur.',
            languages: 'Français et anglais courants. Allemand apprécié.',
            contact: 'Madame Sophie Girard, DRH'
          }
        }
      }
    ]
  },

  // ============================
  // EXAM 3
  // ============================
  {
    id: 'exam-3',
    title: 'Test écrit n°3 — L\'économie circulaire',
    duration: 120,
    sections: [
      {
        id: 's1',
        title: 'I. Compréhension écrite',
        points: 20,
        text: {
          title: 'L\'économie circulaire : un modèle d\'avenir pour les entreprises',
          source: 'Capital, 8 janvier 2024',
          content: `Face à l'épuisement des ressources naturelles et à la montée des préoccupations environnementales, l'économie circulaire s'impose comme une alternative crédible au modèle linéaire « produire, consommer, jeter ». En France, ce nouveau paradigme économique gagne du terrain et séduit un nombre croissant d'entreprises.\n\nL'économie circulaire consiste à repenser l'ensemble du cycle de vie des produits, de leur conception à leur fin de vie. Elle repose sur plusieurs principes : l'écoconception, le réemploi, la réparation, le recyclage et la valorisation des déchets. L'objectif est de minimiser les déchets et de maximiser l'utilisation des ressources.\n\nDes entreprises pionnières montrent la voie. Le groupe Michelin propose désormais des pneus en location plutôt qu'à la vente, encourageant ainsi le rechappage et la prolongation de leur durée de vie. De son côté, la marque Patagonia incite ses clients à réparer leurs vêtements plutôt qu'à en acheter de nouveaux.\n\nSur le plan économique, les résultats sont encourageants. L'ADEME estime que l'économie circulaire pourrait créer 300 000 emplois en France d'ici 2030. Les entreprises qui adoptent ce modèle constatent une réduction de leurs coûts de production de 10 à 20 % grâce à la réutilisation des matériaux.\n\nNéanmoins, des obstacles persistent. Le manque d'infrastructures de collecte et de tri, la réticence des consommateurs habitués au « tout jetable » et le coût initial de la transition freinent son développement. La réglementation européenne, avec le « Pacte vert », devrait cependant accélérer cette mutation en imposant de nouvelles normes aux fabricants.`
        },
        exercises: [
          {
            type: 'vrai-faux',
            title: 'I.1 Vrai, Faux ou Non-mentionné',
            points: 6,
            items: [
              { statement: 'L\'économie circulaire vise à éliminer complètement les déchets.', answer: 'faux' },
              { statement: 'Michelin vend désormais des pneus d\'occasion au lieu de pneus neufs.', answer: 'faux' },
              { statement: 'L\'économie circulaire pourrait générer 300 000 nouveaux postes en France.', answer: 'vrai' },
              { statement: 'La majorité des consommateurs français pratiquent déjà l\'économie circulaire.', answer: 'nm' },
              { statement: 'La réduction des coûts de production peut atteindre 20 % grâce au réemploi des matériaux.', answer: 'vrai' },
              { statement: 'L\'Union européenne a déjà adopté toutes les normes du Pacte vert.', answer: 'nm' }
            ]
          },
          {
            type: 'synonymes',
            title: 'I.2 Choisissez le synonyme qui convient',
            points: 4,
            items: [
              { word: 'paradigme', options: ['problème', 'modèle', 'paradoxe'], correct: 1 },
              { word: 'pionnières', options: ['traditionnelles', 'innovantes', 'étrangères'], correct: 1 },
              { word: 'réticence', options: ['enthousiasme', 'hésitation', 'ignorance'], correct: 1 },
              { word: 'mutation', options: ['destruction', 'transformation', 'stabilité'], correct: 1 }
            ]
          },
          {
            type: 'mc',
            title: 'I.3 Choisissez la bonne réponse',
            points: 3,
            items: [
              {
                question: 'Le modèle de Michelin consiste à :',
                options: ['vendre des pneus recyclés moins chers', 'louer des pneus pour encourager leur réutilisation', 'fabriquer des pneus biodégradables'],
                correct: 1
              },
              {
                question: 'Les obstacles à l\'économie circulaire incluent :',
                options: ['le manque d\'intérêt des entreprises', 'l\'absence de bénéfices économiques prouvés', 'le manque d\'infrastructures et les habitudes des consommateurs'],
                correct: 2
              },
              {
                question: 'L\'écoconception signifie :',
                options: ['fabriquer uniquement des produits biologiques', 'concevoir des produits en pensant à tout leur cycle de vie', 'recycler les emballages après utilisation'],
                correct: 1
              }
            ]
          },
          {
            type: 'open',
            title: 'I.4 Compréhension globale — Répondez en 2-3 phrases',
            points: 7,
            items: [
              { question: 'Quels sont les principes fondamentaux de l\'économie circulaire ?', guideline: 'Écoconception, réemploi, réparation, recyclage, valorisation des déchets. Minimiser les déchets, maximiser l\'utilisation des ressources.' },
              { question: 'Citez deux exemples concrets d\'entreprises pratiquant l\'économie circulaire et expliquez leur approche.', guideline: 'Michelin : location de pneus plutôt que vente (rechappage). Patagonia : encourage la réparation des vêtements plutôt que le rachat.' },
              { question: 'Quel rôle la réglementation européenne joue-t-elle dans le développement de l\'économie circulaire ?', guideline: 'Le Pacte vert européen devrait accélérer la transition en imposant de nouvelles normes aux fabricants.' }
            ]
          }
        ]
      },
      {
        id: 's2',
        title: 'II. Connaissances de terminologie et grammaire',
        points: 32,
        exercises: [
          {
            type: 'definition',
            title: 'II.1 Choisissez la bonne définition',
            points: 6,
            items: [
              { term: 'un bail', options: ['un contrat de vente', 'un contrat de location', 'un contrat de travail', 'un accord commercial'], correct: 1 },
              { term: 'la TVA', options: ['un impôt sur les bénéfices', 'un impôt indirect sur la consommation', 'une taxe sur les importations', 'un prélèvement sur les salaires'], correct: 1 },
              { term: 'un fournisseur', options: ['un client régulier', 'un employé qualifié', 'une entreprise qui vend des biens à une autre', 'un investisseur'], correct: 2 },
              { term: 'la délocalisation', options: ['le transfert d\'activités à l\'étranger', 'la fermeture définitive', 'le changement de direction', 'la restructuration interne'], correct: 0 },
              { term: 'le bilan comptable', options: ['le rapport marketing annuel', 'le document qui présente l\'actif et le passif', 'le compte rendu de réunion', 'la fiche de paie'], correct: 1 },
              { term: 'une start-up', options: ['une entreprise centenaire', 'une filiale d\'un grand groupe', 'une jeune entreprise innovante', 'une entreprise publique'], correct: 2 }
            ]
          },
          {
            type: 'fill-terminology',
            title: 'II.2 Complétez avec le terme qui convient',
            points: 6,
            items: [
              { sentence: 'L\'entreprise a lancé une campagne de ______________ pour faire connaître son nouveau produit.', options: ['publicité', 'comptabilité', 'sous-traitance'], correct: 0 },
              { sentence: 'Le ______________ de cette entreprise comprend 250 salariés répartis dans trois pays.', options: ['chiffre d\'affaires', 'effectif', 'bénéfice'], correct: 1 },
              { sentence: 'Les négociations entre les syndicats et la direction ont abouti à une ______________ salariale.', options: ['réduction', 'augmentation', 'suppression'], correct: 1 },
              { sentence: 'Notre société a obtenu un ______________ important pour développer un nouveau médicament.', options: ['brevet', 'licenciement', 'stage'], correct: 0 },
              { sentence: 'Le taux de ______________ en France a légèrement baissé au dernier trimestre.', options: ['natalité', 'chômage', 'croissance'], correct: 1 },
              { sentence: 'La ______________ d\'entreprise est un événement difficile qui touche aussi bien les employés que les créanciers.', options: ['création', 'faillite', 'fusion'], correct: 1 }
            ]
          },
          {
            type: 'cloze',
            title: 'II.3 Complétez le texte avec les mots proposés',
            points: 8,
            instruction: 'Placez les mots suivants dans le texte. Deux mots sont en trop.',
            words: ['investissement', 'rentabilité', 'marque', 'fidéliser', 'clientèle', 'concurrents', 'qualité', 'réduction', 'lancement', 'positionnement'],
            text: 'Pour réussir le ____1____ d\'un nouveau produit sur le marché, il faut d\'abord définir un ____2____ clair par rapport aux ____3____ . La ____4____ du produit doit être irréprochable pour ____5____ la ____6____ . Un ____7____ important en marketing est nécessaire pour développer la notoriété de la ____8____ .',
            answers: ['lancement', 'positionnement', 'concurrents', 'qualité', 'fidéliser', 'clientèle', 'investissement', 'marque'],
            extras: ['rentabilité', 'réduction']
          },
          {
            type: 'conjugation',
            title: 'II.4 Conjuguez les verbes entre parenthèses',
            points: 12,
            intro: 'Le marché du travail en mutation',
            items: [
              { before: 'Le marché du travail', verb: 'se transformer', after: 'radicalement depuis la pandémie.', tense: 'passé composé', answer: 's\'est transformé' },
              { before: 'De nombreuses entreprises', verb: 'adopter', after: 'le travail hybride comme nouvelle norme.', tense: 'passé composé', answer: 'ont adopté' },
              { before: 'Il est probable que le télétravail', verb: 'continuer', after: 'à se développer dans les années à venir.', tense: 'subjonctif présent', answer: 'continue' },
              { before: 'Si les entreprises offraient plus de flexibilité, elles', verb: 'attirer', after: 'davantage de talents.', tense: 'conditionnel présent', answer: 'attireraient' },
              { before: 'En', verb: 'proposer', after: 'des formations continues, les employeurs fidélisent leurs collaborateurs.', tense: 'gérondif', answer: 'proposant' },
              { before: 'Les syndicats', verb: 'exiger', after: 'que le droit à la déconnexion soit respecté.', tense: 'présent', answer: 'exigent' },
              { before: 'Le nombre de freelances', verb: 'augmenter', after: 'de 30 % en cinq ans.', tense: 'passé composé', answer: 'a augmenté' },
              { before: 'Avant que les nouvelles lois', verb: 'entrer', after: 'en vigueur, les entreprises doivent s\'adapter.', tense: 'subjonctif présent', answer: 'entrent' },
              { before: 'Si le gouvernement n\'avait pas agi, le chômage', verb: 'exploser', after: '.', tense: 'conditionnel passé', answer: 'aurait explosé' },
              { before: 'Les jeunes diplômés', verb: 'rechercher', after: 'avant tout un sens à leur travail.', tense: 'présent', answer: 'recherchent' },
              { before: 'L\'intelligence artificielle', verb: 'pouvoir', after: 'remplacer certains métiers dans un futur proche.', tense: 'conditionnel présent', answer: 'pourrait' },
              { before: 'Les experts', verb: 'recommander', after: 'que chaque salarié suive au moins une formation par an.', tense: 'présent', answer: 'recommandent' }
            ]
          }
        ]
      },
      {
        id: 's3',
        title: 'III. Expression écrite',
        points: 12,
        exercise: {
          type: 'essay',
          prompt: 'L\'économie circulaire peut-elle concilier croissance économique et protection de l\'environnement ?',
          instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
          wordTarget: 170
        }
      },
      {
        id: 's4',
        title: 'IV. E-mail professionnel',
        points: 12,
        exercise: {
          type: 'email',
          prompt: 'Rédigez un e-mail de motivation en réponse à l\'annonce suivante.',
          instruction: 'Écrivez un e-mail professionnel (~120 mots).',
          wordTarget: 120,
          jobAd: {
            company: 'CirculEco Consulting',
            position: 'Consultant(e) en économie circulaire',
            location: 'Lyon, France',
            mission: 'Accompagner les entreprises dans leur transition vers l\'économie circulaire. Réaliser des audits environnementaux. Concevoir des plans d\'action RSE. Former les équipes aux pratiques durables.',
            profile: 'Formation en environnement, ingénierie ou gestion. Expérience en conseil souhaitée. Capacité d\'analyse, pédagogie, sens du relationnel.',
            languages: 'Français natif, anglais courant. Espagnol apprécié.',
            contact: 'Madame Claire Fontaine, Responsable recrutement'
          }
        }
      }
    ]
  },

  // ============================
  // EXAM 4
  // ============================
  {
    id: 'exam-4',
    title: 'Test écrit n°4 — Le marketing digital et l\'influence des influenceurs',
    duration: 120,
    sections: [
      // --- I. Compréhension écrite /20 ---
      {
        id: 's1',
        title: 'I. Compréhension écrite',
        points: 20,
        text: {
          title: 'Le marketing d\'influence : nouvel eldorado ou bulle spéculative ?',
          source: 'Le Figaro Économie, 3 mars 2024',
          content: `Le marketing d'influence est devenu un pilier incontournable de la stratégie commerciale des entreprises. En 2023, les marques françaises ont investi plus de 500 millions d'euros dans des partenariats avec des influenceurs, soit une hausse de 25 % en un an. Ce phénomène touche désormais tous les secteurs, de la mode à l'agroalimentaire en passant par la finance.\n\nLe principe est simple : les marques rémunèrent des créateurs de contenu, présents sur Instagram, TikTok ou YouTube, pour promouvoir leurs produits auprès de leurs communautés. L'avantage par rapport à la publicité traditionnelle réside dans la relation de confiance que l'influenceur entretient avec son audience. Les taux d'engagement sont en moyenne trois fois supérieurs à ceux des publicités classiques.\n\nCependant, le secteur traverse une crise de confiance. Plusieurs scandales ont révélé des pratiques douteuses : produits de mauvaise qualité promus sans scrupules, publicités déguisées en recommandations personnelles, achats de faux abonnés pour gonfler les chiffres. Une enquête de la DGCCRF a montré que 60 % des influenceurs ne respectaient pas leurs obligations légales en matière de transparence publicitaire.\n\nFace à ces dérives, le législateur a réagi. La loi du 9 juin 2023 encadre désormais strictement l'activité des influenceurs en France. Elle impose la mention explicite des partenariats commerciaux, interdit la promotion de certains produits comme la chirurgie esthétique ou les paris sportifs, et prévoit des sanctions pouvant aller jusqu'à deux ans de prison.\n\nParallèlement, le marché se professionnalise. Les agences spécialisées développent des outils d'analyse sophistiqués pour mesurer le retour sur investissement des campagnes. Les micro-influenceurs, disposant de communautés plus restreintes mais plus engagées, gagnent en popularité auprès des annonceurs soucieux d'authenticité.`
        },
        exercises: [
          {
            type: 'vrai-faux',
            title: 'I.1 Vrai, Faux ou Non-mentionné',
            points: 6,
            items: [
              { statement: 'Les marques françaises ont dépensé un demi-milliard d\'euros en marketing d\'influence en 2023.', answer: 'vrai' },
              { statement: 'Le marketing d\'influence se limite principalement au secteur de la mode.', answer: 'faux' },
              { statement: 'La majorité des influenceurs respectent la législation sur la transparence publicitaire.', answer: 'faux' },
              { statement: 'La France est le premier pays européen à légiférer sur le marketing d\'influence.', answer: 'nm' },
              { statement: 'Les micro-influenceurs obtiennent un meilleur engagement que les grandes célébrités.', answer: 'vrai' },
              { statement: 'La loi interdit aux influenceurs de promouvoir des boissons alcoolisées.', answer: 'nm' }
            ]
          },
          {
            type: 'synonymes',
            title: 'I.2 Choisissez le synonyme qui convient',
            points: 4,
            items: [
              { word: 'incontournable', options: ['facultatif', 'indispensable', 'controversé'], correct: 1 },
              { word: 'dérives', options: ['innovations', 'abus', 'progrès'], correct: 1 },
              { word: 'déguisées', options: ['dissimulées', 'améliorées', 'supprimées'], correct: 0 },
              { word: 'soucieux', options: ['indifférents', 'préoccupés', 'ignorants'], correct: 1 }
            ]
          },
          {
            type: 'mc',
            title: 'I.3 Choisissez la bonne réponse',
            points: 3,
            items: [
              {
                question: 'L\'avantage principal du marketing d\'influence par rapport à la publicité classique est :',
                options: ['son coût plus faible', 'la relation de confiance entre l\'influenceur et son audience', 'sa portée géographique illimitée'],
                correct: 1
              },
              {
                question: 'La loi de juin 2023 prévoit pour les infractions les plus graves :',
                options: ['de simples amendes administratives', 'des peines pouvant inclure de la prison', 'uniquement la suppression du compte'],
                correct: 1
              },
              {
                question: 'Les micro-influenceurs sont appréciés des annonceurs parce qu\'ils :',
                options: ['coûtent beaucoup moins cher', 'ont des communautés plus engagées et authentiques', 'sont présents sur toutes les plateformes'],
                correct: 1
              }
            ]
          },
          {
            type: 'open',
            title: 'I.4 Compréhension globale — Répondez en 2-3 phrases',
            points: 7,
            items: [
              { question: 'Quelles pratiques douteuses ont provoqué une crise de confiance dans le marketing d\'influence ?', guideline: 'Promotion de produits de mauvaise qualité, publicités déguisées en recommandations personnelles, achat de faux abonnés pour gonfler les chiffres.' },
              { question: 'Comment la législation française encadre-t-elle désormais l\'activité des influenceurs ?', guideline: 'Mention obligatoire des partenariats commerciaux, interdiction de promouvoir certains produits (chirurgie esthétique, paris sportifs), sanctions pénales (jusqu\'à 2 ans de prison).' },
              { question: 'En quoi le marché du marketing d\'influence se professionnalise-t-il ?', guideline: 'Développement d\'outils d\'analyse du ROI par les agences spécialisées, montée en popularité des micro-influenceurs pour plus d\'authenticité.' }
            ]
          }
        ]
      },
      // --- II. Terminologie et grammaire /32 ---
      {
        id: 's2',
        title: 'II. Connaissances de terminologie et grammaire',
        points: 32,
        exercises: [
          {
            type: 'definition',
            title: 'II.1 Choisissez la bonne définition',
            points: 6,
            items: [
              { term: 'le taux de conversion', options: ['le pourcentage de visiteurs qui effectuent un achat', 'le taux de change entre deux devises', 'le nombre de clics sur une publicité', 'la vitesse de chargement d\'un site'], correct: 0 },
              { term: 'le référencement', options: ['le système de livraison', 'l\'ensemble des techniques pour améliorer la visibilité d\'un site web', 'la liste des fournisseurs', 'le catalogue de produits'], correct: 1 },
              { term: 'un algorithme', options: ['un logiciel de comptabilité', 'un réseau social professionnel', 'un ensemble de règles de calcul automatisées', 'un contrat numérique'], correct: 2 },
              { term: 'la e-réputation', options: ['le chiffre d\'affaires en ligne', 'l\'image d\'une personne ou entreprise sur Internet', 'un système de notation interne', 'le nombre d\'abonnés sur les réseaux sociaux'], correct: 1 },
              { term: 'un entonnoir de vente', options: ['un outil de mesure des bénéfices', 'le parcours du prospect jusqu\'à l\'achat', 'un canal de distribution physique', 'une technique de négociation'], correct: 1 },
              { term: 'le retour sur investissement', options: ['le remboursement d\'un prêt bancaire', 'la mesure de la rentabilité d\'une dépense', 'le retour d\'un produit défectueux', 'le bénéfice brut annuel'], correct: 1 }
            ]
          },
          {
            type: 'fill-terminology',
            title: 'II.2 Complétez avec le terme qui convient',
            points: 6,
            items: [
              { sentence: 'L\'entreprise a lancé une campagne de ______________ sur les réseaux sociaux pour toucher les 18-25 ans.', options: ['ciblage publicitaire', 'recrutement', 'sous-traitance'], correct: 0 },
              { sentence: 'Le ______________ de ce site e-commerce dépasse un million de visiteurs par mois.', options: ['bénéfice', 'trafic', 'effectif'], correct: 1 },
              { sentence: 'Grâce à l\'analyse des ______________, nous avons pu identifier les préférences de nos clients.', options: ['données', 'brevets', 'filiales'], correct: 0 },
              { sentence: 'La marque a signé un contrat de ______________ avec une influenceuse célèbre pour promouvoir sa nouvelle collection.', options: ['bail', 'partenariat', 'fusion'], correct: 1 },
              { sentence: 'Le community manager est chargé d\'animer les ______________ de l\'entreprise sur les plateformes sociales.', options: ['comptes', 'bilans', 'brevets'], correct: 0 },
              { sentence: 'L\'entreprise mesure la ______________ de ses campagnes grâce à des indicateurs de performance.', options: ['faillite', 'rentabilité', 'délocalisation'], correct: 1 }
            ]
          },
          {
            type: 'cloze',
            title: 'II.3 Complétez le texte avec les mots proposés',
            points: 8,
            instruction: 'Placez les mots suivants dans le texte. Deux mots sont en trop.',
            words: ['audience', 'contenu', 'engagement', 'notoriété', 'algorithme', 'visibilité', 'abonnés', 'monétisation', 'tendance', 'authenticité'],
            text: 'Pour réussir sur les réseaux sociaux, il faut d\'abord créer du ____1____ de qualité qui correspond aux attentes de son ____2____ . L\' ____3____ de la plateforme favorise les publications qui génèrent un fort ____4____ . Les créateurs cherchent à augmenter leur ____5____ pour attirer de nouveaux ____6____ . La ____7____ des contenus est devenue un enjeu majeur pour les influenceurs professionnels. Cependant, les marques privilégient de plus en plus l\' ____8____ dans leurs partenariats.',
            answers: ['contenu', 'audience', 'algorithme', 'engagement', 'visibilité', 'abonnés', 'monétisation', 'authenticité'],
            extras: ['notoriété', 'tendance']
          },
          {
            type: 'conjugation',
            title: 'II.4 Conjuguez les verbes entre parenthèses',
            points: 12,
            intro: 'L\'évolution du marketing digital',
            items: [
              { before: 'Les réseaux sociaux', verb: 'révolutionner', after: 'la manière dont les entreprises communiquent.', tense: 'passé composé', answer: 'ont révolutionné' },
              { before: 'Aujourd\'hui, les consommateurs', verb: 'exiger', after: 'plus de transparence de la part des marques.', tense: 'présent', answer: 'exigent' },
              { before: 'Si les entreprises n\'investissaient pas dans le digital, elles', verb: 'perdre', after: 'une part importante de leur clientèle.', tense: 'conditionnel présent', answer: 'perdraient' },
              { before: 'Il est crucial que les marques', verb: 'adapter', after: 'leur message à chaque plateforme.', tense: 'subjonctif présent', answer: 'adaptent' },
              { before: 'En', verb: 'analyser', after: 'les données clients, les entreprises peuvent personnaliser leurs offres.', tense: 'gérondif', answer: 'analysant' },
              { before: 'L\'intelligence artificielle', verb: 'transformer', after: 'profondément le marketing dans les années à venir.', tense: 'futur simple', answer: 'transformera' },
              { before: 'Depuis 2020, le budget publicitaire en ligne', verb: 'dépasser', after: 'celui de la télévision en France.', tense: 'passé composé', answer: 'a dépassé' },
              { before: 'Bien que la publicité en ligne', verb: 'être', after: 'efficace, elle suscite des inquiétudes sur la vie privée.', tense: 'subjonctif présent', answer: 'soit' },
              { before: 'Les petites entreprises', verb: 'découvrir', after: 'peu à peu le potentiel du marketing digital.', tense: 'présent', answer: 'découvrent' },
              { before: 'Si les régulateurs n\'avaient pas agi, les abus', verb: 'se multiplier', after: 'davantage.', tense: 'conditionnel passé', answer: 'se seraient multipliés' },
              { before: 'Le directeur marketing', verb: 'vouloir', after: 'que l\'équipe lance la campagne avant l\'été.', tense: 'présent', answer: 'veut' },
              { before: 'Les experts', verb: 'estimer', after: 'que le marché de l\'influence atteindra un milliard d\'euros d\'ici 2028.', tense: 'présent', answer: 'estiment' }
            ]
          }
        ]
      },
      // --- III. Expression écrite /12 ---
      {
        id: 's3',
        title: 'III. Expression écrite',
        points: 12,
        exercise: {
          type: 'essay',
          prompt: 'Les influenceurs ont-ils trop de pouvoir sur les décisions d\'achat des consommateurs ?',
          instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
          wordTarget: 170
        }
      },
      // --- IV. E-mail /12 ---
      {
        id: 's4',
        title: 'IV. E-mail professionnel',
        points: 12,
        exercise: {
          type: 'email',
          prompt: 'Rédigez un e-mail de motivation en réponse à l\'annonce suivante.',
          instruction: 'Écrivez un e-mail professionnel (~120 mots). N\'oubliez pas : objet, formule d\'appel, corps structuré, formule de politesse.',
          wordTarget: 120,
          jobAd: {
            company: 'InfluenceMedia Group',
            position: 'Chef(fe) de projet marketing digital',
            location: 'Paris, France',
            mission: 'Concevoir et piloter les campagnes de marketing d\'influence. Identifier et négocier avec les créateurs de contenu. Analyser les KPI et optimiser les performances. Assurer la conformité légale des partenariats.',
            profile: 'Formation en marketing digital ou communication. 3 ans d\'expérience en agence ou chez l\'annonceur. Excellente connaissance des réseaux sociaux. Sens de la négociation et esprit analytique.',
            languages: 'Français courant, anglais professionnel. Espagnol un atout.',
            contact: 'Monsieur Karim Benali, directeur des opérations'
          }
        }
      }
    ]
  },

  // ============================
  // EXAM 5
  // ============================
  {
    id: 'exam-5',
    title: 'Test écrit n°5 — La mondialisation et le protectionnisme',
    duration: 120,
    sections: [
      // --- I. Compréhension écrite /20 ---
      {
        id: 's1',
        title: 'I. Compréhension écrite',
        points: 20,
        text: {
          title: 'Mondialisation contre protectionnisme : le grand retournement',
          source: 'Alternatives Économiques, 17 novembre 2023',
          content: `Après trois décennies de libéralisation des échanges, le monde assiste à un retour en force du protectionnisme. Les États-Unis, sous les administrations successives, ont imposé des droits de douane sur les importations chinoises. L'Union européenne a instauré un mécanisme d'ajustement carbone aux frontières. Même des pays traditionnellement ouverts au libre-échange, comme la Suisse, renforcent la protection de certains secteurs stratégiques.\n\nCe revirement s'explique par plusieurs facteurs. La pandémie de Covid-19 a mis en lumière la vulnérabilité des chaînes d'approvisionnement mondiales. La pénurie de semi-conducteurs, de médicaments et de matières premières a convaincu de nombreux gouvernements de la nécessité de relocaliser certaines productions essentielles. Par ailleurs, les tensions géopolitiques entre les grandes puissances alimentent une logique de souveraineté économique.\n\nLes défenseurs du libre-échange rappellent ses bienfaits historiques. La mondialisation a sorti des centaines de millions de personnes de la pauvreté, principalement en Asie. Elle a permis aux consommateurs des pays riches de bénéficier de produits moins chers et d'une offre diversifiée. Le commerce international représente aujourd'hui 60 % du PIB mondial.\n\nToutefois, les critiques de la mondialisation soulignent ses effets négatifs : désindustrialisation des régions, creusement des inégalités, dumping social et environnemental, et dépendance excessive envers certains fournisseurs. Le textile européen, par exemple, a perdu 70 % de ses emplois en trente ans face à la concurrence asiatique.\n\nUne troisième voie semble émerger : le « commerce stratégique ». Il s'agit de maintenir des échanges ouverts tout en protégeant les industries critiques comme les technologies, l'énergie et la santé. Cette approche pragmatique, adoptée par l'UE dans son programme « Autonomie stratégique ouverte », cherche à concilier compétitivité et souveraineté.`
        },
        exercises: [
          {
            type: 'vrai-faux',
            title: 'I.1 Vrai, Faux ou Non-mentionné',
            points: 6,
            items: [
              { statement: 'Les États-Unis ont augmenté les taxes douanières sur les produits chinois.', answer: 'vrai' },
              { statement: 'La Suisse a toujours été un pays protectionniste.', answer: 'faux' },
              { statement: 'La pandémie a révélé la fragilité des chaînes d\'approvisionnement mondiales.', answer: 'vrai' },
              { statement: 'Le commerce international représente plus de la moitié du PIB mondial.', answer: 'vrai' },
              { statement: 'La Chine est favorable à une politique de libre-échange total.', answer: 'nm' },
              { statement: 'Le secteur textile européen a perdu la majorité de ses emplois en trente ans.', answer: 'vrai' }
            ]
          },
          {
            type: 'synonymes',
            title: 'I.2 Choisissez le synonyme qui convient',
            points: 4,
            items: [
              { word: 'revirement', options: ['continuation', 'changement radical', 'compromis'], correct: 1 },
              { word: 'vulnérabilité', options: ['solidité', 'fragilité', 'complexité'], correct: 1 },
              { word: 'creusement', options: ['réduction', 'aggravation', 'stabilisation'], correct: 1 },
              { word: 'pragmatique', options: ['idéaliste', 'théorique', 'réaliste'], correct: 2 }
            ]
          },
          {
            type: 'mc',
            title: 'I.3 Choisissez la bonne réponse',
            points: 3,
            items: [
              {
                question: 'La relocalisation de certaines productions est motivée par :',
                options: ['la volonté de baisser les prix à la consommation', 'les leçons de la pandémie sur la dépendance aux fournisseurs étrangers', 'le souhait d\'augmenter les exportations'],
                correct: 1
              },
              {
                question: 'Le concept d\' « Autonomie stratégique ouverte » de l\'UE consiste à :',
                options: ['fermer les frontières européennes au commerce', 'maintenir des échanges ouverts tout en protégeant les secteurs critiques', 'imposer des sanctions économiques à tous les partenaires'],
                correct: 1
              },
              {
                question: 'Le dumping social désigne :',
                options: ['la vente de produits à un prix inférieur au coût de production', 'la concurrence déloyale fondée sur des conditions de travail inférieures', 'la suppression de toutes les barrières commerciales'],
                correct: 1
              }
            ]
          },
          {
            type: 'open',
            title: 'I.4 Compréhension globale — Répondez en 2-3 phrases',
            points: 7,
            items: [
              { question: 'Quels événements récents ont favorisé le retour du protectionnisme ?', guideline: 'La pandémie de Covid-19 (pénuries de semi-conducteurs, médicaments, matières premières), les tensions géopolitiques entre grandes puissances, la volonté de souveraineté économique.' },
              { question: 'Quels sont les principaux arguments en faveur de la mondialisation mentionnés dans le texte ?', guideline: 'Réduction de la pauvreté (centaines de millions en Asie), baisse des prix pour les consommateurs, diversification de l\'offre, commerce = 60% du PIB mondial.' },
              { question: 'En quoi le « commerce stratégique » représente-t-il une troisième voie ?', guideline: 'Il concilie ouverture commerciale et protection des industries critiques (technologies, énergie, santé). Approche pragmatique adoptée par l\'UE (Autonomie stratégique ouverte).' }
            ]
          }
        ]
      },
      // --- II. Terminologie et grammaire /32 ---
      {
        id: 's2',
        title: 'II. Connaissances de terminologie et grammaire',
        points: 32,
        exercises: [
          {
            type: 'definition',
            title: 'II.1 Choisissez la bonne définition',
            points: 6,
            items: [
              { term: 'les droits de douane', options: ['les taxes sur les salaires', 'les taxes prélevées sur les marchandises importées', 'les frais de transport international', 'les subventions à l\'exportation'], correct: 1 },
              { term: 'la balance commerciale', options: ['la différence entre exportations et importations', 'le total des impôts collectés', 'le budget de l\'État', 'le taux de change officiel'], correct: 0 },
              { term: 'une zone de libre-échange', options: ['un quartier d\'affaires', 'un espace géographique sans barrières douanières entre les membres', 'un marché couvert', 'une bourse de valeurs'], correct: 1 },
              { term: 'la délocalisation', options: ['le déménagement du siège social', 'le transfert d\'activités de production vers un pays étranger', 'la diversification des produits', 'la fermeture temporaire d\'une usine'], correct: 1 },
              { term: 'un embargo', options: ['un accord commercial bilatéral', 'une interdiction de commercer avec un pays', 'un tarif préférentiel', 'un prêt entre États'], correct: 1 },
              { term: 'la compétitivité', options: ['la capacité à rivaliser sur un marché', 'le nombre de concurrents', 'le montant des investissements', 'la taille d\'une entreprise'], correct: 0 }
            ]
          },
          {
            type: 'fill-terminology',
            title: 'II.2 Complétez avec le terme qui convient',
            points: 6,
            items: [
              { sentence: 'La ______________ des matières premières a provoqué une hausse généralisée des prix.', options: ['surproduction', 'pénurie', 'exportation'], correct: 1 },
              { sentence: 'Les deux pays ont signé un accord de ______________ pour supprimer les barrières tarifaires.', options: ['libre-échange', 'protectionnisme', 'nationalisation'], correct: 0 },
              { sentence: 'La ______________ de l\'euro face au dollar a rendu les exportations européennes plus compétitives.', options: ['hausse', 'dépréciation', 'stabilité'], correct: 1 },
              { sentence: 'L\'entreprise a décidé de ______________ sa production en France pour réduire sa dépendance envers l\'Asie.', options: ['externaliser', 'relocaliser', 'abandonner'], correct: 1 },
              { sentence: 'Les ______________ économiques imposées à la Russie ont perturbé les marchés de l\'énergie.', options: ['subventions', 'sanctions', 'réformes'], correct: 1 },
              { sentence: 'Le ______________ intérieur brut de la France dépasse 2 500 milliards d\'euros.', options: ['produit', 'bénéfice', 'déficit'], correct: 0 }
            ]
          },
          {
            type: 'cloze',
            title: 'II.3 Complétez le texte avec les mots proposés',
            points: 8,
            instruction: 'Placez les mots suivants dans le texte. Deux mots sont en trop.',
            words: ['importations', 'exportations', 'concurrence', 'tarifs', 'partenaires', 'souveraineté', 'dépendance', 'croissance', 'quotas', 'négociations'],
            text: 'Le débat sur la mondialisation oppose deux visions. Les partisans du libre-échange défendent la croissance des ____1____ et l\'accès à de nouveaux ____2____ . Ils estiment que la ____3____ stimule l\'innovation et favorise la ____4____ économique. En revanche, les protectionnistes souhaitent limiter les ____5____ en imposant des ____6____ douaniers élevés ou des ____7____ . Leur objectif est de préserver la ____8____ nationale et de réduire la dépendance envers les fournisseurs étrangers.',
            answers: ['exportations', 'partenaires', 'concurrence', 'croissance', 'importations', 'tarifs', 'quotas', 'souveraineté'],
            extras: ['dépendance', 'négociations']
          },
          {
            type: 'conjugation',
            title: 'II.4 Conjuguez les verbes entre parenthèses',
            points: 12,
            intro: 'Les enjeux du commerce international',
            items: [
              { before: 'La mondialisation', verb: 'transformer', after: 'en profondeur les économies du monde entier.', tense: 'passé composé', answer: 'a transformé' },
              { before: 'Les entreprises européennes', verb: 'chercher', after: 'à diversifier leurs fournisseurs depuis la pandémie.', tense: 'présent', answer: 'cherchent' },
              { before: 'Si les droits de douane augmentaient encore, les prix', verb: 'flamber', after: 'pour les consommateurs.', tense: 'conditionnel présent', answer: 'flamberaient' },
              { before: 'Il est nécessaire que les gouvernements', verb: 'protéger', after: 'leurs industries stratégiques.', tense: 'subjonctif présent', answer: 'protègent' },
              { before: 'En', verb: 'relocaliser', after: 'certaines usines, la France renforce son indépendance industrielle.', tense: 'gérondif', answer: 'relocalisant' },
              { before: 'Les experts', verb: 'prévoir', after: 'une reconfiguration majeure des chaînes d\'approvisionnement d\'ici 2030.', tense: 'présent', answer: 'prévoient' },
              { before: 'L\'Union européenne', verb: 'adopter', after: 'un mécanisme d\'ajustement carbone aux frontières en 2023.', tense: 'passé composé', answer: 'a adopté' },
              { before: 'Bien que le libre-échange', verb: 'favoriser', after: 'la croissance, il accentue certaines inégalités.', tense: 'subjonctif présent', answer: 'favorise' },
              { before: 'Les pays émergents', verb: 'revendiquer', after: 'une place plus importante dans les institutions internationales.', tense: 'présent', answer: 'revendiquent' },
              { before: 'Si les négociations avaient abouti, l\'accord commercial', verb: 'entrer', after: 'en vigueur cette année.', tense: 'conditionnel passé', answer: 'serait entré' },
              { before: 'Le ministre du Commerce', verb: 'souhaiter', after: 'que la France réduise son déficit commercial.', tense: 'présent', answer: 'souhaite' },
              { before: 'Les multinationales', verb: 'devoir', after: 'se conformer aux nouvelles réglementations européennes dès l\'an prochain.', tense: 'futur simple', answer: 'devront' }
            ]
          }
        ]
      },
      // --- III. Expression écrite /12 ---
      {
        id: 's3',
        title: 'III. Expression écrite',
        points: 12,
        exercise: {
          type: 'essay',
          prompt: 'La mondialisation profite-t-elle davantage aux pays riches qu\'aux pays en développement ?',
          instruction: 'Rédigez un texte structuré et développé en trois aspects. (~170 mots)',
          wordTarget: 170
        }
      },
      // --- IV. E-mail /12 ---
      {
        id: 's4',
        title: 'IV. E-mail professionnel',
        points: 12,
        exercise: {
          type: 'email',
          prompt: 'Rédigez un e-mail de motivation en réponse à l\'annonce suivante.',
          instruction: 'Écrivez un e-mail professionnel (~120 mots). N\'oubliez pas : objet, formule d\'appel, corps structuré, formule de politesse.',
          wordTarget: 120,
          jobAd: {
            company: 'TradeConnect International',
            position: 'Analyste commerce international',
            location: 'Zurich, Suisse',
            mission: 'Analyser les flux commerciaux et les tendances du marché mondial. Rédiger des rapports sur les politiques commerciales. Accompagner les PME dans leurs démarches d\'exportation. Assurer la veille réglementaire sur les accords commerciaux.',
            profile: 'Formation en économie internationale ou commerce. 2 ans d\'expérience minimum. Maîtrise des outils d\'analyse statistique. Rigueur, curiosité intellectuelle, capacité de synthèse.',
            languages: 'Français et anglais courants. Allemand indispensable. Mandarin un atout.',
            contact: 'Madame Isabelle Keller, directrice du recrutement'
          }
        }
      }
    ]
  }
];
