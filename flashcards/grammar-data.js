const GRAMMAR_DATA = [
  // =====================================================
  // LE FUTUR SIMPLE
  // =====================================================
  {
    id: "futur",
    title: "Le Futur Simple",
    category: "Verb Forms",
    sections: [
      {
        heading: "Formation",
        content: `The futur simple is formed from the <strong>infinitive</strong> of the verb + endings that are the same for all groups:

<table>
<tr><th>Personne</th><th>1er groupe (-er)</th><th>2e groupe (-ir)</th><th>3e groupe (irrég.)</th></tr>
<tr><td>je</td><td>manger<strong>ai</strong></td><td>finir<strong>ai</strong></td><td>vendr<strong>ai</strong></td></tr>
<tr><td>tu</td><td>manger<strong>as</strong></td><td>finir<strong>as</strong></td><td>vendr<strong>as</strong></td></tr>
<tr><td>il/elle/on</td><td>manger<strong>a</strong></td><td>finir<strong>a</strong></td><td>vendr<strong>a</strong></td></tr>
<tr><td>nous</td><td>manger<strong>ons</strong></td><td>finir<strong>ons</strong></td><td>vendr<strong>ons</strong></td></tr>
<tr><td>vous</td><td>manger<strong>ez</strong></td><td>finir<strong>ez</strong></td><td>vendr<strong>ez</strong></td></tr>
<tr><td>ils/elles</td><td>manger<strong>ont</strong></td><td>finir<strong>ont</strong></td><td>vendr<strong>ont</strong></td></tr>
</table>

<strong>Endings:</strong> -ai, -as, -a, -ons, -ez, -ont (same for all groups)`
      },
      {
        heading: "Irregular Stems",
        content: `These verbs have irregular stems but use the same endings:

<table>
<tr><th>Verb</th><th>Stem</th><th>Example (je)</th></tr>
<tr><td>avoir</td><td>aur-</td><td>j'aurai</td></tr>
<tr><td>être</td><td>ser-</td><td>je serai</td></tr>
<tr><td>aller</td><td>ir-</td><td>j'irai</td></tr>
<tr><td>faire</td><td>fer-</td><td>je ferai</td></tr>
<tr><td>pouvoir</td><td>pourr-</td><td>je pourrai</td></tr>
<tr><td>vouloir</td><td>voudr-</td><td>je voudrai</td></tr>
<tr><td>savoir</td><td>saur-</td><td>je saurai</td></tr>
<tr><td>venir</td><td>viendr-</td><td>je viendrai</td></tr>
<tr><td>tenir</td><td>tiendr-</td><td>je tiendrai</td></tr>
<tr><td>voir</td><td>verr-</td><td>je verrai</td></tr>
<tr><td>envoyer</td><td>enverr-</td><td>j'enverrai</td></tr>
<tr><td>devoir</td><td>devr-</td><td>je devrai</td></tr>
<tr><td>recevoir</td><td>recevr-</td><td>je recevrai</td></tr>
<tr><td>courir</td><td>courr-</td><td>je courrai</td></tr>
<tr><td>mourir</td><td>mourr-</td><td>je mourrai</td></tr>
<tr><td>valoir</td><td>vaudr-</td><td>je vaudrai</td></tr>
<tr><td>falloir</td><td>faudr-</td><td>il faudra</td></tr>
</table>`
      },
      {
        heading: "Spelling Changes",
        content: `<strong>è verbs</strong> (acheter, mener, lever, amener...):
acheter → j'ach<strong>è</strong>terai, nous ach<strong>e</strong>terons

<strong>Double consonant</strong> (-eler, -eter):
jeter → je jett<strong>e</strong>rai &nbsp;|&nbsp; appeler → j'appell<strong>e</strong>rai

<strong>-yer → -ier</strong>:
employer → j'emploi<strong>e</strong>rai (but: envoyer → j'enverrai)`
      },
      {
        heading: "Usage",
        content: `<strong>1.</strong> Express a future action: <em>Il partira bientôt.</em>

<strong>2.</strong> Futur proche alternatives:
• présent: <em>Demain, je pars pour Paris.</em>
• aller + infinitif: <em>Il va chercher les enfants.</em>
• devoir + infinitif: <em>Ils doivent venir vers huit heures.</em>

<strong>3.</strong> Express an order: <em>Tu feras ce travail avant ce soir.</em>

<strong>Important:</strong> After <em>quand, lorsque, dès que</em> → use futur (not present like in German/English):
<em>Quand il arrivera, je vous appellerai.</em>`
      }
    ]
  },

  // =====================================================
  // LE CONDITIONNEL
  // =====================================================
  {
    id: "conditionnel",
    title: "Le Conditionnel",
    category: "Verb Forms",
    sections: [
      {
        heading: "Formation — Conditionnel Présent",
        content: `<strong>Rule:</strong> Infinitive (or irregular future stem) + <strong>imparfait endings</strong>: -ais, -ais, -ait, -ions, -iez, -aient

<table>
<tr><th>Personne</th><th>parler</th><th>être (stem: ser-)</th></tr>
<tr><td>je</td><td>parler<strong>ais</strong></td><td>ser<strong>ais</strong></td></tr>
<tr><td>tu</td><td>parler<strong>ais</strong></td><td>ser<strong>ais</strong></td></tr>
<tr><td>il/elle/on</td><td>parler<strong>ait</strong></td><td>ser<strong>ait</strong></td></tr>
<tr><td>nous</td><td>parler<strong>ions</strong></td><td>ser<strong>ions</strong></td></tr>
<tr><td>vous</td><td>parler<strong>iez</strong></td><td>ser<strong>iez</strong></td></tr>
<tr><td>ils/elles</td><td>parler<strong>aient</strong></td><td>ser<strong>aient</strong></td></tr>
</table>

The irregular stems are <strong>the same as the futur simple</strong> (aur-, ser-, ir-, fer-, pourr-, etc.)`
      },
      {
        heading: "Formation — Conditionnel Passé",
        content: `<strong>Rule:</strong> Conditionnel présent of <em>être</em> or <em>avoir</em> + past participle

<table>
<tr><th>with être (venir)</th><th>with avoir (être)</th></tr>
<tr><td>je serais venu(e)</td><td>j'aurais été</td></tr>
<tr><td>tu serais venu(e)</td><td>tu aurais été</td></tr>
<tr><td>il serait venu</td><td>il aurait été</td></tr>
<tr><td>nous serions venus</td><td>nous aurions été</td></tr>
<tr><td>vous seriez venus</td><td>vous auriez été</td></tr>
<tr><td>ils seraient venus</td><td>ils auraient été</td></tr>
</table>`
      },
      {
        heading: "Usage",
        content: `<strong>Politeness</strong> (instead of present/imperative):
<em>Pourriez-vous m'indiquer la direction ?</em>
<em>Je voudrais un peu plus d'eau, s'il vous plaît.</em>

<strong>Desire / Wish:</strong>
<em>J'aimerais partir en France cet été.</em>

<strong>Doubt:</strong>
<em>Ce serait plus facile comme ça, je crois.</em>

<strong>Suggestion / Advice:</strong>
<em>On pourrait aller au cinéma ce soir ?</em>
<em>Tu ne devrais pas lui répondre tout de suite.</em>

<strong>Unconfirmed information (journalism):</strong>
<em>L'accident aurait fait 2 morts et 3 blessés.</em>

<strong>Regret (conditionnel passé):</strong>
<em>Je n'aurais pas dû faire ça.</em>

<strong>Conditional sentences (si + imparfait → conditionnel):</strong>
<em>Si l'entreprise investissait davantage, elle atteindrait un public plus large.</em>
<em>Si nous avions lancé la campagne plus tôt, nous aurions atteint nos objectifs.</em>`
      }
    ]
  },

  // =====================================================
  // LE PRÉSENT
  // =====================================================
  {
    id: "present",
    title: "Le Présent de l'Indicatif",
    category: "Verb Forms",
    sections: [
      {
        heading: "Regular Endings",
        content: `<table>
<tr><th>Pronoun</th><th>1er groupe (-er)</th><th>2e groupe (-ir/-issons)</th><th>3e groupe</th></tr>
<tr><td>je</td><td>-e (aime)</td><td>-is (finis)</td><td>-s / -ds / -x</td></tr>
<tr><td>tu</td><td>-es (aimes)</td><td>-is (finis)</td><td>-s / -ds / -x</td></tr>
<tr><td>il/elle/on</td><td>-e (aime)</td><td>-it (finit)</td><td>-t / -d</td></tr>
<tr><td>nous</td><td>-ons (aimons)</td><td>-issons (finissons)</td><td>-ons</td></tr>
<tr><td>vous</td><td>-ez (aimez)</td><td>-issez (finissez)</td><td>-ez</td></tr>
<tr><td>ils/elles</td><td>-ent (aiment)</td><td>-issent (finissent)</td><td>-ent</td></tr>
</table>

<strong>3rd group examples:</strong>
mettre: mets, mets, met, mettons, mettez, mettent
prendre: prends, prends, prend, prenons, prenez, prennent
pouvoir: peux, peux, peut, pouvons, pouvez, peuvent`
      },
      {
        heading: "Spelling Particularities",
        content: `<strong>è verbs</strong> (acheter, mener, lever...):
j'ach<strong>è</strong>te, tu ach<strong>è</strong>tes, il ach<strong>è</strong>te, nous achetons, vous achetez, ils ach<strong>è</strong>tent

<strong>-cer</strong> verbs: ç before o → nous commen<strong>ç</strong>ons
<strong>-ger</strong> verbs: keep e before o → nous jug<strong>e</strong>ons

<strong>-eler / -eter</strong> → double consonant:
je je<strong>tt</strong>e, j'appe<strong>ll</strong>e (but: nous jetons, nous appelons)

<strong>-yer</strong> → y becomes i:
j'envo<strong>i</strong>e, tu envo<strong>i</strong>es, il envo<strong>i</strong>e, nous envoyons, vous envoyez, ils envo<strong>i</strong>ent`
      },
      {
        heading: "Usage",
        content: `• Ongoing action: <em>Nous travaillons depuis ce matin.</em>
• State: <em>Elle est sage.</em>
• Habit: <em>Tous les soirs, je me couche à 21 heures.</em>
• General truths: <em>L'eau bout à 100 degrés.</em>`
      }
    ]
  },

  // =====================================================
  // PASSÉ COMPOSÉ & IMPARFAIT
  // =====================================================
  {
    id: "passe-compose",
    title: "Le Passé Composé & l'Imparfait",
    category: "Verb Forms",
    sections: [
      {
        heading: "Passé Composé — Formation",
        content: `<strong>avoir</strong> or <strong>être</strong> (conjugated in present) + <strong>past participle</strong>

<table>
<tr><th>with avoir</th><th>with être</th></tr>
<tr><td>j'ai commencé</td><td>je suis sorti(e)</td></tr>
<tr><td>tu as commencé</td><td>tu es sorti(e)</td></tr>
<tr><td>il a commencé</td><td>il est sorti / elle est sortie</td></tr>
<tr><td>nous avons commencé</td><td>nous sommes sorti(e)s</td></tr>
<tr><td>vous avez commencé</td><td>vous êtes sorti(e)(s)</td></tr>
<tr><td>ils ont commencé</td><td>ils sont sortis / elles sont sorties</td></tr>
</table>

<strong>Common past participles:</strong>
prendre→pris, faire→fait, dire→dit, être→été, lire→lu, écrire→écrit, connaître→connu`
      },
      {
        heading: "Passé Composé — Agreement",
        content: `<strong>With être:</strong> Always agree with the subject
<em>Elle est rentr<strong>ée</strong>. Ils sont rentr<strong>és</strong>. Elles sont rentr<strong>ées</strong>.</em>

<strong>Reflexive verbs</strong> also use être:
<em>La professeure s'est absent<strong>ée</strong>.</em>

<strong>With avoir:</strong> No agreement normally
<em>J'ai écrit deux travaux.</em>

<strong>Exception:</strong> Agreement when direct object comes <strong>before</strong> the verb:
<em>Les travaux que j'ai écrit<strong>s</strong> sont importants.</em>`
      },
      {
        heading: "Passé Composé — Usage",
        content: `Used for:
• <strong>Completed actions</strong> in the past
• <strong>Unusual/spontaneous events</strong>
• <strong>Chain of different actions</strong>

Keywords: <em>soudain, soudainement, tout à coup, alors, ensuite</em>

<em>Il a vu le match, ensuite il a rencontré ses amis et ils ont décidé de boire une bière.</em>`
      },
      {
        heading: "Imparfait — Formation",
        content: `<strong>Rule:</strong> nous/vous stem of the present + endings: -ais, -ais, -ait, -ions, -iez, -aient

<table>
<tr><th>Verb</th><th>Stem (from nous)</th><th>Example (je)</th></tr>
<tr><td>parler</td><td>parl-</td><td>je parlais</td></tr>
<tr><td>finir</td><td>finiss-</td><td>je finissais</td></tr>
<tr><td>prendre</td><td>pren-</td><td>je prenais</td></tr>
<tr><td>faire</td><td>fais-</td><td>je faisais</td></tr>
<tr><td>être</td><td>êt- (ét-)</td><td>j'étais</td></tr>
</table>

<strong>Watch out:</strong> manger→je mange<strong>a</strong>is, commencer→je commen<strong>ç</strong>ais, étudier→nous étudi<strong>i</strong>ons`
      },
      {
        heading: "Imparfait — Usage",
        content: `Used for:
• <strong>Description/memories/explanation</strong>
• <strong>Habits/repetition</strong>
• <strong>Hypothetical sentences</strong> (si + imparfait)

Keywords: <em>toujours, chaque..., tous/toutes les..., d'habitude, autrefois</em>

<em>Jean était grand et intéressant et il aimait la littérature.</em>
<em>Autrefois, nous allions au lycée en bus.</em>

<strong>PC vs Imparfait together:</strong>
<em>Je lisais (ongoing background) quand soudain le téléphone a sonné (interrupting event).</em>`
      }
    ]
  },

  // =====================================================
  // LE SUBJONCTIF
  // =====================================================
  {
    id: "subjonctif",
    title: "Le Subjonctif",
    category: "Verb Forms",
    sections: [
      {
        heading: "Formation",
        content: `<strong>Rule:</strong> Stem from <em>ils</em> form of present indicative + endings: -e, -es, -e, -ions, -iez, -ent

<table>
<tr><th>Infinitive</th><th>ils form → stem</th><th>Subjonctif (je)</th></tr>
<tr><td>parler</td><td>ils parl-ent</td><td>que je parl<strong>e</strong></td></tr>
<tr><td>finir</td><td>ils finiss-ent</td><td>que je finiss<strong>e</strong></td></tr>
<tr><td>mettre</td><td>ils mett-ent</td><td>que je mett<strong>e</strong></td></tr>
<tr><td>prendre</td><td>ils prenn-ent</td><td>que je prenn<strong>e</strong></td></tr>
<tr><td>recevoir</td><td>ils reçoiv-ent</td><td>que je reçoiv<strong>e</strong></td></tr>
</table>

<strong>nous/vous</strong> use their own present stem:
que nous pren<strong>ions</strong>, que vous recev<strong>iez</strong>

<strong>Irregular:</strong>
être → que je sois, que nous soyons
avoir → que j'aie, que nous ayons
aller → que j'aille, que nous allions
faire → que je fasse
pouvoir → que je puisse
savoir → que je sache
vouloir → que je veuille`
      },
      {
        heading: "Usage — After Verbs Expressing",
        content: `<strong>Will / Desire:</strong> vouloir que, souhaiter que, désirer que, exiger que
<em>Je veux que tu <strong>fasses</strong> ce travail.</em>

<strong>Feelings:</strong> être content que, regretter que, craindre que, avoir peur que
<em>Je suis content qu'il <strong>soit</strong> là.</em>

<strong>Doubt / Possibility:</strong> douter que, il est possible que
<em>Je doute qu'il <strong>puisse</strong> venir.</em>

<strong>Necessity:</strong> il faut que, il est nécessaire que, il est important que
<em>Il faut que vous <strong>soyez</strong> à l'heure.</em>

<strong>After conjunctions:</strong> bien que, pour que, avant que, à condition que, sans que
<em>Bien qu'il <strong>fasse</strong> froid, je sors.</em>

<strong>NOT after:</strong> espérer que, penser que (affirmative), croire que (affirmative), il est probable que → use <strong>indicatif</strong>`
      }
    ]
  },

  // =====================================================
  // PARTICIPE PRÉSENT & GÉRONDIF
  // =====================================================
  {
    id: "participe-gerondif",
    title: "Participe Présent & Gérondif",
    category: "Verb Forms",
    sections: [
      {
        heading: "Participe Présent — Formation",
        content: `<strong>Rule:</strong> nous-form of present → replace -ons with <strong>-ant</strong>

dire → nous dis<strong>ons</strong> → dis<strong>ant</strong>
agir → nous agiss<strong>ons</strong> → agiss<strong>ant</strong>

<strong>Irregular:</strong>
être → <strong>étant</strong> &nbsp;|&nbsp; avoir → <strong>ayant</strong> &nbsp;|&nbsp; savoir → <strong>sachant</strong>`
      },
      {
        heading: "Participe Présent — Usage",
        content: `<strong>1. Replaces a relative clause with "qui":</strong>
<em>Nous cherchons une vendeuse qui parle l'allemand.</em>
→ <em>Nous cherchons une vendeuse <strong>parlant</strong> l'allemand.</em>

<strong>2. Expresses cause (replaces "comme"):</strong>
<em>Comme il parle plusieurs langues, il a obtenu un poste.</em>
→ <em><strong>Parlant</strong> plusieurs langues, il a obtenu un poste.</em>

<strong>3. Common in formal correspondence:</strong>
<em><strong>Restant</strong> à votre disposition, je vous prie d'agréer...</em>`
      },
      {
        heading: "Gérondif — Formation & Usage",
        content: `<strong>Formation:</strong> <strong>en</strong> + participe présent
<em>en disant, en agissant, en étant</em>

<strong>Expresses condition (replaces "si"):</strong>
<em>Si tu allais étudier en France, tu ferais des progrès.</em>
→ <em><strong>En allant</strong> étudier en France, tu ferais des progrès.</em>

<strong>Expresses simultaneity:</strong>
<em>Il écoute de la musique <strong>en travaillant</strong>.</em>

<strong>Important:</strong> The subject must be the same for both verbs!`
      }
    ]
  },

  // =====================================================
  // VERBES ET PRÉPOSITIONS
  // =====================================================
  {
    id: "verbes-prepositions",
    title: "Verbes et Prépositions",
    category: "Verb Forms",
    sections: [
      {
        heading: "Without Preposition (+ infinitive)",
        content: `These verbs connect directly to an infinitive:

<strong>espérer, préférer, aimer, vouloir, savoir, devoir, pouvoir</strong>

<em>Je veux <strong>partir</strong>.</em>
<em>Il préfère <strong>investir</strong> dans des titres sûrs.</em>`
      },
      {
        heading: "à + Infinitive",
        content: `<strong>aider qn à</strong> — <em>Elle aide ce chef à trouver du financement.</em>
<strong>chercher à</strong> — <em>Je cherche à réaliser mes objectifs.</em>
<strong>contribuer à</strong> — <em>contribuer à la croissance</em>
<strong>s'engager à</strong> — <em>s'engager à finir le projet</em>
<strong>hésiter à</strong> — <em>Certains hésitent à tout quitter.</em>
<strong>inviter qn à</strong> — <em>inviter les clients à visiter</em>
<strong>se préparer à</strong> — <em>se préparer à l'examen</em>
<strong>réussir à</strong> — <em>réussir à lever un capital</em>
<strong>viser à</strong> — <em>Les mesures visent à aider les retraités.</em>
<strong>renoncer à</strong> — <em>renoncer à un projet</em>
<strong>se limiter à</strong> — <em>se limiter à l'essentiel</em>

Also: <em>être habitué à, être prêt à, difficile à, facile à</em>
Note: <em>il est difficile <strong>de</strong> lire ce texte</em> vs. <em>le texte est difficile <strong>à</strong> lire</em>`
      },
      {
        heading: "de + Infinitive",
        content: `<strong>arrêter de</strong> — <em>arrêter de fumer</em>
<strong>choisir de</strong> — <em>choisir de partir</em>
<strong>décider de</strong> — <em>décider de travailler moins</em>
<strong>demander à qn de</strong> — <em>Il demande à son banquier de lui expliquer.</em>
<strong>essayer de</strong> — <em>essayer de trouver un mode de vie</em>
<strong>éviter de</strong> — <em>éviter de faire des erreurs</em>
<strong>oublier de</strong> — <em>oublier de contracter une assurance</em>
<strong>permettre à qn de</strong> — <em>permettre aux clients de commander</em>
<strong>promettre à qn de</strong> — <em>promettre de livrer à temps</em>
<strong>convaincre qn de</strong> — <em>convaincre le client de signer</em>

Also: <em>avoir besoin de, avoir le droit de, avoir l'intention de, être capable de, être content de</em>`
      },
      {
        heading: "Special Cases",
        content: `<strong>commencer:</strong>
• commencer <strong>par</strong> + inf. (begin with): <em>Il a commencé <strong>par</strong> prendre une inscription.</em>
• commencer <strong>à/de</strong> + inf. (begin to): <em>Elle commence <strong>à</strong> travailler.</em>

<strong>finir:</strong>
• finir <strong>de</strong> + inf. (= finish): <em>J'ai fini <strong>de</strong> lire cette grammaire.</em>
• finir <strong>par</strong> + inf. (= end up): <em>J'ai fini <strong>par</strong> comprendre les règles.</em>

<strong>s'intéresser à</strong> qqch: <em>Il s'intéresse <strong>à</strong> l'économie.</em>
<strong>être intéressé par</strong> qqch: <em>Je suis intéressée <strong>par</strong> le marketing.</em>
<strong>intéresser</strong> qqn <strong>de</strong> + inf.: <em>Cela m'intéresse <strong>de</strong> savoir...</em>`
      }
    ]
  },

  // =====================================================
  // NON-VERB GRAMMAR TOPICS
  // =====================================================
  {
    id: "interrogation",
    title: "L'Interrogation",
    category: "Other Grammar",
    sections: [
      {
        heading: "Three Ways to Ask",
        content: `<strong>1. Inversion (formal):</strong>
<em>Vas-<strong>tu</strong> à Genève ?</em> (hyphen required)
<em>Va-<strong>t</strong>-il à Genève ?</em> (-t- inserted between vowels)
<em>Jean va-<strong>t</strong>-il à Genève ?</em> (noun subject repeated as pronoun)

<strong>2. Est-ce que (standard):</strong>
<em><strong>Est-ce que</strong> tu vas à Genève ?</em>

<strong>3. Intonation (informal):</strong>
<em>Tu vas à Genève ?</em> ↗

<strong>Negative question:</strong>
<em>Tu ne vas pas à Genève ?</em> → Answer with <strong>Si</strong> (not Oui) if affirming`
      }
    ]
  },
  {
    id: "negation",
    title: "La Négation",
    category: "Other Grammar",
    sections: [
      {
        heading: "Forms of Negation",
        content: `<table>
<tr><th>Form</th><th>Meaning</th></tr>
<tr><td>ne ... <strong>pas</strong></td><td>not</td></tr>
<tr><td>ne ... <strong>plus</strong></td><td>no more, no longer</td></tr>
<tr><td>ne ... <strong>jamais</strong></td><td>never</td></tr>
<tr><td>ne ... <strong>rien</strong></td><td>nothing</td></tr>
<tr><td>ne ... <strong>personne</strong></td><td>nobody</td></tr>
<tr><td>ne ... <strong>aucun(e)</strong></td><td>not a single</td></tr>
<tr><td>ne ... <strong>nulle part</strong></td><td>nowhere</td></tr>
<tr><td>ne ... <strong>que</strong></td><td>only</td></tr>
<tr><td>ne ... <strong>pas encore</strong></td><td>not yet</td></tr>
<tr><td>ne ... <strong>guère</strong></td><td>hardly</td></tr>
<tr><td><strong>ni</strong> ... <strong>ni</strong></td><td>neither ... nor</td></tr>
</table>

<strong>With infinitive:</strong> <em><strong>ne pas</strong> + infinitive</em>: J'ai décidé de <strong>ne pas</strong> changer de métier.
<strong>With gérondif:</strong> <em><strong>en ne</strong> + vb-ant + <strong>pas</strong></em>

<strong>Non seulement ... mais aussi:</strong>
<em>Une bonne banque propose <strong>non seulement</strong> des crédits, <strong>mais aussi</strong> des conseils.</em>`
      }
    ]
  },
  {
    id: "discours-indirect",
    title: "Le Discours Indirect",
    category: "Other Grammar",
    sections: [
      {
        heading: "Rules",
        content: `<strong>Direct → Indirect speech:</strong>

<em>Qu'est-ce que</em> → <strong>ce que</strong>
<em>Qu'est-ce que vous faites ?</em> → <em>Elle veut savoir <strong>ce que</strong> vous faites.</em>

<em>Qu'est-ce qui</em> → <strong>ce qui</strong>
<em>Qu'est-ce qui vous dérange ?</em> → <em>Elle ne comprend pas <strong>ce qui</strong> vous dérange.</em>

<strong>Never use "qu'est-ce que/qui" in indirect speech!</strong>`
      }
    ]
  },
  {
    id: "pronoms-relatifs",
    title: "Les Pronoms Relatifs",
    category: "Other Grammar",
    sections: [
      {
        heading: "Overview",
        content: `<table>
<tr><th>Pronoun</th><th>Function</th><th>Example</th></tr>
<tr><td><strong>qui</strong></td><td>subject</td><td><em>J'ai un collègue <strong>qui</strong> parle français.</em></td></tr>
<tr><td><strong>que / qu'</strong></td><td>direct object</td><td><em>Regarde la cravate <strong>que</strong> j'ai achetée.</em></td></tr>
<tr><td><strong>où</strong></td><td>place / time</td><td><em>Le quartier <strong>où</strong> je travaille est animé.</em></td></tr>
<tr><td><strong>dont</strong></td><td>replaces "de"</td><td><em>Le projet <strong>dont</strong> je t'ai parlé a échoué.</em></td></tr>
</table>

<strong>dont</strong> replaces "de" after:
• verbs: <em>parler <strong>de</strong></em> → <em>le projet <strong>dont</strong> je parle</em>
• adjectives: <em>fier <strong>de</strong></em> → <em>un travail <strong>dont</strong> il est fier</em>
• nouns: <em>les bénéfices <strong>de</strong> l'entreprise</em> → <em>l'entreprise <strong>dont</strong> les bénéfices augmentent</em>`
      }
    ]
  },
  {
    id: "pronoms-en-y",
    title: "Les Pronoms EN et Y",
    category: "Other Grammar",
    sections: [
      {
        heading: "EN",
        content: `Replaces:
<strong>1. du / de la / des (quantity):</strong>
<em>Vous avez des smartphones ? — Oui, nous <strong>en</strong> avons.</em>

<strong>2. A number or quantity word:</strong>
<em>Ils ont envoyé un prospectus ? — Oui, ils <strong>en</strong> ont envoyé un.</em>

<strong>3. "de" + thing after verbs:</strong>
parler de, avoir besoin de, s'occuper de, être content de...
<em>Avez-vous besoin du dossier ? — Non, nous n'<strong>en</strong> avons pas besoin.</em>

<strong>Useful expressions:</strong>
<em>Nous <strong>en</strong> sommes où ?</em> (Where are we at?)
<em>J'<strong>en</strong> ai pour une demi-heure.</em> (It'll take me half an hour)
<em>Ne vous <strong>en</strong> faites pas.</em> (Don't worry)`
      },
      {
        heading: "Y",
        content: `Replaces:
<strong>1. Place (where?):</strong>
<em>La marchandise est dans le camion ? — Oui, elle <strong>y</strong> est.</em>
<em>Quand arrivera-t-il en Suisse ? — Il <strong>y</strong> arrivera demain.</em>

<strong>2. "à" + thing after verbs:</strong>
penser à, réfléchir à, s'intéresser à, tenir à, renoncer à...
<em>Avez-vous pensé à votre assurance ? — Je dois <strong>y</strong> penser.</em>

<strong>Useful expressions:</strong>
<em>Ça <strong>y</strong> est.</em> (That's it / Done)
<em>Il n'<strong>y</strong> est pour rien.</em> (It's not his fault)
<em>Il s'<strong>y</strong> connaît bien.</em> (He knows his stuff)`
      }
    ]
  },
  {
    id: "comparaison",
    title: "La Comparaison",
    category: "Other Grammar",
    sections: [
      {
        heading: "Forms",
        content: `<strong>Superiority:</strong> plus ... que
<em>La France est <strong>plus grande que</strong> la Suisse.</em>

<strong>Inferiority:</strong> moins ... que
<em>Ce produit est <strong>moins cher que</strong> l'autre.</em>

<strong>Equality:</strong> aussi ... que / autant ... que
<em>Il est <strong>aussi</strong> compétent <strong>que</strong> son collègue.</em>
<em>Il travaille <strong>autant que</strong> moi.</em> (with verbs)

<strong>Irregular:</strong>
bon → <strong>meilleur</strong> (not "plus bon")
bien → <strong>mieux</strong> (not "plus bien")
mauvais → <strong>pire</strong> (or plus mauvais)

<strong>Superlative:</strong>
le/la/les plus/moins + adj.
<em>C'est <strong>la meilleure</strong> entreprise du secteur.</em>`
      }
    ]
  },

  // =====================================================
  // NOM, ADJECTIF ET ADVERBE
  // =====================================================
  {
    id: "nom-adjectif-adverbe",
    title: "Nom, Adjectif et Adverbe",
    category: "Other Grammar",
    sections: [
      {
        heading: "Gender of Nouns",
        content: `<strong>Masculine:</strong> -ment, -isme, -age, -ège
<em>le système, le risque, le capital, le problème, le groupe, le rôle, le domaine, le modèle, le service, le stage, le chômage</em>

<strong>Feminine:</strong> -tion, -sion, -ée, -ence/-ance, -ise, -ure, -té
<em>la banque, la finance, la solution, la mission, la mobilité, la demande, la crise, la production, la raison</em>

<strong>Watch out:</strong> <em>le problème, le système, le modèle</em> are masculine despite ending in -e!`
      },
      {
        heading: "Adjective Agreement & Placement",
        content: `Adjectives agree in gender and number with the noun:

<strong>Regular:</strong> add -e (fem.), -s (pl.), -es (fem. pl.)
<em>un résultat exceptionnel → des résultats exceptionnels</em>
<em>une année exceptionnelle → des années exceptionnelles</em>

<strong>Before the noun (BANGS):</strong> Beauty, Age, Number, Goodness, Size
<em>beau/bel/belle, nouveau/nouvel/nouvelle, vieux/vieil/vieille, grand, petit, bon, mauvais, jeune, joli</em>

<strong>Special forms before vowel/h:</strong>
beau → <strong>bel</strong> exemplaire
nouveau → <strong>nouvel</strong> employé
vieux → <strong>vieil</strong> ordinateur`
      },
      {
        heading: "Adverb Formation",
        content: `<strong>Rule:</strong> Feminine form of adjective + <strong>-ment</strong>

<table>
<tr><th>Adjective</th><th>Feminine</th><th>Adverb</th></tr>
<tr><td>rapide</td><td>rapide</td><td>rapide<strong>ment</strong></td></tr>
<tr><td>positif</td><td>positive</td><td>positive<strong>ment</strong></td></tr>
<tr><td>clair</td><td>claire</td><td>claire<strong>ment</strong></td></tr>
</table>

<strong>Irregular:</strong>
bon → <strong>bien</strong> &nbsp;|&nbsp; mauvais → <strong>mal</strong> &nbsp;|&nbsp; vrai → <strong>vraiment</strong>

<strong>Adverb placement:</strong>
• Simple tense: after the verb — <em>Il travaille <strong>bien</strong>.</em>
• Compound tense: between auxiliary and participle — <em>Il a <strong>bien</strong> travaillé.</em>
• With infinitive: before the infinitive — <em>Il faut <strong>bien</strong> choisir.</em>`
      }
    ]
  },

  // =====================================================
  // DÉMONSTRATIFS
  // =====================================================
  {
    id: "demonstratifs",
    title: "Les Démonstratifs",
    category: "Other Grammar",
    sections: [
      {
        heading: "Demonstrative Adjectives",
        content: `<table>
<tr><th></th><th>Masculine</th><th>Feminine</th></tr>
<tr><td>Singular</td><td><strong>ce</strong> marché / <strong>cet</strong> emploi (before vowel/h)</td><td><strong>cette</strong> entreprise</td></tr>
<tr><td>Plural</td><td colspan="2"><strong>ces</strong> produits / <strong>ces</strong> entreprises</td></tr>
</table>

<em>Ce marché est dynamique. Cet investissement est risqué. Cette offre est intéressante.</em>`
      },
      {
        heading: "Demonstrative Pronouns",
        content: `<table>
<tr><th></th><th>Masc. sg.</th><th>Fem. sg.</th><th>Masc. pl.</th><th>Fem. pl.</th></tr>
<tr><td>Form</td><td><strong>celui</strong></td><td><strong>celle</strong></td><td><strong>ceux</strong></td><td><strong>celles</strong></td></tr>
</table>

Always followed by <strong>qui/que/dont/où</strong> or <strong>de</strong>:
<em>Celui <strong>qui</strong> ne fait pas d'erreur aura un 6.</em>
<em>Il préfère sa voiture à <strong>celle de</strong> son copain.</em>
<em><strong>Ceux qui</strong> sont en retard ratent le bus.</em>

<strong>With -ci / -là:</strong>
<em>celui-ci</em> (this one) vs. <em>celui-là</em> (that one)`
      }
    ]
  },

  // =====================================================
  // POSSESSIFS
  // =====================================================
  {
    id: "possessifs",
    title: "Les Possessifs",
    category: "Other Grammar",
    sections: [
      {
        heading: "Possessive Adjectives",
        content: `<table>
<tr><th>Person</th><th>Masc. sg.</th><th>Fem. sg.</th><th>Plural</th></tr>
<tr><td>je</td><td><strong>mon</strong></td><td><strong>ma</strong> (mon*)</td><td><strong>mes</strong></td></tr>
<tr><td>tu</td><td><strong>ton</strong></td><td><strong>ta</strong> (ton*)</td><td><strong>tes</strong></td></tr>
<tr><td>il/elle</td><td><strong>son</strong></td><td><strong>sa</strong> (son*)</td><td><strong>ses</strong></td></tr>
<tr><td>nous</td><td colspan="2"><strong>notre</strong></td><td><strong>nos</strong></td></tr>
<tr><td>vous</td><td colspan="2"><strong>votre</strong></td><td><strong>vos</strong></td></tr>
<tr><td>ils/elles</td><td colspan="2"><strong>leur</strong></td><td><strong>leurs</strong></td></tr>
</table>

*Before feminine words starting with vowel/h: <em><strong>mon</strong> entreprise, <strong>son</strong> histoire</em>`
      },
      {
        heading: "Possessive Pronouns",
        content: `<table>
<tr><th>Person</th><th>Masc. sg.</th><th>Fem. sg.</th><th>Masc. pl.</th><th>Fem. pl.</th></tr>
<tr><td>je</td><td>le mien</td><td>la mienne</td><td>les miens</td><td>les miennes</td></tr>
<tr><td>tu</td><td>le tien</td><td>la tienne</td><td>les tiens</td><td>les tiennes</td></tr>
<tr><td>il/elle</td><td>le sien</td><td>la sienne</td><td>les siens</td><td>les siennes</td></tr>
<tr><td>nous</td><td>le nôtre</td><td>la nôtre</td><td colspan="2">les nôtres</td></tr>
<tr><td>vous</td><td>le vôtre</td><td>la vôtre</td><td colspan="2">les vôtres</td></tr>
<tr><td>ils/elles</td><td>le leur</td><td>la leur</td><td colspan="2">les leurs</td></tr>
</table>

<em>C'est ton stylo ? — Oui, c'est <strong>le mien</strong>.</em>
<em>Nos résultats sont meilleurs que <strong>les leurs</strong>.</em>`
      }
    ]
  },

  // =====================================================
  // INDÉFINIS
  // =====================================================
  {
    id: "indefinis",
    title: "Les Indéfinis",
    category: "Other Grammar",
    sections: [
      {
        heading: "Tout / Toute / Tous / Toutes",
        content: `<strong>As adjective (before noun):</strong>
<em><strong>Tout</strong> le monde était là.</em> (all/the whole)
<em><strong>Tous</strong> les ouvriers sont venus.</em>
<em><strong>Toutes</strong> les personnes présentes...</em>

<strong>As pronoun (replaces noun):</strong>
<em>Il les a <strong>tous</strong> salués.</em> (all of them — pronounced "tooss")
<em><strong>Tout</strong> s'est bien passé.</em> (everything)

<strong>As adverb (= completely):</strong>
<em>Elle est <strong>tout</strong> étonnée.</em> (but: <em>toute contente</em> before fem. consonant)`
      },
      {
        heading: "Chaque / Chacun / Quelque / Quelqu'un",
        content: `<strong>chaque</strong> (each, adjective — always singular):
<em><strong>Chaque</strong> service saura ce qu'il a à faire.</em>

<strong>chacun / chacune</strong> (each one, pronoun):
<em><strong>Chacun</strong> pourra parler de ses problèmes.</em>
<em>Ces modèles coûtent 70 francs <strong>chacun</strong>.</em>

<strong>quelques</strong> (a few, adjective — always plural):
<em>J'ai <strong>quelques</strong> questions à poser.</em>

<strong>quelqu'un / quelque chose</strong> (someone / something) + <strong>de</strong> + adjective:
<em><strong>Quelqu'un de</strong> dynamique.</em>
<em><strong>Quelque chose de</strong> nouveau.</em>`
      }
    ]
  },

  // =====================================================
  // LES ACCENTS
  // =====================================================
  {
    id: "accents",
    title: "Les Accents",
    category: "Other Grammar",
    sections: [
      {
        heading: "L'accent aigu — é",
        content: `<strong>Rule 1:</strong> NEVER an accent aigu before two consonants!
<em>respecter, descendre, terminer, espoir, rester</em>

<strong>Exception:</strong> If the 2nd consonant is <strong>r, l, or h</strong> → accent aigu allowed
(Remember: <em>Rote heisse Liebe</em>)
<em>église, étranger, écrire, février</em>

<strong>Rule 2:</strong> NEVER an accent before a double consonant!
<em>erreur, personnelle, effort, dessert</em>

<strong>Rule 3:</strong> "x" counts as double consonant → no accent
<em>examen, expérience, exercice, exemple</em>

<strong>Rule 4:</strong> ch, ph, th, gn count as ONE consonant → accent OK
<em>échange, méthode, téléphone, éléphant</em>`
      },
      {
        heading: "L'accent grave — è & L'accent circonflexe — ê",
        content: `<strong>Accent grave:</strong>

<strong>Rule 5:</strong> On the second-to-last "e" when the last "e" is silent:
<em>fidèle, modèle, règle, problème</em>

<strong>Rule 6:</strong> At end of word when singular ends in -s:
<em>progrès, après, succès, congrès</em>

<strong>Rule 7:</strong> In -er verbs, e → è when the following syllable has a silent e:
<em>j'espère, tu espères, il espère</em> (but: <em>nous espérons, vous espérez</em>)

<strong>Accent circonflexe:</strong>
Often marks a historical "s" that disappeared:
<em>hôpital (hospital), forêt (forest), île (island), coût (cost), intérêt</em>`
      }
    ]
  },

  // =====================================================
  // L'EXPRESSION DU NOMBRE
  // =====================================================
  {
    id: "nombres",
    title: "L'Expression du Nombre",
    category: "Other Grammar",
    sections: [
      {
        heading: "Key Numbers & Swiss French",
        content: `<strong>Special French numbers:</strong>
70 = <strong>soixante-dix</strong> (60+10) — Swiss: <strong>septante</strong>
80 = <strong>quatre-vingts</strong> (4×20) — Swiss: <strong>huitante</strong>
90 = <strong>quatre-vingt-dix</strong> (4×20+10) — Swiss: <strong>nonante</strong>

<strong>nombre</strong> (m.) = Zahl / Anzahl: <em>le nombre d'abonnés</em>
<strong>numéro</strong> (m.) = Nummer: <em>le numéro de téléphone</em>

<strong>Ordinal numbers:</strong> add <strong>-ième</strong> to the cardinal
<em>deux → deuxième, trois → troisième</em>
Exception: <em>un → <strong>premier / première</strong></em>`
      },
      {
        heading: "Operations & Measurements",
        content: `<strong>Operations:</strong>
1 + 3 = 4 → <em>un <strong>plus</strong> trois, <strong>égal</strong> quatre</em>
10 − 2 = 8 → <em>dix <strong>moins</strong> deux, <strong>égal</strong> huit</em>
2 × 6 = 12 → <em>deux <strong>fois</strong> six, <strong>égal</strong> douze</em>
10 ÷ 2 = 5 → <em>dix <strong>divisé par</strong> deux, <strong>égal</strong> cinq</em>

<strong>Percentages:</strong> <em>50 <strong>pour cent</strong> (50%)</em>

<strong>Measurements:</strong>
<em>13,25 m = treize mètres vingt-cinq centimètres</em>
<em>4 m² = quatre mètres <strong>carrés</strong></em>
<em>8 m³ = huit mètres <strong>cubes</strong></em>
<em>92 km/h = quatre-vingt-douze kilomètres <strong>heure</strong></em>`
      }
    ]
  }
];
