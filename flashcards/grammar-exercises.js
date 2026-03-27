const GRAMMAR_EXERCISES = {

  // =============================================================================
  // CONJUGATION FLASHCARDS (~150 cards)
  // =============================================================================
  conjugation: [

    // -------------------------------------------------------------------------
    // AVOIR — Futur Simple (stem: aur-)
    // -------------------------------------------------------------------------
    { id: "conj-001", topicId: "futur", verb: "avoir", tense: "Futur Simple", person: "je", answer: "aurai", fullForm: "j'aurai", explanation: "Avoir uses the irregular stem \"aur-\" + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },
    { id: "conj-002", topicId: "futur", verb: "avoir", tense: "Futur Simple", person: "tu", answer: "auras", fullForm: "tu auras", explanation: "Avoir uses the irregular stem \"aur-\" + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },
    { id: "conj-003", topicId: "futur", verb: "avoir", tense: "Futur Simple", person: "il/elle/on", answer: "aura", fullForm: "il aura", explanation: "Avoir uses the irregular stem \"aur-\" + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },
    { id: "conj-004", topicId: "futur", verb: "avoir", tense: "Futur Simple", person: "nous", answer: "aurons", fullForm: "nous aurons", explanation: "Avoir uses the irregular stem \"aur-\" + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },
    { id: "conj-005", topicId: "futur", verb: "avoir", tense: "Futur Simple", person: "vous", answer: "aurez", fullForm: "vous aurez", explanation: "Avoir uses the irregular stem \"aur-\" + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },
    { id: "conj-006", topicId: "futur", verb: "avoir", tense: "Futur Simple", person: "ils/elles", answer: "auront", fullForm: "ils auront", explanation: "Avoir uses the irregular stem \"aur-\" + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },

    // AVOIR — Conditionnel Présent (stem: aur-)
    { id: "conj-007", topicId: "conditionnel", verb: "avoir", tense: "Conditionnel Présent", person: "je", answer: "aurais", fullForm: "j'aurais", explanation: "Conditionnel uses the same irregular stem \"aur-\" as futur + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-008", topicId: "conditionnel", verb: "avoir", tense: "Conditionnel Présent", person: "tu", answer: "aurais", fullForm: "tu aurais", explanation: "Conditionnel uses the same irregular stem \"aur-\" as futur + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-009", topicId: "conditionnel", verb: "avoir", tense: "Conditionnel Présent", person: "il/elle/on", answer: "aurait", fullForm: "il aurait", explanation: "Conditionnel uses the same irregular stem \"aur-\" as futur + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-010", topicId: "conditionnel", verb: "avoir", tense: "Conditionnel Présent", person: "nous", answer: "aurions", fullForm: "nous aurions", explanation: "Conditionnel uses the same irregular stem \"aur-\" as futur + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-011", topicId: "conditionnel", verb: "avoir", tense: "Conditionnel Présent", person: "vous", answer: "auriez", fullForm: "vous auriez", explanation: "Conditionnel uses the same irregular stem \"aur-\" as futur + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-012", topicId: "conditionnel", verb: "avoir", tense: "Conditionnel Présent", person: "ils/elles", answer: "auraient", fullForm: "ils auraient", explanation: "Conditionnel uses the same irregular stem \"aur-\" as futur + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },

    // AVOIR — Présent
    { id: "conj-013", topicId: "present", verb: "avoir", tense: "Présent", person: "je", answer: "ai", fullForm: "j'ai", explanation: "Avoir is fully irregular in the présent — each form must be memorized." },
    { id: "conj-014", topicId: "present", verb: "avoir", tense: "Présent", person: "tu", answer: "as", fullForm: "tu as", explanation: "Avoir is fully irregular in the présent — each form must be memorized." },
    { id: "conj-015", topicId: "present", verb: "avoir", tense: "Présent", person: "il/elle/on", answer: "a", fullForm: "il a", explanation: "Avoir is fully irregular in the présent — each form must be memorized." },
    { id: "conj-016", topicId: "present", verb: "avoir", tense: "Présent", person: "nous", answer: "avons", fullForm: "nous avons", explanation: "Avoir is fully irregular in the présent — each form must be memorized." },
    { id: "conj-017", topicId: "present", verb: "avoir", tense: "Présent", person: "vous", answer: "avez", fullForm: "vous avez", explanation: "Avoir is fully irregular in the présent — each form must be memorized." },
    { id: "conj-018", topicId: "present", verb: "avoir", tense: "Présent", person: "ils/elles", answer: "ont", fullForm: "ils ont", explanation: "Avoir is fully irregular in the présent — each form must be memorized." },

    // AVOIR — Imparfait (stem: av-)
    { id: "conj-019", topicId: "passe-compose", verb: "avoir", tense: "Imparfait", person: "je", answer: "avais", fullForm: "j'avais", explanation: "Imparfait: take the nous-form stem (av-) + endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-020", topicId: "passe-compose", verb: "avoir", tense: "Imparfait", person: "tu", answer: "avais", fullForm: "tu avais", explanation: "Imparfait: take the nous-form stem (av-) + endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-021", topicId: "passe-compose", verb: "avoir", tense: "Imparfait", person: "il/elle/on", answer: "avait", fullForm: "il avait", explanation: "Imparfait: take the nous-form stem (av-) + endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-022", topicId: "passe-compose", verb: "avoir", tense: "Imparfait", person: "nous", answer: "avions", fullForm: "nous avions", explanation: "Imparfait: take the nous-form stem (av-) + endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-023", topicId: "passe-compose", verb: "avoir", tense: "Imparfait", person: "vous", answer: "aviez", fullForm: "vous aviez", explanation: "Imparfait: take the nous-form stem (av-) + endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-024", topicId: "passe-compose", verb: "avoir", tense: "Imparfait", person: "ils/elles", answer: "avaient", fullForm: "ils avaient", explanation: "Imparfait: take the nous-form stem (av-) + endings (-ais, -ais, -ait, -ions, -iez, -aient)." },

    // AVOIR — Subjonctif Présent
    { id: "conj-025", topicId: "subjonctif", verb: "avoir", tense: "Subjonctif Présent", person: "je", answer: "aie", fullForm: "que j'aie", explanation: "Subjonctif of avoir is fully irregular — memorize: aie, aies, ait, ayons, ayez, aient." },
    { id: "conj-026", topicId: "subjonctif", verb: "avoir", tense: "Subjonctif Présent", person: "tu", answer: "aies", fullForm: "que tu aies", explanation: "Subjonctif of avoir is fully irregular — memorize: aie, aies, ait, ayons, ayez, aient." },
    { id: "conj-027", topicId: "subjonctif", verb: "avoir", tense: "Subjonctif Présent", person: "il/elle/on", answer: "ait", fullForm: "qu'il ait", explanation: "Subjonctif of avoir is fully irregular — memorize: aie, aies, ait, ayons, ayez, aient." },
    { id: "conj-028", topicId: "subjonctif", verb: "avoir", tense: "Subjonctif Présent", person: "nous", answer: "ayons", fullForm: "que nous ayons", explanation: "Subjonctif of avoir is fully irregular — memorize: aie, aies, ait, ayons, ayez, aient." },
    { id: "conj-029", topicId: "subjonctif", verb: "avoir", tense: "Subjonctif Présent", person: "vous", answer: "ayez", fullForm: "que vous ayez", explanation: "Subjonctif of avoir is fully irregular — memorize: aie, aies, ait, ayons, ayez, aient." },
    { id: "conj-030", topicId: "subjonctif", verb: "avoir", tense: "Subjonctif Présent", person: "ils/elles", answer: "aient", fullForm: "qu'ils aient", explanation: "Subjonctif of avoir is fully irregular — memorize: aie, aies, ait, ayons, ayez, aient." },

    // -------------------------------------------------------------------------
    // ÊTRE — Futur Simple (stem: ser-)
    // -------------------------------------------------------------------------
    { id: "conj-031", topicId: "futur", verb: "être", tense: "Futur Simple", person: "je", answer: "serai", fullForm: "je serai", explanation: "Être uses the irregular stem \"ser-\" + futur endings." },
    { id: "conj-032", topicId: "futur", verb: "être", tense: "Futur Simple", person: "tu", answer: "seras", fullForm: "tu seras", explanation: "Être uses the irregular stem \"ser-\" + futur endings." },
    { id: "conj-033", topicId: "futur", verb: "être", tense: "Futur Simple", person: "il/elle/on", answer: "sera", fullForm: "il sera", explanation: "Être uses the irregular stem \"ser-\" + futur endings." },
    { id: "conj-034", topicId: "futur", verb: "être", tense: "Futur Simple", person: "nous", answer: "serons", fullForm: "nous serons", explanation: "Être uses the irregular stem \"ser-\" + futur endings." },
    { id: "conj-035", topicId: "futur", verb: "être", tense: "Futur Simple", person: "vous", answer: "serez", fullForm: "vous serez", explanation: "Être uses the irregular stem \"ser-\" + futur endings." },
    { id: "conj-036", topicId: "futur", verb: "être", tense: "Futur Simple", person: "ils/elles", answer: "seront", fullForm: "ils seront", explanation: "Être uses the irregular stem \"ser-\" + futur endings." },

    // ÊTRE — Conditionnel Présent (stem: ser-)
    { id: "conj-037", topicId: "conditionnel", verb: "être", tense: "Conditionnel Présent", person: "je", answer: "serais", fullForm: "je serais", explanation: "Conditionnel: irregular stem \"ser-\" + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-038", topicId: "conditionnel", verb: "être", tense: "Conditionnel Présent", person: "tu", answer: "serais", fullForm: "tu serais", explanation: "Conditionnel: irregular stem \"ser-\" + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-039", topicId: "conditionnel", verb: "être", tense: "Conditionnel Présent", person: "il/elle/on", answer: "serait", fullForm: "il serait", explanation: "Conditionnel: irregular stem \"ser-\" + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-040", topicId: "conditionnel", verb: "être", tense: "Conditionnel Présent", person: "nous", answer: "serions", fullForm: "nous serions", explanation: "Conditionnel: irregular stem \"ser-\" + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-041", topicId: "conditionnel", verb: "être", tense: "Conditionnel Présent", person: "vous", answer: "seriez", fullForm: "vous seriez", explanation: "Conditionnel: irregular stem \"ser-\" + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    { id: "conj-042", topicId: "conditionnel", verb: "être", tense: "Conditionnel Présent", person: "ils/elles", answer: "seraient", fullForm: "ils seraient", explanation: "Conditionnel: irregular stem \"ser-\" + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },

    // ÊTRE — Présent
    { id: "conj-043", topicId: "present", verb: "être", tense: "Présent", person: "je", answer: "suis", fullForm: "je suis", explanation: "Être is fully irregular in the présent — each form must be memorized." },
    { id: "conj-044", topicId: "present", verb: "être", tense: "Présent", person: "tu", answer: "es", fullForm: "tu es", explanation: "Être is fully irregular in the présent — each form must be memorized." },
    { id: "conj-045", topicId: "present", verb: "être", tense: "Présent", person: "il/elle/on", answer: "est", fullForm: "il est", explanation: "Être is fully irregular in the présent — each form must be memorized." },
    { id: "conj-046", topicId: "present", verb: "être", tense: "Présent", person: "nous", answer: "sommes", fullForm: "nous sommes", explanation: "Être is fully irregular in the présent — each form must be memorized." },
    { id: "conj-047", topicId: "present", verb: "être", tense: "Présent", person: "vous", answer: "êtes", fullForm: "vous êtes", explanation: "Être is fully irregular in the présent — each form must be memorized." },
    { id: "conj-048", topicId: "present", verb: "être", tense: "Présent", person: "ils/elles", answer: "sont", fullForm: "ils sont", explanation: "Être is fully irregular in the présent — each form must be memorized." },

    // ÊTRE — Imparfait (stem: ét-)
    { id: "conj-049", topicId: "passe-compose", verb: "être", tense: "Imparfait", person: "je", answer: "étais", fullForm: "j'étais", explanation: "Imparfait: stem \"ét-\" (from nous étions) + standard endings." },
    { id: "conj-050", topicId: "passe-compose", verb: "être", tense: "Imparfait", person: "tu", answer: "étais", fullForm: "tu étais", explanation: "Imparfait: stem \"ét-\" (from nous étions) + standard endings." },
    { id: "conj-051", topicId: "passe-compose", verb: "être", tense: "Imparfait", person: "il/elle/on", answer: "était", fullForm: "il était", explanation: "Imparfait: stem \"ét-\" (from nous étions) + standard endings." },
    { id: "conj-052", topicId: "passe-compose", verb: "être", tense: "Imparfait", person: "nous", answer: "étions", fullForm: "nous étions", explanation: "Imparfait: stem \"ét-\" (from nous étions) + standard endings." },
    { id: "conj-053", topicId: "passe-compose", verb: "être", tense: "Imparfait", person: "vous", answer: "étiez", fullForm: "vous étiez", explanation: "Imparfait: stem \"ét-\" (from nous étions) + standard endings." },
    { id: "conj-054", topicId: "passe-compose", verb: "être", tense: "Imparfait", person: "ils/elles", answer: "étaient", fullForm: "ils étaient", explanation: "Imparfait: stem \"ét-\" (from nous étions) + standard endings." },

    // ÊTRE — Subjonctif Présent
    { id: "conj-055", topicId: "subjonctif", verb: "être", tense: "Subjonctif Présent", person: "je", answer: "sois", fullForm: "que je sois", explanation: "Subjonctif of être is fully irregular — memorize: sois, sois, soit, soyons, soyez, soient." },
    { id: "conj-056", topicId: "subjonctif", verb: "être", tense: "Subjonctif Présent", person: "tu", answer: "sois", fullForm: "que tu sois", explanation: "Subjonctif of être is fully irregular — memorize: sois, sois, soit, soyons, soyez, soient." },
    { id: "conj-057", topicId: "subjonctif", verb: "être", tense: "Subjonctif Présent", person: "il/elle/on", answer: "soit", fullForm: "qu'il soit", explanation: "Subjonctif of être is fully irregular — memorize: sois, sois, soit, soyons, soyez, soient." },
    { id: "conj-058", topicId: "subjonctif", verb: "être", tense: "Subjonctif Présent", person: "nous", answer: "soyons", fullForm: "que nous soyons", explanation: "Subjonctif of être is fully irregular — memorize: sois, sois, soit, soyons, soyez, soient." },
    { id: "conj-059", topicId: "subjonctif", verb: "être", tense: "Subjonctif Présent", person: "vous", answer: "soyez", fullForm: "que vous soyez", explanation: "Subjonctif of être is fully irregular — memorize: sois, sois, soit, soyons, soyez, soient." },
    { id: "conj-060", topicId: "subjonctif", verb: "être", tense: "Subjonctif Présent", person: "ils/elles", answer: "soient", fullForm: "qu'ils soient", explanation: "Subjonctif of être is fully irregular — memorize: sois, sois, soit, soyons, soyez, soient." },

    // -------------------------------------------------------------------------
    // ALLER — Futur Simple (stem: ir-)
    // -------------------------------------------------------------------------
    { id: "conj-061", topicId: "futur", verb: "aller", tense: "Futur Simple", person: "je", answer: "irai", fullForm: "j'irai", explanation: "Aller uses the irregular stem \"ir-\" + futur endings." },
    { id: "conj-062", topicId: "futur", verb: "aller", tense: "Futur Simple", person: "tu", answer: "iras", fullForm: "tu iras", explanation: "Aller uses the irregular stem \"ir-\" + futur endings." },
    { id: "conj-063", topicId: "futur", verb: "aller", tense: "Futur Simple", person: "il/elle/on", answer: "ira", fullForm: "il ira", explanation: "Aller uses the irregular stem \"ir-\" + futur endings." },
    { id: "conj-064", topicId: "futur", verb: "aller", tense: "Futur Simple", person: "nous", answer: "irons", fullForm: "nous irons", explanation: "Aller uses the irregular stem \"ir-\" + futur endings." },
    { id: "conj-065", topicId: "futur", verb: "aller", tense: "Futur Simple", person: "vous", answer: "irez", fullForm: "vous irez", explanation: "Aller uses the irregular stem \"ir-\" + futur endings." },
    { id: "conj-066", topicId: "futur", verb: "aller", tense: "Futur Simple", person: "ils/elles", answer: "iront", fullForm: "ils iront", explanation: "Aller uses the irregular stem \"ir-\" + futur endings." },

    // ALLER — Conditionnel Présent (stem: ir-)
    { id: "conj-067", topicId: "conditionnel", verb: "aller", tense: "Conditionnel Présent", person: "je", answer: "irais", fullForm: "j'irais", explanation: "Conditionnel: irregular stem \"ir-\" + imparfait endings." },
    { id: "conj-068", topicId: "conditionnel", verb: "aller", tense: "Conditionnel Présent", person: "tu", answer: "irais", fullForm: "tu irais", explanation: "Conditionnel: irregular stem \"ir-\" + imparfait endings." },
    { id: "conj-069", topicId: "conditionnel", verb: "aller", tense: "Conditionnel Présent", person: "il/elle/on", answer: "irait", fullForm: "il irait", explanation: "Conditionnel: irregular stem \"ir-\" + imparfait endings." },
    { id: "conj-070", topicId: "conditionnel", verb: "aller", tense: "Conditionnel Présent", person: "nous", answer: "irions", fullForm: "nous irions", explanation: "Conditionnel: irregular stem \"ir-\" + imparfait endings." },
    { id: "conj-071", topicId: "conditionnel", verb: "aller", tense: "Conditionnel Présent", person: "vous", answer: "iriez", fullForm: "vous iriez", explanation: "Conditionnel: irregular stem \"ir-\" + imparfait endings." },
    { id: "conj-072", topicId: "conditionnel", verb: "aller", tense: "Conditionnel Présent", person: "ils/elles", answer: "iraient", fullForm: "ils iraient", explanation: "Conditionnel: irregular stem \"ir-\" + imparfait endings." },

    // ALLER — Présent
    { id: "conj-073", topicId: "present", verb: "aller", tense: "Présent", person: "je", answer: "vais", fullForm: "je vais", explanation: "Aller is irregular — je vais, tu vas, il va, nous allons, vous allez, ils vont." },
    { id: "conj-074", topicId: "present", verb: "aller", tense: "Présent", person: "tu", answer: "vas", fullForm: "tu vas", explanation: "Aller is irregular — je vais, tu vas, il va, nous allons, vous allez, ils vont." },
    { id: "conj-075", topicId: "present", verb: "aller", tense: "Présent", person: "il/elle/on", answer: "va", fullForm: "il va", explanation: "Aller is irregular — je vais, tu vas, il va, nous allons, vous allez, ils vont." },
    { id: "conj-076", topicId: "present", verb: "aller", tense: "Présent", person: "nous", answer: "allons", fullForm: "nous allons", explanation: "Aller is irregular — je vais, tu vas, il va, nous allons, vous allez, ils vont." },
    { id: "conj-077", topicId: "present", verb: "aller", tense: "Présent", person: "vous", answer: "allez", fullForm: "vous allez", explanation: "Aller is irregular — je vais, tu vas, il va, nous allons, vous allez, ils vont." },
    { id: "conj-078", topicId: "present", verb: "aller", tense: "Présent", person: "ils/elles", answer: "vont", fullForm: "ils vont", explanation: "Aller is irregular — je vais, tu vas, il va, nous allons, vous allez, ils vont." },

    // ALLER — Imparfait (stem: all-)
    { id: "conj-079", topicId: "passe-compose", verb: "aller", tense: "Imparfait", person: "je", answer: "allais", fullForm: "j'allais", explanation: "Imparfait: stem \"all-\" (from nous allons) + standard endings." },
    { id: "conj-080", topicId: "passe-compose", verb: "aller", tense: "Imparfait", person: "tu", answer: "allais", fullForm: "tu allais", explanation: "Imparfait: stem \"all-\" (from nous allons) + standard endings." },
    { id: "conj-081", topicId: "passe-compose", verb: "aller", tense: "Imparfait", person: "il/elle/on", answer: "allait", fullForm: "il allait", explanation: "Imparfait: stem \"all-\" (from nous allons) + standard endings." },
    { id: "conj-082", topicId: "passe-compose", verb: "aller", tense: "Imparfait", person: "nous", answer: "allions", fullForm: "nous allions", explanation: "Imparfait: stem \"all-\" (from nous allons) + standard endings." },
    { id: "conj-083", topicId: "passe-compose", verb: "aller", tense: "Imparfait", person: "vous", answer: "alliez", fullForm: "vous alliez", explanation: "Imparfait: stem \"all-\" (from nous allons) + standard endings." },
    { id: "conj-084", topicId: "passe-compose", verb: "aller", tense: "Imparfait", person: "ils/elles", answer: "allaient", fullForm: "ils allaient", explanation: "Imparfait: stem \"all-\" (from nous allons) + standard endings." },

    // ALLER — Subjonctif Présent
    { id: "conj-085", topicId: "subjonctif", verb: "aller", tense: "Subjonctif Présent", person: "je", answer: "aille", fullForm: "que j'aille", explanation: "Subjonctif of aller has two stems: aill- (je/tu/il/ils) and all- (nous/vous)." },
    { id: "conj-086", topicId: "subjonctif", verb: "aller", tense: "Subjonctif Présent", person: "tu", answer: "ailles", fullForm: "que tu ailles", explanation: "Subjonctif of aller has two stems: aill- (je/tu/il/ils) and all- (nous/vous)." },
    { id: "conj-087", topicId: "subjonctif", verb: "aller", tense: "Subjonctif Présent", person: "il/elle/on", answer: "aille", fullForm: "qu'il aille", explanation: "Subjonctif of aller has two stems: aill- (je/tu/il/ils) and all- (nous/vous)." },
    { id: "conj-088", topicId: "subjonctif", verb: "aller", tense: "Subjonctif Présent", person: "nous", answer: "allions", fullForm: "que nous allions", explanation: "Subjonctif of aller has two stems: aill- (je/tu/il/ils) and all- (nous/vous)." },
    { id: "conj-089", topicId: "subjonctif", verb: "aller", tense: "Subjonctif Présent", person: "vous", answer: "alliez", fullForm: "que vous alliez", explanation: "Subjonctif of aller has two stems: aill- (je/tu/il/ils) and all- (nous/vous)." },
    { id: "conj-090", topicId: "subjonctif", verb: "aller", tense: "Subjonctif Présent", person: "ils/elles", answer: "aillent", fullForm: "qu'ils aillent", explanation: "Subjonctif of aller has two stems: aill- (je/tu/il/ils) and all- (nous/vous)." },

    // -------------------------------------------------------------------------
    // FAIRE — Futur Simple (stem: fer-)
    // -------------------------------------------------------------------------
    { id: "conj-091", topicId: "futur", verb: "faire", tense: "Futur Simple", person: "je", answer: "ferai", fullForm: "je ferai", explanation: "Faire uses the irregular stem \"fer-\" + futur endings." },
    { id: "conj-092", topicId: "futur", verb: "faire", tense: "Futur Simple", person: "tu", answer: "feras", fullForm: "tu feras", explanation: "Faire uses the irregular stem \"fer-\" + futur endings." },
    { id: "conj-093", topicId: "futur", verb: "faire", tense: "Futur Simple", person: "il/elle/on", answer: "fera", fullForm: "il fera", explanation: "Faire uses the irregular stem \"fer-\" + futur endings." },
    { id: "conj-094", topicId: "futur", verb: "faire", tense: "Futur Simple", person: "nous", answer: "ferons", fullForm: "nous ferons", explanation: "Faire uses the irregular stem \"fer-\" + futur endings." },
    { id: "conj-095", topicId: "futur", verb: "faire", tense: "Futur Simple", person: "vous", answer: "ferez", fullForm: "vous ferez", explanation: "Faire uses the irregular stem \"fer-\" + futur endings." },
    { id: "conj-096", topicId: "futur", verb: "faire", tense: "Futur Simple", person: "ils/elles", answer: "feront", fullForm: "ils feront", explanation: "Faire uses the irregular stem \"fer-\" + futur endings." },

    // FAIRE — Conditionnel Présent (stem: fer-)
    { id: "conj-097", topicId: "conditionnel", verb: "faire", tense: "Conditionnel Présent", person: "je", answer: "ferais", fullForm: "je ferais", explanation: "Conditionnel: irregular stem \"fer-\" + imparfait endings." },
    { id: "conj-098", topicId: "conditionnel", verb: "faire", tense: "Conditionnel Présent", person: "tu", answer: "ferais", fullForm: "tu ferais", explanation: "Conditionnel: irregular stem \"fer-\" + imparfait endings." },
    { id: "conj-099", topicId: "conditionnel", verb: "faire", tense: "Conditionnel Présent", person: "il/elle/on", answer: "ferait", fullForm: "il ferait", explanation: "Conditionnel: irregular stem \"fer-\" + imparfait endings." },
    { id: "conj-100", topicId: "conditionnel", verb: "faire", tense: "Conditionnel Présent", person: "nous", answer: "ferions", fullForm: "nous ferions", explanation: "Conditionnel: irregular stem \"fer-\" + imparfait endings." },
    { id: "conj-101", topicId: "conditionnel", verb: "faire", tense: "Conditionnel Présent", person: "vous", answer: "feriez", fullForm: "vous feriez", explanation: "Conditionnel: irregular stem \"fer-\" + imparfait endings." },
    { id: "conj-102", topicId: "conditionnel", verb: "faire", tense: "Conditionnel Présent", person: "ils/elles", answer: "feraient", fullForm: "ils feraient", explanation: "Conditionnel: irregular stem \"fer-\" + imparfait endings." },

    // FAIRE — Présent
    { id: "conj-103", topicId: "present", verb: "faire", tense: "Présent", person: "je", answer: "fais", fullForm: "je fais", explanation: "Faire is irregular — je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
    { id: "conj-104", topicId: "present", verb: "faire", tense: "Présent", person: "tu", answer: "fais", fullForm: "tu fais", explanation: "Faire is irregular — je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
    { id: "conj-105", topicId: "present", verb: "faire", tense: "Présent", person: "il/elle/on", answer: "fait", fullForm: "il fait", explanation: "Faire is irregular — je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
    { id: "conj-106", topicId: "present", verb: "faire", tense: "Présent", person: "nous", answer: "faisons", fullForm: "nous faisons", explanation: "Faire is irregular — je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
    { id: "conj-107", topicId: "present", verb: "faire", tense: "Présent", person: "vous", answer: "faites", fullForm: "vous faites", explanation: "Faire is irregular — je fais, tu fais, il fait, nous faisons, vous faites, ils font." },
    { id: "conj-108", topicId: "present", verb: "faire", tense: "Présent", person: "ils/elles", answer: "font", fullForm: "ils font", explanation: "Faire is irregular — je fais, tu fais, il fait, nous faisons, vous faites, ils font." },

    // FAIRE — Imparfait (stem: fais-)
    { id: "conj-109", topicId: "passe-compose", verb: "faire", tense: "Imparfait", person: "je", answer: "faisais", fullForm: "je faisais", explanation: "Imparfait: stem \"fais-\" (from nous faisons) + standard endings." },
    { id: "conj-110", topicId: "passe-compose", verb: "faire", tense: "Imparfait", person: "tu", answer: "faisais", fullForm: "tu faisais", explanation: "Imparfait: stem \"fais-\" (from nous faisons) + standard endings." },
    { id: "conj-111", topicId: "passe-compose", verb: "faire", tense: "Imparfait", person: "il/elle/on", answer: "faisait", fullForm: "il faisait", explanation: "Imparfait: stem \"fais-\" (from nous faisons) + standard endings." },
    { id: "conj-112", topicId: "passe-compose", verb: "faire", tense: "Imparfait", person: "nous", answer: "faisions", fullForm: "nous faisions", explanation: "Imparfait: stem \"fais-\" (from nous faisons) + standard endings." },
    { id: "conj-113", topicId: "passe-compose", verb: "faire", tense: "Imparfait", person: "vous", answer: "faisiez", fullForm: "vous faisiez", explanation: "Imparfait: stem \"fais-\" (from nous faisons) + standard endings." },
    { id: "conj-114", topicId: "passe-compose", verb: "faire", tense: "Imparfait", person: "ils/elles", answer: "faisaient", fullForm: "ils faisaient", explanation: "Imparfait: stem \"fais-\" (from nous faisons) + standard endings." },

    // FAIRE — Subjonctif Présent
    { id: "conj-115", topicId: "subjonctif", verb: "faire", tense: "Subjonctif Présent", person: "je", answer: "fasse", fullForm: "que je fasse", explanation: "Subjonctif of faire is fully irregular — stem fass- for all persons." },
    { id: "conj-116", topicId: "subjonctif", verb: "faire", tense: "Subjonctif Présent", person: "tu", answer: "fasses", fullForm: "que tu fasses", explanation: "Subjonctif of faire is fully irregular — stem fass- for all persons." },
    { id: "conj-117", topicId: "subjonctif", verb: "faire", tense: "Subjonctif Présent", person: "il/elle/on", answer: "fasse", fullForm: "qu'il fasse", explanation: "Subjonctif of faire is fully irregular — stem fass- for all persons." },
    { id: "conj-118", topicId: "subjonctif", verb: "faire", tense: "Subjonctif Présent", person: "nous", answer: "fassions", fullForm: "que nous fassions", explanation: "Subjonctif of faire is fully irregular — stem fass- for all persons." },
    { id: "conj-119", topicId: "subjonctif", verb: "faire", tense: "Subjonctif Présent", person: "vous", answer: "fassiez", fullForm: "que vous fassiez", explanation: "Subjonctif of faire is fully irregular — stem fass- for all persons." },
    { id: "conj-120", topicId: "subjonctif", verb: "faire", tense: "Subjonctif Présent", person: "ils/elles", answer: "fassent", fullForm: "qu'ils fassent", explanation: "Subjonctif of faire is fully irregular — stem fass- for all persons." },

    // -------------------------------------------------------------------------
    // POUVOIR — je / nous / ils — tricky forms only
    // -------------------------------------------------------------------------
    // Futur (stem: pourr-)
    { id: "conj-121", topicId: "futur", verb: "pouvoir", tense: "Futur Simple", person: "je", answer: "pourrai", fullForm: "je pourrai", explanation: "Pouvoir uses the irregular stem \"pourr-\" + futur endings." },
    { id: "conj-122", topicId: "futur", verb: "pouvoir", tense: "Futur Simple", person: "nous", answer: "pourrons", fullForm: "nous pourrons", explanation: "Pouvoir uses the irregular stem \"pourr-\" + futur endings." },
    { id: "conj-123", topicId: "futur", verb: "pouvoir", tense: "Futur Simple", person: "ils/elles", answer: "pourront", fullForm: "ils pourront", explanation: "Pouvoir uses the irregular stem \"pourr-\" + futur endings." },
    // Conditionnel (stem: pourr-)
    { id: "conj-124", topicId: "conditionnel", verb: "pouvoir", tense: "Conditionnel Présent", person: "je", answer: "pourrais", fullForm: "je pourrais", explanation: "Same irregular stem as futur ('pourr-') + imparfait endings (-ais, -ions, etc.)." },
    { id: "conj-125", topicId: "conditionnel", verb: "pouvoir", tense: "Conditionnel Présent", person: "nous", answer: "pourrions", fullForm: "nous pourrions", explanation: "Same irregular stem as futur ('pourr-') + imparfait endings (-ais, -ions, etc.)." },
    // Présent
    { id: "conj-126", topicId: "present", verb: "pouvoir", tense: "Présent", person: "je", answer: "peux", fullForm: "je peux", explanation: "Pouvoir is irregular — je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent." },
    { id: "conj-127", topicId: "present", verb: "pouvoir", tense: "Présent", person: "nous", answer: "pouvons", fullForm: "nous pouvons", explanation: "Pouvoir is irregular — je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent." },
    { id: "conj-128", topicId: "present", verb: "pouvoir", tense: "Présent", person: "ils/elles", answer: "peuvent", fullForm: "ils peuvent", explanation: "Pouvoir is irregular — je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent." },
    // Subjonctif
    { id: "conj-129", topicId: "subjonctif", verb: "pouvoir", tense: "Subjonctif Présent", person: "je", answer: "puisse", fullForm: "que je puisse", explanation: "Subjonctif of pouvoir is fully irregular — stem puiss- for all persons." },
    { id: "conj-130", topicId: "subjonctif", verb: "pouvoir", tense: "Subjonctif Présent", person: "nous", answer: "puissions", fullForm: "que nous puissions", explanation: "Subjonctif of pouvoir is fully irregular — stem puiss- for all persons." },
    { id: "conj-131", topicId: "subjonctif", verb: "pouvoir", tense: "Subjonctif Présent", person: "ils/elles", answer: "puissent", fullForm: "qu'ils puissent", explanation: "Subjonctif of pouvoir is fully irregular — stem puiss- for all persons." },

    // -------------------------------------------------------------------------
    // VOULOIR — je / nous / ils — tricky forms
    // -------------------------------------------------------------------------
    // Futur (stem: voudr-)
    { id: "conj-132", topicId: "futur", verb: "vouloir", tense: "Futur Simple", person: "je", answer: "voudrai", fullForm: "je voudrai", explanation: "Vouloir uses the irregular stem \"voudr-\" + futur endings." },
    { id: "conj-133", topicId: "futur", verb: "vouloir", tense: "Futur Simple", person: "nous", answer: "voudrons", fullForm: "nous voudrons", explanation: "Vouloir uses the irregular stem \"voudr-\" + futur endings." },
    // Conditionnel (stem: voudr-)
    { id: "conj-134", topicId: "conditionnel", verb: "vouloir", tense: "Conditionnel Présent", person: "je", answer: "voudrais", fullForm: "je voudrais", explanation: "Same irregular stem as futur ('voudr-') + imparfait endings (-ais, -iez, etc.)." },
    { id: "conj-135", topicId: "conditionnel", verb: "vouloir", tense: "Conditionnel Présent", person: "vous", answer: "voudriez", fullForm: "vous voudriez", explanation: "Same irregular stem as futur ('voudr-') + imparfait endings (-ais, -iez, etc.)." },
    // Présent
    { id: "conj-136", topicId: "present", verb: "vouloir", tense: "Présent", person: "je", answer: "veux", fullForm: "je veux", explanation: "Vouloir is irregular — je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },
    { id: "conj-137", topicId: "present", verb: "vouloir", tense: "Présent", person: "nous", answer: "voulons", fullForm: "nous voulons", explanation: "Vouloir is irregular — je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },
    { id: "conj-138", topicId: "present", verb: "vouloir", tense: "Présent", person: "ils/elles", answer: "veulent", fullForm: "ils veulent", explanation: "Vouloir is irregular — je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent." },
    // Subjonctif
    { id: "conj-139", topicId: "subjonctif", verb: "vouloir", tense: "Subjonctif Présent", person: "je", answer: "veuille", fullForm: "que je veuille", explanation: "Subjonctif of vouloir: two stems — veuill- (je/tu/il/ils) and voul- (nous/vous)." },
    { id: "conj-140", topicId: "subjonctif", verb: "vouloir", tense: "Subjonctif Présent", person: "nous", answer: "voulions", fullForm: "que nous voulions", explanation: "Subjonctif of vouloir: two stems — veuill- (je/tu/il/ils) and voul- (nous/vous)." },
    { id: "conj-141", topicId: "subjonctif", verb: "vouloir", tense: "Subjonctif Présent", person: "ils/elles", answer: "veuillent", fullForm: "qu'ils veuillent", explanation: "Subjonctif of vouloir: two stems — veuill- (je/tu/il/ils) and voul- (nous/vous)." },

    // -------------------------------------------------------------------------
    // SAVOIR — je / nous / ils — tricky forms
    // -------------------------------------------------------------------------
    // Futur (stem: saur-)
    { id: "conj-142", topicId: "futur", verb: "savoir", tense: "Futur Simple", person: "je", answer: "saurai", fullForm: "je saurai", explanation: "Savoir uses the irregular stem 'saur-' + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },
    { id: "conj-143", topicId: "futur", verb: "savoir", tense: "Futur Simple", person: "nous", answer: "saurons", fullForm: "nous saurons", explanation: "Savoir uses the irregular stem 'saur-' + futur endings (-ai, -as, -a, -ons, -ez, -ont)." },
    // Conditionnel (stem: saur-)
    { id: "conj-144", topicId: "conditionnel", verb: "savoir", tense: "Conditionnel Présent", person: "je", answer: "saurais", fullForm: "je saurais", explanation: "Same irregular stem as futur ('saur-') + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)." },
    // Présent
    { id: "conj-145", topicId: "present", verb: "savoir", tense: "Présent", person: "je", answer: "sais", fullForm: "je sais", explanation: "Savoir has two stems in the présent: sai- (je/tu/il) and sav- (nous/vous/ils)." },
    { id: "conj-146", topicId: "present", verb: "savoir", tense: "Présent", person: "nous", answer: "savons", fullForm: "nous savons", explanation: "Savoir has two stems in the présent: sai- (je/tu/il) and sav- (nous/vous/ils)." },
    { id: "conj-147", topicId: "present", verb: "savoir", tense: "Présent", person: "ils/elles", answer: "savent", fullForm: "ils savent", explanation: "Savoir has two stems in the présent: sai- (je/tu/il) and sav- (nous/vous/ils)." },
    // Subjonctif
    { id: "conj-148", topicId: "subjonctif", verb: "savoir", tense: "Subjonctif Présent", person: "je", answer: "sache", fullForm: "que je sache", explanation: "Subjonctif of savoir is fully irregular — stem sach- for all persons." },
    { id: "conj-149", topicId: "subjonctif", verb: "savoir", tense: "Subjonctif Présent", person: "nous", answer: "sachions", fullForm: "que nous sachions", explanation: "Subjonctif of savoir is fully irregular — stem sach- for all persons." },

    // -------------------------------------------------------------------------
    // VENIR — je / nous / ils — tricky forms
    // -------------------------------------------------------------------------
    // Futur (stem: viendr-)
    { id: "conj-150", topicId: "futur", verb: "venir", tense: "Futur Simple", person: "je", answer: "viendrai", fullForm: "je viendrai", explanation: "Venir uses the irregular stem \"viendr-\" + futur endings." },
    { id: "conj-151", topicId: "futur", verb: "venir", tense: "Futur Simple", person: "ils/elles", answer: "viendront", fullForm: "ils viendront", explanation: "Venir uses the irregular stem \"viendr-\" + futur endings." },
    // Conditionnel (stem: viendr-)
    { id: "conj-152", topicId: "conditionnel", verb: "venir", tense: "Conditionnel Présent", person: "je", answer: "viendrais", fullForm: "je viendrais", explanation: "Same irregular stem as futur ('viendr-') + imparfait endings (-ais, -ions, etc.)." },
    { id: "conj-153", topicId: "conditionnel", verb: "venir", tense: "Conditionnel Présent", person: "nous", answer: "viendrions", fullForm: "nous viendrions", explanation: "Same irregular stem as futur ('viendr-') + imparfait endings (-ais, -ions, etc.)." },
    // Présent
    { id: "conj-154", topicId: "present", verb: "venir", tense: "Présent", person: "je", answer: "viens", fullForm: "je viens", explanation: "Venir is irregular — je viens, tu viens, il vient, nous venons, vous venez, ils viennent." },
    { id: "conj-155", topicId: "present", verb: "venir", tense: "Présent", person: "nous", answer: "venons", fullForm: "nous venons", explanation: "Venir is irregular — je viens, tu viens, il vient, nous venons, vous venez, ils viennent." },
    { id: "conj-156", topicId: "present", verb: "venir", tense: "Présent", person: "ils/elles", answer: "viennent", fullForm: "ils viennent", explanation: "Venir is irregular — je viens, tu viens, il vient, nous venons, vous venez, ils viennent." },
    // Imparfait (stem: ven-)
    { id: "conj-157", topicId: "passe-compose", verb: "venir", tense: "Imparfait", person: "je", answer: "venais", fullForm: "je venais", explanation: "Imparfait of venir: stem ven- (from nous venons) + endings." },
    // Subjonctif
    { id: "conj-158", topicId: "subjonctif", verb: "venir", tense: "Subjonctif Présent", person: "je", answer: "vienne", fullForm: "que je vienne", explanation: "Subjonctif of venir: two stems — vienn- (je/tu/il/ils) and ven- (nous/vous)." },
    { id: "conj-159", topicId: "subjonctif", verb: "venir", tense: "Subjonctif Présent", person: "nous", answer: "venions", fullForm: "que nous venions", explanation: "Subjonctif of venir: two stems — vienn- (je/tu/il/ils) and ven- (nous/vous)." },
    { id: "conj-160", topicId: "subjonctif", verb: "venir", tense: "Subjonctif Présent", person: "ils/elles", answer: "viennent", fullForm: "qu'ils viennent", explanation: "Subjonctif of venir: two stems — vienn- (je/tu/il/ils) and ven- (nous/vous)." },

    // -------------------------------------------------------------------------
    // DEVOIR — je / nous / ils — tricky forms
    // -------------------------------------------------------------------------
    // Futur (stem: devr-)
    { id: "conj-161", topicId: "futur", verb: "devoir", tense: "Futur Simple", person: "je", answer: "devrai", fullForm: "je devrai", explanation: "Devoir uses the irregular stem \"devr-\" + futur endings." },
    { id: "conj-162", topicId: "futur", verb: "devoir", tense: "Futur Simple", person: "nous", answer: "devrons", fullForm: "nous devrons", explanation: "Devoir uses the irregular stem \"devr-\" + futur endings." },
    { id: "conj-163", topicId: "futur", verb: "devoir", tense: "Futur Simple", person: "ils/elles", answer: "devront", fullForm: "ils devront", explanation: "Devoir uses the irregular stem \"devr-\" + futur endings." },
    // Conditionnel (stem: devr-)
    { id: "conj-164", topicId: "conditionnel", verb: "devoir", tense: "Conditionnel Présent", person: "je", answer: "devrais", fullForm: "je devrais", explanation: "Conditionnel of devoir: irregular stem devr- + imparfait endings." },
    { id: "conj-165", topicId: "conditionnel", verb: "devoir", tense: "Conditionnel Présent", person: "nous", answer: "devrions", fullForm: "nous devrions", explanation: "Conditionnel of devoir: irregular stem devr- + imparfait endings." },
    // Présent
    { id: "conj-166", topicId: "present", verb: "devoir", tense: "Présent", person: "je", answer: "dois", fullForm: "je dois", explanation: "Devoir is irregular in the présent — je dois, tu dois, il doit, nous devons, vous devez, ils doivent." },
    { id: "conj-167", topicId: "present", verb: "devoir", tense: "Présent", person: "nous", answer: "devons", fullForm: "nous devons", explanation: "Devoir is irregular in the présent — je dois, tu dois, il doit, nous devons, vous devez, ils doivent." },
    { id: "conj-168", topicId: "present", verb: "devoir", tense: "Présent", person: "ils/elles", answer: "doivent", fullForm: "ils doivent", explanation: "Devoir is irregular in the présent — je dois, tu dois, il doit, nous devons, vous devez, ils doivent." },
    // Subjonctif
    { id: "conj-169", topicId: "subjonctif", verb: "devoir", tense: "Subjonctif Présent", person: "je", answer: "doive", fullForm: "que je doive", explanation: "Subjonctif of devoir: two stems — doiv- (je/tu/il/ils) and dev- (nous/vous)." },
    { id: "conj-170", topicId: "subjonctif", verb: "devoir", tense: "Subjonctif Présent", person: "nous", answer: "devions", fullForm: "que nous devions", explanation: "Subjonctif of devoir: two stems — doiv- (je/tu/il/ils) and dev- (nous/vous)." },
    { id: "conj-171", topicId: "subjonctif", verb: "devoir", tense: "Subjonctif Présent", person: "ils/elles", answer: "doivent", fullForm: "qu'ils doivent", explanation: "Subjonctif of devoir: two stems — doiv- (je/tu/il/ils) and dev- (nous/vous)." },

    // -------------------------------------------------------------------------
    // PRENDRE — je / nous / ils — tricky forms
    // -------------------------------------------------------------------------
    // Futur (stem: prendr-)
    { id: "conj-172", topicId: "futur", verb: "prendre", tense: "Futur Simple", person: "je", answer: "prendrai", fullForm: "je prendrai", explanation: "Prendre uses the stem \"prendr-\" + futur endings." },
    { id: "conj-173", topicId: "futur", verb: "prendre", tense: "Futur Simple", person: "nous", answer: "prendrons", fullForm: "nous prendrons", explanation: "Prendre uses the stem \"prendr-\" + futur endings." },
    // Conditionnel (stem: prendr-)
    { id: "conj-174", topicId: "conditionnel", verb: "prendre", tense: "Conditionnel Présent", person: "je", answer: "prendrais", fullForm: "je prendrais", explanation: "Same stem as futur ('prendr-') + imparfait endings (-ais, -ions, etc.)." },
    // Présent
    { id: "conj-175", topicId: "present", verb: "prendre", tense: "Présent", person: "je", answer: "prends", fullForm: "je prends", explanation: "Prendre is irregular — je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent." },
    { id: "conj-176", topicId: "present", verb: "prendre", tense: "Présent", person: "nous", answer: "prenons", fullForm: "nous prenons", explanation: "Prendre is irregular — je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent." },
    { id: "conj-177", topicId: "present", verb: "prendre", tense: "Présent", person: "ils/elles", answer: "prennent", fullForm: "ils prennent", explanation: "Prendre is irregular — je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent." },
    // Imparfait (stem: pren-)
    { id: "conj-178", topicId: "passe-compose", verb: "prendre", tense: "Imparfait", person: "je", answer: "prenais", fullForm: "je prenais", explanation: "Imparfait of prendre: stem pren- (from nous prenons) + endings." },
    { id: "conj-179", topicId: "passe-compose", verb: "prendre", tense: "Imparfait", person: "ils/elles", answer: "prenaient", fullForm: "ils prenaient", explanation: "Imparfait of prendre: stem pren- (from nous prenons) + endings." },
    // Subjonctif
    { id: "conj-180", topicId: "subjonctif", verb: "prendre", tense: "Subjonctif Présent", person: "je", answer: "prenne", fullForm: "que je prenne", explanation: "Subjonctif of prendre: two stems — prenn- (je/tu/il/ils) and pren- (nous/vous)." },
    { id: "conj-181", topicId: "subjonctif", verb: "prendre", tense: "Subjonctif Présent", person: "nous", answer: "prenions", fullForm: "que nous prenions", explanation: "Subjonctif of prendre: two stems — prenn- (je/tu/il/ils) and pren- (nous/vous)." },
    { id: "conj-182", topicId: "subjonctif", verb: "prendre", tense: "Subjonctif Présent", person: "ils/elles", answer: "prennent", fullForm: "qu'ils prennent", explanation: "Subjonctif of prendre: two stems — prenn- (je/tu/il/ils) and pren- (nous/vous)." },

    // -------------------------------------------------------------------------
    // GÉRONDIF (~10 cards)
    // -------------------------------------------------------------------------
    { id: "conj-ger-001", topicId: "participe-gerondif", verb: "faire", tense: "Gérondif", person: "-", answer: "en faisant", fullForm: "en faisant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-002", topicId: "participe-gerondif", verb: "avoir", tense: "Gérondif", person: "-", answer: "en ayant", fullForm: "en ayant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-003", topicId: "participe-gerondif", verb: "être", tense: "Gérondif", person: "-", answer: "en étant", fullForm: "en étant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-004", topicId: "participe-gerondif", verb: "aller", tense: "Gérondif", person: "-", answer: "en allant", fullForm: "en allant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-005", topicId: "participe-gerondif", verb: "prendre", tense: "Gérondif", person: "-", answer: "en prenant", fullForm: "en prenant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-006", topicId: "participe-gerondif", verb: "savoir", tense: "Gérondif", person: "-", answer: "en sachant", fullForm: "en sachant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-007", topicId: "participe-gerondif", verb: "venir", tense: "Gérondif", person: "-", answer: "en venant", fullForm: "en venant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-008", topicId: "participe-gerondif", verb: "pouvoir", tense: "Gérondif", person: "-", answer: "en pouvant", fullForm: "en pouvant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-009", topicId: "participe-gerondif", verb: "vouloir", tense: "Gérondif", person: "-", answer: "en voulant", fullForm: "en voulant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
    { id: "conj-ger-010", topicId: "participe-gerondif", verb: "devoir", tense: "Gérondif", person: "-", answer: "en devant", fullForm: "en devant", explanation: "Gérondif = en + participe présent. Form from nous-stem of présent + -ant." },
  ],

  // =============================================================================
  // FILL IN THE BLANK (~80 exercises)
  // =============================================================================
  fillInTheBlank: [

    // -------------------------------------------------------------------------
    // FUTUR SIMPLE (12)
    // -------------------------------------------------------------------------
    {
      id: "fib-001", topicId: "futur",
      hint: "avoir — je — futur simple",
      sentence: "L'année prochaine, j'___ plus de responsabilités dans l'entreprise.",
      answer: "aurai",
      fullSentence: "L'année prochaine, j'aurai plus de responsabilités dans l'entreprise.",
      explanation: "Futur simple of avoir: irregular stem aur- + ending -ai for je."
    },
    {
      id: "fib-002", topicId: "futur",
      hint: "être — nous — futur simple",
      sentence: "Demain, nous ___ en réunion toute la matinée.",
      answer: "serons",
      fullSentence: "Demain, nous serons en réunion toute la matinée.",
      explanation: "Futur simple of être: irregular stem ser- + ending -ons for nous."
    },
    {
      id: "fib-003", topicId: "futur",
      hint: "faire — ils — futur simple",
      sentence: "Les associés ___ une offre la semaine prochaine.",
      answer: "feront",
      fullSentence: "Les associés feront une offre la semaine prochaine.",
      explanation: "Futur simple of faire: irregular stem fer- + ending -ont for ils."
    },
    {
      id: "fib-004", topicId: "futur",
      hint: "aller — tu — futur simple",
      sentence: "Tu ___ au siège social lundi prochain.",
      answer: "iras",
      fullSentence: "Tu iras au siège social lundi prochain.",
      explanation: "Futur simple of aller: irregular stem ir- + ending -as for tu."
    },
    {
      id: "fib-005", topicId: "futur",
      hint: "pouvoir — vous — futur simple",
      sentence: "Vous ___ consulter le rapport dès qu'il sera prêt.",
      answer: "pourrez",
      fullSentence: "Vous pourrez consulter le rapport dès qu'il sera prêt.",
      explanation: "Futur simple of pouvoir: irregular stem pourr- + ending -ez for vous."
    },
    {
      id: "fib-006", topicId: "futur",
      hint: "devoir — elle — futur simple",
      sentence: "La directrice ___ approuver le budget avant vendredi.",
      answer: "devra",
      fullSentence: "La directrice devra approuver le budget avant vendredi.",
      explanation: "Futur simple of devoir: irregular stem devr- + ending -a for elle."
    },
    {
      id: "fib-007", topicId: "futur",
      hint: "venir — je — futur simple",
      sentence: "Je ___ à la conférence avec mon équipe.",
      answer: "viendrai",
      fullSentence: "Je viendrai à la conférence avec mon équipe.",
      explanation: "Futur simple of venir: irregular stem viendr- + ending -ai for je."
    },
    {
      id: "fib-008", topicId: "futur",
      hint: "savoir — nous — futur simple",
      sentence: "Nous ___ les résultats après l'audit.",
      answer: "saurons",
      fullSentence: "Nous saurons les résultats après l'audit.",
      explanation: "Futur simple of savoir: irregular stem saur- + ending -ons for nous."
    },
    {
      id: "fib-009", topicId: "futur",
      hint: "vouloir — ils — futur simple",
      sentence: "Les investisseurs ___ voir un retour sur investissement rapide.",
      answer: "voudront",
      fullSentence: "Les investisseurs voudront voir un retour sur investissement rapide.",
      explanation: "Futur simple of vouloir: irregular stem voudr- + ending -ont for ils."
    },
    {
      id: "fib-010", topicId: "futur",
      hint: "arriver — il — futur simple (quand + futur)",
      sentence: "Quand le nouveau directeur ___, nous organiserons une réunion.",
      answer: "arrivera",
      fullSentence: "Quand le nouveau directeur arrivera, nous organiserons une réunion.",
      explanation: "After 'quand' referring to a future event, French uses the futur simple (arriver → arrivera)."
    },
    {
      id: "fib-011", topicId: "futur",
      hint: "finir — tu — futur simple (lorsque + futur)",
      sentence: "Lorsque tu ___ ta présentation, envoie-la au client.",
      answer: "finiras",
      fullSentence: "Lorsque tu finiras ta présentation, envoie-la au client.",
      explanation: "After 'lorsque' referring to a future event, French uses the futur simple (finir → finiras)."
    },
    {
      id: "fib-012", topicId: "futur",
      hint: "prendre — on — futur simple",
      sentence: "On ___ une décision après avoir étudié le dossier.",
      answer: "prendra",
      fullSentence: "On prendra une décision après avoir étudié le dossier.",
      explanation: "Futur simple of prendre: stem prendr- + ending -a for on."
    },

    // -------------------------------------------------------------------------
    // CONDITIONNEL (12)
    // -------------------------------------------------------------------------
    {
      id: "fib-013", topicId: "conditionnel",
      hint: "vouloir — je — conditionnel (politesse)",
      sentence: "Je ___ vous poser une question sur le contrat.",
      answer: "voudrais",
      fullSentence: "Je voudrais vous poser une question sur le contrat.",
      explanation: "Conditionnel of vouloir for politeness: irregular stem voudr- + ending -ais for je."
    },
    {
      id: "fib-014", topicId: "conditionnel",
      hint: "pouvoir — vous — conditionnel (politesse)",
      sentence: "___ -vous m'envoyer le devis avant midi ?",
      answer: "Pourriez",
      fullSentence: "Pourriez-vous m'envoyer le devis avant midi ?",
      explanation: "Conditionnel of pouvoir for politeness: irregular stem pourr- + ending -iez for vous."
    },
    {
      id: "fib-015", topicId: "conditionnel",
      hint: "être — il — conditionnel (si + imparfait)",
      sentence: "Si l'entreprise investissait davantage, le chiffre d'affaires ___ plus élevé.",
      answer: "serait",
      fullSentence: "Si l'entreprise investissait davantage, le chiffre d'affaires serait plus élevé.",
      explanation: "Si + imparfait → conditionnel présent in the result clause: être → serait."
    },
    {
      id: "fib-016", topicId: "conditionnel",
      hint: "avoir — nous — conditionnel (si + imparfait)",
      sentence: "Si nous avions plus de personnel, nous ___ moins de retard.",
      answer: "aurions",
      fullSentence: "Si nous avions plus de personnel, nous aurions moins de retard.",
      explanation: "Si + imparfait → conditionnel présent: avoir → aurions for nous."
    },
    {
      id: "fib-017", topicId: "conditionnel",
      hint: "faire — tu — conditionnel (conseil)",
      sentence: "À ta place, je ___ une étude de marché avant de lancer le produit.",
      answer: "ferais",
      fullSentence: "À ta place, je ferais une étude de marché avant de lancer le produit.",
      explanation: "'À ta place' introduces a hypothetical → conditionnel présent: faire → ferais."
    },
    {
      id: "fib-018", topicId: "conditionnel",
      hint: "aller — nous — conditionnel (suggestion)",
      sentence: "Nous ___ volontiers à ce salon professionnel.",
      answer: "irions",
      fullSentence: "Nous irions volontiers à ce salon professionnel.",
      explanation: "Conditionnel of aller for a suggestion: irregular stem ir- + ending -ions for nous."
    },
    {
      id: "fib-019", topicId: "conditionnel",
      hint: "devoir — tu — conditionnel (conseil)",
      sentence: "Tu ___ mettre à jour ton CV avant l'entretien.",
      answer: "devrais",
      fullSentence: "Tu devrais mettre à jour ton CV avant l'entretien.",
      explanation: "Conditionnel of devoir for advice: irregular stem devr- + ending -ais for tu."
    },
    {
      id: "fib-020", topicId: "conditionnel",
      hint: "savoir — je — conditionnel (regret : si + plus-que-parfait)",
      sentence: "Si j'avais su, je n'___ pas signé ce contrat.",
      answer: "aurais",
      fullSentence: "Si j'avais su, je n'aurais pas signé ce contrat.",
      explanation: "Si + plus-que-parfait → conditionnel passé: avoir (auxiliary) → aurais for je."
    },
    {
      id: "fib-021", topicId: "conditionnel",
      hint: "venir — ils — conditionnel",
      sentence: "Les fournisseurs ___ si nous leur proposions de meilleures conditions.",
      answer: "viendraient",
      fullSentence: "Les fournisseurs viendraient si nous leur proposions de meilleures conditions.",
      explanation: "Si + imparfait → conditionnel présent: venir → viendraient for ils."
    },
    {
      id: "fib-022", topicId: "conditionnel",
      hint: "pouvoir — je — conditionnel (hypothèse)",
      sentence: "Si j'avais plus de temps, je ___ développer un nouveau projet.",
      answer: "pourrais",
      fullSentence: "Si j'avais plus de temps, je pourrais développer un nouveau projet.",
      explanation: "Si + imparfait → conditionnel présent: pouvoir → pourrais for je."
    },
    {
      id: "fib-023", topicId: "conditionnel",
      hint: "aimer — je — conditionnel (souhait poli)",
      sentence: "J'___ recevoir un échantillon gratuit de votre produit.",
      answer: "aimerais",
      fullSentence: "J'aimerais recevoir un échantillon gratuit de votre produit.",
      explanation: "Conditionnel of aimer for a polite wish: regular stem aimer- + ending -ais for je."
    },
    {
      id: "fib-024", topicId: "conditionnel",
      hint: "souhaiter — nous — conditionnel (politesse)",
      sentence: "Nous ___ planifier une réunion avec votre équipe.",
      answer: "souhaiterions",
      fullSentence: "Nous souhaiterions planifier une réunion avec votre équipe.",
      explanation: "Conditionnel of souhaiter for politeness: regular stem souhaiter- + ending -ions for nous."
    },

    // -------------------------------------------------------------------------
    // PRÉSENT — irregular verbs (8)
    // -------------------------------------------------------------------------
    {
      id: "fib-025", topicId: "present",
      hint: "faire — nous — présent",
      sentence: "Nous ___ une analyse du marché chaque trimestre.",
      answer: "faisons",
      fullSentence: "Nous faisons une analyse du marché chaque trimestre.",
      explanation: "Présent of faire with nous: irregular form faisons (stem fais-)."
    },
    {
      id: "fib-026", topicId: "present",
      hint: "pouvoir — ils — présent",
      sentence: "Les salariés ___ consulter les comptes rendus sur l'intranet.",
      answer: "peuvent",
      fullSentence: "Les salariés peuvent consulter les comptes rendus sur l'intranet.",
      explanation: "Présent of pouvoir with ils: stem change to peuv- → peuvent."
    },
    {
      id: "fib-027", topicId: "present",
      hint: "devoir — nous — présent",
      sentence: "Nous ___ respecter les délais fixés par le client.",
      answer: "devons",
      fullSentence: "Nous devons respecter les délais fixés par le client.",
      explanation: "Présent of devoir with nous: regular stem dev- → devons."
    },
    {
      id: "fib-028", topicId: "present",
      hint: "vouloir — vous — présent",
      sentence: "___ -vous signer le contrat aujourd'hui ?",
      answer: "Voulez",
      fullSentence: "Voulez-vous signer le contrat aujourd'hui ?",
      explanation: "Présent of vouloir with vous: stem voul- → voulez (inverted: Voulez-vous)."
    },
    {
      id: "fib-029", topicId: "present",
      hint: "prendre — je — présent",
      sentence: "Je ___ en charge la gestion du projet.",
      answer: "prends",
      fullSentence: "Je prends en charge la gestion du projet.",
      explanation: "Présent of prendre with je: stem prend- → prends (silent -d)."
    },
    {
      id: "fib-030", topicId: "present",
      hint: "savoir — tu — présent",
      sentence: "___ -tu quand le directeur revient de déplacement ?",
      answer: "Sais",
      fullSentence: "Sais-tu quand le directeur revient de déplacement ?",
      explanation: "Présent of savoir with tu: irregular form sais (inverted: Sais-tu)."
    },
    {
      id: "fib-031", topicId: "present",
      hint: "venir — elle — présent",
      sentence: "La comptable ___ de terminer le bilan annuel.",
      answer: "vient",
      fullSentence: "La comptable vient de terminer le bilan annuel.",
      explanation: "Présent of venir with elle: stem vien- → vient; 'venir de' = to have just done something."
    },
    {
      id: "fib-032", topicId: "present",
      hint: "aller — je — présent",
      sentence: "Je ___ souvent à des conférences professionnelles.",
      answer: "vais",
      fullSentence: "Je vais souvent à des conférences professionnelles.",
      explanation: "Présent of aller with je: fully irregular → vais."
    },

    // -------------------------------------------------------------------------
    // PASSÉ COMPOSÉ / IMPARFAIT (15)
    // -------------------------------------------------------------------------
    {
      id: "fib-033", topicId: "passe-compose",
      hint: "signer — nous — passé composé (avoir)",
      sentence: "Nous avons ___ le contrat hier matin.",
      answer: "signé",
      fullSentence: "Nous avons signé le contrat hier matin.",
      explanation: "Passé composé with avoir: signer → signé (regular -er past participle)."
    },
    {
      id: "fib-034", topicId: "passe-compose",
      hint: "arriver — elle — passé composé (être, accord)",
      sentence: "La nouvelle stagiaire est ___ ce matin.",
      answer: "arrivée",
      fullSentence: "La nouvelle stagiaire est arrivée ce matin.",
      explanation: "Passé composé with être: arriver → arrivée (agrees with feminine singular subject 'la stagiaire')."
    },
    {
      id: "fib-035", topicId: "passe-compose",
      hint: "partir — ils — passé composé (être)",
      sentence: "Les délégués sont ___ après la négociation.",
      answer: "partis",
      fullSentence: "Les délégués sont partis après la négociation.",
      explanation: "Passé composé with être: partir → partis (agrees with masculine plural subject 'les délégués')."
    },
    {
      id: "fib-036", topicId: "passe-compose",
      hint: "faire — il — passé composé",
      sentence: "Le comptable a ___ une erreur dans le bilan.",
      answer: "fait",
      fullSentence: "Le comptable a fait une erreur dans le bilan.",
      explanation: "Passé composé with avoir: faire → fait (irregular past participle)."
    },
    {
      id: "fib-037", topicId: "passe-compose",
      hint: "prendre — vous — passé composé",
      sentence: "Avez-vous ___ connaissance du nouveau règlement ?",
      answer: "pris",
      fullSentence: "Avez-vous pris connaissance du nouveau règlement ?",
      explanation: "Passé composé with avoir: prendre → pris (irregular past participle)."
    },
    {
      id: "fib-038", topicId: "passe-compose",
      hint: "avoir — elle — passé composé",
      sentence: "La directrice a ___ une promotion le mois dernier.",
      answer: "eu",
      fullSentence: "La directrice a eu une promotion le mois dernier.",
      explanation: "Passé composé with avoir: avoir → eu (irregular past participle)."
    },
    {
      id: "fib-039", topicId: "passe-compose",
      hint: "être — il — imparfait (description)",
      sentence: "Quand j'ai commencé, le bureau ___ beaucoup plus petit.",
      answer: "était",
      fullSentence: "Quand j'ai commencé, le bureau était beaucoup plus petit.",
      explanation: "Imparfait for description/background: être → était (stem ét- + -ait)."
    },
    {
      id: "fib-040", topicId: "passe-compose",
      hint: "travailler — nous — imparfait (habitude)",
      sentence: "Avant la réorganisation, nous ___ en open space.",
      answer: "travaillions",
      fullSentence: "Avant la réorganisation, nous travaillions en open space.",
      explanation: "Imparfait for habitual past action: travailler → travaillions (stem travaill- + -ions for nous)."
    },
    {
      id: "fib-041", topicId: "passe-compose",
      hint: "vouloir — il — imparfait (état mental passé)",
      sentence: "Le PDG ___ restructurer l'entreprise depuis longtemps.",
      answer: "voulait",
      fullSentence: "Le PDG voulait restructurer l'entreprise depuis longtemps.",
      explanation: "Imparfait for a mental state in the past: vouloir → voulait (stem voul- + -ait)."
    },
    {
      id: "fib-042", topicId: "passe-compose",
      hint: "PC vs imparfait — recevoir / examiner",
      sentence: "Quand nous avons ___ la commande, le responsable ___ les stocks.",
      answer: "reçu ... examinait",
      fullSentence: "Quand nous avons reçu la commande, le responsable examinait les stocks.",
      explanation: "Passé composé for a completed action (reçu) vs. imparfait for an ongoing background action (examinait)."
    },
    {
      id: "fib-043", topicId: "passe-compose",
      hint: "se réunir — elles — passé composé (être, accord fém. pl.)",
      sentence: "Les directrices se sont ___ pour discuter de la stratégie.",
      answer: "réunies",
      fullSentence: "Les directrices se sont réunies pour discuter de la stratégie.",
      explanation: "Reflexive verb with être: se réunir → réunies (agrees with feminine plural subject 'les directrices')."
    },
    {
      id: "fib-044", topicId: "passe-compose",
      hint: "ouvrir — on — passé composé",
      sentence: "On a ___ une succursale à Lyon.",
      answer: "ouvert",
      fullSentence: "On a ouvert une succursale à Lyon.",
      explanation: "Passé composé with avoir: ouvrir → ouvert (irregular past participle)."
    },
    {
      id: "fib-045", topicId: "passe-compose",
      hint: "PC vs imparfait — téléphoner / être",
      sentence: "Le client a ___ pendant que je ___ en réunion.",
      answer: "téléphoné ... étais",
      fullSentence: "Le client a téléphoné pendant que j'étais en réunion.",
      explanation: "Passé composé for a sudden event (a téléphoné) vs. imparfait for an ongoing state (étais en réunion)."
    },
    {
      id: "fib-046", topicId: "passe-compose",
      hint: "devoir — nous — imparfait",
      sentence: "Nous ___ livrer la marchandise avant le 15 mars.",
      answer: "devions",
      fullSentence: "Nous devions livrer la marchandise avant le 15 mars.",
      explanation: "Imparfait of devoir: stem dev- + ending -ions for nous → devions."
    },
    {
      id: "fib-047", topicId: "passe-compose",
      hint: "aller — elles — passé composé (être, accord fém. pl.)",
      sentence: "Les commerciales sont ___ en déplacement à Bordeaux.",
      answer: "allées",
      fullSentence: "Les commerciales sont allées en déplacement à Bordeaux.",
      explanation: "Passé composé with être: aller → allées (agrees with feminine plural subject 'les commerciales')."
    },

    // -------------------------------------------------------------------------
    // SUBJONCTIF (12)
    // -------------------------------------------------------------------------
    {
      id: "fib-048", topicId: "subjonctif",
      hint: "être — vous — subjonctif (il faut que)",
      sentence: "Il faut que vous ___ prêts pour la présentation.",
      answer: "soyez",
      fullSentence: "Il faut que vous soyez prêts pour la présentation.",
      explanation: "After 'il faut que', use the subjonctif: être → soyez for vous."
    },
    {
      id: "fib-049", topicId: "subjonctif",
      hint: "faire — nous — subjonctif (il faut que)",
      sentence: "Il faut que nous ___ un effort supplémentaire ce trimestre.",
      answer: "fassions",
      fullSentence: "Il faut que nous fassions un effort supplémentaire ce trimestre.",
      explanation: "After 'il faut que', use the subjonctif: faire → fassions for nous (irregular stem fass-)."
    },
    {
      id: "fib-050", topicId: "subjonctif",
      hint: "avoir — tu — subjonctif (je souhaite que)",
      sentence: "Je souhaite que tu ___ le temps de relire le rapport.",
      answer: "aies",
      fullSentence: "Je souhaite que tu aies le temps de relire le rapport.",
      explanation: "After 'je souhaite que', use the subjonctif: avoir → aies for tu (irregular)."
    },
    {
      id: "fib-051", topicId: "subjonctif",
      hint: "pouvoir — il — subjonctif (bien que)",
      sentence: "Bien qu'il ___ travailler à distance, il préfère venir au bureau.",
      answer: "puisse",
      fullSentence: "Bien qu'il puisse travailler à distance, il préfère venir au bureau.",
      explanation: "After 'bien que', use the subjonctif: pouvoir → puisse for il (irregular stem puiss-)."
    },
    {
      id: "fib-052", topicId: "subjonctif",
      hint: "aller — je — subjonctif (il est possible que)",
      sentence: "Il est possible que j'___ en mission à Bruxelles.",
      answer: "aille",
      fullSentence: "Il est possible que j'aille en mission à Bruxelles.",
      explanation: "After 'il est possible que', use the subjonctif: aller → aille for je (irregular stem aill-)."
    },
    {
      id: "fib-053", topicId: "subjonctif",
      hint: "savoir — vous — subjonctif (avant que)",
      sentence: "Envoyez le dossier avant que le client ___ notre décision.",
      answer: "sache",
      fullSentence: "Envoyez le dossier avant que le client sache notre décision.",
      explanation: "After 'avant que', use the subjonctif: savoir → sache for il (irregular stem sach-)."
    },
    {
      id: "fib-054", topicId: "subjonctif",
      hint: "venir — elle — subjonctif (je doute que)",
      sentence: "Je doute que la fournisseuse ___ à la réunion demain.",
      answer: "vienne",
      fullSentence: "Je doute que la fournisseuse vienne à la réunion demain.",
      explanation: "After 'je doute que', use the subjonctif: venir → vienne for elle (stem vienn-)."
    },
    {
      id: "fib-055", topicId: "subjonctif",
      hint: "prendre — ils — subjonctif (il est essentiel que)",
      sentence: "Il est essentiel que les managers ___ en compte les retours clients.",
      answer: "prennent",
      fullSentence: "Il est essentiel que les managers prennent en compte les retours clients.",
      explanation: "After 'il est essentiel que', use the subjonctif: prendre → prennent for ils (stem prenn-)."
    },
    {
      id: "fib-056", topicId: "subjonctif",
      hint: "finir — nous — subjonctif (pour que)",
      sentence: "Le directeur a reporté la date pour que nous ___ le projet à temps.",
      answer: "finissions",
      fullSentence: "Le directeur a reporté la date pour que nous finissions le projet à temps.",
      explanation: "After 'pour que', use the subjonctif: finir → finissions for nous (stem finiss-)."
    },
    {
      id: "fib-057", topicId: "subjonctif",
      hint: "être — je — subjonctif (il est normal que)",
      sentence: "Il est normal que je ___ stressé avant une négociation importante.",
      answer: "sois",
      fullSentence: "Il est normal que je sois stressé avant une négociation importante.",
      explanation: "After 'il est normal que', use the subjonctif: être → sois for je (irregular)."
    },
    {
      id: "fib-058", topicId: "subjonctif",
      hint: "vouloir — vous — subjonctif (quoique)",
      sentence: "Quoique vous ___ bien faire, les résultats restent insuffisants.",
      answer: "vouliez",
      fullSentence: "Quoique vous vouliez bien faire, les résultats restent insuffisants.",
      explanation: "After 'quoique', use the subjonctif: vouloir → vouliez for vous (stem voul- for nous/vous)."
    },
    {
      id: "fib-059", topicId: "subjonctif",
      hint: "devoir — nous — subjonctif (il se peut que)",
      sentence: "Il se peut que nous ___ renégocier le contrat.",
      answer: "devions",
      fullSentence: "Il se peut que nous devions renégocier le contrat.",
      explanation: "After 'il se peut que', use the subjonctif: devoir → devions for nous (stem dev- for nous/vous)."
    },

    // -------------------------------------------------------------------------
    // GÉRONDIF (5)
    // -------------------------------------------------------------------------
    {
      id: "fib-060", topicId: "participe-gerondif",
      hint: "travailler — gérondif",
      sentence: "Il a appris le métier ___ aux côtés d'un mentor expérimenté.",
      answer: "en travaillant",
      fullSentence: "Il a appris le métier en travaillant aux côtés d'un mentor expérimenté.",
      explanation: "Gérondif = en + participe présent (stem travaill- + -ant) → en travaillant; expresses simultaneity."
    },
    {
      id: "fib-061", topicId: "participe-gerondif",
      hint: "lire — gérondif",
      sentence: "Elle a trouvé une erreur dans le contrat ___ les petites lignes.",
      answer: "en lisant",
      fullSentence: "Elle a trouvé une erreur dans le contrat en lisant les petites lignes.",
      explanation: "Gérondif = en + participe présent (stem lis- + -ant) → en lisant; expresses simultaneity/cause."
    },
    {
      id: "fib-062", topicId: "participe-gerondif",
      hint: "réduire — gérondif",
      sentence: "L'entreprise a augmenté ses marges ___ les coûts de production.",
      answer: "en réduisant",
      fullSentence: "L'entreprise a augmenté ses marges en réduisant les coûts de production.",
      explanation: "Gérondif = en + participe présent (stem réduis- + -ant) → en réduisant; expresses means."
    },
    {
      id: "fib-063", topicId: "participe-gerondif",
      hint: "investir — gérondif",
      sentence: "___ dans la recherche, la société a développé un nouveau produit.",
      answer: "En investissant",
      fullSentence: "En investissant dans la recherche, la société a développé un nouveau produit.",
      explanation: "Gérondif = en + participe présent (stem investiss- + -ant) → en investissant; expresses cause."
    },
    {
      id: "fib-064", topicId: "participe-gerondif",
      hint: "négocier — gérondif",
      sentence: "Nous avons obtenu de meilleures conditions ___ directement avec le fournisseur.",
      answer: "en négociant",
      fullSentence: "Nous avons obtenu de meilleures conditions en négociant directement avec le fournisseur.",
      explanation: "Gérondif = en + participe présent (stem négoci- + -ant) → en négociant; expresses means."
    },

    // -------------------------------------------------------------------------
    // VERBES + PRÉPOSITIONS (8)
    // -------------------------------------------------------------------------
    {
      id: "fib-065", topicId: "verbes-prepositions",
      hint: "réussir à",
      sentence: "L'équipe a réussi ___ conclure l'accord avant la date limite.",
      answer: "à",
      fullSentence: "L'équipe a réussi à conclure l'accord avant la date limite.",
      explanation: "Réussir takes the preposition 'à' before an infinitive: réussir à + infinitif."
    },
    {
      id: "fib-066", topicId: "verbes-prepositions",
      hint: "décider de",
      sentence: "Le conseil d'administration a décidé ___ augmenter le capital.",
      answer: "de",
      fullSentence: "Le conseil d'administration a décidé d'augmenter le capital.",
      explanation: "Décider takes the preposition 'de' before an infinitive: décider de + infinitif."
    },
    {
      id: "fib-067", topicId: "verbes-prepositions",
      hint: "s'occuper de",
      sentence: "La responsable RH s'occupe ___ recrutement des nouveaux employés.",
      answer: "du",
      fullSentence: "La responsable RH s'occupe du recrutement des nouveaux employés.",
      explanation: "S'occuper takes 'de': s'occuper de + noun; 'de + le' contracts to 'du'."
    },
    {
      id: "fib-068", topicId: "verbes-prepositions",
      hint: "chercher (direct, no preposition)",
      sentence: "Nous cherchons ___ partenaire commercial fiable.",
      answer: "un",
      fullSentence: "Nous cherchons un partenaire commercial fiable.",
      explanation: "Chercher is a direct transitive verb (no preposition): chercher + direct object (un partenaire)."
    },
    {
      id: "fib-069", topicId: "verbes-prepositions",
      hint: "commencer à",
      sentence: "Les stagiaires ont commencé ___ travailler sur le dossier.",
      answer: "à",
      fullSentence: "Les stagiaires ont commencé à travailler sur le dossier.",
      explanation: "Commencer takes the preposition 'à' before an infinitive: commencer à + infinitif."
    },
    {
      id: "fib-070", topicId: "verbes-prepositions",
      hint: "avoir besoin de",
      sentence: "J'ai besoin ___ votre approbation pour lancer la campagne.",
      answer: "de",
      fullSentence: "J'ai besoin de votre approbation pour lancer la campagne.",
      explanation: "Avoir besoin takes 'de': avoir besoin de + noun/infinitive."
    },
    {
      id: "fib-071", topicId: "verbes-prepositions",
      hint: "tenir à",
      sentence: "Le directeur tient ___ remercier tous les collaborateurs.",
      answer: "à",
      fullSentence: "Le directeur tient à remercier tous les collaborateurs.",
      explanation: "Tenir takes 'à' when meaning 'to insist on': tenir à + infinitif."
    },
    {
      id: "fib-072", topicId: "verbes-prepositions",
      hint: "empêcher de",
      sentence: "La grève a empêché les employés ___ accéder aux locaux.",
      answer: "d'",
      fullSentence: "La grève a empêché les employés d'accéder aux locaux.",
      explanation: "Empêcher takes 'de': empêcher quelqu'un de + infinitif; 'de' elides to 'd'' before a vowel."
    },

    // -------------------------------------------------------------------------
    // OTHER GRAMMAR (8): pronouns, negation, etc.
    // -------------------------------------------------------------------------
    {
      id: "fib-073", topicId: "pronoms-en-y",
      hint: "pronom en (remplace 'des dossiers')",
      sentence: "Des dossiers urgents ? Oui, nous ___ avons reçu trois ce matin.",
      answer: "en",
      fullSentence: "Des dossiers urgents ? Oui, nous en avons reçu trois ce matin.",
      explanation: "'En' replaces a partitive or quantity expression: des dossiers → en (nous en avons reçu trois)."
    },
    {
      id: "fib-074", topicId: "pronoms-en-y",
      hint: "pronom y (remplace 'à cette réunion')",
      sentence: "La réunion stratégique ? J'___ assisterai demain.",
      answer: "y",
      fullSentence: "La réunion stratégique ? J'y assisterai demain.",
      explanation: "'Y' replaces 'à + noun (thing/place)': à cette réunion → y (j'y assisterai)."
    },
    {
      id: "fib-075", topicId: "negation",
      hint: "ne ... que (restriction)",
      sentence: "Le bureau n'ouvre ___ à neuf heures.",
      answer: "qu'",
      fullSentence: "Le bureau n'ouvre qu'à neuf heures.",
      explanation: "'Ne ... que' expresses restriction (only): n'ouvre qu'à neuf heures = opens only at nine."
    },
    {
      id: "fib-076", topicId: "negation",
      hint: "ne ... aucun",
      sentence: "Nous n'avons reçu ___ candidature pour ce poste.",
      answer: "aucune",
      fullSentence: "Nous n'avons reçu aucune candidature pour ce poste.",
      explanation: "'Ne ... aucun(e)' means 'not a single': aucune candidature = not a single application."
    },
    {
      id: "fib-077", topicId: "pronoms-relatifs",
      hint: "pronom relatif dont",
      sentence: "C'est le projet ___ le directeur est le plus fier.",
      answer: "dont",
      fullSentence: "C'est le projet dont le directeur est le plus fier.",
      explanation: "'Dont' replaces 'de + noun': être fier de ce projet → le projet dont il est fier."
    },
    {
      id: "fib-078", topicId: "pronoms-relatifs",
      hint: "pronom relatif où (temps)",
      sentence: "Le jour ___ nous avons signé le contrat, la bourse a monté.",
      answer: "où",
      fullSentence: "Le jour où nous avons signé le contrat, la bourse a monté.",
      explanation: "'Où' replaces a time expression: ce jour-là → le jour où nous avons signé."
    },
    {
      id: "fib-079", topicId: "comparaison",
      hint: "comparatif irrégulier de 'bon'",
      sentence: "Ce trimestre, nos résultats sont ___ que ceux de l'année dernière.",
      answer: "meilleurs",
      fullSentence: "Ce trimestre, nos résultats sont meilleurs que ceux de l'année dernière.",
      explanation: "'Meilleur(s)' is the irregular comparative of 'bon': plus bon → meilleur(s)."
    },
    {
      id: "fib-080", topicId: "comparaison",
      hint: "superlatif de 'bien'",
      sentence: "C'est cette équipe qui travaille le ___.",
      answer: "mieux",
      fullSentence: "C'est cette équipe qui travaille le mieux.",
      explanation: "'Mieux' is the irregular comparative/superlative of 'bien': le plus bien → le mieux."
    },
  ],

  // =============================================================================
  // MULTIPLE CHOICE (~80 exercises)
  // =============================================================================
  multipleChoice: [

    // -------------------------------------------------------------------------
    // VERB CONJUGATION CHOICES (40)
    // -------------------------------------------------------------------------
    {
      id: "mc-001", topicId: "subjonctif",
      question: "Il faut que vous ___ à l'heure à la réunion.",
      options: ["soyez", "êtes", "serez", "étiez"],
      correctIndex: 0,
      explanation: "After 'il faut que', use the subjonctif. Être → subjonctif vous = soyez."
    },
    {
      id: "mc-002", topicId: "subjonctif",
      question: "Je ne crois pas qu'il ___ finir le rapport ce soir.",
      options: ["peut", "puisse", "pourra", "pouvait"],
      correctIndex: 1,
      explanation: "After 'je ne crois pas que', use the subjonctif. Pouvoir → subjonctif il = puisse."
    },
    {
      id: "mc-003", topicId: "futur",
      question: "Quand le client ___, nous lui montrerons le prototype.",
      options: ["viendra", "vient", "viendrait", "vienne"],
      correctIndex: 0,
      explanation: "After 'quand' expressing a future event, French uses the futur simple (not present as in English)."
    },
    {
      id: "mc-004", topicId: "conditionnel",
      question: "Si j'avais le budget, je ___ une campagne publicitaire.",
      options: ["lance", "lancerais", "lancerai", "lançais"],
      correctIndex: 1,
      explanation: "Si + imparfait → conditionnel présent in the main clause."
    },
    {
      id: "mc-005", topicId: "passe-compose",
      question: "Les employées sont ___ en formation la semaine dernière.",
      options: ["allé", "allés", "allées", "allée"],
      correctIndex: 2,
      explanation: "With être, the past participle agrees with the subject. 'Les employées' is feminine plural → allées."
    },
    {
      id: "mc-006", topicId: "subjonctif",
      question: "Bien que l'entreprise ___ des difficultés, elle continue d'embaucher.",
      options: ["a", "ait", "aura", "avait"],
      correctIndex: 1,
      explanation: "After 'bien que', use the subjonctif. Avoir → subjonctif elle = ait."
    },
    {
      id: "mc-007", topicId: "futur",
      question: "Dès que nous ___ les résultats, nous vous informerons.",
      options: ["avons", "aurons", "ayons", "aurions"],
      correctIndex: 1,
      explanation: "After 'dès que' expressing a future event, French uses the futur simple."
    },
    {
      id: "mc-008", topicId: "conditionnel",
      question: "Si nous avions investi plus tôt, nous ___ déjà rentables.",
      options: ["serions", "serons", "sommes", "soyons"],
      correctIndex: 0,
      explanation: "Si + plus-que-parfait → conditionnel présent (or passé) in the main clause."
    },
    {
      id: "mc-009", topicId: "present",
      question: "Combien de personnes ___ dans cette filiale ?",
      options: ["travaillent", "travailles", "travaillez", "travaillons"],
      correctIndex: 0,
      explanation: "'Combien de personnes' is a 3rd person plural subject → travaillent."
    },
    {
      id: "mc-010", topicId: "subjonctif",
      question: "Il est important que chaque employé ___ ses objectifs.",
      options: ["connaît", "connaisse", "connaîtra", "connaissait"],
      correctIndex: 1,
      explanation: "After 'il est important que', use the subjonctif. Connaître → subjonctif il = connaisse."
    },
    {
      id: "mc-011", topicId: "futur",
      question: "L'entreprise ___ son nouveau siège l'année prochaine.",
      options: ["ouvrira", "ouvre", "ouvrait", "ouvrirait"],
      correctIndex: 0,
      explanation: "'L'année prochaine' signals a future event → futur simple: ouvrira."
    },
    {
      id: "mc-012", topicId: "passe-compose",
      question: "Elle ___ directrice l'année dernière.",
      options: ["a devenu", "est devenu", "est devenue", "a devenue"],
      correctIndex: 2,
      explanation: "Devenir uses être in passé composé. 'Elle' is feminine → devenue."
    },
    {
      id: "mc-013", topicId: "conditionnel",
      question: "Je ___ savoir si le poste est toujours disponible.",
      options: ["veux", "voudrais", "voudrai", "veuille"],
      correctIndex: 1,
      explanation: "The conditionnel is used for polite requests. Vouloir → conditionnel je = voudrais."
    },
    {
      id: "mc-014", topicId: "passe-compose",
      question: "La lettre que j'ai ___ contenait une offre d'emploi.",
      options: ["reçu", "reçue", "reçus", "reçues"],
      correctIndex: 1,
      explanation: "With avoir, the past participle agrees with a preceding direct object. 'La lettre' (que) is feminine singular → reçue."
    },
    {
      id: "mc-015", topicId: "subjonctif",
      question: "Le patron veut que nous ___ un plan d'action.",
      options: ["préparons", "préparions", "préparerons", "préparons"],
      correctIndex: 1,
      explanation: "After 'vouloir que', use the subjonctif. Préparer → subjonctif nous = préparions."
    },
    {
      id: "mc-016", topicId: "futur",
      question: "Tu ___ la réponse demain matin.",
      options: ["sais", "sauras", "saches", "savais"],
      correctIndex: 1,
      explanation: "'Demain matin' signals a future event. Savoir → futur tu = sauras."
    },
    {
      id: "mc-017", topicId: "conditionnel",
      question: "___ -il possible de reporter la réunion ?",
      options: ["Est", "Serait", "Sera", "Soit"],
      correctIndex: 1,
      explanation: "The conditionnel is used for polite/tentative questions. Être → conditionnel il = serait."
    },
    {
      id: "mc-018", topicId: "passe-compose",
      question: "Nous ___ beaucoup de progrès ce trimestre.",
      options: ["avons fait", "avons faits", "sommes fait", "sommes faits"],
      correctIndex: 0,
      explanation: "Faire uses avoir. 'Progrès' is the direct object after the verb, so no agreement. Fait remains invariable here."
    },
    {
      id: "mc-019", topicId: "present",
      question: "Les dirigeants ___ les décisions stratégiques.",
      options: ["prennent", "prendent", "prenent", "prendent"],
      correctIndex: 0,
      explanation: "Prendre → ils prennent (double n in the 3rd person plural)."
    },
    {
      id: "mc-020", topicId: "subjonctif",
      question: "Je cherche un comptable qui ___ parler anglais.",
      options: ["sait", "sache", "saura", "savait"],
      correctIndex: 1,
      explanation: "After a relative clause expressing a wish/uncertainty (chercher + qui), use the subjonctif."
    },
    {
      id: "mc-021", topicId: "futur",
      question: "Nous ___ dès que la commande sera prête.",
      options: ["partions", "partirons", "partirions", "partons"],
      correctIndex: 1,
      explanation: "Main clause with 'dès que + futur' takes the futur simple. Partir → nous partirons."
    },
    {
      id: "mc-022", topicId: "conditionnel",
      question: "Il m'a dit qu'il ___ le contrat le lendemain.",
      options: ["signera", "signerait", "signe", "signait"],
      correctIndex: 1,
      explanation: "In indirect speech, futur becomes conditionnel (futur du passé). Signer → il signerait."
    },
    {
      id: "mc-023", topicId: "passe-compose",
      question: "Combien de candidats avez-vous ___ ?",
      options: ["reçu", "reçus", "reçues", "reçue"],
      correctIndex: 0,
      explanation: "'Combien de candidats' is placed after the verb in the question (avez-vous reçu combien de candidats?), so there's no preceding direct object — no agreement."
    },
    {
      id: "mc-024", topicId: "present",
      question: "Les clients nous ___ souvent des remarques constructives.",
      options: ["faisent", "font", "faisons", "faites"],
      correctIndex: 1,
      explanation: "Faire → ils/elles font."
    },
    {
      id: "mc-025", topicId: "subjonctif",
      question: "À moins que vous n'___ une objection, nous signerons demain.",
      options: ["avez", "ayez", "aurez", "aviez"],
      correctIndex: 1,
      explanation: "After 'à moins que', use the subjonctif. Avoir → subjonctif vous = ayez."
    },
    {
      id: "mc-026", topicId: "passe-compose",
      question: "Les factures que j'ai ___ étaient incorrectes.",
      options: ["envoyé", "envoyée", "envoyés", "envoyées"],
      correctIndex: 3,
      explanation: "With avoir + preceding direct object 'les factures' (que), agree with feminine plural → envoyées."
    },
    {
      id: "mc-027", topicId: "conditionnel",
      question: "Au cas où le fournisseur ___ en retard, prévoyons un plan B.",
      options: ["est", "serait", "sera", "soit"],
      correctIndex: 1,
      explanation: "After 'au cas où', use the conditionnel. Être → conditionnel il = serait."
    },
    {
      id: "mc-028", topicId: "present",
      question: "Ce logiciel ___ à tous les employés de gérer leurs congés.",
      options: ["permets", "permet", "permettent", "permettez"],
      correctIndex: 1,
      explanation: "'Ce logiciel' is 3rd person singular. Permettre → il permet."
    },
    {
      id: "mc-029", topicId: "futur",
      question: "Quand vous ___ prêts, nous commencerons la présentation.",
      options: ["êtes", "serez", "soyez", "seriez"],
      correctIndex: 1,
      explanation: "After 'quand' expressing a future event, French uses the futur simple. Être → vous serez."
    },
    {
      id: "mc-030", topicId: "subjonctif",
      question: "Nous travaillerons jusqu'à ce que le projet ___ terminé.",
      options: ["est", "soit", "sera", "serait"],
      correctIndex: 1,
      explanation: "After 'jusqu'à ce que', use the subjonctif. Être → subjonctif il = soit."
    },
    {
      id: "mc-031", topicId: "passe-compose",
      question: "Elle s'est ___ à la conférence sur le marketing digital.",
      options: ["inscrit", "inscrite", "inscrits", "inscrites"],
      correctIndex: 1,
      explanation: "With a reflexive verb (s'inscrire) using être, agree with the subject. 'Elle' → inscrite."
    },
    {
      id: "mc-032", topicId: "conditionnel",
      question: "Si les ventes augmentaient, on ___ embaucher plus de personnel.",
      options: ["peut", "pourra", "pourrait", "puisse"],
      correctIndex: 2,
      explanation: "Si + imparfait → conditionnel présent. Pouvoir → on pourrait."
    },
    {
      id: "mc-033", topicId: "present",
      question: "Chaque matin, le directeur ___ son courrier électronique en premier.",
      options: ["lis", "lit", "lise", "lira"],
      correctIndex: 1,
      explanation: "Habitual present. Lire → il lit."
    },
    {
      id: "mc-034", topicId: "futur",
      question: "Lorsqu'ils ___ leur objectif, ils recevront une prime.",
      options: ["atteignent", "atteindront", "atteindraient", "atteignaient"],
      correctIndex: 1,
      explanation: "After 'lorsque' expressing a future event, use the futur simple. Atteindre → ils atteindront."
    },
    {
      id: "mc-035", topicId: "subjonctif",
      question: "Il est regrettable que les négociations ___ échoué.",
      options: ["ont", "aient", "avaient", "auront"],
      correctIndex: 1,
      explanation: "After 'il est regrettable que', use the subjonctif passé. Avoir → subjonctif elles = aient."
    },
    {
      id: "mc-036", topicId: "passe-compose",
      question: "Les documents qu'elle nous a ___ sont très utiles.",
      options: ["transmis", "transmise", "transmises", "transmi"],
      correctIndex: 0,
      explanation: "With avoir + preceding direct object 'les documents' (que), agree with masculine plural → transmis (already ends in -s)."
    },
    {
      id: "mc-037", topicId: "conditionnel",
      question: "À votre place, je ___ de son expertise.",
      options: ["profite", "profiterais", "profiterai", "profitais"],
      correctIndex: 1,
      explanation: "'À votre place' expresses a hypothetical → conditionnel présent."
    },
    {
      id: "mc-038", topicId: "present",
      question: "Nous ___ à l'exportation depuis cinq ans.",
      options: ["recourons", "recourent", "recourrons", "recourez"],
      correctIndex: 0,
      explanation: "Recourir → nous recourons (present, not futur)."
    },
    {
      id: "mc-039", topicId: "futur",
      question: "Il ___ beau demain, nous pourrons déjeuner en terrasse.",
      options: ["fait", "fera", "faisait", "fasse"],
      correctIndex: 1,
      explanation: "'Demain' signals future. Faire → futur il = fera."
    },
    {
      id: "mc-040", topicId: "subjonctif",
      question: "Pourvu que tout ___ bien pendant l'audit !",
      options: ["va", "aille", "ira", "irait"],
      correctIndex: 1,
      explanation: "After 'pourvu que', use the subjonctif. Aller → subjonctif il = aille."
    },

    // -------------------------------------------------------------------------
    // PRONOMS RELATIFS (8): qui/que/dont/où
    // -------------------------------------------------------------------------
    {
      id: "mc-041", topicId: "pronoms-relatifs",
      question: "Voici le rapport ___ j'ai rédigé pour le comité.",
      options: ["qui", "que", "dont", "où"],
      correctIndex: 1,
      explanation: "'Que' replaces the direct object. J'ai rédigé le rapport → le rapport que j'ai rédigé."
    },
    {
      id: "mc-042", topicId: "pronoms-relatifs",
      question: "C'est la collègue ___ m'a aidé à préparer la présentation.",
      options: ["que", "qui", "dont", "où"],
      correctIndex: 1,
      explanation: "'Qui' replaces the subject. La collègue m'a aidé → la collègue qui m'a aidé."
    },
    {
      id: "mc-043", topicId: "pronoms-relatifs",
      question: "Le bureau ___ nous travaillons est au troisième étage.",
      options: ["que", "qui", "dont", "où"],
      correctIndex: 3,
      explanation: "'Où' replaces a place. Nous travaillons dans le bureau → le bureau où nous travaillons."
    },
    {
      id: "mc-044", topicId: "pronoms-relatifs",
      question: "C'est un poste ___ les avantages sont nombreux.",
      options: ["que", "qui", "dont", "où"],
      correctIndex: 2,
      explanation: "'Dont' replaces 'de + noun'. Les avantages de ce poste → un poste dont les avantages..."
    },
    {
      id: "mc-045", topicId: "pronoms-relatifs",
      question: "Le moment ___ l'accord a été signé restera mémorable.",
      options: ["que", "qui", "dont", "où"],
      correctIndex: 3,
      explanation: "'Où' can replace a time expression. À ce moment → le moment où..."
    },
    {
      id: "mc-046", topicId: "pronoms-relatifs",
      question: "Le fournisseur ___ nous dépendons a augmenté ses prix.",
      options: ["que", "qui", "dont", "où"],
      correctIndex: 2,
      explanation: "'Dont' replaces 'de + noun'. Nous dépendons de ce fournisseur → le fournisseur dont nous dépendons."
    },
    {
      id: "mc-047", topicId: "pronoms-relatifs",
      question: "La stratégie ___ a été adoptée porte ses fruits.",
      options: ["que", "qui", "dont", "où"],
      correctIndex: 1,
      explanation: "'Qui' replaces the subject. La stratégie a été adoptée → la stratégie qui a été adoptée."
    },
    {
      id: "mc-048", topicId: "pronoms-relatifs",
      question: "Le candidat ___ nous avons retenu commencera lundi.",
      options: ["qui", "que", "dont", "où"],
      correctIndex: 1,
      explanation: "'Que' replaces the direct object. Nous avons retenu le candidat → le candidat que nous avons retenu."
    },

    // -------------------------------------------------------------------------
    // PRONOMS EN / Y (8)
    // -------------------------------------------------------------------------
    {
      id: "mc-049", topicId: "pronoms-en-y",
      question: "Tu as pensé au rendez-vous ? — Oui, j'___ ai pensé.",
      options: ["en", "y", "le", "lui"],
      correctIndex: 1,
      explanation: "'Y' replaces 'à + noun (thing)'. Penser à quelque chose → y penser."
    },
    {
      id: "mc-050", topicId: "pronoms-en-y",
      question: "Combien de succursales avez-vous ? — Nous ___ avons douze.",
      options: ["y", "en", "les", "leur"],
      correctIndex: 1,
      explanation: "'En' replaces 'de + noun' or a quantity. Nous avons douze succursales → nous en avons douze."
    },
    {
      id: "mc-051", topicId: "pronoms-en-y",
      question: "Es-tu satisfait de ton salaire ? — Oui, j'___ suis satisfait.",
      options: ["y", "en", "le", "lui"],
      correctIndex: 1,
      explanation: "'En' replaces 'de + noun'. Satisfait de mon salaire → j'en suis satisfait."
    },
    {
      id: "mc-052", topicId: "pronoms-en-y",
      question: "Il s'intéresse à la finance ? — Oui, il s'___ intéresse beaucoup.",
      options: ["en", "y", "le", "la"],
      correctIndex: 1,
      explanation: "'Y' replaces 'à + noun (thing)'. S'intéresser à la finance → s'y intéresser."
    },
    {
      id: "mc-053", topicId: "pronoms-en-y",
      question: "Avez-vous besoin d'un traducteur ? — Oui, nous ___ avons besoin.",
      options: ["y", "en", "le", "lui"],
      correctIndex: 1,
      explanation: "'En' replaces 'de + noun'. Avoir besoin d'un traducteur → en avoir besoin."
    },
    {
      id: "mc-054", topicId: "pronoms-en-y",
      question: "Vous participez au projet ? — Oui, j'___ participe activement.",
      options: ["en", "y", "le", "leur"],
      correctIndex: 1,
      explanation: "'Y' replaces 'à + noun (thing)'. Participer au projet → y participer."
    },
    {
      id: "mc-055", topicId: "pronoms-en-y",
      question: "Tu veux du café ? — Non merci, je n'___ veux pas.",
      options: ["y", "en", "le", "la"],
      correctIndex: 1,
      explanation: "'En' replaces 'du/de la/des + noun' (partitive). Vouloir du café → en vouloir."
    },
    {
      id: "mc-056", topicId: "pronoms-en-y",
      question: "Elle tient à ce contrat ? — Oui, elle ___ tient absolument.",
      options: ["en", "y", "le", "la"],
      correctIndex: 1,
      explanation: "'Y' replaces 'à + noun (thing)'. Tenir à ce contrat → y tenir."
    },

    // -------------------------------------------------------------------------
    // NÉGATION (5)
    // -------------------------------------------------------------------------
    {
      id: "mc-057", topicId: "negation",
      question: "Je ne connais ___ dans cette entreprise.",
      options: ["rien", "personne", "jamais", "plus"],
      correctIndex: 1,
      explanation: "'Personne' means 'nobody'. Je ne connais personne = I don't know anyone."
    },
    {
      id: "mc-058", topicId: "negation",
      question: "Il n'a ___ eu de promotion depuis cinq ans.",
      options: ["rien", "personne", "jamais", "aucun"],
      correctIndex: 2,
      explanation: "'Jamais' means 'never'. Il n'a jamais eu = He has never had."
    },
    {
      id: "mc-059", topicId: "negation",
      question: "Nous ne travaillons ___ avec ce fournisseur.",
      options: ["rien", "personne", "jamais", "plus"],
      correctIndex: 3,
      explanation: "'Plus' means 'no longer/anymore'. Nous ne travaillons plus = We no longer work."
    },
    {
      id: "mc-060", topicId: "negation",
      question: "___ ne l'a prévenu du changement de réunion.",
      options: ["Rien", "Personne", "Jamais", "Aucun"],
      correctIndex: 1,
      explanation: "'Personne ne...' means 'Nobody...'. Personne ne l'a prévenu = Nobody warned him."
    },
    {
      id: "mc-061", topicId: "negation",
      question: "Il n'y a ___ de nouveau dans le dossier.",
      options: ["personne", "rien", "jamais", "plus"],
      correctIndex: 1,
      explanation: "'Rien' means 'nothing'. Il n'y a rien de nouveau = There is nothing new."
    },

    // -------------------------------------------------------------------------
    // COMPARAISON (5)
    // -------------------------------------------------------------------------
    {
      id: "mc-062", topicId: "comparaison",
      question: "Cette filiale est ___ rentable que l'autre.",
      options: ["plus", "mieux", "meilleur", "autant"],
      correctIndex: 0,
      explanation: "'Plus + adjective + que' forms the comparative of superiority. Plus rentable que = more profitable than."
    },
    {
      id: "mc-063", topicId: "comparaison",
      question: "Elle gère les conflits ___ que son prédécesseur.",
      options: ["meilleure", "mieux", "plus bonne", "plus bien"],
      correctIndex: 1,
      explanation: "'Mieux' is the comparative of 'bien' (adverb). She manages better → mieux."
    },
    {
      id: "mc-064", topicId: "comparaison",
      question: "C'est la ___ offre que nous ayons reçue.",
      options: ["meilleure", "mieux", "plus bonne", "plus bien"],
      correctIndex: 0,
      explanation: "'Meilleur(e)' is the comparative/superlative of 'bon(ne)'. La meilleure offre = the best offer."
    },
    {
      id: "mc-065", topicId: "comparaison",
      question: "Il travaille ___ que les autres membres de l'équipe.",
      options: ["aussi", "autant", "tant", "si"],
      correctIndex: 1,
      explanation: "'Autant que' is used with verbs. Il travaille autant = He works as much."
    },
    {
      id: "mc-066", topicId: "comparaison",
      question: "Ce logiciel est ___ efficace ___ l'ancien.",
      options: ["aussi ... que", "autant ... que", "plus ... de", "moins ... de"],
      correctIndex: 0,
      explanation: "'Aussi + adjective + que' expresses equality. Aussi efficace que = as efficient as."
    },

    // -------------------------------------------------------------------------
    // DÉMONSTRATIFS / POSSESSIFS (6)
    // -------------------------------------------------------------------------
    {
      id: "mc-067", topicId: "demonstratifs",
      question: "___ qui m'inquiète, c'est la baisse du chiffre d'affaires.",
      options: ["Ce", "Cela", "Celui", "Cette"],
      correctIndex: 0,
      explanation: "'Ce qui' (= what/the thing that) introduces a subject relative clause. Ce qui m'inquiète = What worries me."
    },
    {
      id: "mc-068", topicId: "demonstratifs",
      question: "J'ai consulté deux rapports : ___ de janvier et ___ de mars.",
      options: ["celui ... celui", "ceux ... ceux", "ce ... ce", "cela ... cela"],
      correctIndex: 0,
      explanation: "'Celui' replaces a masculine singular noun (le rapport). Celui de janvier = the one from January."
    },
    {
      id: "mc-069", topicId: "demonstratifs",
      question: "Parmi toutes les candidatures, ___ qui se démarquent sont rares.",
      options: ["ceux", "celles", "celui", "celle"],
      correctIndex: 1,
      explanation: "'Les candidatures' is feminine plural. Celles qui = the ones that (feminine plural)."
    },
    {
      id: "mc-070", topicId: "possessifs",
      question: "Votre proposition est intéressante, mais la ___ est plus compétitive.",
      options: ["notre", "nôtre", "nos", "notres"],
      correctIndex: 1,
      explanation: "After an article (la), use the stressed possessive pronoun: la nôtre."
    },
    {
      id: "mc-071", topicId: "possessifs",
      question: "J'ai présenté mes résultats. As-tu présenté ___ ?",
      options: ["les tiens", "tes", "les tiennes", "ton"],
      correctIndex: 0,
      explanation: "'Mes résultats' is masculine plural. The possessive pronoun replacing 'tes résultats' → les tiens."
    },
    {
      id: "mc-072", topicId: "demonstratifs",
      question: "Je préfère cette stratégie-ci à ___.",
      options: ["celle-là", "cela-là", "cette-là", "ceux-là"],
      correctIndex: 0,
      explanation: "'Cette stratégie' is feminine singular. The demonstrative pronoun → celle-là."
    },

    // -------------------------------------------------------------------------
    // INDÉFINIS (4)
    // -------------------------------------------------------------------------
    {
      id: "mc-073", topicId: "indefinis",
      question: "___ les employés doivent assister à la formation.",
      options: ["Tous", "Chaque", "Quelques", "Certains"],
      correctIndex: 0,
      explanation: "'Tous les + plural noun' means 'all the'. Tous les employés = All the employees."
    },
    {
      id: "mc-074", topicId: "indefinis",
      question: "___ département a son propre budget.",
      options: ["Tous", "Chaque", "Quelques", "Plusieurs"],
      correctIndex: 1,
      explanation: "'Chaque' means 'each/every' and is followed by a singular noun. Chaque département = Each department."
    },
    {
      id: "mc-075", topicId: "indefinis",
      question: "J'ai contacté plusieurs fournisseurs, mais ___ n'a répondu.",
      options: ["chacun", "aucun", "quelqu'un", "tout"],
      correctIndex: 1,
      explanation: "'Aucun ne...' means 'none/no one'. Aucun n'a répondu = None of them responded."
    },
    {
      id: "mc-076", topicId: "indefinis",
      question: "Il y a ___ chose que je voudrais ajouter à l'ordre du jour.",
      options: ["chaque", "quelque", "aucune", "toute"],
      correctIndex: 1,
      explanation: "'Quelque chose' means 'something'. It is a fixed expression."
    },

    // -------------------------------------------------------------------------
    // PRÉPOSITIONS AFTER VERBS (4)
    // -------------------------------------------------------------------------
    {
      id: "mc-077", topicId: "verbes-prepositions",
      question: "Il a accepté ___ participer à la conférence.",
      options: ["à", "de", "pour", "(nothing)"],
      correctIndex: 1,
      explanation: "Accepter de + infinitive. Il a accepté de participer."
    },
    {
      id: "mc-078", topicId: "verbes-prepositions",
      question: "Nous hésitons ___ investir dans ce secteur.",
      options: ["de", "à", "pour", "(nothing)"],
      correctIndex: 1,
      explanation: "Hésiter à + infinitive. Nous hésitons à investir."
    },
    {
      id: "mc-079", topicId: "verbes-prepositions",
      question: "Elle a promis ___ livrer la commande à temps.",
      options: ["à", "de", "pour", "(nothing)"],
      correctIndex: 1,
      explanation: "Promettre de + infinitive. Elle a promis de livrer."
    },
    {
      id: "mc-080", topicId: "verbes-prepositions",
      question: "Le manager a encouragé son équipe ___ innover.",
      options: ["de", "à", "pour", "(nothing)"],
      correctIndex: 1,
      explanation: "Encourager quelqu'un à + infinitive. Il a encouragé son équipe à innover."
    },
  ],

  // =============================================================================
  // SENTENCE TRANSFORMATION (~30 exercises)
  // =============================================================================
  transformation: [

    // -------------------------------------------------------------------------
    // DIRECT → INDIRECT SPEECH (8)
    // -------------------------------------------------------------------------
    {
      id: "trans-001", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "Le directeur dit : « Nous allons embaucher dix personnes. »",
      answer: "Le directeur dit qu'ils vont embaucher dix personnes.",
      acceptAlso: ["Le directeur dit qu'ils vont recruter dix personnes."],
      explanation: "In indirect speech with a present reporting verb, the tense stays the same. « Nous allons » → qu'ils vont (shift of person)."
    },
    {
      id: "trans-002", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "Elle demande : « Qu'est-ce que vous faites ? »",
      answer: "Elle demande ce que vous faites.",
      acceptAlso: ["Elle veut savoir ce que vous faites."],
      explanation: "« Qu'est-ce que » → ce que in indirect speech."
    },
    {
      id: "trans-003", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "Le client a demandé : « Est-ce que le produit est disponible ? »",
      answer: "Le client a demandé si le produit était disponible.",
      acceptAlso: [],
      explanation: "Past reporting verb → tense shift (présent → imparfait). « Est-ce que » → si."
    },
    {
      id: "trans-004", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "Le chef a dit : « Je ferai une annonce demain. »",
      answer: "Le chef a dit qu'il ferait une annonce le lendemain.",
      acceptAlso: [],
      explanation: "Past reporting verb → futur simple becomes conditionnel présent. 'Demain' → 'le lendemain'."
    },
    {
      id: "trans-005", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "La RH demande : « Où avez-vous travaillé avant ? »",
      answer: "La RH demande où vous avez travaillé avant.",
      acceptAlso: ["La RH demande où j'ai travaillé avant."],
      explanation: "« Où » stays « où » in indirect speech. Present reporting verb → no tense change."
    },
    {
      id: "trans-006", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "Il a affirmé : « J'ai terminé le rapport hier. »",
      answer: "Il a affirmé qu'il avait terminé le rapport la veille.",
      acceptAlso: [],
      explanation: "Past reporting verb → passé composé becomes plus-que-parfait. 'Hier' → 'la veille'."
    },
    {
      id: "trans-007", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "Le patron ordonne : « Finissez ce dossier ! »",
      answer: "Le patron ordonne de finir ce dossier.",
      acceptAlso: ["Le patron ordonne que nous finissions ce dossier."],
      explanation: "An imperative in direct speech → de + infinitive in indirect speech (or que + subjonctif)."
    },
    {
      id: "trans-008", topicId: "discours-indirect",
      type: "Discours Indirect",
      instruction: "Transformez au discours indirect :",
      given: "Elle a demandé : « Qui va diriger le nouveau département ? »",
      answer: "Elle a demandé qui allait diriger le nouveau département.",
      acceptAlso: [],
      explanation: "Past reporting verb → 'va' (présent) becomes 'allait' (imparfait). 'Qui' stays 'qui'."
    },

    // -------------------------------------------------------------------------
    // ACTIVE → GÉRONDIF (5)
    // -------------------------------------------------------------------------
    {
      id: "trans-009", topicId: "participe-gerondif",
      type: "Gérondif",
      instruction: "Reformulez en utilisant le gérondif :",
      given: "Il écoute de la musique et il travaille.",
      answer: "Il travaille en écoutant de la musique.",
      acceptAlso: ["En écoutant de la musique, il travaille."],
      explanation: "The gérondif (en + participe présent) expresses simultaneous actions."
    },
    {
      id: "trans-010", topicId: "participe-gerondif",
      type: "Gérondif",
      instruction: "Reformulez en utilisant le gérondif :",
      given: "Comme elle vérifiait les comptes, elle a trouvé une erreur.",
      answer: "En vérifiant les comptes, elle a trouvé une erreur.",
      acceptAlso: [],
      explanation: "'Comme + imparfait' can be replaced by the gérondif to express simultaneity/cause."
    },
    {
      id: "trans-011", topicId: "participe-gerondif",
      type: "Gérondif",
      instruction: "Reformulez en utilisant le gérondif :",
      given: "Nous avons réduit les coûts parce que nous avons automatisé les processus.",
      answer: "Nous avons réduit les coûts en automatisant les processus.",
      acceptAlso: ["En automatisant les processus, nous avons réduit les coûts."],
      explanation: "The gérondif can express cause/means (parce que → en + participe présent)."
    },
    {
      id: "trans-012", topicId: "participe-gerondif",
      type: "Gérondif",
      instruction: "Reformulez en utilisant le gérondif :",
      given: "Si vous suivez cette formation, vous améliorerez vos compétences.",
      answer: "En suivant cette formation, vous améliorerez vos compétences.",
      acceptAlso: [],
      explanation: "The gérondif can replace a conditional 'si' clause when expressing a condition/means."
    },
    {
      id: "trans-013", topicId: "participe-gerondif",
      type: "Gérondif",
      instruction: "Reformulez en utilisant le gérondif :",
      given: "Il a glissé quand il sortait du bureau.",
      answer: "Il a glissé en sortant du bureau.",
      acceptAlso: [],
      explanation: "The gérondif replaces 'quand + imparfait' to express simultaneity."
    },

    // -------------------------------------------------------------------------
    // PRESENT → PASSÉ COMPOSÉ (5)
    // -------------------------------------------------------------------------
    {
      id: "trans-014", topicId: "passe-compose",
      type: "Passé Composé",
      instruction: "Mettez la phrase au passé composé :",
      given: "Le comptable envoie les factures aux clients.",
      answer: "Le comptable a envoyé les factures aux clients.",
      acceptAlso: [],
      explanation: "Envoyer → passé composé avec avoir : a envoyé."
    },
    {
      id: "trans-015", topicId: "passe-compose",
      type: "Passé Composé",
      instruction: "Mettez la phrase au passé composé :",
      given: "Les commerciales partent en déplacement.",
      answer: "Les commerciales sont parties en déplacement.",
      acceptAlso: [],
      explanation: "Partir uses être. 'Les commerciales' is feminine plural → parties."
    },
    {
      id: "trans-016", topicId: "passe-compose",
      type: "Passé Composé",
      instruction: "Mettez la phrase au passé composé :",
      given: "Elle se présente au directeur.",
      answer: "Elle s'est présentée au directeur.",
      acceptAlso: [],
      explanation: "Reflexive verb → être. 'Elle' → agreement feminine singular: présentée."
    },
    {
      id: "trans-017", topicId: "passe-compose",
      type: "Passé Composé",
      instruction: "Mettez la phrase au passé composé :",
      given: "Nous prenons une décision importante.",
      answer: "Nous avons pris une décision importante.",
      acceptAlso: [],
      explanation: "Prendre → passé composé avec avoir : avons pris (irregular past participle)."
    },
    {
      id: "trans-018", topicId: "passe-compose",
      type: "Passé Composé",
      instruction: "Mettez la phrase au passé composé :",
      given: "Ils ouvrent une nouvelle succursale.",
      answer: "Ils ont ouvert une nouvelle succursale.",
      acceptAlso: [],
      explanation: "Ouvrir → passé composé avec avoir : ont ouvert (irregular past participle)."
    },

    // -------------------------------------------------------------------------
    // SI-CLAUSE CONSTRUCTIONS (5)
    // -------------------------------------------------------------------------
    {
      id: "trans-019", topicId: "conditionnel",
      type: "Si-Clause",
      instruction: "Complétez la phrase conditionnelle :",
      given: "Si nous (investir, imparfait) dans le numérique, nous (avoir, conditionnel) plus de clients.",
      answer: "Si nous investissions dans le numérique, nous aurions plus de clients.",
      acceptAlso: [],
      explanation: "Si + imparfait → conditionnel présent. Investir → investissions ; avoir → aurions."
    },
    {
      id: "trans-020", topicId: "conditionnel",
      type: "Si-Clause",
      instruction: "Complétez la phrase conditionnelle :",
      given: "Si elle (être, imparfait) disponible, elle (venir, conditionnel) à la réunion.",
      answer: "Si elle était disponible, elle viendrait à la réunion.",
      acceptAlso: [],
      explanation: "Si + imparfait → conditionnel présent. Être → était ; venir → viendrait."
    },
    {
      id: "trans-021", topicId: "conditionnel",
      type: "Si-Clause",
      instruction: "Complétez la phrase conditionnelle :",
      given: "Si j'(avoir, plus-que-parfait) le temps, j'(finir, conditionnel passé) le projet.",
      answer: "Si j'avais eu le temps, j'aurais fini le projet.",
      acceptAlso: [],
      explanation: "Si + plus-que-parfait → conditionnel passé. Avoir → avais eu ; finir → aurais fini."
    },
    {
      id: "trans-022", topicId: "conditionnel",
      type: "Si-Clause",
      instruction: "Complétez la phrase conditionnelle :",
      given: "Si le marché (se redresser, présent), les exportations (augmenter, futur).",
      answer: "Si le marché se redresse, les exportations augmenteront.",
      acceptAlso: [],
      explanation: "Si + présent → futur simple. Se redresser → se redresse ; augmenter → augmenteront."
    },
    {
      id: "trans-023", topicId: "conditionnel",
      type: "Si-Clause",
      instruction: "Complétez la phrase conditionnelle :",
      given: "Si tu (savoir, imparfait) négocier, tu (obtenir, conditionnel) de meilleures conditions.",
      answer: "Si tu savais négocier, tu obtiendrais de meilleures conditions.",
      acceptAlso: [],
      explanation: "Si + imparfait → conditionnel présent. Savoir → savais ; obtenir → obtiendrais."
    },

    // -------------------------------------------------------------------------
    // RELATIVE CLAUSE → PARTICIPE PRÉSENT (4)
    // -------------------------------------------------------------------------
    {
      id: "trans-024", topicId: "participe-gerondif",
      type: "Participe Présent",
      instruction: "Remplacez la relative par un participe présent :",
      given: "Les employés qui travaillent le week-end reçoivent une prime.",
      answer: "Les employés travaillant le week-end reçoivent une prime.",
      acceptAlso: [],
      explanation: "'Qui + verb' can be replaced by the participe présent (verb + -ant)."
    },
    {
      id: "trans-025", topicId: "participe-gerondif",
      type: "Participe Présent",
      instruction: "Remplacez la relative par un participe présent :",
      given: "Les candidats qui possèdent une expérience internationale sont prioritaires.",
      answer: "Les candidats possédant une expérience internationale sont prioritaires.",
      acceptAlso: [],
      explanation: "'Qui possèdent' → possédant (participe présent)."
    },
    {
      id: "trans-026", topicId: "participe-gerondif",
      type: "Participe Présent",
      instruction: "Remplacez la relative par un participe présent :",
      given: "Les entreprises qui souhaitent exporter doivent respecter ces normes.",
      answer: "Les entreprises souhaitant exporter doivent respecter ces normes.",
      acceptAlso: [],
      explanation: "'Qui souhaitent' → souhaitant (participe présent)."
    },
    {
      id: "trans-027", topicId: "participe-gerondif",
      type: "Participe Présent",
      instruction: "Remplacez la relative par un participe présent :",
      given: "Un collaborateur qui connaît bien le marché asiatique serait un atout.",
      answer: "Un collaborateur connaissant bien le marché asiatique serait un atout.",
      acceptAlso: [],
      explanation: "'Qui connaît' → connaissant (participe présent, from stem connaiss-)."
    },

    // -------------------------------------------------------------------------
    // NEGATION TRANSFORMATIONS (3)
    // -------------------------------------------------------------------------
    {
      id: "trans-028", topicId: "negation",
      type: "Négation",
      instruction: "Mettez la phrase à la forme négative avec la négation indiquée (ne ... plus) :",
      given: "L'entreprise exporte ses produits en Asie.",
      answer: "L'entreprise n'exporte plus ses produits en Asie.",
      acceptAlso: [],
      explanation: "Ne ... plus = no longer. Placed around the conjugated verb."
    },
    {
      id: "trans-029", topicId: "negation",
      type: "Négation",
      instruction: "Mettez la phrase à la forme négative avec la négation indiquée (ne ... personne) :",
      given: "Quelqu'un a répondu à l'offre d'emploi.",
      answer: "Personne n'a répondu à l'offre d'emploi.",
      acceptAlso: [],
      explanation: "Quelqu'un → personne ne... Personne is placed at the beginning as subject."
    },
    {
      id: "trans-030", topicId: "negation",
      type: "Négation",
      instruction: "Mettez la phrase à la forme négative avec la négation indiquée (ne ... rien) :",
      given: "Il a compris quelque chose pendant la réunion.",
      answer: "Il n'a rien compris pendant la réunion.",
      acceptAlso: [],
      explanation: "Quelque chose → ne ... rien. 'Rien' is placed between the auxiliary and the past participle."
    },
  ]
};
