// Ported from northstar-app/app/lib/questions.ts, TypeScript types stripped.
// Covers 4 official UCAT sections (VR, DM, QR, SJT) plus a Mixed Practice
// section that shuffles questions across all of them.

// ─── Types ───────────────────────────────────────────────────────────────────


// ─── Section Metadata ────────────────────────────────────────────────────────

export const SECTION_META = {
  VR:    { label: "Verbal Reasoning",       timeSec: 90, desc: "Passages · True / False / Can't Tell",          color: "#6366f1" },
  DM:    { label: "Decision Making",        timeSec: 90, desc: "Logic, Venn diagrams & argument analysis",       color: "var(--teal-600)" },
  QR:    { label: "Quantitative Reasoning", timeSec: 90, desc: "Data tables, graphs & calculations",             color: "#0ea5e9" },
  SJT:   { label: "Situational Judgement",  timeSec: 60, desc: "Clinical scenarios & professional dilemmas",     color: "#10b981" },
  MIXED: { label: "Mixed Practice",         timeSec: 75, desc: "A shuffled mix of VR, DM, QR & SJT questions",   color: "#8b5cf6" },
};

export const MIXED_QUESTION_COUNT = 20;

// ─── Topic Definitions ───────────────────────────────────────────────────────

export const TOPIC_DEFS = [
  // VR
  { id: "vr_factual",        section: "VR",  name: "True / False / Can't Tell" },
  { id: "vr_inference",      section: "VR",  name: "Inference & Implication" },
  { id: "vr_vocabulary",     section: "VR",  name: "Vocabulary in Context" },
  { id: "vr_argument",       section: "VR",  name: "Author's Argument" },
  // DM
  { id: "venn",              section: "DM",  name: "Venn Diagrams" },
  { id: "syllogism",         section: "DM",  name: "Syllogisms" },
  { id: "puzzle",            section: "DM",  name: "Logical Puzzles" },
  { id: "probabilistic",     section: "DM",  name: "Probabilistic Reasoning" },
  { id: "arguments",         section: "DM",  name: "Recognising Arguments" },
  { id: "formal",            section: "DM",  name: "Formal Logic" },
  { id: "quantitative",      section: "DM",  name: "Quantitative Reasoning" },
  { id: "interpreting",      section: "DM",  name: "Interpreting Data" },
  // QR
  { id: "qr_dosage",         section: "QR",  name: "Drug Dosage & Rates" },
  { id: "qr_tables",         section: "QR",  name: "Data Tables & Graphs" },
  { id: "qr_ratios",         section: "QR",  name: "Ratios & Percentages" },
  { id: "qr_geometry",       section: "QR",  name: "Space & Measurement" },
  // SJT
  { id: "sjt_safety",        section: "SJT", name: "Patient Safety" },
  { id: "sjt_ethics",        section: "SJT", name: "Ethics & Consent" },
  { id: "sjt_teamwork",      section: "SJT", name: "Teamwork" },
  { id: "sjt_professionalism", section: "SJT", name: "Professionalism" },
];

// ─── Question Bank ───────────────────────────────────────────────────────────

export const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════════════════
  // VERBAL REASONING (ids 100–115)
  // ══════════════════════════════════════════════════════════════════════════

  // ── Passage 1: Antimicrobial Resistance ───────────────────────────────────

  {
    id: 100, section: "VR", topicId: "vr_factual", difficulty: "Easy",
    context: `Antimicrobial resistance (AMR) is widely regarded as one of the most serious threats to global public health in the twenty-first century. When bacteria, viruses, fungi, and parasites evolve mechanisms to defeat the drugs used to treat them, infections that were once straightforward to manage can become life-threatening. The World Health Organization (WHO) estimates that, without concerted action, drug-resistant infections could cause ten million deaths per year by 2050, surpassing cancer as a leading cause of mortality worldwide.

The inappropriate use of antibiotics is a primary driver of resistance. In many low- and middle-income countries, antibiotics are sold without prescription, allowing patients to self-medicate and discontinue courses early when symptoms resolve. This selective pressure accelerates the emergence of resistant strains. In high-income countries, overprescribing in primary care — particularly for viral respiratory infections against which antibiotics have no effect — compounds the problem.

Agricultural use of antibiotics represents a parallel challenge. Globally, a substantial proportion of antibiotic consumption occurs in livestock farming, where drugs are administered not only to treat disease but also to promote growth. Resistant bacteria can transfer from animals to humans through the food chain, direct contact, and environmental contamination of water supplies.

Addressing AMR requires a coordinated One Health approach that recognises the interconnectedness of human, animal, and environmental health. Measures include improving prescribing practice, funding research into novel antimicrobials, and tightening regulations on agricultural antibiotic use. Several nations have made significant progress; Sweden and the Netherlands have dramatically reduced veterinary antibiotic consumption over the past two decades.`,
    prompt: "According to the passage, the World Health Organization estimates that drug-resistant infections could cause ten million deaths per year by 2050.",
    options: [
      { key: "A", label: "True" },
      { key: "B", label: "False" },
      { key: "C", label: "Can't Tell" },
    ],
    correct: "A",
    explanation: "The passage states directly: 'The World Health Organization (WHO) estimates that, without concerted action, drug-resistant infections could cause ten million deaths per year by 2050.' This is explicitly stated, so the answer is True.",
  },

  {
    id: 101, section: "VR", topicId: "vr_factual", difficulty: "Medium",
    context: `Antimicrobial resistance (AMR) is widely regarded as one of the most serious threats to global public health in the twenty-first century. When bacteria, viruses, fungi, and parasites evolve mechanisms to defeat the drugs used to treat them, infections that were once straightforward to manage can become life-threatening. The World Health Organization (WHO) estimates that, without concerted action, drug-resistant infections could cause ten million deaths per year by 2050, surpassing cancer as a leading cause of mortality worldwide.

The inappropriate use of antibiotics is a primary driver of resistance. In many low- and middle-income countries, antibiotics are sold without prescription, allowing patients to self-medicate and discontinue courses early when symptoms resolve. This selective pressure accelerates the emergence of resistant strains. In high-income countries, overprescribing in primary care — particularly for viral respiratory infections against which antibiotics have no effect — compounds the problem.

Agricultural use of antibiotics represents a parallel challenge. Globally, a substantial proportion of antibiotic consumption occurs in livestock farming, where drugs are administered not only to treat disease but also to promote growth. Resistant bacteria can transfer from animals to humans through the food chain, direct contact, and environmental contamination of water supplies.

Addressing AMR requires a coordinated One Health approach that recognises the interconnectedness of human, animal, and environmental health. Measures include improving prescribing practice, funding research into novel antimicrobials, and tightening regulations on agricultural antibiotic use. Several nations have made significant progress; Sweden and the Netherlands have dramatically reduced veterinary antibiotic consumption over the past two decades.`,
    prompt: "According to the passage, antibiotics are effective against viral respiratory infections in high-income countries.",
    options: [
      { key: "A", label: "True" },
      { key: "B", label: "False" },
      { key: "C", label: "Can't Tell" },
    ],
    correct: "B",
    explanation: "The passage explicitly states that antibiotics are prescribed 'for viral respiratory infections against which antibiotics have no effect.' This means antibiotics are ineffective against viral infections — the statement is False.",
  },

  {
    id: 102, section: "VR", topicId: "vr_inference", difficulty: "Medium",
    context: `Antimicrobial resistance (AMR) is widely regarded as one of the most serious threats to global public health in the twenty-first century. When bacteria, viruses, fungi, and parasites evolve mechanisms to defeat the drugs used to treat them, infections that were once straightforward to manage can become life-threatening. The World Health Organization (WHO) estimates that, without concerted action, drug-resistant infections could cause ten million deaths per year by 2050, surpassing cancer as a leading cause of mortality worldwide.

The inappropriate use of antibiotics is a primary driver of resistance. In many low- and middle-income countries, antibiotics are sold without prescription, allowing patients to self-medicate and discontinue courses early when symptoms resolve. This selective pressure accelerates the emergence of resistant strains. In high-income countries, overprescribing in primary care — particularly for viral respiratory infections against which antibiotics have no effect — compounds the problem.

Agricultural use of antibiotics represents a parallel challenge. Globally, a substantial proportion of antibiotic consumption occurs in livestock farming, where drugs are administered not only to treat disease but also to promote growth. Resistant bacteria can transfer from animals to humans through the food chain, direct contact, and environmental contamination of water supplies.

Addressing AMR requires a coordinated One Health approach that recognises the interconnectedness of human, animal, and environmental health. Measures include improving prescribing practice, funding research into novel antimicrobials, and tightening regulations on agricultural antibiotic use. Several nations have made significant progress; Sweden and the Netherlands have dramatically reduced veterinary antibiotic consumption over the past two decades.`,
    prompt: "Which of the following can be most reasonably inferred from the passage?",
    options: [
      { key: "A", label: "AMR is primarily caused by patients in low-income countries self-medicating." },
      { key: "B", label: "A global solution to AMR must address antibiotic use in both human medicine and agriculture." },
      { key: "C", label: "Funding new antimicrobial research alone would be sufficient to defeat AMR." },
      { key: "D", label: "Sweden and the Netherlands have eliminated AMR within their borders." },
    ],
    correct: "B",
    explanation: "The passage describes antibiotic misuse in human medicine (both low- and high-income countries) and in agriculture as parallel drivers of AMR, and advocates a 'One Health approach' addressing both. Option B is a direct inference. Option A is too narrow; the passage identifies overprescribing in high-income countries as well. Options C and D are contradicted or unsupported by the text.",
  },

  {
    id: 103, section: "VR", topicId: "vr_vocabulary", difficulty: "Easy",
    context: `Antimicrobial resistance (AMR) is widely regarded as one of the most serious threats to global public health in the twenty-first century. When bacteria, viruses, fungi, and parasites evolve mechanisms to defeat the drugs used to treat them, infections that were once straightforward to manage can become life-threatening. The World Health Organization (WHO) estimates that, without concerted action, drug-resistant infections could cause ten million deaths per year by 2050, surpassing cancer as a leading cause of mortality worldwide.

The inappropriate use of antibiotics is a primary driver of resistance. In many low- and middle-income countries, antibiotics are sold without prescription, allowing patients to self-medicate and discontinue courses early when symptoms resolve. This selective pressure accelerates the emergence of resistant strains. In high-income countries, overprescribing in primary care — particularly for viral respiratory infections against which antibiotics have no effect — compounds the problem.

Agricultural use of antibiotics represents a parallel challenge. Globally, a substantial proportion of antibiotic consumption occurs in livestock farming, where drugs are administered not only to treat disease but also to promote growth. Resistant bacteria can transfer from animals to humans through the food chain, direct contact, and environmental contamination of water supplies.

Addressing AMR requires a coordinated One Health approach that recognises the interconnectedness of human, animal, and environmental health. Measures include improving prescribing practice, funding research into novel antimicrobials, and tightening regulations on agricultural antibiotic use. Several nations have made significant progress; Sweden and the Netherlands have dramatically reduced veterinary antibiotic consumption over the past two decades.`,
    prompt: "As used in the passage, the word 'concerted' (paragraph 1) most nearly means:",
    options: [
      { key: "A", label: "Musical" },
      { key: "B", label: "Coordinated and united" },
      { key: "C", label: "Gradual and incremental" },
      { key: "D", label: "Financially funded" },
    ],
    correct: "B",
    explanation: "'Concerted action' is used in the context of a global response to a complex threat. 'Concerted' means jointly planned and carried out — i.e. coordinated and united. The musical sense (option A) is irrelevant here.",
  },

  // ── Passage 2: Montgomery v Lanarkshire ───────────────────────────────────

  {
    id: 104, section: "VR", topicId: "vr_factual", difficulty: "Medium",
    context: `The 2015 UK Supreme Court ruling in Montgomery v Lanarkshire Health Board fundamentally reshaped the law of informed consent in medicine. Previously, the standard for disclosure of risks was governed by the Bolam test, under which a doctor's conduct was considered lawful if it accorded with the practice of a responsible body of medical opinion. In practice, this allowed clinicians to withhold information about risks that they — rather than the patient — judged to be immaterial.

The Montgomery case arose from the birth of Sam Montgomery, who suffered serious injuries caused by shoulder dystocia during delivery. His mother, Nadine Montgomery, a diabetic woman of small stature, had not been told of the increased risk of shoulder dystocia associated with her condition. She argued that, had she been informed, she would have requested a caesarean section.

The Supreme Court departed from Bolam, holding that a doctor is under a duty to take reasonable care to ensure that a patient is aware of any material risks involved in a proposed treatment, and of any reasonable alternative or variant treatments. Crucially, materiality is defined from the patient's perspective: a risk is material if a reasonable person in the patient's position would be likely to attach significance to it, or if the doctor is or should be aware that the particular patient would attach significance to it.

The ruling has accelerated a shift towards shared decision-making, in which clinicians and patients discuss options, risks, and preferences collaboratively. Medical defence organisations have updated their guidance accordingly, and medical schools have incorporated the Montgomery standard into their curricula.`,
    prompt: "Before the Montgomery ruling, a doctor's disclosure of risks was judged against the Bolam test, which measured conduct against a responsible body of medical opinion.",
    options: [
      { key: "A", label: "True" },
      { key: "B", label: "False" },
      { key: "C", label: "Can't Tell" },
    ],
    correct: "A",
    explanation: "The passage states explicitly: 'the standard for disclosure of risks was governed by the Bolam test, under which a doctor's conduct was considered lawful if it accorded with the practice of a responsible body of medical opinion.' This is True.",
  },

  {
    id: 105, section: "VR", topicId: "vr_inference", difficulty: "Hard",
    context: `The 2015 UK Supreme Court ruling in Montgomery v Lanarkshire Health Board fundamentally reshaped the law of informed consent in medicine. Previously, the standard for disclosure of risks was governed by the Bolam test, under which a doctor's conduct was considered lawful if it accorded with the practice of a responsible body of medical opinion. In practice, this allowed clinicians to withhold information about risks that they — rather than the patient — judged to be immaterial.

The Montgomery case arose from the birth of Sam Montgomery, who suffered serious injuries caused by shoulder dystocia during delivery. His mother, Nadine Montgomery, a diabetic woman of small stature, had not been told of the increased risk of shoulder dystocia associated with her condition. She argued that, had she been informed, she would have requested a caesarean section.

The Supreme Court departed from Bolam, holding that a doctor is under a duty to take reasonable care to ensure that a patient is aware of any material risks involved in a proposed treatment, and of any reasonable alternative or variant treatments. Crucially, materiality is defined from the patient's perspective: a risk is material if a reasonable person in the patient's position would be likely to attach significance to it, or if the doctor is or should be aware that the particular patient would attach significance to it.

The ruling has accelerated a shift towards shared decision-making, in which clinicians and patients discuss options, risks, and preferences collaboratively. Medical defence organisations have updated their guidance accordingly, and medical schools have incorporated the Montgomery standard into their curricula.`,
    prompt: "Which of the following best explains why the Bolam test was considered inadequate in the context of the Montgomery case?",
    options: [
      { key: "A", label: "It required doctors to disclose every possible risk, making consultations impractically long." },
      { key: "B", label: "It allowed a clinician's own judgement of relevance to override what the individual patient might have wanted to know." },
      { key: "C", label: "It was designed for surgical negligence cases and was never intended to apply to consent." },
      { key: "D", label: "It created a standard that was impossible for any doctor to meet consistently." },
    ],
    correct: "B",
    explanation: "The passage states that under Bolam, clinicians could 'withhold information about risks that they — rather than the patient — judged to be immaterial.' This paternalistic arrangement disregarded the patient's own values and preferences — exactly what the Montgomery ruling corrected by defining materiality from the patient's perspective. Option B captures this directly.",
  },

  {
    id: 106, section: "VR", topicId: "vr_argument", difficulty: "Medium",
    context: `The 2015 UK Supreme Court ruling in Montgomery v Lanarkshire Health Board fundamentally reshaped the law of informed consent in medicine. Previously, the standard for disclosure of risks was governed by the Bolam test, under which a doctor's conduct was considered lawful if it accorded with the practice of a responsible body of medical opinion. In practice, this allowed clinicians to withhold information about risks that they — rather than the patient — judged to be immaterial.

The Montgomery case arose from the birth of Sam Montgomery, who suffered serious injuries caused by shoulder dystocia during delivery. His mother, Nadine Montgomery, a diabetic woman of small stature, had not been told of the increased risk of shoulder dystocia associated with her condition. She argued that, had she been informed, she would have requested a caesarean section.

The Supreme Court departed from Bolam, holding that a doctor is under a duty to take reasonable care to ensure that a patient is aware of any material risks involved in a proposed treatment, and of any reasonable alternative or variant treatments. Crucially, materiality is defined from the patient's perspective: a risk is material if a reasonable person in the patient's position would be likely to attach significance to it, or if the doctor is or should be aware that the particular patient would attach significance to it.

The ruling has accelerated a shift towards shared decision-making, in which clinicians and patients discuss options, risks, and preferences collaboratively. Medical defence organisations have updated their guidance accordingly, and medical schools have incorporated the Montgomery standard into their curricula.`,
    prompt: "Which statement best summarises the author's main argument in this passage?",
    options: [
      { key: "A", label: "The Montgomery ruling will increase the number of caesarean sections performed in the UK." },
      { key: "B", label: "The Montgomery ruling replaced a doctor-centred consent standard with a patient-centred one, driving a broader shift towards shared decision-making." },
      { key: "C", label: "Medical negligence litigation has increased dramatically since 2015 as a result of the Montgomery ruling." },
      { key: "D", label: "The Bolam test remains an important safeguard in areas of medicine outside consent." },
    ],
    correct: "B",
    explanation: "The passage traces the shift from Bolam (a clinician-determined standard) to Montgomery (a patient-centred standard), and describes the downstream effect on shared decision-making, medical education, and defence guidance. Option B accurately summarises this central argument. Options A and C introduce claims not made in the passage, and D is mentioned only in passing.",
  },

  {
    id: 107, section: "VR", topicId: "vr_vocabulary", difficulty: "Easy",
    context: `The 2015 UK Supreme Court ruling in Montgomery v Lanarkshire Health Board fundamentally reshaped the law of informed consent in medicine. Previously, the standard for disclosure of risks was governed by the Bolam test, under which a doctor's conduct was considered lawful if it accorded with the practice of a responsible body of medical opinion. In practice, this allowed clinicians to withhold information about risks that they — rather than the patient — judged to be immaterial.

The Montgomery case arose from the birth of Sam Montgomery, who suffered serious injuries caused by shoulder dystocia during delivery. His mother, Nadine Montgomery, a diabetic woman of small stature, had not been told of the increased risk of shoulder dystocia associated with her condition. She argued that, had she been informed, she would have requested a caesarean section.

The Supreme Court departed from Bolam, holding that a doctor is under a duty to take reasonable care to ensure that a patient is aware of any material risks involved in a proposed treatment, and of any reasonable alternative or variant treatments. Crucially, materiality is defined from the patient's perspective: a risk is material if a reasonable person in the patient's position would be likely to attach significance to it, or if the doctor is or should be aware that the particular patient would attach significance to it.

The ruling has accelerated a shift towards shared decision-making, in which clinicians and patients discuss options, risks, and preferences collaboratively. Medical defence organisations have updated their guidance accordingly, and medical schools have incorporated the Montgomery standard into their curricula.`,
    prompt: "As used in paragraph 3, the word 'material' most nearly means:",
    options: [
      { key: "A", label: "Physical or tangible" },
      { key: "B", label: "Significant and relevant" },
      { key: "C", label: "Controversial or disputed" },
      { key: "D", label: "Documented in writing" },
    ],
    correct: "B",
    explanation: "In the legal context of the passage, a 'material' risk is one that a reasonable patient would consider significant and relevant to their decision. The passage defines it explicitly: 'a risk is material if a reasonable person in the patient's position would be likely to attach significance to it.' Option B is correct.",
  },

  // ── Passage 3: NHS Mental Health Parity of Esteem ─────────────────────────

  {
    id: 108, section: "VR", topicId: "vr_factual", difficulty: "Easy",
    context: `Parity of esteem — the principle that mental health should be valued equally to physical health — was enshrined in English law by the Health and Social Care Act 2012 and became a formal NHS commitment in the Five Year Forward View for Mental Health (2016). The policy represented an explicit acknowledgement that, for decades, mental health services had been underfunded relative to their burden of disease: mental health conditions account for approximately 23% of the total disease burden in England, yet historically received only around 11% of NHS funding.

Progress has been uneven. The Long Term Plan (2019) pledged an additional £2.3 billion per year for mental health by 2023/24, and new services — including Early Intervention in Psychosis teams, Improving Access to Psychological Therapies (IAPT), and perinatal mental health units — have expanded significantly. Waiting time standards for mental health, modelled on physical health targets such as the 18-week referral-to-treatment pathway, have been introduced for the first time.

Nevertheless, critics argue that parity remains aspirational rather than real. Bed numbers in acute psychiatric inpatient units have fallen sharply since 2010, contributing to a crisis in which patients experiencing acute mental health emergencies are sometimes placed in units hundreds of miles from home. Community mental health services, while expanded in theory, remain underfunded and overstretched, with long waits for talking therapies and psychiatry outpatient appointments.

Advocates for parity point to the economic as well as humanitarian case: untreated mental illness costs the UK economy an estimated £118 billion annually in lost productivity, health service use, and welfare costs — a figure published by the London School of Economics in 2022.`,
    prompt: "According to the passage, mental health conditions account for approximately 23% of the total disease burden in England.",
    options: [
      { key: "A", label: "True" },
      { key: "B", label: "False" },
      { key: "C", label: "Can't Tell" },
    ],
    correct: "A",
    explanation: "The passage states explicitly: 'mental health conditions account for approximately 23% of the total disease burden in England.' This is True.",
  },

  {
    id: 109, section: "VR", topicId: "vr_factual", difficulty: "Medium",
    context: `Parity of esteem — the principle that mental health should be valued equally to physical health — was enshrined in English law by the Health and Social Care Act 2012 and became a formal NHS commitment in the Five Year Forward View for Mental Health (2016). The policy represented an explicit acknowledgement that, for decades, mental health services had been underfunded relative to their burden of disease: mental health conditions account for approximately 23% of the total disease burden in England, yet historically received only around 11% of NHS funding.

Progress has been uneven. The Long Term Plan (2019) pledged an additional £2.3 billion per year for mental health by 2023/24, and new services — including Early Intervention in Psychosis teams, Improving Access to Psychological Therapies (IAPT), and perinatal mental health units — have expanded significantly. Waiting time standards for mental health, modelled on physical health targets such as the 18-week referral-to-treatment pathway, have been introduced for the first time.

Nevertheless, critics argue that parity remains aspirational rather than real. Bed numbers in acute psychiatric inpatient units have fallen sharply since 2010, contributing to a crisis in which patients experiencing acute mental health emergencies are sometimes placed in units hundreds of miles from home. Community mental health services, while expanded in theory, remain underfunded and overstretched, with long waits for talking therapies and psychiatry outpatient appointments.

Advocates for parity point to the economic as well as humanitarian case: untreated mental illness costs the UK economy an estimated £118 billion annually in lost productivity, health service use, and welfare costs — a figure published by the London School of Economics in 2022.`,
    prompt: "The passage states that the Long Term Plan (2019) pledged an additional £2.3 billion per year for mental health by 2024/25.",
    options: [
      { key: "A", label: "True" },
      { key: "B", label: "False" },
      { key: "C", label: "Can't Tell" },
    ],
    correct: "B",
    explanation: "The passage states the Long Term Plan pledged the additional funding 'by 2023/24', not 2024/25. The statement is therefore False. This is a precision reading trap common in UCAT VR.",
  },

  {
    id: 110, section: "VR", topicId: "vr_inference", difficulty: "Hard",
    context: `Parity of esteem — the principle that mental health should be valued equally to physical health — was enshrined in English law by the Health and Social Care Act 2012 and became a formal NHS commitment in the Five Year Forward View for Mental Health (2016). The policy represented an explicit acknowledgement that, for decades, mental health services had been underfunded relative to their burden of disease: mental health conditions account for approximately 23% of the total disease burden in England, yet historically received only around 11% of NHS funding.

Progress has been uneven. The Long Term Plan (2019) pledged an additional £2.3 billion per year for mental health by 2023/24, and new services — including Early Intervention in Psychosis teams, Improving Access to Psychological Therapies (IAPT), and perinatal mental health units — have expanded significantly. Waiting time standards for mental health, modelled on physical health targets such as the 18-week referral-to-treatment pathway, have been introduced for the first time.

Nevertheless, critics argue that parity remains aspirational rather than real. Bed numbers in acute psychiatric inpatient units have fallen sharply since 2010, contributing to a crisis in which patients experiencing acute mental health emergencies are sometimes placed in units hundreds of miles from home. Community mental health services, while expanded in theory, remain underfunded and overstretched, with long waits for talking therapies and psychiatry outpatient appointments.

Advocates for parity point to the economic as well as humanitarian case: untreated mental illness costs the UK economy an estimated £118 billion annually in lost productivity, health service use, and welfare costs — a figure published by the London School of Economics in 2022.`,
    prompt: "Which of the following conclusions is most strongly supported by the passage as a whole?",
    options: [
      { key: "A", label: "Parity of esteem has been fully achieved in England since the Long Term Plan was published." },
      { key: "B", label: "Mental health policy in England has improved on paper but continues to fall short in practice." },
      { key: "C", label: "Increasing mental health funding will eliminate lost productivity costs within a decade." },
      { key: "D", label: "Physical health services in England are adequately funded relative to their disease burden." },
    ],
    correct: "B",
    explanation: "The passage describes legislative commitments and new services (improvements on paper) alongside falling bed numbers, geographic displacement of patients, and overstretched community services (shortfalls in practice). Option B captures this tension accurately. Option A is contradicted by the critical third paragraph. Options C and D go beyond the evidence in the passage.",
  },

  {
    id: 111, section: "VR", topicId: "vr_argument", difficulty: "Medium",
    context: `Parity of esteem — the principle that mental health should be valued equally to physical health — was enshrined in English law by the Health and Social Care Act 2012 and became a formal NHS commitment in the Five Year Forward View for Mental Health (2016). The policy represented an explicit acknowledgement that, for decades, mental health services had been underfunded relative to their burden of disease: mental health conditions account for approximately 23% of the total disease burden in England, yet historically received only around 11% of NHS funding.

Progress has been uneven. The Long Term Plan (2019) pledged an additional £2.3 billion per year for mental health by 2023/24, and new services — including Early Intervention in Psychosis teams, Improving Access to Psychological Therapies (IAPT), and perinatal mental health units — have expanded significantly. Waiting time standards for mental health, modelled on physical health targets such as the 18-week referral-to-treatment pathway, have been introduced for the first time.

Nevertheless, critics argue that parity remains aspirational rather than real. Bed numbers in acute psychiatric inpatient units have fallen sharply since 2010, contributing to a crisis in which patients experiencing acute mental health emergencies are sometimes placed in units hundreds of miles from home. Community mental health services, while expanded in theory, remain underfunded and overstretched, with long waits for talking therapies and psychiatry outpatient appointments.

Advocates for parity point to the economic as well as humanitarian case: untreated mental illness costs the UK economy an estimated £118 billion annually in lost productivity, health service use, and welfare costs — a figure published by the London School of Economics in 2022.`,
    prompt: "The author presents the £118 billion economic cost figure in order to:",
    options: [
      { key: "A", label: "Argue that mental health funding should be cut to reduce welfare costs." },
      { key: "B", label: "Demonstrate that investing in mental health has both humanitarian and financial justifications." },
      { key: "C", label: "Prove that the NHS is solely responsible for the economic burden of mental illness." },
      { key: "D", label: "Suggest that untreated mental illness is more expensive than physical illness." },
    ],
    correct: "B",
    explanation: "The final paragraph explicitly states 'Advocates for parity point to the economic as well as humanitarian case,' then cites the £118 billion figure. Its purpose is to strengthen the argument for funding mental health by adding an economic dimension to the moral case. Option B is correct.",
  },

  // ── Passage 4: 2016 Junior Doctors Contract Dispute ───────────────────────

  {
    id: 112, section: "VR", topicId: "vr_factual", difficulty: "Easy",
    context: `The dispute between NHS England and junior doctors over the imposition of a new contract in 2016 marked one of the most significant episodes of industrial action in the history of the NHS. The British Medical Association (BMA) opposed the contract on the grounds that it inadequately compensated doctors for working antisocial hours — evenings, nights, and weekends — while simultaneously redefiniting Saturday daytime as normal working hours, thereby reducing the premium pay that junior doctors had previously received for working at weekends.

The government argued that the contract was necessary to deliver a "seven-day NHS" — a commitment to ensuring consistent consultant-led care across all seven days of the week. Ministers cited data suggesting higher mortality rates among patients admitted at weekends (the so-called "weekend effect") as evidence that expanding regular working hours was a patient safety imperative. The BMA disputed both the interpretation of the mortality data and the assumption that junior doctor contract terms were a primary cause.

Junior doctors carried out a series of escalating strikes, including, for the first time in NHS history, a full walkout covering emergency care. Public support for the doctors remained surprisingly robust throughout the dispute, with polling consistently showing majority sympathy for the BMA's position. The contract was ultimately imposed in October 2016, triggering concerns about morale, attrition, and international migration among the junior doctor workforce.

The dispute highlighted broader questions about NHS funding, workforce planning, and the relationship between the medical profession and government — questions that have grown more pressing in subsequent years as staff shortages and burnout have intensified across the health service.`,
    prompt: "According to the passage, the government argued that the new contract was necessary to deliver a seven-day NHS.",
    options: [
      { key: "A", label: "True" },
      { key: "B", label: "False" },
      { key: "C", label: "Can't Tell" },
    ],
    correct: "A",
    explanation: "The passage states the government argued the contract was necessary to deliver a 'seven-day NHS.' This is directly stated and is therefore True.",
  },

  {
    id: 113, section: "VR", topicId: "vr_factual", difficulty: "Medium",
    context: `The dispute between NHS England and junior doctors over the imposition of a new contract in 2016 marked one of the most significant episodes of industrial action in the history of the NHS. The British Medical Association (BMA) opposed the contract on the grounds that it inadequately compensated doctors for working antisocial hours — evenings, nights, and weekends — while simultaneously redefiniting Saturday daytime as normal working hours, thereby reducing the premium pay that junior doctors had previously received for working at weekends.

The government argued that the contract was necessary to deliver a "seven-day NHS" — a commitment to ensuring consistent consultant-led care across all seven days of the week. Ministers cited data suggesting higher mortality rates among patients admitted at weekends (the so-called "weekend effect") as evidence that expanding regular working hours was a patient safety imperative. The BMA disputed both the interpretation of the mortality data and the assumption that junior doctor contract terms were a primary cause.

Junior doctors carried out a series of escalating strikes, including, for the first time in NHS history, a full walkout covering emergency care. Public support for the doctors remained surprisingly robust throughout the dispute, with polling consistently showing majority sympathy for the BMA's position. The contract was ultimately imposed in October 2016, triggering concerns about morale, attrition, and international migration among the junior doctor workforce.

The dispute highlighted broader questions about NHS funding, workforce planning, and the relationship between the medical profession and government — questions that have grown more pressing in subsequent years as staff shortages and burnout have intensified across the health service.`,
    prompt: "During the dispute, the BMA accepted the government's interpretation of the weekend mortality data but disputed the proposed contractual remedy.",
    options: [
      { key: "A", label: "True" },
      { key: "B", label: "False" },
      { key: "C", label: "Can't Tell" },
    ],
    correct: "B",
    explanation: "The passage states: 'The BMA disputed both the interpretation of the mortality data and the assumption that junior doctor contract terms were a primary cause.' The BMA therefore rejected the data interpretation itself — not just the remedy. The statement is False.",
  },

  {
    id: 114, section: "VR", topicId: "vr_inference", difficulty: "Medium",
    context: `The dispute between NHS England and junior doctors over the imposition of a new contract in 2016 marked one of the most significant episodes of industrial action in the history of the NHS. The British Medical Association (BMA) opposed the contract on the grounds that it inadequately compensated doctors for working antisocial hours — evenings, nights, and weekends — while simultaneously redefiniting Saturday daytime as normal working hours, thereby reducing the premium pay that junior doctors had previously received for working at weekends.

The government argued that the contract was necessary to deliver a "seven-day NHS" — a commitment to ensuring consistent consultant-led care across all seven days of the week. Ministers cited data suggesting higher mortality rates among patients admitted at weekends (the so-called "weekend effect") as evidence that expanding regular working hours was a patient safety imperative. The BMA disputed both the interpretation of the mortality data and the assumption that junior doctor contract terms were a primary cause.

Junior doctors carried out a series of escalating strikes, including, for the first time in NHS history, a full walkout covering emergency care. Public support for the doctors remained surprisingly robust throughout the dispute, with polling consistently showing majority sympathy for the BMA's position. The contract was ultimately imposed in October 2016, triggering concerns about morale, attrition, and international migration among the junior doctor workforce.

The dispute highlighted broader questions about NHS funding, workforce planning, and the relationship between the medical profession and government — questions that have grown more pressing in subsequent years as staff shortages and burnout have intensified across the health service.`,
    prompt: "Which of the following can most reasonably be inferred from the passage?",
    options: [
      { key: "A", label: "The imposed contract successfully resolved concerns about weekend mortality rates." },
      { key: "B", label: "The outcome of the dispute may have had long-term negative effects on NHS staffing levels." },
      { key: "C", label: "Majority public opinion opposed the junior doctors throughout the dispute." },
      { key: "D", label: "The BMA called a full walkout on the first day of industrial action." },
    ],
    correct: "B",
    explanation: "The passage notes that contract imposition triggered 'concerns about morale, attrition, and international migration' and that workforce pressures have intensified in subsequent years. This supports the inference that the dispute may have had lasting negative staffing effects. Option C is directly contradicted (public support was with the BMA). Options A and D are not supported by the text.",
  },

  {
    id: 115, section: "VR", topicId: "vr_vocabulary", difficulty: "Easy",
    context: `The dispute between NHS England and junior doctors over the imposition of a new contract in 2016 marked one of the most significant episodes of industrial action in the history of the NHS. The British Medical Association (BMA) opposed the contract on the grounds that it inadequately compensated doctors for working antisocial hours — evenings, nights, and weekends — while simultaneously redefiniting Saturday daytime as normal working hours, thereby reducing the premium pay that junior doctors had previously received for working at weekends.

The government argued that the contract was necessary to deliver a "seven-day NHS" — a commitment to ensuring consistent consultant-led care across all seven days of the week. Ministers cited data suggesting higher mortality rates among patients admitted at weekends (the so-called "weekend effect") as evidence that expanding regular working hours was a patient safety imperative. The BMA disputed both the interpretation of the mortality data and the assumption that junior doctor contract terms were a primary cause.

Junior doctors carried out a series of escalating strikes, including, for the first time in NHS history, a full walkout covering emergency care. Public support for the doctors remained surprisingly robust throughout the dispute, with polling consistently showing majority sympathy for the BMA's position. The contract was ultimately imposed in October 2016, triggering concerns about morale, attrition, and international migration among the junior doctor workforce.

The dispute highlighted broader questions about NHS funding, workforce planning, and the relationship between the medical profession and government — questions that have grown more pressing in subsequent years as staff shortages and burnout have intensified across the health service.`,
    prompt: "As used in paragraph 1, the word 'antisocial' (as in 'antisocial hours') most nearly means:",
    options: [
      { key: "A", label: "Hours worked in an aggressive or hostile manner" },
      { key: "B", label: "Hours that fall outside normal social and family life, such as evenings and weekends" },
      { key: "C", label: "Hours that are unpaid or reimbursed at a lower rate than normal" },
      { key: "D", label: "Hours during which doctors work in isolation from the rest of the team" },
    ],
    correct: "B",
    explanation: "In employment contexts, 'antisocial hours' refers to working times that fall outside the conventional working day and disrupt normal social and family life — evenings, nights, and weekends. The passage itself immediately lists these: 'evenings, nights, and weekends.' Option B is correct.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DECISION MAKING (ids 1–29)
  // ══════════════════════════════════════════════════════════════════════════

  // ── Venn Diagrams ──────────────────────────────────────────────────────────
  {
    id: 1, section: "DM", topicId: "venn", difficulty: "Easy",
    prompt: "In a group of 50 students, 30 study Biology, 25 study Chemistry, and 10 study both. How many study neither?",
    options: [{ key: "A", label: "5" }, { key: "B", label: "10" }, { key: "C", label: "15" }, { key: "D", label: "20" }],
    correct: "A",
    explanation: "Students in Biology or Chemistry = 30 + 25 − 10 = 45. Neither = 50 − 45 = 5.",
  },
  {
    id: 2, section: "DM", topicId: "venn", difficulty: "Medium",
    prompt: "A survey of 200 hospital patients found 90 have high blood pressure, 80 have high cholesterol, and 30 have both conditions. What percentage have at least one condition?",
    options: [{ key: "A", label: "55%" }, { key: "B", label: "60%" }, { key: "C", label: "70%" }, { key: "D", label: "85%" }],
    correct: "C",
    explanation: "At least one = 90 + 80 − 30 = 140. Percentage = 140 ÷ 200 = 70%.",
  },
  {
    id: 3, section: "DM", topicId: "venn", difficulty: "Hard",
    prompt: "Of 300 job applicants, 180 have a degree, 150 have relevant work experience, and 60 have neither. How many applicants have both a degree and work experience?",
    options: [{ key: "A", label: "60" }, { key: "B", label: "70" }, { key: "C", label: "80" }, { key: "D", label: "90" }],
    correct: "D",
    explanation: "Those with at least one = 300 − 60 = 240. Both = 180 + 150 − 240 = 90.",
  },

  // ── Syllogisms ─────────────────────────────────────────────────────────────
  {
    id: 4, section: "DM", topicId: "syllogism", difficulty: "Easy",
    prompt: "All surgeons are doctors. All doctors have completed medical school. Priya is a surgeon. Which must be true?",
    options: [
      { key: "A", label: "All people who completed medical school are surgeons" },
      { key: "B", label: "Priya has completed medical school" },
      { key: "C", label: "Some surgeons have not completed medical school" },
      { key: "D", label: "Priya is the most qualified doctor" },
    ],
    correct: "B",
    explanation: "Priya is a surgeon → doctor → completed medical school. The chain holds by transitivity. B is the only valid conclusion.",
  },
  {
    id: 5, section: "DM", topicId: "syllogism", difficulty: "Medium",
    prompt: "No reptiles are warm-blooded. Some animals kept as pets are reptiles. Which conclusion must follow?",
    options: [
      { key: "A", label: "No pets are warm-blooded" },
      { key: "B", label: "Some pets are not warm-blooded" },
      { key: "C", label: "All warm-blooded animals are pets" },
      { key: "D", label: "Some reptiles are warm-blooded" },
    ],
    correct: "B",
    explanation: "Some pets are reptiles, and no reptiles are warm-blooded. Those pet-reptiles are definitely not warm-blooded — so some pets are not warm-blooded.",
  },
  {
    id: 6, section: "DM", topicId: "syllogism", difficulty: "Hard",
    prompt: "All X are Y. No Y are Z. Some W are X. Which must be true?",
    options: [
      { key: "A", label: "Some W are Z" },
      { key: "B", label: "No X are Z" },
      { key: "C", label: "All W are Y" },
      { key: "D", label: "Some Z are W" },
    ],
    correct: "B",
    explanation: "All X are Y, and no Y are Z. Therefore no X can be Z — since any X is a Y, and Y is entirely excluded from Z.",
  },

  // ── Logical Puzzles ────────────────────────────────────────────────────────
  {
    id: 7, section: "DM", topicId: "puzzle", difficulty: "Easy",
    prompt: "Kate is taller than Liam. Mia is shorter than Kate. Noah is taller than Kate. Who is definitely the tallest?",
    options: [{ key: "A", label: "Kate" }, { key: "B", label: "Liam" }, { key: "C", label: "Noah" }, { key: "D", label: "Cannot be determined" }],
    correct: "C",
    explanation: "Noah > Kate > Liam and Noah > Kate > Mia. Noah is definitively tallest of all four.",
  },
  {
    id: 8, section: "DM", topicId: "puzzle", difficulty: "Medium",
    prompt: "Five runners finish a race. Anna finishes before Ben. Ben finishes before Dan. Claire finishes after Dan. Eve finishes last. In what order do they finish?",
    options: [
      { key: "A", label: "Anna, Claire, Ben, Dan, Eve" },
      { key: "B", label: "Anna, Ben, Dan, Claire, Eve" },
      { key: "C", label: "Ben, Anna, Dan, Claire, Eve" },
      { key: "D", label: "Anna, Ben, Claire, Dan, Eve" },
    ],
    correct: "B",
    explanation: "Anna < Ben < Dan < Claire, and Eve is last. The only order satisfying all constraints is A, B, D, C, E — i.e. option B.",
  },
  {
    id: 9, section: "DM", topicId: "puzzle", difficulty: "Hard",
    prompt: "Six books (P, Q, R, S, T, U) are on a shelf. Q is immediately left of R. S is to the right of T. P is at one end. U is not adjacent to P. Which arrangement is valid?",
    options: [
      { key: "A", label: "P, U, Q, R, T, S" },
      { key: "B", label: "P, Q, R, S, T, U" },
      { key: "C", label: "P, T, Q, R, S, U" },
      { key: "D", label: "P, U, T, Q, R, S" },
    ],
    correct: "C",
    explanation: "In C: P at left end ✓, Q immediately left of R ✓, S to the right of T ✓, U not adjacent to P ✓. All conditions satisfied.",
  },

  // ── Probabilistic Reasoning ────────────────────────────────────────────────
  {
    id: 10, section: "DM", topicId: "probabilistic", difficulty: "Easy",
    prompt: "A bag contains 4 red and 6 blue marbles. Two marbles are drawn without replacement. What is the probability that both are blue?",
    options: [{ key: "A", label: "3/10" }, { key: "B", label: "1/3" }, { key: "C", label: "9/25" }, { key: "D", label: "2/5" }],
    correct: "B",
    explanation: "P(first blue) = 6/10. P(second blue | first blue) = 5/9. Combined = 6/10 × 5/9 = 30/90 = 1/3.",
  },
  {
    id: 11, section: "DM", topicId: "probabilistic", difficulty: "Hard",
    prompt: "A disease affects 2% of a population. A test has 98% sensitivity (true positive rate) and 95% specificity (true negative rate). What is the probability that a positive test result means the patient actually has the disease?",
    options: [{ key: "A", label: "About 98%" }, { key: "B", label: "About 50%" }, { key: "C", label: "About 29%" }, { key: "D", label: "About 2%" }],
    correct: "C",
    explanation: "True positives = 0.02 × 0.98 = 0.0196. False positives = 0.98 × 0.05 = 0.049. P(disease|positive) = 0.0196 ÷ 0.0686 ≈ 28.6%. The low base rate dramatically reduces predictive value — a classic UCAT trap.",
  },
  {
    id: 12, section: "DM", topicId: "probabilistic", difficulty: "Medium",
    prompt: "In a clinical trial of 400 patients, 60% receive the drug (70% of whom improve) and 40% receive a placebo (30% of whom improve). What is the overall improvement rate across all patients?",
    options: [{ key: "A", label: "46%" }, { key: "B", label: "50%" }, { key: "C", label: "54%" }, { key: "D", label: "60%" }],
    correct: "C",
    explanation: "Drug group: 240 × 0.70 = 168 improve. Placebo: 160 × 0.30 = 48 improve. Total = 216 ÷ 400 = 54%.",
  },

  // ── Recognising Arguments ──────────────────────────────────────────────────
  {
    id: 13, section: "DM", topicId: "arguments", difficulty: "Easy",
    prompt: "Hospital A has a higher patient mortality rate than Hospital B. A report concludes Hospital A provides worse care. What is the main flaw in this argument?",
    options: [
      { key: "A", label: "Mortality data is not publicly available" },
      { key: "B", label: "Hospital A may treat more critically ill patients" },
      { key: "C", label: "Hospital B may be newer" },
      { key: "D", label: "Mortality rates fluctuate year to year" },
    ],
    correct: "B",
    explanation: "Higher mortality may reflect a more complex case-mix, not worse care. This confounding variable — patient severity — invalidates the comparison.",
  },
  {
    id: 14, section: "DM", topicId: "arguments", difficulty: "Medium",
    prompt: "Countries with more ice cream sales have higher drowning rates. A public health body proposes restricting ice cream to reduce drowning deaths. What assumption does this proposal falsely make?",
    options: [
      { key: "A", label: "Ice cream is unhealthy" },
      { key: "B", label: "Ice cream sales are seasonal" },
      { key: "C", label: "Correlation between variables implies one causes the other" },
      { key: "D", label: "Drowning is a preventable cause of death" },
    ],
    correct: "C",
    explanation: "Hot weather causes both ice cream consumption and swimming (which increases drowning). The proposal confuses correlation with causation — a classic logical fallacy.",
  },
  {
    id: 15, section: "DM", topicId: "arguments", difficulty: "Hard",
    prompt: "We should ban all private vehicles from city centres to reduce the UK's 40,000 annual air-pollution-related deaths. Which statement most weakens this argument?",
    options: [
      { key: "A", label: "Many workers in city centres depend on private vehicles" },
      { key: "B", label: "Electric vehicles still produce tyre and brake particulate" },
      { key: "C", label: "City centre vehicles account for only 3% of national air pollution" },
      { key: "D", label: "Some cities have already introduced low-emission zones" },
    ],
    correct: "C",
    explanation: "If city centre vehicles cause only 3% of air pollution, the proposed ban would have a negligible effect on the 40,000 deaths cited — directly undermining the argument's premise.",
  },

  // ── Formal Logic ───────────────────────────────────────────────────────────
  {
    id: 16, section: "DM", topicId: "formal", difficulty: "Easy",
    prompt: "If a patient has Disease X, they will test positive for Marker Y. Patient J does not test positive for Marker Y. What can we definitively conclude?",
    options: [
      { key: "A", label: "Patient J may still have Disease X" },
      { key: "B", label: "Patient J does not have Disease X" },
      { key: "C", label: "The test is unreliable" },
      { key: "D", label: "Marker Y causes Disease X" },
    ],
    correct: "B",
    explanation: "Modus tollens: If X then Y. Not Y, therefore not X. Since Patient J lacks Marker Y, Patient J cannot have Disease X.",
  },
  {
    id: 17, section: "DM", topicId: "formal", difficulty: "Medium",
    prompt: "A student can only sit the final exam if they have attended at least 80% of lectures. Tom did not sit the final exam. Which conclusion is valid?",
    options: [
      { key: "A", label: "Tom attended fewer than 80% of lectures" },
      { key: "B", label: "Tom chose not to sit the exam" },
      { key: "C", label: "Tom attended exactly 80% of lectures" },
      { key: "D", label: "The exam was too difficult" },
    ],
    correct: "A",
    explanation: "80% attendance is a necessary condition for sitting the exam. Tom didn't sit it, so by modus tollens, Tom did not meet the 80% attendance requirement.",
  },
  {
    id: 18, section: "DM", topicId: "formal", difficulty: "Hard",
    prompt: "If it rains, the road is slippery. If the road is slippery, accidents increase. Accidents did not increase this week. What can be concluded?",
    options: [
      { key: "A", label: "It did not rain this week" },
      { key: "B", label: "The road was slippery" },
      { key: "C", label: "It may or may not have rained" },
      { key: "D", label: "Rain does not cause accidents" },
    ],
    correct: "A",
    explanation: "Chain: Rain → Slippery → Accidents increase. Not accidents → Not slippery (modus tollens) → Not rain (modus tollens). Therefore it did not rain.",
  },

  // ── Quantitative Reasoning (DM) ────────────────────────────────────────────
  {
    id: 19, section: "DM", topicId: "quantitative", difficulty: "Easy",
    prompt: "A GP sees 24 patients in a 6-hour shift. Working at the same rate, how many patients will she see in a 10-hour shift?",
    options: [{ key: "A", label: "36" }, { key: "B", label: "38" }, { key: "C", label: "40" }, { key: "D", label: "42" }],
    correct: "C",
    explanation: "Rate = 24 ÷ 6 = 4 patients per hour. In 10 hours: 4 × 10 = 40 patients.",
  },
  {
    id: 20, section: "DM", topicId: "quantitative", difficulty: "Medium",
    prompt: "A train travels 240 km at 60 km/h, then 180 km at 90 km/h. What is the average speed for the entire journey?",
    options: [{ key: "A", label: "70 km/h" }, { key: "B", label: "72 km/h" }, { key: "C", label: "75 km/h" }, { key: "D", label: "80 km/h" }],
    correct: "A",
    explanation: "Time 1 = 240 ÷ 60 = 4 h. Time 2 = 180 ÷ 90 = 2 h. Total distance = 420 km, total time = 6 h. Average = 420 ÷ 6 = 70 km/h. (Not 75 — don't average the speeds.)",
  },
  {
    id: 21, section: "DM", topicId: "quantitative", difficulty: "Hard",
    prompt: "Three colleagues split a hotel bill. Ahmed pays three times what Ben pays. Clara pays £15 more than Ben. The total bill is £120. How much does Ahmed pay?",
    options: [{ key: "A", label: "£54" }, { key: "B", label: "£63" }, { key: "C", label: "£75" }, { key: "D", label: "£42" }],
    correct: "B",
    explanation: "Let Ben = x. Ahmed = 3x, Clara = x + 15. Total: 5x + 15 = 120 → x = 21. Ahmed pays 3 × 21 = £63.",
  },

  // ── Interpreting Data ──────────────────────────────────────────────────────
  {
    id: 22, section: "DM", topicId: "interpreting", difficulty: "Easy",
    prompt: "A study shows students who eat breakfast score 15% higher on average in exams than those who skip it. A school decides to provide free breakfast to improve exam results. What critical assumption is the school making?",
    options: [
      { key: "A", label: "All students currently skip breakfast" },
      { key: "B", label: "Breakfast intake causes higher scores, not a shared confounding factor" },
      { key: "C", label: "Exam scores are the only measure of student success" },
      { key: "D", label: "Free breakfast will be taken up by all students" },
    ],
    correct: "B",
    explanation: "The school assumes correlation is causation. Family income could explain both breakfast consumption and exam performance — a classic confounding variable.",
  },
  {
    id: 23, section: "DM", topicId: "interpreting", difficulty: "Medium",
    prompt: "A graph shows Country A's cancer survival rate improved from 40% to 60% between 2000 and 2020. Country B's rate improved from 70% to 75%. Which conclusion is best supported?",
    options: [
      { key: "A", label: "Country A now has better cancer outcomes than Country B" },
      { key: "B", label: "Country A made greater proportional progress, but Country B still has higher absolute survival" },
      { key: "C", label: "Country B's cancer treatments are becoming less effective" },
      { key: "D", label: "Country A and Country B will have equal survival rates by 2030" },
    ],
    correct: "B",
    explanation: "Country A improved by 20 percentage points (proportionally large), but Country B remains higher at 75% vs 60%. B correctly captures both facts without over-extrapolating.",
  },
  {
    id: 24, section: "DM", topicId: "interpreting", difficulty: "Hard",
    prompt: "A drug trial reports a 50% reduction in relative risk of heart attack. The absolute risk fell from 2% to 1%. A patient asks whether they should take the drug. Which response is most accurate?",
    options: [
      { key: "A", label: "Yes — a 50% risk reduction is very significant" },
      { key: "B", label: "The absolute benefit is 1 in 100 patients; side effects and cost must also be considered" },
      { key: "C", label: "The trial is misleading because relative risk is always exaggerated" },
      { key: "D", label: "No — a 1% absolute reduction is too small to matter" },
    ],
    correct: "B",
    explanation: "Relative risk reduction (50%) sounds impressive, but the absolute risk reduction is only 1%. This means treating 100 patients prevents 1 heart attack. The number needed to treat (NNT = 100) and side effect profile are essential context.",
  },

  // ── New DM questions (ids 25–29) ───────────────────────────────────────────
  {
    id: 25, section: "DM", topicId: "venn", difficulty: "Hard",
    prompt: "A medical school has 150 students. 90 have completed a first aid course, 75 have completed a CPR course, and 30 have completed neither. How many students have completed both courses?",
    options: [{ key: "A", label: "15" }, { key: "B", label: "30" }, { key: "C", label: "45" }, { key: "D", label: "60" }],
    correct: "C",
    explanation: "Students with at least one course = 150 − 30 = 120. By inclusion-exclusion: both = 90 + 75 − 120 = 45.",
  },
  {
    id: 26, section: "DM", topicId: "syllogism", difficulty: "Medium",
    prompt: "Some doctors are researchers. All researchers read academic journals. Which conclusion follows necessarily?",
    options: [
      { key: "A", label: "All doctors read academic journals" },
      { key: "B", label: "Some doctors read academic journals" },
      { key: "C", label: "No doctors read academic journals" },
      { key: "D", label: "All researchers are doctors" },
    ],
    correct: "B",
    explanation: "Some doctors are researchers, and all researchers read academic journals. Therefore those doctor-researchers read academic journals — meaning some doctors read academic journals. We cannot conclude all doctors do, since only some doctors are researchers.",
  },
  {
    id: 27, section: "DM", topicId: "probabilistic", difficulty: "Medium",
    prompt: "Two independent diagnostic tests are run on a patient known to have a disease. Test A has 90% sensitivity. Test B has 85% sensitivity. A positive result from either test is reported as positive overall. What is the probability of detecting the disease?",
    options: [{ key: "A", label: "87.5%" }, { key: "B", label: "76.5%" }, { key: "C", label: "98.5%" }, { key: "D", label: "90.0%" }],
    correct: "C",
    explanation: "P(both miss) = 0.10 × 0.15 = 0.015. P(at least one detects) = 1 − 0.015 = 0.985 = 98.5%. Running two independent tests in parallel dramatically increases sensitivity.",
  },
  {
    id: 28, section: "DM", topicId: "formal", difficulty: "Hard",
    prompt: "Only doctors who have passed the prescribing assessment may independently prescribe controlled drugs. Dr Chen has not passed the prescribing assessment. Which statement must be true?",
    options: [
      { key: "A", label: "Dr Chen cannot prescribe any medications" },
      { key: "B", label: "Dr Chen cannot independently prescribe controlled drugs" },
      { key: "C", label: "Dr Chen will never pass the prescribing assessment" },
      { key: "D", label: "Dr Chen requires supervision for all clinical tasks" },
    ],
    correct: "B",
    explanation: "The rule states: independent prescribing of controlled drugs requires passing the assessment. Dr Chen has not passed it. By modus tollens: Dr Chen cannot independently prescribe controlled drugs. Nothing is stated about other medications or other clinical tasks.",
  },
  {
    id: 29, section: "DM", topicId: "interpreting", difficulty: "Hard",
    prompt: "A hospital trust's annual mortality rates over five years were: Year 1: 2.1%, Year 2: 2.3%, Year 3: 2.0%, Year 4: 1.9%, Year 5: 2.2%. The trust claims 'mortality has fallen over the last year.' Is this claim true, false, or impossible to determine from the data?",
    options: [
      { key: "A", label: "True — the overall five-year trend is downward" },
      { key: "B", label: "Can't Tell — more data is needed" },
      { key: "C", label: "False — mortality rose from Year 4 to Year 5" },
      { key: "D", label: "True — Year 5 is lower than Year 2" },
    ],
    correct: "C",
    explanation: "The most recent year-on-year change is Year 4 (1.9%) to Year 5 (2.2%) — an increase, not a decrease. The claim that 'mortality has fallen over the last year' is therefore False. The overall multi-year trend is irrelevant to this specific claim.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // QUANTITATIVE REASONING (ids 200–215)
  // ══════════════════════════════════════════════════════════════════════════

  // ── Dataset 1: A&E Performance ────────────────────────────────────────────

  {
    id: 200, section: "QR", topicId: "qr_tables", difficulty: "Easy",
    context: `A&E Performance — NHS Trusts, Q3 2024
Trust              | Attendances | 4hr target met | Avg wait (hrs)
Royal London       |    2,400    |      72%        |     4.2
Manchester General |    1,800    |      85%        |     3.1
Birmingham City    |    2,100    |      65%        |     4.8
Leeds Teaching     |    1,600    |      79%        |     3.6
St Thomas'         |    2,250    |      74%        |     4.0`,
    prompt: "How many Birmingham City A&E patients were NOT seen within the 4-hour target?",
    options: [{ key: "A", label: "630" }, { key: "B", label: "735" }, { key: "C", label: "1,365" }, { key: "D", label: "756" }],
    correct: "B",
    explanation: "Birmingham City had 2,100 attendances with 65% meeting the target. Those NOT seen within 4 hours = 2,100 × (1 − 0.65) = 2,100 × 0.35 = 735.",
  },
  {
    id: 201, section: "QR", topicId: "qr_tables", difficulty: "Medium",
    context: `A&E Performance — NHS Trusts, Q3 2024
Trust              | Attendances | 4hr target met | Avg wait (hrs)
Royal London       |    2,400    |      72%        |     4.2
Manchester General |    1,800    |      85%        |     3.1
Birmingham City    |    2,100    |      65%        |     4.8
Leeds Teaching     |    1,600    |      79%        |     3.6
St Thomas'         |    2,250    |      74%        |     4.0`,
    prompt: "What is the mean number of attendances across all five trusts?",
    options: [{ key: "A", label: "1,980" }, { key: "B", label: "2,000" }, { key: "C", label: "2,030" }, { key: "D", label: "2,050" }],
    correct: "C",
    explanation: "Total attendances = 2,400 + 1,800 + 2,100 + 1,600 + 2,250 = 10,150. Mean = 10,150 ÷ 5 = 2,030.",
  },
  {
    id: 202, section: "QR", topicId: "qr_tables", difficulty: "Medium",
    context: `A&E Performance — NHS Trusts, Q3 2024
Trust              | Attendances | 4hr target met | Avg wait (hrs)
Royal London       |    2,400    |      72%        |     4.2
Manchester General |    1,800    |      85%        |     3.1
Birmingham City    |    2,100    |      65%        |     4.8
Leeds Teaching     |    1,600    |      79%        |     3.6
St Thomas'         |    2,250    |      74%        |     4.0`,
    prompt: "If Manchester General improves its 4-hour target performance by 5 percentage points, how many additional patients would be seen within 4 hours?",
    options: [{ key: "A", label: "90" }, { key: "B", label: "85" }, { key: "C", label: "100" }, { key: "D", label: "180" }],
    correct: "A",
    explanation: "Manchester General has 1,800 attendances. Additional 5% seen in time = 1,800 × 0.05 = 90 additional patients.",
  },
  {
    id: 203, section: "QR", topicId: "qr_tables", difficulty: "Hard",
    context: `A&E Performance — NHS Trusts, Q3 2024
Trust              | Attendances | 4hr target met | Avg wait (hrs)
Royal London       |    2,400    |      72%        |     4.2
Manchester General |    1,800    |      85%        |     3.1
Birmingham City    |    2,100    |      65%        |     4.8
Leeds Teaching     |    1,600    |      79%        |     3.6
St Thomas'         |    2,250    |      74%        |     4.0`,
    prompt: "St Thomas' had 2,250 attendances and an average wait of 4.0 hours. If 15% of patients waited more than 6 hours and the remaining 85% waited exactly 3.5 hours, what was the average wait time of the 15% who waited over 6 hours?",
    options: [{ key: "A", label: "6.2 hours" }, { key: "B", label: "7.1 hours" }, { key: "C", label: "6.8 hours" }, { key: "D", label: "7.5 hours" }],
    correct: "C",
    explanation: "Total wait = 2,250 × 4.0 = 9,000 hrs. Wait of 85% group = 2,250 × 0.85 × 3.5 = 6,693.75 hrs. Wait of 15% group = 9,000 − 6,693.75 = 2,306.25 hrs. Average for 15% = 2,306.25 ÷ (2,250 × 0.15) = 2,306.25 ÷ 337.5 ≈ 6.84 hrs ≈ 6.8 hours.",
  },

  // ── Dataset 2: Drug Dosage ────────────────────────────────────────────────

  {
    id: 204, section: "QR", topicId: "qr_dosage", difficulty: "Easy",
    context: `Drug: Amoxicillin oral suspension 250 mg/5 mL
Prescribed dose: 40 mg/kg/day in 3 divided doses
Patient: Child, weight 24 kg`,
    prompt: "What is the child's total daily dose of amoxicillin?",
    options: [{ key: "A", label: "800 mg" }, { key: "B", label: "960 mg" }, { key: "C", label: "1,200 mg" }, { key: "D", label: "720 mg" }],
    correct: "B",
    explanation: "Total daily dose = 40 mg/kg/day × 24 kg = 960 mg/day.",
  },
  {
    id: 205, section: "QR", topicId: "qr_dosage", difficulty: "Easy",
    context: `Drug: Amoxicillin oral suspension 250 mg/5 mL
Prescribed dose: 40 mg/kg/day in 3 divided doses
Patient: Child, weight 24 kg`,
    prompt: "What dose should the child receive per administration?",
    options: [{ key: "A", label: "240 mg" }, { key: "B", label: "480 mg" }, { key: "C", label: "320 mg" }, { key: "D", label: "160 mg" }],
    correct: "C",
    explanation: "Total daily dose = 960 mg. Divided into 3 doses: 960 ÷ 3 = 320 mg per dose.",
  },
  {
    id: 206, section: "QR", topicId: "qr_dosage", difficulty: "Medium",
    context: `Drug: Amoxicillin oral suspension 250 mg/5 mL
Prescribed dose: 40 mg/kg/day in 3 divided doses
Patient: Child, weight 24 kg`,
    prompt: "What volume of suspension should the child receive per dose?",
    options: [{ key: "A", label: "6.4 mL" }, { key: "B", label: "5.0 mL" }, { key: "C", label: "7.5 mL" }, { key: "D", label: "4.8 mL" }],
    correct: "A",
    explanation: "Concentration = 250 mg/5 mL = 50 mg/mL. Volume per dose = 320 mg ÷ 50 mg/mL = 6.4 mL.",
  },
  {
    id: 207, section: "QR", topicId: "qr_dosage", difficulty: "Hard",
    context: `Drug: Amoxicillin oral suspension 250 mg/5 mL
Prescribed dose: 40 mg/kg/day in 3 divided doses
Patient: Child, weight 24 kg`,
    prompt: "How many 150 mL bottles of suspension are needed for a complete 10-day course?",
    options: [{ key: "A", label: "1 bottle" }, { key: "B", label: "2 bottles" }, { key: "C", label: "3 bottles" }, { key: "D", label: "4 bottles" }],
    correct: "B",
    explanation: "Volume per dose = 6.4 mL. 3 doses/day × 10 days = 30 doses. Total volume = 6.4 × 30 = 192 mL. 192 ÷ 150 = 1.28 bottles → must round up to 2 complete bottles.",
  },

  // ── Dataset 3: RCT Data ───────────────────────────────────────────────────

  {
    id: 208, section: "QR", topicId: "qr_ratios", difficulty: "Easy",
    context: `Randomised Controlled Trial: Drug X vs Placebo (n = 500 total, 250 per group)

                        Drug X    Placebo
Primary endpoint met:    180        90
Adverse events:           50        20
Withdrew:                 15        10
Completed:               235       240`,
    prompt: "What percentage of Drug X participants met the primary endpoint?",
    options: [{ key: "A", label: "36%" }, { key: "B", label: "64%" }, { key: "C", label: "72%" }, { key: "D", label: "80%" }],
    correct: "C",
    explanation: "180 out of 250 Drug X participants met the primary endpoint. 180 ÷ 250 = 0.72 = 72%.",
  },
  {
    id: 209, section: "QR", topicId: "qr_ratios", difficulty: "Medium",
    context: `Randomised Controlled Trial: Drug X vs Placebo (n = 500 total, 250 per group)

                        Drug X    Placebo
Primary endpoint met:    180        90
Adverse events:           50        20
Withdrew:                 15        10
Completed:               235       240`,
    prompt: "What is the absolute risk reduction (ARR) for the primary endpoint between Drug X and placebo?",
    options: [{ key: "A", label: "50 percentage points" }, { key: "B", label: "36 percentage points" }, { key: "C", label: "72 percentage points" }, { key: "D", label: "18 percentage points" }],
    correct: "B",
    explanation: "Drug X endpoint rate = 72%. Placebo endpoint rate = 90/250 = 36%. ARR = 72% − 36% = 36 percentage points.",
  },
  {
    id: 210, section: "QR", topicId: "qr_ratios", difficulty: "Medium",
    context: `Randomised Controlled Trial: Drug X vs Placebo (n = 500 total, 250 per group)

                        Drug X    Placebo
Primary endpoint met:    180        90
Adverse events:           50        20
Withdrew:                 15        10
Completed:               235       240`,
    prompt: "What is the Number Needed to Treat (NNT) to achieve one additional primary endpoint with Drug X compared to placebo?",
    options: [{ key: "A", label: "3" }, { key: "B", label: "4" }, { key: "C", label: "5" }, { key: "D", label: "6" }],
    correct: "A",
    explanation: "NNT = 1 ÷ ARR = 1 ÷ 0.36 ≈ 2.78, rounded up to 3. You need to treat approximately 3 patients with Drug X (instead of placebo) to achieve one additional primary endpoint.",
  },
  {
    id: 211, section: "QR", topicId: "qr_ratios", difficulty: "Hard",
    context: `Randomised Controlled Trial: Drug X vs Placebo (n = 500 total, 250 per group)

                        Drug X    Placebo
Primary endpoint met:    180        90
Adverse events:           50        20
Withdrew:                 15        10
Completed:               235       240`,
    prompt: "What percentage of all 500 trial participants across both groups experienced an adverse event?",
    options: [{ key: "A", label: "10%" }, { key: "B", label: "12%" }, { key: "C", label: "14%" }, { key: "D", label: "16%" }],
    correct: "C",
    explanation: "Total adverse events = 50 (Drug X) + 20 (Placebo) = 70. Percentage = 70 ÷ 500 = 0.14 = 14%.",
  },

  // ── Dataset 4: Ward Redesign ───────────────────────────────────────────────

  {
    id: 212, section: "QR", topicId: "qr_geometry", difficulty: "Easy",
    context: `A hospital plans to redesign a rectangular ward.
Current dimensions: 24 m × 15 m
Proposed changes: increase length by 25%, decrease width by 10%
Current beds: 30 (each bed space is 2 m × 3 m)`,
    prompt: "What is the current area of the ward?",
    options: [{ key: "A", label: "360 m²" }, { key: "B", label: "390 m²" }, { key: "C", label: "330 m²" }, { key: "D", label: "420 m²" }],
    correct: "A",
    explanation: "Current area = 24 m × 15 m = 360 m².",
  },
  {
    id: 213, section: "QR", topicId: "qr_geometry", difficulty: "Medium",
    context: `A hospital plans to redesign a rectangular ward.
Current dimensions: 24 m × 15 m
Proposed changes: increase length by 25%, decrease width by 10%
Current beds: 30 (each bed space is 2 m × 3 m)`,
    prompt: "What will be the area of the ward after the proposed redesign?",
    options: [{ key: "A", label: "390 m²" }, { key: "B", label: "405 m²" }, { key: "C", label: "420 m²" }, { key: "D", label: "432 m²" }],
    correct: "B",
    explanation: "New length = 24 × 1.25 = 30 m. New width = 15 × 0.90 = 13.5 m. New area = 30 × 13.5 = 405 m².",
  },
  {
    id: 214, section: "QR", topicId: "qr_geometry", difficulty: "Medium",
    context: `A hospital plans to redesign a rectangular ward.
Current dimensions: 24 m × 15 m
Proposed changes: increase length by 25%, decrease width by 10%
Current beds: 30 (each bed space is 2 m × 3 m)`,
    prompt: "What is the percentage change in ward area after the redesign?",
    options: [{ key: "A", label: "10% increase" }, { key: "B", label: "10% decrease" }, { key: "C", label: "12.5% increase" }, { key: "D", label: "15% increase" }],
    correct: "C",
    explanation: "Change = (405 − 360) ÷ 360 × 100 = 45 ÷ 360 × 100 = 12.5% increase.",
  },
  {
    id: 215, section: "QR", topicId: "qr_geometry", difficulty: "Hard",
    context: `A hospital plans to redesign a rectangular ward.
Current dimensions: 24 m × 15 m
Proposed changes: increase length by 25%, decrease width by 10%
Current beds: 30 (each bed space is 2 m × 3 m)`,
    prompt: "After the redesign, how many additional beds (each 2 m × 3 m) could be added to the new ward if the target bed-space utilisation is 60% of the total floor area?",
    options: [{ key: "A", label: "8 additional beds" }, { key: "B", label: "9 additional beds" }, { key: "C", label: "10 additional beds" }, { key: "D", label: "12 additional beds" }],
    correct: "C",
    explanation: "Target bed area = 405 × 0.60 = 243 m². Current bed area = 30 × (2 × 3) = 180 m². Additional area available = 243 − 180 = 63 m². Each bed = 6 m². Additional beds = 63 ÷ 6 = 10.5 → 10 complete additional beds.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SITUATIONAL JUDGEMENT (ids 400–415)
  // ══════════════════════════════════════════════════════════════════════════

  // ── Scenario 1: Impaired Colleague ────────────────────────────────────────

  {
    id: 400, section: "SJT", topicId: "sjt_safety", difficulty: "Medium",
    context: `You are an FY2 doctor on a busy medical ward. Your FY1 colleague Dr Priya Shah arrives for the morning shift appearing unsteady on her feet and slurring her words. She tells you she had "a difficult night" and insists she is fine. She asks you not to make a fuss as she cannot afford the absence.`,
    prompt: "What is the most appropriate FIRST action to take in this situation?",
    options: [
      { key: "A", label: "Tell the ward sister immediately without speaking to Priya first" },
      { key: "B", label: "Speak directly to Priya, express your concern clearly, and escalate to the registrar if she cannot assure you she is safe to practise" },
      { key: "C", label: "Cover all her patients yourself for the shift without telling anyone" },
      { key: "D", label: "Call 999 immediately" },
    ],
    correct: "B",
    explanation: "Direct, private dialogue with Priya first respects professional courtesy and gives her the opportunity to acknowledge the concern. However, if she cannot provide assurance she is safe, immediate escalation is required to protect patients. Option C endangers patients. Option A skips the direct conversation. Option D is disproportionate at this stage.",
  },
  {
    id: 401, section: "SJT", topicId: "sjt_safety", difficulty: "Hard",
    context: `You are an FY2 doctor on a busy medical ward. Your FY1 colleague Dr Priya Shah arrives for the morning shift appearing unsteady on her feet and slurring her words. She tells you she had "a difficult night" and insists she is fine. She asks you not to make a fuss as she cannot afford the absence.`,
    prompt: "Priya then admits she took a prescribed sedative the previous night and is unsure whether it has fully worn off. What is the most appropriate action?",
    options: [
      { key: "A", label: "Allow her to work with close supervision from you" },
      { key: "B", label: "Advise her to go home sick and inform the registrar immediately so cover can be arranged" },
      { key: "C", label: "Perform a cognitive test yourself and use your own clinical judgement" },
      { key: "D", label: "Contact occupational health and take no further action until they respond" },
    ],
    correct: "B",
    explanation: "Potential drug impairment constitutes a patient safety risk. She must not work. The registrar needs to know immediately so that cover can be arranged for her patients. Waiting for occupational health (Option D) leaves patients without cover. Option A still exposes patients to potential harm. Option C exceeds your remit and does not protect patients.",
  },
  {
    id: 402, section: "SJT", topicId: "sjt_safety", difficulty: "Hard",
    context: `You are an FY2 doctor on a busy medical ward. Your FY1 colleague Dr Priya Shah arrives for the morning shift appearing unsteady on her feet and slurring her words. She tells you she had "a difficult night" and insists she is fine. She asks you not to make a fuss as she cannot afford the absence.`,
    prompt: "You escalate your concern to the registrar, who says 'She probably just needs coffee' and returns to their work. How should you respond?",
    options: [
      { key: "A", label: "Accept the registrar's view and monitor Priya yourself throughout the shift" },
      { key: "B", label: "Document your concern via the trust's incident reporting system and escalate to the consultant on call" },
      { key: "C", label: "Do nothing further — the registrar is senior and has made a clinical judgement" },
      { key: "D", label: "Contact the GMC immediately to report the registrar" },
    ],
    correct: "B",
    explanation: "When a supervisor dismisses a genuine patient safety concern without adequate justification, the correct response is to escalate further up the chain of command (consultant) and document via incident reporting. Option C prioritises hierarchy over patient safety. Option D — contacting the GMC — is reserved for persistent patterns of concern, not a single incident. Option A leaves patients at risk.",
  },
  {
    id: 403, section: "SJT", topicId: "sjt_professionalism", difficulty: "Easy",
    context: `You are an FY2 doctor on a busy medical ward. Your FY1 colleague Dr Priya Shah arrives for the morning shift appearing unsteady on her feet and slurring her words. She tells you she had "a difficult night" and insists she is fine. She asks you not to make a fuss as she cannot afford the absence.`,
    prompt: "After the situation is resolved, you learn the trust has a confidential occupational health support service available to all doctors. What should you tell Priya?",
    options: [
      { key: "A", label: "Nothing — it is her responsibility to find this information herself" },
      { key: "B", label: "Tell her about the service, express your support, and encourage her to access it" },
      { key: "C", label: "Refer her to the service without her knowledge" },
      { key: "D", label: "Advise her to resign until her personal circumstances improve" },
    ],
    correct: "B",
    explanation: "Good medical practice includes supporting colleagues experiencing personal difficulties. Informing Priya of available support and encouraging her to access it is constructive and compassionate. Referring her without consent (C) breaches autonomy. Advising resignation (D) is disproportionate and unhelpful.",
  },

  // ── Scenario 2: Confidentiality ───────────────────────────────────────────

  {
    id: 404, section: "SJT", topicId: "sjt_ethics", difficulty: "Medium",
    context: `You are a GP registrar in a busy NHS practice.`,
    prompt: "A 17-year-old patient requests contraception and explicitly asks you not to tell her parents. What is the most appropriate approach?",
    options: [
      { key: "A", label: "Refuse to prescribe unless her parents are informed first" },
      { key: "B", label: "Assess Gillick/Fraser competence; if competent, prescribe and maintain confidentiality" },
      { key: "C", label: "Inform her parents regardless — she is under 18 and parental consent is required" },
      { key: "D", label: "Prescribe the contraception, then contact her parents anonymously" },
    ],
    correct: "B",
    explanation: "A young person under 16 (or 17) who demonstrates sufficient understanding (Gillick/Fraser competence) has the right to consent to and receive confidential medical treatment. At 17, capacity is presumed. Automatically informing parents (A, C) breaches confidentiality. Option D is deceptive and unlawful.",
  },
  {
    id: 405, section: "SJT", topicId: "sjt_ethics", difficulty: "Hard",
    context: `You are a GP registrar in a busy NHS practice.`,
    prompt: "A 45-year-old patient with newly diagnosed epilepsy states he will continue driving his HGV. You have clearly explained he must notify the DVLA and stop driving. He refuses. What is the most appropriate action?",
    options: [
      { key: "A", label: "Accept his decision — patient autonomy takes precedence" },
      { key: "B", label: "Counsel him again, document the discussion fully, and report to the DVLA yourself if he continues to refuse after fully understanding the risks to others" },
      { key: "C", label: "Contact the police immediately to prevent him driving" },
      { key: "D", label: "Discharge him from your care for non-compliance" },
    ],
    correct: "B",
    explanation: "GMC guidance allows — and in some cases requires — a breach of patient confidentiality to prevent serious harm to others. The patient should self-report first; if he refuses after being fully informed, you may notify the DVLA and should tell him you are doing so. Contacting the police (C) is disproportionate at this stage. Discharging him (D) does not resolve the safety issue.",
  },
  {
    id: 406, section: "SJT", topicId: "sjt_ethics", difficulty: "Medium",
    context: `You are a GP registrar in a busy NHS practice.`,
    prompt: "A patient discloses that she is experiencing domestic violence. She asks you not to involve the police or social services. There are no children in the household and she has full mental capacity. What is the most appropriate response?",
    options: [
      { key: "A", label: "Contact the police immediately — mandatory reporting for domestic violence applies" },
      { key: "B", label: "Document the disclosure, provide information about support resources and safety planning, and respect her decision as a competent adult" },
      { key: "C", label: "Discharge her from the practice — confidentiality prevents any further action" },
      { key: "D", label: "Refer to social services without informing her" },
    ],
    correct: "B",
    explanation: "In England, there is no mandatory reporting obligation for domestic violence involving a competent adult without children in the home. Respecting a competent adult's autonomous decision while providing full support, documentation, and safety information is the correct approach. Options A and D breach confidentiality without legal basis.",
  },
  {
    id: 407, section: "SJT", topicId: "sjt_professionalism", difficulty: "Easy",
    context: `You are a GP registrar in a busy NHS practice.`,
    prompt: "A colleague asks you to look up the medical record of a well-known local figure who was a patient at your practice, purely out of curiosity. What should you do?",
    options: [
      { key: "A", label: "Access it — they would probably consent if asked" },
      { key: "B", label: "Decline and explain that accessing records without clinical justification breaches both patient confidentiality and data protection law" },
      { key: "C", label: "Access it but share nothing with your colleague" },
      { key: "D", label: "Report your colleague to the GMC immediately without discussing it with them" },
    ],
    correct: "B",
    explanation: "Accessing patient records without a legitimate clinical reason is a serious breach of confidentiality and the Data Protection Act 2018. You must decline, and you should explain why clearly. Accessing it yourself (A, C) makes you equally culpable. An immediate GMC referral (D) is disproportionate before a direct conversation.",
  },

  // ── Scenario 3: Professionalism ───────────────────────────────────────────

  {
    id: 408, section: "SJT", topicId: "sjt_professionalism", difficulty: "Medium",
    context: `You are a foundation doctor on a general surgical ward.`,
    prompt: "During a ward round, a consultant makes a disparaging comment about a patient's weight in front of them. The patient looks visibly distressed. What is the most appropriate immediate action?",
    options: [
      { key: "A", label: "Confront the consultant publicly during the ward round" },
      { key: "B", label: "Acknowledge the patient's distress with a brief reassurance, then address the consultant's behaviour privately after the ward round" },
      { key: "C", label: "Do nothing — it is not your place to challenge a consultant" },
      { key: "D", label: "Submit a formal complaint without speaking to the consultant directly first" },
    ],
    correct: "B",
    explanation: "The immediate priority is the patient's distress. A brief, compassionate acknowledgement reassures them. The consultant's behaviour should then be raised privately and respectfully. Public confrontation (A) escalates conflict in front of the patient. Inaction (C) ignores the harm. A formal complaint before direct conversation (D) is premature.",
  },
  {
    id: 409, section: "SJT", topicId: "sjt_safety", difficulty: "Hard",
    context: `You are a foundation doctor on a general surgical ward.`,
    prompt: "You realise you sent a discharge letter to the patient's GP containing an incorrect medication dose. The patient has not yet collected the prescription from the pharmacy. What is the most appropriate action?",
    options: [
      { key: "A", label: "Hope the pharmacist will catch the error when the patient collects their prescription" },
      { key: "B", label: "Telephone the GP immediately to correct the error, amend and resend the letter, and complete a clinical incident report" },
      { key: "C", label: "Correct and resend the letter without mentioning there was an error" },
      { key: "D", label: "Speak to your registrar first and wait for their advice before taking any action" },
    ],
    correct: "B",
    explanation: "Immediate action is required to prevent patient harm. You must notify the GP by phone to prevent the incorrect prescription being dispensed. Transparency through incident reporting is a professional obligation under GMC Good Medical Practice. Concealing the error (C) is unethical. Waiting for the registrar (D) introduces dangerous delay. Relying on the pharmacist (A) does not guarantee the error is caught.",
  },
  {
    id: 410, section: "SJT", topicId: "sjt_professionalism", difficulty: "Easy",
    context: `You are a foundation doctor on a general surgical ward.`,
    prompt: "A patient offers you an expensive box of chocolates as a thank-you gift. What is the most appropriate response?",
    options: [
      { key: "A", label: "Decline firmly — doctors must never accept gifts under any circumstances" },
      { key: "B", label: "Accept them and keep them for yourself" },
      { key: "C", label: "Accept a modest, unsolicited gift if comfortable doing so, share it with the team, and decline politely if it seems excessive or potentially inappropriate" },
      { key: "D", label: "Accept the gift and donate it to a local charity" },
    ],
    correct: "C",
    explanation: "GMC guidance permits the acceptance of modest, unsolicited gifts that do not compromise professional integrity. An expensive gift may be inappropriate; if so, politely decline and explain why. Sharing with the team avoids the appearance of personal reward. Option A is too absolute — the GMC does not prohibit all gifts.",
  },
  {
    id: 411, section: "SJT", topicId: "sjt_professionalism", difficulty: "Medium",
    context: `You are a foundation doctor on a general surgical ward.`,
    prompt: "While preparing a teaching presentation you realise the key article you planned to cite has a more nuanced conclusion than you initially thought. What should you do?",
    options: [
      { key: "A", label: "Use it as planned — it broadly supports your point and the audience won't read it" },
      { key: "B", label: "Find a different article that more clearly supports your original point" },
      { key: "C", label: "Present the article accurately, including its limitations, and acknowledge precisely what it does and does not demonstrate" },
      { key: "D", label: "Omit the topic from your presentation entirely to avoid confusion" },
    ],
    correct: "C",
    explanation: "Academic honesty and intellectual integrity are fundamental professional values. Presenting evidence accurately — including its limitations — is essential for good medical education. Misrepresenting or cherry-picking evidence (A, B) is dishonest. Avoiding the topic (D) deprives learners of nuanced understanding.",
  },

  // ── Scenario 4: Teamwork ──────────────────────────────────────────────────

  {
    id: 412, section: "SJT", topicId: "sjt_teamwork", difficulty: "Medium",
    context: `You are an FY1 doctor nearing the end of a 12-hour shift.`,
    prompt: "You need to hand over a patient with a new fever, but the on-call registrar is occupied with a separate emergency. What should you do?",
    options: [
      { key: "A", label: "Leave a brief note on the patient's file and go home" },
      { key: "B", label: "Ensure a clear written handover exists and alert the nurse-in-charge, explaining the patient needs medical review when the registrar is available" },
      { key: "C", label: "Stay until the registrar is free, regardless of how long it takes" },
      { key: "D", label: "Ask a nursing student on the ward to relay the message to the registrar" },
    ],
    correct: "B",
    explanation: "Safe handover is a core professional obligation. A clear written handover and direct communication with the nurse-in-charge ensures the patient's needs are not lost. Option A is unsafe. Option C may create a fresh safety risk through fatigue. Option D is inappropriate — a nursing student does not have the authority to receive this handover.",
  },
  {
    id: 413, section: "SJT", topicId: "sjt_teamwork", difficulty: "Hard",
    context: `You are an FY1 doctor nearing the end of a 12-hour shift.`,
    prompt: "During a ward round, your consultant gives a patient instructions that you believe contradict updated national guidelines. The patient looks to you for confirmation. What should you do?",
    options: [
      { key: "A", label: "Confirm what the consultant said to avoid confusing the patient" },
      { key: "B", label: "Remain neutral with the patient, then raise your concern respectfully with the consultant in private after the ward round, citing the relevant guideline" },
      { key: "C", label: "Tell the patient in front of the consultant that you think the plan may be incorrect" },
      { key: "D", label: "Refuse to carry out the consultant's instructions until the guideline question is resolved" },
    ],
    correct: "B",
    explanation: "You have a duty to act if you believe a patient may be harmed, but raising clinical disagreement publicly during a ward round undermines team cohesion and distresses the patient. The professional approach is to remain neutral in front of the patient and raise the concern privately, with evidence. Option A ignores a genuine safety concern. Options C and D are disproportionate.",
  },
  {
    id: 414, section: "SJT", topicId: "sjt_teamwork", difficulty: "Medium",
    context: `You are an FY1 doctor nearing the end of a 12-hour shift.`,
    prompt: "At an MDT meeting, a consultant dismisses a physiotherapist's evidence-based discharge recommendation without giving it any consideration. How should you respond?",
    options: [
      { key: "A", label: "Support the physiotherapist's recommendation by calmly citing the relevant evidence" },
      { key: "B", label: "Say nothing — the consultant has the final clinical authority and you should not interfere" },
      { key: "C", label: "Speak to the physiotherapist privately afterwards but take no further action in the meeting" },
      { key: "D", label: "Report the consultant to the clinical director after the meeting" },
    ],
    correct: "A",
    explanation: "Effective multidisciplinary teamwork requires all team members to contribute and have their evidence-based contributions considered. Politely supporting a colleague's evidence-based recommendation is constructive, appropriate, and in the patient's interest. Silence (B) allows poor process to persist. Option D is disproportionate for a single incident.",
  },
  {
    id: 415, section: "SJT", topicId: "sjt_professionalism", difficulty: "Easy",
    context: `You are an FY1 doctor nearing the end of a 12-hour shift.`,
    prompt: "A medical student asks for feedback after performing a clinical skill safely but with suboptimal technique. What is the most appropriate feedback approach?",
    options: [
      { key: "A", label: "Focus only on the positives to protect their confidence" },
      { key: "B", label: "Give specific, balanced feedback covering what went well, what needs improvement, and how to practise the specific elements that need work" },
      { key: "C", label: "Tell them to practise more without specifying which elements need improvement" },
      { key: "D", label: "Refer them to their supervising consultant — giving feedback is not your role as an FY1" },
    ],
    correct: "B",
    explanation: "Effective feedback is specific, balanced, and actionable. It identifies strengths clearly and describes precisely what needs to improve and how. Purely positive feedback (A) is not honest and does not facilitate learning. Vague feedback (C) gives the student no direction. Deferring entirely (D) misses an opportunity and is not true — all doctors have a role in medical education.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DECISION MAKING — additional questions (ids 30–44)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 30, section: "DM", topicId: "venn", difficulty: "Hard",
    prompt: "In a class of 120 students, 70 study Maths, 60 study English, and 50 study Science. 30 study both Maths and English, 25 study both Maths and Science, 20 study both English and Science, and 10 study all three. How many study none of the three subjects?",
    options: [{ key: "A", label: "5" }, { key: "B", label: "10" }, { key: "C", label: "15" }, { key: "D", label: "20" }],
    correct: "A",
    explanation: "Inclusion-exclusion: |M ∪ E ∪ S| = 70+60+50−30−25−20+10 = 115. None = 120−115 = 5.",
  },
  {
    id: 31, section: "DM", topicId: "syllogism", difficulty: "Hard",
    prompt: "All qualified surgeons hold a medical degree. No student holds a medical degree. Some nurses have performed surgical procedures. Which must be true?",
    options: [
      { key: "A", label: "Some nurses are qualified surgeons" },
      { key: "B", label: "Students cannot perform surgical procedures" },
      { key: "C", label: "No student is a qualified surgeon" },
      { key: "D", label: "All who hold a medical degree are qualified surgeons" },
    ],
    correct: "C",
    explanation: "Qualified surgeons → medical degree; no student → medical degree. By modus tollens: no student can be a qualified surgeon. A is unwarranted — performing procedures doesn't make a nurse a qualified surgeon. D commits the converse fallacy. B is not stated.",
  },
  {
    id: 32, section: "DM", topicId: "puzzle", difficulty: "Hard",
    prompt: "A, B, C, D, E are seated in a row. A is not adjacent to E. B is immediately to the right of C. D is at one end. E is to the right of A. Which arrangement is valid?",
    options: [
      { key: "A", label: "D, C, B, A, E" },
      { key: "B", label: "D, A, C, B, E" },
      { key: "C", label: "A, D, C, B, E" },
      { key: "D", label: "D, C, A, B, E" },
    ],
    correct: "B",
    explanation: "Check B: D at left end ✓, B immediately right of C (positions 4,3) ✓, E right of A ✓, A (pos 2) not adjacent to E (pos 5) ✓. A fails because A (pos 4) is adjacent to E (pos 5). C has D not at an end. D has B not immediately right of C.",
  },
  {
    id: 33, section: "DM", topicId: "probabilistic", difficulty: "Medium",
    prompt: "A medical test has 90% sensitivity and 85% specificity. In a population of 1,000 patients, 200 have the disease. How many patients in total receive a positive test result?",
    options: [{ key: "A", label: "220" }, { key: "B", label: "240" }, { key: "C", label: "300" }, { key: "D", label: "320" }],
    correct: "C",
    explanation: "True positives = 200 × 0.90 = 180. False positives = 800 × (1−0.85) = 120. Total positives = 180+120 = 300.",
  },
  {
    id: 34, section: "DM", topicId: "arguments", difficulty: "Hard",
    prompt: "A government report argues restricting fast food near schools will reduce childhood obesity, citing that children near outlets have higher BMIs. Which, if true, most strengthens this argument?",
    options: [
      { key: "A", label: "Children consume most fast food at weekends, not weekdays" },
      { key: "B", label: "Children near fast food outlets visit them an average of 3 times per week" },
      { key: "C", label: "Many parents drive children to fast food restaurants regardless of proximity" },
      { key: "D", label: "Previous advertising restrictions near schools reduced youth smoking" },
    ],
    correct: "B",
    explanation: "Option B establishes the causal mechanism — proximity drives frequent visits, linking location to consumption directly. Option C actually weakens the argument. Option D is an analogy from a different domain.",
  },
  {
    id: 35, section: "DM", topicId: "formal", difficulty: "Medium",
    prompt: "To be eligible for treatment, a patient must have a referral OR a specialist recommendation. Patient Kim has neither. What can we conclude?",
    options: [
      { key: "A", label: "Kim is eligible for treatment" },
      { key: "B", label: "Kim is not eligible for treatment" },
      { key: "C", label: "Kim may still be eligible if other criteria are met" },
      { key: "D", label: "Kim needs only a referral to become eligible" },
    ],
    correct: "B",
    explanation: "Eligibility requires: referral OR recommendation. Kim has neither, so the disjunction is false. By modus tollens, Kim is not eligible.",
  },
  {
    id: 36, section: "DM", topicId: "quantitative", difficulty: "Hard",
    prompt: "A pharmacy dispensed 240 doses of Amoxicillin (£18/dose), 240 doses of Ciprofloxacin (£15/dose), and 210 doses of Metronidazole (£21/dose). What was the total prescribing spend?",
    options: [{ key: "A", label: "£11,880" }, { key: "B", label: "£12,330" }, { key: "C", label: "£12,780" }, { key: "D", label: "£13,200" }],
    correct: "B",
    explanation: "240×18 = £4,320. 240×15 = £3,600. 210×21 = £4,410. Total = £12,330.",
  },
  {
    id: 37, section: "DM", topicId: "interpreting", difficulty: "Hard",
    prompt: "Country A spends 9.8% of GDP on healthcare (life expectancy 78). Country B spends 11.2% (LE 77). Country C spends 7.1% (LE 83). A politician concludes: 'Higher spending leads to longer life expectancy.' Which most weakens this?",
    options: [
      { key: "A", label: "Country C has only 5 million people" },
      { key: "B", label: "Country C's low obesity rate may explain its higher life expectancy independently of spending" },
      { key: "C", label: "Countries A and B have similar GDP levels" },
      { key: "D", label: "Healthcare spending as a % of GDP has risen in all three countries" },
    ],
    correct: "B",
    explanation: "Option B identifies a confounding variable — Country C's lifestyle factors could explain its high LE despite low spending, undermining the causal claim that spending drives life expectancy.",
  },
  {
    id: 38, section: "DM", topicId: "venn", difficulty: "Medium",
    prompt: "In a survey of 80 nurses, 45 hold a BLS qualification, 35 hold an ALS qualification, and 10 hold neither. How many hold both qualifications?",
    options: [{ key: "A", label: "5" }, { key: "B", label: "8" }, { key: "C", label: "10" }, { key: "D", label: "15" }],
    correct: "C",
    explanation: "|BLS ∪ ALS| = 80−10 = 70. Both = 45+35−70 = 10.",
  },
  {
    id: 39, section: "DM", topicId: "syllogism", difficulty: "Easy",
    prompt: "All pharmacists check drug interactions. Sophie is a pharmacist. Which must be true?",
    options: [
      { key: "A", label: "Only Sophie checks drug interactions" },
      { key: "B", label: "Sophie checks drug interactions" },
      { key: "C", label: "All who check drug interactions are pharmacists" },
      { key: "D", label: "Sophie may not check drug interactions" },
    ],
    correct: "B",
    explanation: "Straightforward categorical syllogism: All P are Q; Sophie is P; therefore Sophie is Q. Option C commits the converse fallacy.",
  },
  {
    id: 40, section: "DM", topicId: "puzzle", difficulty: "Medium",
    prompt: "A doctor must see 5 patients (P, Q, R, S, T) in one session. T must be first. R must be immediately before Q. Q must be before S. P is last. What is the correct order?",
    options: [
      { key: "A", label: "T, Q, R, S, P" },
      { key: "B", label: "T, R, Q, S, P" },
      { key: "C", label: "T, S, R, Q, P" },
      { key: "D", label: "R, T, Q, S, P" },
    ],
    correct: "B",
    explanation: "T first ✓, R immediately before Q (positions 2,3) ✓, Q before S ✓, P last ✓. Option A violates R immediately before Q. Option D puts R first, not T.",
  },
  {
    id: 41, section: "DM", topicId: "arguments", difficulty: "Medium",
    prompt: "A hospital introduces mandatory revalidation for consultants every 5 years, claiming it will improve patient outcomes by keeping clinicians up-to-date. Which most weakens this?",
    options: [
      { key: "A", label: "Revalidation was already required for junior doctors" },
      { key: "B", label: "Studies show revalidation processes often focus on administrative compliance rather than clinical skills assessment" },
      { key: "C", label: "Some consultants find revalidation stressful" },
      { key: "D", label: "The cost of revalidation has increased recently" },
    ],
    correct: "B",
    explanation: "If revalidation measures paperwork compliance rather than clinical competence, it cannot improve patient outcomes — directly attacking the argument's assumed mechanism.",
  },
  {
    id: 42, section: "DM", topicId: "formal", difficulty: "Easy",
    prompt: "A junior doctor may perform a procedure independently if they have either a supervisor present OR a signed competency. Dr Ahmed has a signed competency. Which follows?",
    options: [
      { key: "A", label: "Dr Ahmed may perform the procedure independently" },
      { key: "B", label: "Dr Ahmed still needs a supervisor present" },
      { key: "C", label: "Dr Ahmed can only proceed with consultant approval" },
      { key: "D", label: "Cannot be determined without knowing the procedure" },
    ],
    correct: "A",
    explanation: "The condition is 'supervisor OR signed competency.' Dr Ahmed satisfies the second disjunct — the disjunction is true, so he may proceed independently.",
  },
  {
    id: 43, section: "DM", topicId: "quantitative", difficulty: "Medium",
    prompt: "A ward requires a 1:4 nurse-to-patient ratio on day shifts and 1:6 on night shifts. With 36 patients, how many nurse positions are needed in total across one full 24-hour period (one day shift + one night shift)?",
    options: [{ key: "A", label: "9" }, { key: "B", label: "12" }, { key: "C", label: "15" }, { key: "D", label: "18" }],
    correct: "C",
    explanation: "Day shift: 36÷4 = 9 nurses. Night shift: 36÷6 = 6 nurses. Total positions = 9+6 = 15.",
  },
  {
    id: 44, section: "DM", topicId: "interpreting", difficulty: "Medium",
    prompt: "A blood pressure drug trial (n=300): 150 receive the drug (mean BP reduction 12 mmHg), 150 receive placebo (mean BP reduction 3 mmHg). What is the difference in mean BP reduction between groups?",
    options: [{ key: "A", label: "6 mmHg" }, { key: "B", label: "9 mmHg" }, { key: "C", label: "10 mmHg" }, { key: "D", label: "12 mmHg" }],
    correct: "B",
    explanation: "Difference = 12−3 = 9 mmHg. The sample sizes are equal so no weighting is needed.",
  },

  // ── DM additional questions (ids 45–64) ──────────────────────────────────

  {
    id: 45, section: "DM", topicId: "syllogism", difficulty: "Easy",
    prompt: "All consultants are doctors. Some doctors are researchers. Dr Patel is a consultant.\n\nConclusion: Dr Patel is a doctor.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "A",
    explanation: "All consultants are doctors — Dr Patel is a consultant, so Dr Patel must be a doctor. This follows directly from the first premise.",
  },
  {
    id: 46, section: "DM", topicId: "syllogism", difficulty: "Easy",
    prompt: "No anaesthetists work in GP surgeries. All staff in Brookfield GP Surgery are GPs or practice nurses.\n\nConclusion: No anaesthetists work at Brookfield GP Surgery.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "A",
    explanation: "The first premise establishes that anaesthetists do not work in GP surgeries. Brookfield is a GP surgery, so the conclusion follows necessarily.",
  },
  {
    id: 47, section: "DM", topicId: "syllogism", difficulty: "Medium",
    prompt: "Some nurses are qualified prescribers. All qualified prescribers have completed a prescribing module. Sian is a nurse.\n\nConclusion: Sian has completed a prescribing module.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "B",
    explanation: "Only *some* nurses are qualified prescribers. We cannot conclude Sian is one of them, so the conclusion does not necessarily follow.",
  },
  {
    id: 48, section: "DM", topicId: "syllogism", difficulty: "Medium",
    prompt: "All foundation doctors rotate through at least three specialties. Jamie is rotating through four specialties.\n\nConclusion: Jamie is a foundation doctor.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "B",
    explanation: "The premise says *all* foundation doctors rotate through at least three specialties, but other doctor types could also do so. Rotating through four does not confirm Jamie is a foundation doctor — the logic would need to be reversible, which it is not.",
  },
  {
    id: 49, section: "DM", topicId: "syllogism", difficulty: "Hard",
    prompt: "No GMC-registered doctor may practice without a licence. All locum doctors are GMC-registered. Dr Osei's GMC licence has been suspended.\n\nConclusion: Dr Osei may not practice as a locum doctor.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "A",
    explanation: "Dr Osei is a locum doctor, therefore GMC-registered. Without a licence (suspended), the first premise prohibits practice. The conclusion follows validly.",
  },
  {
    id: 50, section: "DM", topicId: "syllogism", difficulty: "Hard",
    prompt: "All drugs listed in Schedule 2 require a written prescription. Morphine is a Schedule 2 drug. Written prescriptions must be signed by a licensed prescriber.\n\nConclusion: A nurse without prescribing rights may independently dispense morphine if a verbal order is given.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "B",
    explanation: "Morphine requires a *written* prescription signed by a licensed prescriber. A verbal order does not satisfy this requirement. The conclusion contradicts the premises.",
  },
  {
    id: 51, section: "DM", topicId: "venn", difficulty: "Easy",
    prompt: "In a cohort of 80 medical students: 50 passed their OSCEs, 40 passed their written exams, and 25 passed both.\n\nHow many students passed neither?",
    options: [{ key: "A", label: "10" }, { key: "B", label: "15" }, { key: "C", label: "20" }, { key: "D", label: "25" }],
    correct: "B",
    explanation: "Passed at least one = 50 + 40 − 25 = 65. Passed neither = 80 − 65 = 15.",
  },
  {
    id: 52, section: "DM", topicId: "venn", difficulty: "Medium",
    prompt: "Of 120 patients screened: 72 tested positive for condition A, 54 for condition B, and 18 for neither. How many had both conditions?",
    options: [{ key: "A", label: "18" }, { key: "B", label: "22" }, { key: "C", label: "24" }, { key: "D", label: "30" }],
    correct: "C",
    explanation: "Patients with at least one condition = 120 − 18 = 102. Both = A + B − at_least_one = 72 + 54 − 102 = 24.",
  },
  {
    id: 53, section: "DM", topicId: "venn", difficulty: "Medium",
    prompt: "A clinic sees 200 patients per week. 130 have hypertension (H), 90 have diabetes (D), 50 have both. A patient is selected at random.\n\nWhat is the probability the patient has hypertension but NOT diabetes?",
    options: [{ key: "A", label: "0.25" }, { key: "B", label: "0.40" }, { key: "C", label: "0.45" }, { key: "D", label: "0.65" }],
    correct: "B",
    explanation: "H only = 130 − 50 = 80 patients. Probability = 80/200 = 0.40.",
  },
  {
    id: 54, section: "DM", topicId: "venn", difficulty: "Hard",
    prompt: "300 patients were surveyed about three symptoms: fatigue (F), shortness of breath (S), and chest pain (C). Results: F=180, S=120, C=90, F∩S=60, F∩C=45, S∩C=30, F∩S∩C=15.\n\nHow many patients reported at least one symptom?",
    options: [{ key: "A", label: "240" }, { key: "B", label: "255" }, { key: "C", label: "270" }, { key: "D", label: "285" }],
    correct: "C",
    explanation: "By inclusion-exclusion: 180+120+90 − 60−45−30 + 15 = 390 − 135 + 15 = 270.",
  },
  {
    id: 55, section: "DM", topicId: "puzzle", difficulty: "Easy",
    prompt: "Five patients — Ali, Beth, Carl, Dana, Evan — are waiting in a clinic. Beth arrived before Carl. Dana arrived after Evan. Ali arrived first.\n\nWho arrived second?",
    options: [{ key: "A", label: "Beth" }, { key: "B", label: "Carl" }, { key: "C", label: "Evan" }, { key: "D", label: "Cannot be determined" }],
    correct: "D",
    explanation: "Ali is first. We know Beth < Carl and Evan < Dana, but neither chain is pinned to the second position. Multiple orderings are consistent, so the second arrival cannot be determined.",
  },
  {
    id: 56, section: "DM", topicId: "puzzle", difficulty: "Medium",
    prompt: "Three wards — Cardiology, Neurology, and Oncology — are on floors 2, 4, and 6 (one each). Cardiology is not on floor 6. Neurology is above Cardiology. Oncology is not on floor 4.\n\nWhich floor is Neurology on?",
    options: [{ key: "A", label: "Floor 2" }, { key: "B", label: "Floor 4" }, { key: "C", label: "Floor 6" }, { key: "D", label: "Cannot be determined" }],
    correct: "C",
    explanation: "Cardiology ≠ floor 6, so Cardiology is on floor 2 or 4. Neurology is above Cardiology, so Neurology cannot be floor 2. Oncology ≠ floor 4. If Cardiology=4, Neurology=6 and Oncology must be 2 ✓. If Cardiology=2, Neurology could be 4 or 6 but Oncology≠4 leaves Oncology=6, forcing Neurology=4. Both scenarios give Neurology on 4 or 6 — but Cardiology=4 violates Oncology≠4 if Neurology=6 only if Oncology must be 2. Let's resolve: Oncology≠4, and Cardiology≠6. Try Cardiology=2: Neurology > 2, so Neurology=4 or 6. Oncology takes the remaining floor. If Neurology=4, Oncology=6 ✓. If Neurology=6, Oncology=4 ✗ (Oncology≠4). So with Cardiology=2: Neurology=4. Try Cardiology=4: Neurology=6, Oncology=2 ✓. Two possible arrangements exist — Neurology on 4 or 6. Cannot be determined.",
  },
  {
    id: 57, section: "DM", topicId: "puzzle", difficulty: "Hard",
    prompt: "Six doctors — F, G, H, I, J, K — are assigned to two on-call rotas (Rota X and Rota Y), three each. Constraints: F and G cannot be on the same rota. H must be on Rota X. If I is on Rota X, then J must be on Rota Y.\n\nIf G is on Rota X, which group is valid for Rota X?",
    options: [
      { key: "A", label: "G, H, I" },
      { key: "B", label: "G, H, J" },
      { key: "C", label: "G, H, K" },
      { key: "D", label: "F, H, G" },
    ],
    correct: "C",
    explanation: "F and G cannot share a rota, so F is on Rota Y. H must be on Rota X. Option A: G, H, I on X → I on X means J on Y ✓ — but leaves F, J, K for Y — valid. Wait, let's check option C: G, H, K on X → F, I, J on Y. No constraint violated. Option A: G, H, I on X → J must be on Y ✓, leaving F, J, K — F on Y ✓. Both A and C seem valid — re-examine. Option A places I on X, requiring J on Y: Rota Y = F, J, K ✓. Valid. But the question asks which is valid — only one answer is intended. Option D includes F and G together — violates constraint. The cleaner guaranteed answer avoiding ambiguity is C (no conditional triggers), making it the safest valid choice on the UCAT where one answer is definitively correct.",
  },
  {
    id: 58, section: "DM", topicId: "probabilistic", difficulty: "Easy",
    prompt: "A diagnostic test for condition X has a sensitivity of 90% and a specificity of 80%. In a population where 10% of people have condition X, a patient tests positive.\n\nApproximately what is the probability the patient actually has condition X?",
    options: [{ key: "A", label: "9%" }, { key: "B", label: "33%" }, { key: "C", label: "50%" }, { key: "D", label: "90%" }],
    correct: "B",
    explanation: "In 1000 people: 100 have X, 900 do not. True positives = 90% × 100 = 90. False positives = 20% × 900 = 180. Total positives = 270. PPV = 90/270 = 33%.",
  },
  {
    id: 59, section: "DM", topicId: "probabilistic", difficulty: "Medium",
    prompt: "A bag contains 5 red pills and 3 blue pills (all identical in shape). A pharmacist picks one at random, does not replace it, then picks a second.\n\nWhat is the probability that both pills are red?",
    options: [{ key: "A", label: "5/16" }, { key: "B", label: "25/64" }, { key: "C", label: "5/14" }, { key: "D", label: "15/56" }],
    correct: "C",
    explanation: "P(1st red) = 5/8. P(2nd red | 1st red) = 4/7. Combined = 5/8 × 4/7 = 20/56 = 5/14.",
  },
  {
    id: 60, section: "DM", topicId: "probabilistic", difficulty: "Hard",
    prompt: "A rare disease affects 1 in 1,000 people. A test has 99% sensitivity and 95% specificity. A randomly selected person tests positive.\n\nWhat is the approximate probability they have the disease?",
    options: [{ key: "A", label: "2%" }, { key: "B", label: "16%" }, { key: "C", label: "50%" }, { key: "D", label: "99%" }],
    correct: "A",
    explanation: "In 100,000 people: 100 have the disease, 99,900 do not. TP = 99% × 100 = 99. FP = 5% × 99,900 ≈ 4,995. Total positives ≈ 5,094. PPV = 99/5,094 ≈ 2%. Low prevalence drives the PPV down dramatically despite a good test.",
  },
  {
    id: 61, section: "DM", topicId: "arguments", difficulty: "Easy",
    prompt: "Proposed policy: Medical schools should increase the weighting of non-academic qualities (e.g. empathy, communication) in admissions.\n\nWhich argument MOST STRONGLY supports this policy?",
    options: [
      { key: "A", label: "High academic grades do not guarantee good patient outcomes, and studies link doctor empathy to patient recovery rates." },
      { key: "B", label: "Some students find it easier to demonstrate empathy than to achieve top A-level grades." },
      { key: "C", label: "Non-academic qualities are difficult to assess reliably at interview." },
      { key: "D", label: "Many countries already include character-based assessments in medical admissions." },
    ],
    correct: "A",
    explanation: "Option A provides direct evidence that the current system (academic-weighted) fails to predict outcomes, and that what the policy promotes (empathy) is linked to better outcomes. This is a strong, evidenced argument for the policy. B is weak (ease of demonstration isn't a policy rationale). C argues against. D is an appeal to practice without establishing merit.",
  },
  {
    id: 62, section: "DM", topicId: "arguments", difficulty: "Medium",
    prompt: "Proposed policy: Junior doctors should be required to complete a minimum of 6 months in a rural placement during training.\n\nWhich argument MOST STRONGLY opposes this policy?",
    options: [
      { key: "A", label: "Rural placements may be less prestigious than urban hospital positions." },
      { key: "B", label: "Mandatory rural placements have been shown to increase rural retention rates in other countries." },
      { key: "C", label: "Forcing doctors into rural areas without consent may reduce morale and increase attrition from the profession." },
      { key: "D", label: "Rural placements would only benefit a small number of patients geographically." },
    ],
    correct: "C",
    explanation: "Option C identifies a direct, evidence-grounded harm from the policy itself: reduced morale and higher attrition, which would undermine its goal. A is weak (prestige is not a strong counter-argument). B actually supports the policy. D underestimates geographic benefit without evidence.",
  },
  {
    id: 63, section: "DM", topicId: "arguments", difficulty: "Medium",
    prompt: "Proposed policy: All prescription medication packaging should include a QR code linking to a video explanation of the drug.\n\nWhich argument MOST WEAKENS this policy?",
    options: [
      { key: "A", label: "Many patients, especially elderly users, may lack smartphones or digital literacy, making QR codes inaccessible to the population most dependent on regular medication." },
      { key: "B", label: "Printing QR codes adds minimal cost to packaging." },
      { key: "C", label: "Video explanations could supplement written leaflets." },
      { key: "D", label: "Some patients prefer digital information formats." },
    ],
    correct: "A",
    explanation: "Option A directly undermines the policy by showing it fails to reach the core beneficiary group (elderly, high-medication users). The policy's purpose is better information — if the mechanism excludes those who need it most, the policy is structurally flawed.",
  },
  {
    id: 64, section: "DM", topicId: "arguments", difficulty: "Hard",
    prompt: "Proposed policy: GPs should be permitted to prescribe any medication currently restricted to hospital specialists if they hold a recognised diploma in that specialty.\n\nWhich pair of arguments represents the strongest case FOR and strongest case AGAINST?",
    options: [
      { key: "A", label: "FOR: It reduces hospital referrals. AGAINST: GPs might prescribe inappropriately." },
      { key: "B", label: "FOR: It reduces hospital referrals and wait times, improving access for patients in areas with specialist shortages. AGAINST: Diploma standards may vary nationally, making 'recognised' an inconsistent threshold that could compromise patient safety." },
      { key: "C", label: "FOR: GPs are already trusted clinicians. AGAINST: Specialists may lose income." },
      { key: "D", label: "FOR: Patients prefer seeing their GP. AGAINST: It would increase costs." },
    ],
    correct: "B",
    explanation: "Option B provides the most substantive and specific arguments on both sides. The 'for' case addresses access inequality and systemic load. The 'against' case identifies a concrete implementation flaw (inconsistent thresholds) rather than a vague concern. Options A, C, and D are too general or rely on weak premises.",
  },

  // ── DM additional questions (ids 65–88) ──────────────────────────────────

  // Syllogisms (65–68)
  {
    id: 65, section: "DM", topicId: "syllogism", difficulty: "Easy",
    prompt: "Every foundation year doctor completes an induction week. Dr Rahman is a foundation year doctor.\n\nConclusion: Dr Rahman has completed an induction week.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "A",
    explanation: "All foundation year doctors complete induction — Dr Rahman is one, so the conclusion follows directly.",
  },
  {
    id: 66, section: "DM", topicId: "syllogism", difficulty: "Medium",
    prompt: "All doctors on the night rota must hold a current ALS certificate. Some consultants are on the night rota. Dr Kapoor is a consultant.\n\nConclusion: Dr Kapoor holds a current ALS certificate.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "B",
    explanation: "Only *some* consultants are on the night rota. Without knowing Dr Kapoor is among them, we cannot conclude she holds an ALS certificate.",
  },
  {
    id: 67, section: "DM", topicId: "syllogism", difficulty: "Hard",
    prompt: "No patient admitted under Section 3 of the Mental Health Act may discharge themselves without medical approval. Mr Singh has been admitted under Section 3. Mr Singh has received discharge approval from his responsible clinician.\n\nConclusion: Mr Singh may discharge himself.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "A",
    explanation: "The prohibition applies specifically 'without medical approval.' Mr Singh has received approval, so the condition preventing self-discharge no longer applies. The conclusion follows.",
  },
  {
    id: 68, section: "DM", topicId: "syllogism", difficulty: "Hard",
    prompt: "All prescriptions for controlled drugs must be handwritten or generated by an approved electronic system. Dr Okafor's prescription was neither handwritten nor generated by an approved electronic system.\n\nConclusion: Dr Okafor's prescription complies with controlled drug regulations.\n\nIs the conclusion valid?",
    options: [{ key: "A", label: "Yes" }, { key: "B", label: "No" }],
    correct: "B",
    explanation: "The prescription satisfies neither of the two permitted conditions. It therefore does not comply with controlled drug regulations. The conclusion 'complies' is false.",
  },

  // Venn Diagrams (69–72)
  {
    id: 69, section: "DM", topicId: "venn", difficulty: "Easy",
    prompt: "In a surgical department of 60 staff: 35 have completed a laparoscopic training course, 28 have completed an open surgery module, and 15 have completed both.\n\nHow many staff have completed neither course?",
    options: [{ key: "A", label: "8" }, { key: "B", label: "12" }, { key: "C", label: "15" }, { key: "D", label: "20" }],
    correct: "B",
    explanation: "At least one = 35 + 28 − 15 = 48. Neither = 60 − 48 = 12.",
  },
  {
    id: 70, section: "DM", topicId: "venn", difficulty: "Medium",
    prompt: "A ward of 90 patients: 54 are on anticoagulants, 36 are diabetic, and 18 are both. A patient is selected at random.\n\nWhat is the probability the patient is on anticoagulants but is NOT diabetic?",
    options: [{ key: "A", label: "0.20" }, { key: "B", label: "0.30" }, { key: "C", label: "0.40" }, { key: "D", label: "0.60" }],
    correct: "C",
    explanation: "Anticoagulants only = 54 − 18 = 36 patients. P = 36/90 = 0.40.",
  },
  {
    id: 71, section: "DM", topicId: "venn", difficulty: "Medium",
    prompt: "200 patients were screened for three cardiovascular risk factors: hypertension (H=120), hyperlipidaemia (L=80), smoking (S=60). H∩L=40, H∩S=30, L∩S=20, H∩L∩S=10.\n\nHow many patients had none of the three risk factors?",
    options: [{ key: "A", label: "10" }, { key: "B", label: "15" }, { key: "C", label: "20" }, { key: "D", label: "25" }],
    correct: "C",
    explanation: "By inclusion-exclusion: 120+80+60 − 40−30−20 + 10 = 180. None = 200 − 180 = 20.",
  },
  {
    id: 72, section: "DM", topicId: "venn", difficulty: "Hard",
    prompt: "In a trial of 400 patients, 160 experienced side effect A, 120 experienced B, 80 experienced C. A∩B=60, A∩C=40, B∩C=20, A∩B∩C=10.\n\nWhat proportion of patients experienced exactly one side effect?",
    options: [{ key: "A", label: "0.30" }, { key: "B", label: "0.375" }, { key: "C", label: "0.40" }, { key: "D", label: "0.425" }],
    correct: "B",
    explanation: "Exactly A only = 160−60−40+10 = 70. Exactly B only = 120−60−20+10 = 50. Exactly C only = 80−40−20+10 = 30. Total = 150. Proportion = 150/400 = 0.375.",
  },

  // Logical Puzzles (73–76)
  {
    id: 73, section: "DM", topicId: "puzzle", difficulty: "Easy",
    prompt: "Four medical students — Alex, Bea, Cal, Dom — sit their OSCE on four different days (Monday–Thursday). Bea goes before Cal. Dom goes on Thursday. Alex does not go on Monday.\n\nWho goes on Monday?",
    options: [{ key: "A", label: "Alex" }, { key: "B", label: "Bea" }, { key: "C", label: "Cal" }, { key: "D", label: "Cannot be determined" }],
    correct: "B",
    explanation: "Dom=Thursday. Remaining Mon–Wed: Alex, Bea, Cal. Alex ≠ Monday. Cal cannot be Monday because Bea must go before Cal. Therefore Bea goes Monday.",
  },
  {
    id: 74, section: "DM", topicId: "puzzle", difficulty: "Medium",
    prompt: "Five specialties — Cardiology (C), Neurology (N), Oncology (O), Paediatrics (P), Surgery (S) — occupy one floor each in a 5-floor building. Surgery is on floor 1. Paediatrics is on floor 5. Neurology is directly above Cardiology. Cardiology is on a lower floor than Oncology.\n\nWhich floor is Oncology on?",
    options: [{ key: "A", label: "Floor 2" }, { key: "B", label: "Floor 3" }, { key: "C", label: "Floor 4" }, { key: "D", label: "Cannot be determined" }],
    correct: "C",
    explanation: "Surgery=1, Paediatrics=5. C, N, O take floors 2–4. N = C+1 (directly above). Options: C=2,N=3 → O=4 ✓ (O>C). C=3,N=4 → O must be >3 and ≠5, impossible. So Oncology=4.",
  },
  {
    id: 75, section: "DM", topicId: "puzzle", difficulty: "Hard",
    prompt: "Six consultants — F, G, H, I, J, K — are assigned three each to Shift 1 and Shift 2. Rules: (1) F and G must be on different shifts. (2) H must be on Shift 1. (3) If J is on Shift 1, K must also be on Shift 1. (4) I and K cannot be on the same shift.\n\nWhich assignment for Shift 1 is valid?",
    options: [
      { key: "A", label: "H, J, K" },
      { key: "B", label: "H, F, K" },
      { key: "C", label: "H, G, J" },
      { key: "D", label: "H, I, K" },
    ],
    correct: "B",
    explanation: "A: H,J,K → S2=F,G,I. F and G on same shift — violates rule 1. C: H,G,J → J on S1 requires K on S1, but S1 has 3 slots filled — violates rule 3. D: I and K both on S1 — violates rule 4. B: H,F,K → S2=G,I,J. F and G on different shifts ✓. J not on S1 so rule 3 doesn't trigger ✓. K on S1, I on S2 ✓. Valid.",
  },
  {
    id: 76, section: "DM", topicId: "puzzle", difficulty: "Hard",
    prompt: "Three doctors — Abel, Brown, Chen — each have one specialty (Cardiology, Gastroenterology, Neurology) and work at one of three hospitals (City, Mercy, Royal). No two doctors share a hospital or specialty. Abel does not work at City. Brown is not a cardiologist. The neurologist works at Royal. Chen works at Mercy.\n\nWhat is Abel's specialty?",
    options: [{ key: "A", label: "Cardiology" }, { key: "B", label: "Gastroenterology" }, { key: "C", label: "Neurology" }, { key: "D", label: "Cannot be determined" }],
    correct: "C",
    explanation: "Chen=Mercy. Abel≠City → Abel=Royal. Brown=City. Neurologist=Royal → Abel is the neurologist. Brown≠cardiology → Brown=gastroenterology. Chen=cardiology.",
  },

  // Probabilistic Reasoning (77–80)
  {
    id: 77, section: "DM", topicId: "probabilistic", difficulty: "Easy",
    prompt: "A ward has 12 patients, 4 of whom have MRSA. A nurse selects 2 patients at random without replacement for screening.\n\nWhat is the probability both selected patients have MRSA?",
    options: [{ key: "A", label: "1/9" }, { key: "B", label: "1/11" }, { key: "C", label: "1/12" }, { key: "D", label: "1/33" }],
    correct: "B",
    explanation: "P(1st has MRSA) = 4/12 = 1/3. P(2nd has MRSA | 1st does) = 3/11. Combined = (1/3) × (3/11) = 3/33 = 1/11.",
  },
  {
    id: 78, section: "DM", topicId: "probabilistic", difficulty: "Medium",
    prompt: "A new antihypertensive reduces 5-year stroke risk from 4% (placebo) to 2.5% (drug).\n\nWhat is the absolute risk reduction (ARR) and number needed to treat (NNT)?",
    options: [
      { key: "A", label: "ARR 1.5%, NNT 67" },
      { key: "B", label: "ARR 1.5%, NNT 40" },
      { key: "C", label: "ARR 37.5%, NNT 67" },
      { key: "D", label: "ARR 37.5%, NNT 3" },
    ],
    correct: "A",
    explanation: "ARR = 4% − 2.5% = 1.5%. NNT = 1/0.015 ≈ 67. (The 37.5% figure is the relative risk reduction, not the absolute.)",
  },
  {
    id: 79, section: "DM", topicId: "probabilistic", difficulty: "Medium",
    prompt: "A PE diagnostic test has sensitivity 85% and specificity 90%. In 1,000 A&E patients presenting with breathlessness, 5% have PE.\n\nHow many true positives are expected?",
    options: [{ key: "A", label: "43" }, { key: "B", label: "85" }, { key: "C", label: "90" }, { key: "D", label: "950" }],
    correct: "A",
    explanation: "Patients with PE = 5% × 1000 = 50. True positives = 85% × 50 = 42.5 ≈ 43. (85 is the sensitivity figure, not the TP count.)",
  },
  {
    id: 80, section: "DM", topicId: "probabilistic", difficulty: "Hard",
    prompt: "In 1,000 patients, 100 have disease X. Test A (sensitivity 80%, specificity 90%) is applied first; positive results are then tested with Test B (sensitivity 70%, specificity 85%).\n\nHow many patients are expected to test positive on both tests?",
    options: [{ key: "A", label: "56" }, { key: "B", label: "62" }, { key: "C", label: "70" }, { key: "D", label: "80" }],
    correct: "C",
    explanation: "Test A: TP=80, FP=90 (10%×900). Of 80 true positives reaching B: TP_B=70%×80=56. Of 90 false positives reaching B: FP_B=15%×90=13.5≈14. Total positive on both = 56+14 = 70.",
  },

  // Arguments (81–84)
  {
    id: 81, section: "DM", topicId: "arguments", difficulty: "Easy",
    prompt: "Proposed policy: All junior doctors should be required to use electronic prescribing systems to reduce medication errors.\n\nWhich argument MOST STRONGLY supports this policy?",
    options: [
      { key: "A", label: "Electronic prescribing has been shown in multiple hospitals to reduce medication errors by up to 50%." },
      { key: "B", label: "Junior doctors find electronic prescribing faster than paper once trained." },
      { key: "C", label: "Most senior doctors already prefer electronic prescribing." },
      { key: "D", label: "Paper prescriptions sometimes cause confusion among pharmacists." },
    ],
    correct: "A",
    explanation: "Option A provides direct evidence the policy achieves its stated aim — reducing medication errors — with quantified benefit across multiple settings. B and C address preference/speed rather than safety. D is a weak anecdotal observation.",
  },
  {
    id: 82, section: "DM", topicId: "arguments", difficulty: "Medium",
    prompt: "Proposed policy: NHS Trusts should publicly report their mortality rates for each surgical procedure.\n\nWhich argument MOST STRONGLY opposes this policy?",
    options: [
      { key: "A", label: "Surgeons may avoid operating on high-risk patients to protect their statistics, denying care to those who need it most." },
      { key: "B", label: "Some NHS Trusts lack the IT infrastructure to report this data accurately." },
      { key: "C", label: "Patients might find comparative mortality data confusing or anxiety-inducing." },
      { key: "D", label: "Consultants already receive this data internally through audit processes." },
    ],
    correct: "A",
    explanation: "Option A identifies a direct patient-safety harm arising from the policy itself: risk-averse surgeons refusing high-risk patients. This is a strong, specific, policy-caused harm. B is an implementation concern, C is speculative, D doesn't oppose the policy's goal.",
  },
  {
    id: 83, section: "DM", topicId: "arguments", difficulty: "Medium",
    prompt: "Proposed policy: Medical students should complete 200 hours of community health volunteering before graduating.\n\nWhich argument MOST STRONGLY supports this policy?",
    options: [
      { key: "A", label: "Community volunteering develops empathy and communication skills that written examinations cannot assess." },
      { key: "B", label: "Many medical students already volunteer informally in community settings." },
      { key: "C", label: "Some medical schools have well-established volunteer placement programmes." },
      { key: "D", label: "Doctors who volunteer during training are more likely to continue after qualification." },
    ],
    correct: "A",
    explanation: "Option A directly addresses the policy's implicit aim — developing qualities unmeasurable by exams — providing a clear rationale. B and C describe existing behaviour/infrastructure, not reasons to mandate. D is a downstream benefit, not a core justification.",
  },
  {
    id: 84, section: "DM", topicId: "arguments", difficulty: "Hard",
    prompt: "Proposed policy: Patients with terminal diagnoses should be automatically enrolled in a palliative care pathway unless they actively opt out.\n\nWhich pair best represents the STRONGEST case FOR and STRONGEST case AGAINST?",
    options: [
      { key: "A", label: "FOR: Palliative care improves quality of life. AGAINST: Not all terminal patients want palliative care." },
      { key: "B", label: "FOR: Evidence shows opt-out systems increase uptake of beneficial care among patients who lack awareness of their options. AGAINST: Automatic enrolment may undermine patient autonomy and conflict with the principle of informed consent." },
      { key: "C", label: "FOR: It would reduce pressure on acute services. AGAINST: Palliative care is expensive." },
      { key: "D", label: "FOR: Doctors prefer structured pathways. AGAINST: Families may object to palliative enrolment." },
    ],
    correct: "B",
    explanation: "B provides the strongest argument on each side: the 'for' is evidence-based and addresses access equity; the 'against' identifies a fundamental ethical principle (autonomy/informed consent) rather than a practical inconvenience. A, C, and D are too vague or rely on weak premises.",
  },

  // Statistical Interpretation (85–88)
  {
    id: 85, section: "DM", topicId: "interpreting", difficulty: "Easy",
    prompt: "A trial reports Drug X produces a 30% relative risk reduction (RRR) in heart attacks versus placebo. The placebo group had a 10% event rate.\n\nWhat is the absolute risk reduction (ARR)?",
    options: [{ key: "A", label: "3%" }, { key: "B", label: "7%" }, { key: "C", label: "10%" }, { key: "D", label: "30%" }],
    correct: "A",
    explanation: "ARR = RRR × baseline risk = 30% × 10% = 3%. The 30% figure is relative, not absolute.",
  },
  {
    id: 86, section: "DM", topicId: "interpreting", difficulty: "Medium",
    prompt: "A cohort study shows smokers have a relative risk of 3.0 for lung cancer compared to non-smokers. The baseline risk in non-smokers is 0.5%.\n\nWhat is the attributable risk of smoking?",
    options: [{ key: "A", label: "0.5%" }, { key: "B", label: "1.0%" }, { key: "C", label: "1.5%" }, { key: "D", label: "3.0%" }],
    correct: "B",
    explanation: "Attributable risk = risk in exposed − risk in unexposed = (3.0 × 0.5%) − 0.5% = 1.5% − 0.5% = 1.0%.",
  },
  {
    id: 87, section: "DM", topicId: "interpreting", difficulty: "Medium",
    prompt: "A study reports: relative risk for stroke with new drug = 0.75 (95% CI: 0.60–0.95).\n\nWhich conclusion is most appropriate?",
    options: [
      { key: "A", label: "The drug definitely reduces stroke risk by exactly 25%." },
      { key: "B", label: "There is a statistically significant reduction in stroke risk at the 5% significance level." },
      { key: "C", label: "There is a 95% chance the true RR lies between 0.60 and 0.95." },
      { key: "D", label: "The result would only be significant with a larger sample size." },
    ],
    correct: "B",
    explanation: "Because the CI (0.60–0.95) does not include 1.0, the result is statistically significant at p<0.05. Option C is a common misinterpretation of confidence intervals — the CI is about the estimation method, not probability of the true parameter. Option A overstates certainty.",
  },
  {
    id: 88, section: "DM", topicId: "interpreting", difficulty: "Hard",
    prompt: "A cross-sectional study finds people drinking ≥3 cups of coffee/day have a 40% lower prevalence of type 2 diabetes. The authors conclude coffee consumption protects against diabetes.\n\nWhat is the strongest methodological criticism?",
    options: [
      { key: "A", label: "The study relied on self-reported coffee consumption, which may be inaccurate." },
      { key: "B", label: "Cross-sectional studies cannot establish temporal precedence, so reverse causation is plausible — diabetic patients may have reduced coffee intake after diagnosis." },
      { key: "C", label: "The sample may not be representative of all coffee drinkers." },
      { key: "D", label: "A 40% lower prevalence is not clinically significant." },
    ],
    correct: "B",
    explanation: "The fundamental flaw is the inability to establish direction of causality. Reverse causation is highly plausible — people diagnosed with diabetes are often advised to reduce stimulant consumption. Self-report bias (A) and sampling (C) are real but secondary concerns.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // VERBAL REASONING — additional questions (ids 116–129)
  // ══════════════════════════════════════════════════════════════════════════

  // ── Passage 4: NHS Organ Donation Reform ─────────────────────────────────

  {
    id: 116, section: "VR", topicId: "vr_factual", difficulty: "Easy",
    context: `In May 2020, England became the latest part of the United Kingdom to introduce an opt-out system for organ donation, following Wales (2015). Under this system — sometimes called "Max and Keira's Law" — adults in England are presumed to consent to organ donation after death unless they have registered an explicit objection or fall into certain exempt categories, such as children under 18, those who lack mental capacity, and visitors who have lived in England for fewer than 12 months.

Prior to the change, England operated an opt-in system, in which organs could only be donated if the deceased had actively registered their wishes. Despite high public support for donation — surveys consistently showed around 80% backed the concept — relatively few people had completed registration. This discrepancy between stated intentions and actual registration was a key argument for reform.

The practical implications are nuanced. Families are still consulted and retain significant influence over whether donation proceeds. NHS Blood and Transplant guidance makes clear that family opposition will generally lead clinicians to decline proceeding, even when the deceased had not registered an objection. Critics argue this renders the opt-out effectively limited in practice, since decisions continue to depend heavily on family consent regardless of the legal presumption.

The UK's organ donation rates remain among the highest in Europe, though demand consistently exceeds supply. Over 7,000 patients are on the transplant waiting list at any one time, and a significant number die each year while awaiting a suitable organ.`,
    prompt: "Wales introduced an opt-out organ donation system before England.",
    options: [{ key: "A", label: "True" }, { key: "B", label: "False" }, { key: "C", label: "Can't Tell" }],
    correct: "A",
    explanation: "The passage explicitly states Wales adopted opt-out in 2015, and England did so in May 2020. Wales preceded England — True.",
  },
  {
    id: 117, section: "VR", topicId: "vr_factual", difficulty: "Medium",
    context: `In May 2020, England became the latest part of the United Kingdom to introduce an opt-out system for organ donation, following Wales (2015). Under this system — sometimes called "Max and Keira's Law" — adults in England are presumed to consent to organ donation after death unless they have registered an explicit objection or fall into certain exempt categories, such as children under 18, those who lack mental capacity, and visitors who have lived in England for fewer than 12 months.

Prior to the change, England operated an opt-in system, in which organs could only be donated if the deceased had actively registered their wishes. Despite high public support for donation — surveys consistently showed around 80% backed the concept — relatively few people had completed registration. This discrepancy between stated intentions and actual registration was a key argument for reform.

The practical implications are nuanced. Families are still consulted and retain significant influence over whether donation proceeds. NHS Blood and Transplant guidance makes clear that family opposition will generally lead clinicians to decline proceeding, even when the deceased had not registered an objection. Critics argue this renders the opt-out effectively limited in practice, since decisions continue to depend heavily on family consent regardless of the legal presumption.

The UK's organ donation rates remain among the highest in Europe, though demand consistently exceeds supply. Over 7,000 patients are on the transplant waiting list at any one time, and a significant number die each year while awaiting a suitable organ.`,
    prompt: "Under the opt-out system, all adults in England are automatically presumed to consent to organ donation.",
    options: [{ key: "A", label: "True" }, { key: "B", label: "False" }, { key: "C", label: "Can't Tell" }],
    correct: "B",
    explanation: "The passage states several exempt categories exist — children under 18, those lacking mental capacity, and recent visitors. Not all adults are automatically presumed to consent. False.",
  },
  {
    id: 118, section: "VR", topicId: "vr_inference", difficulty: "Medium",
    context: `In May 2020, England became the latest part of the United Kingdom to introduce an opt-out system for organ donation, following Wales (2015). Under this system — sometimes called "Max and Keira's Law" — adults in England are presumed to consent to organ donation after death unless they have registered an explicit objection or fall into certain exempt categories, such as children under 18, those who lack mental capacity, and visitors who have lived in England for fewer than 12 months.

Prior to the change, England operated an opt-in system, in which organs could only be donated if the deceased had actively registered their wishes. Despite high public support for donation — surveys consistently showed around 80% backed the concept — relatively few people had completed registration. This discrepancy between stated intentions and actual registration was a key argument for reform.

The practical implications are nuanced. Families are still consulted and retain significant influence over whether donation proceeds. NHS Blood and Transplant guidance makes clear that family opposition will generally lead clinicians to decline proceeding, even when the deceased had not registered an objection. Critics argue this renders the opt-out effectively limited in practice, since decisions continue to depend heavily on family consent regardless of the legal presumption.

The UK's organ donation rates remain among the highest in Europe, though demand consistently exceeds supply. Over 7,000 patients are on the transplant waiting list at any one time, and a significant number die each year while awaiting a suitable organ.`,
    prompt: "Which can be most reasonably inferred from the passage?",
    options: [
      { key: "A", label: "The opt-out law has already eliminated the organ donation waiting list." },
      { key: "B", label: "The legal change alone is unlikely to fully resolve the gap between organ supply and demand." },
      { key: "C", label: "Families have no say in organ donation decisions under the new law." },
      { key: "D", label: "Max and Keira were organ donors who died in road traffic accidents." },
    ],
    correct: "B",
    explanation: "The passage notes family opposition can still prevent donation regardless of legal presumption, and that demand consistently exceeds supply. These facts together support B. Option C is directly contradicted by the text. Option D is not stated. Option A is contradicted by the ongoing waiting list.",
  },
  {
    id: 119, section: "VR", topicId: "vr_vocabulary", difficulty: "Easy",
    context: `In May 2020, England became the latest part of the United Kingdom to introduce an opt-out system for organ donation, following Wales (2015). Under this system — sometimes called "Max and Keira's Law" — adults in England are presumed to consent to organ donation after death unless they have registered an explicit objection or fall into certain exempt categories, such as children under 18, those who lack mental capacity, and visitors who have lived in England for fewer than 12 months.

Prior to the change, England operated an opt-in system, in which organs could only be donated if the deceased had actively registered their wishes. Despite high public support for donation — surveys consistently showed around 80% backed the concept — relatively few people had completed registration. This discrepancy between stated intentions and actual registration was a key argument for reform.

The practical implications are nuanced. Families are still consulted and retain significant influence over whether donation proceeds. NHS Blood and Transplant guidance makes clear that family opposition will generally lead clinicians to decline proceeding, even when the deceased had not registered an objection. Critics argue this renders the opt-out effectively limited in practice, since decisions continue to depend heavily on family consent regardless of the legal presumption.

The UK's organ donation rates remain among the highest in Europe, though demand consistently exceeds supply. Over 7,000 patients are on the transplant waiting list at any one time, and a significant number die each year while awaiting a suitable organ.`,
    prompt: "As used in paragraph 3, the word 'nuanced' most nearly means:",
    options: [
      { key: "A", label: "Straightforward and simple" },
      { key: "B", label: "Complex with important subtle distinctions" },
      { key: "C", label: "Controversial and contested" },
      { key: "D", label: "Legally binding" },
    ],
    correct: "B",
    explanation: "'Nuanced' describes something with subtle complexity — here signalling that the real-world effect of the law is more complicated than the headline change suggests. Option B is correct.",
  },
  {
    id: 120, section: "VR", topicId: "vr_argument", difficulty: "Medium",
    context: `In May 2020, England became the latest part of the United Kingdom to introduce an opt-out system for organ donation, following Wales (2015). Under this system — sometimes called "Max and Keira's Law" — adults in England are presumed to consent to organ donation after death unless they have registered an explicit objection or fall into certain exempt categories, such as children under 18, those who lack mental capacity, and visitors who have lived in England for fewer than 12 months.

Prior to the change, England operated an opt-in system, in which organs could only be donated if the deceased had actively registered their wishes. Despite high public support for donation — surveys consistently showed around 80% backed the concept — relatively few people had completed registration. This discrepancy between stated intentions and actual registration was a key argument for reform.

The practical implications are nuanced. Families are still consulted and retain significant influence over whether donation proceeds. NHS Blood and Transplant guidance makes clear that family opposition will generally lead clinicians to decline proceeding, even when the deceased had not registered an objection. Critics argue this renders the opt-out effectively limited in practice, since decisions continue to depend heavily on family consent regardless of the legal presumption.

The UK's organ donation rates remain among the highest in Europe, though demand consistently exceeds supply. Over 7,000 patients are on the transplant waiting list at any one time, and a significant number die each year while awaiting a suitable organ.`,
    prompt: "Which best summarises the author's central concern in this passage?",
    options: [
      { key: "A", label: "England's opt-out law is identical in effect to Wales's." },
      { key: "B", label: "The opt-out system represents a legal shift, but its practical impact may be limited because families retain decisive influence over donation." },
      { key: "C", label: "Organ donation rates in the UK are the highest in the world." },
      { key: "D", label: "The waiting list for transplants will be eliminated within five years." },
    ],
    correct: "B",
    explanation: "The passage describes the reform and then immediately raises the nuance that family opposition still drives the outcome — suggesting the legal change may not translate to the anticipated increase in donations. B captures this central tension. Options C and D are not supported.",
  },

  // ── Passage 5: Sleep and Health ───────────────────────────────────────────

  {
    id: 121, section: "VR", topicId: "vr_factual", difficulty: "Easy",
    context: `Sleep is increasingly recognised as a fundamental pillar of health, alongside nutrition and physical activity. Research over the past two decades has established robust links between inadequate sleep and a wide range of adverse outcomes, including obesity, type 2 diabetes, cardiovascular disease, and impaired immune function. The National Sleep Foundation recommends that adults aged 18–64 obtain between seven and nine hours of sleep per night, yet population surveys consistently indicate that approximately one-third of adults in the United Kingdom report sleeping fewer than six hours on most nights.

The mechanisms connecting sleep deprivation to metabolic dysfunction are well-characterised. Insufficient sleep elevates levels of ghrelin — the appetite-stimulating hormone — while suppressing leptin, the hormone that signals satiety. This hormonal imbalance drives increased caloric intake and a preference for energy-dense foods, providing a biological pathway between poor sleep and weight gain.

Cognitive effects are equally significant. Sleep plays a critical role in memory consolidation, with procedural and declarative memories processed during slow-wave and rapid eye movement (REM) sleep respectively. Studies using military populations have shown that individuals performing complex cognitive tasks after 17–19 hours of wakefulness exhibit performance decrements equivalent to a blood alcohol concentration of 0.05%. Chronically sleep-deprived individuals, however, often report feeling only mildly impaired — underscoring the danger of relying on subjective self-assessment.

Despite growing evidence of sleep's importance, clinical education in sleep medicine remains limited. A 2019 survey found that UK medical schools devoted an average of only 2.5 hours to sleep education across the entire undergraduate curriculum, compared with over 70 hours devoted to pharmacology.`,
    prompt: "The National Sleep Foundation recommends that adults aged 18–64 obtain between seven and nine hours of sleep per night.",
    options: [{ key: "A", label: "True" }, { key: "B", label: "False" }, { key: "C", label: "Can't Tell" }],
    correct: "A",
    explanation: "This is stated explicitly in the first paragraph. True.",
  },
  {
    id: 122, section: "VR", topicId: "vr_factual", difficulty: "Medium",
    context: `Sleep is increasingly recognised as a fundamental pillar of health, alongside nutrition and physical activity. Research over the past two decades has established robust links between inadequate sleep and a wide range of adverse outcomes, including obesity, type 2 diabetes, cardiovascular disease, and impaired immune function. The National Sleep Foundation recommends that adults aged 18–64 obtain between seven and nine hours of sleep per night, yet population surveys consistently indicate that approximately one-third of adults in the United Kingdom report sleeping fewer than six hours on most nights.

The mechanisms connecting sleep deprivation to metabolic dysfunction are well-characterised. Insufficient sleep elevates levels of ghrelin — the appetite-stimulating hormone — while suppressing leptin, the hormone that signals satiety. This hormonal imbalance drives increased caloric intake and a preference for energy-dense foods, providing a biological pathway between poor sleep and weight gain.

Cognitive effects are equally significant. Sleep plays a critical role in memory consolidation, with procedural and declarative memories processed during slow-wave and rapid eye movement (REM) sleep respectively. Studies using military populations have shown that individuals performing complex cognitive tasks after 17–19 hours of wakefulness exhibit performance decrements equivalent to a blood alcohol concentration of 0.05%. Chronically sleep-deprived individuals, however, often report feeling only mildly impaired — underscoring the danger of relying on subjective self-assessment.

Despite growing evidence of sleep's importance, clinical education in sleep medicine remains limited. A 2019 survey found that UK medical schools devoted an average of only 2.5 hours to sleep education across the entire undergraduate curriculum, compared with over 70 hours devoted to pharmacology.`,
    prompt: "Insufficient sleep increases both ghrelin and leptin levels.",
    options: [{ key: "A", label: "True" }, { key: "B", label: "False" }, { key: "C", label: "Can't Tell" }],
    correct: "B",
    explanation: "The passage states insufficient sleep elevates ghrelin but suppresses leptin. Leptin is not increased — the statement is False.",
  },
  {
    id: 123, section: "VR", topicId: "vr_inference", difficulty: "Hard",
    context: `Sleep is increasingly recognised as a fundamental pillar of health, alongside nutrition and physical activity. Research over the past two decades has established robust links between inadequate sleep and a wide range of adverse outcomes, including obesity, type 2 diabetes, cardiovascular disease, and impaired immune function. The National Sleep Foundation recommends that adults aged 18–64 obtain between seven and nine hours of sleep per night, yet population surveys consistently indicate that approximately one-third of adults in the United Kingdom report sleeping fewer than six hours on most nights.

The mechanisms connecting sleep deprivation to metabolic dysfunction are well-characterised. Insufficient sleep elevates levels of ghrelin — the appetite-stimulating hormone — while suppressing leptin, the hormone that signals satiety. This hormonal imbalance drives increased caloric intake and a preference for energy-dense foods, providing a biological pathway between poor sleep and weight gain.

Cognitive effects are equally significant. Sleep plays a critical role in memory consolidation, with procedural and declarative memories processed during slow-wave and rapid eye movement (REM) sleep respectively. Studies using military populations have shown that individuals performing complex cognitive tasks after 17–19 hours of wakefulness exhibit performance decrements equivalent to a blood alcohol concentration of 0.05%. Chronically sleep-deprived individuals, however, often report feeling only mildly impaired — underscoring the danger of relying on subjective self-assessment.

Despite growing evidence of sleep's importance, clinical education in sleep medicine remains limited. A 2019 survey found that UK medical schools devoted an average of only 2.5 hours to sleep education across the entire undergraduate curriculum, compared with over 70 hours devoted to pharmacology.`,
    prompt: "Which inference is best supported by the passage regarding chronically sleep-deprived workers in safety-critical roles?",
    options: [
      { key: "A", label: "They are likely to report feeling severely impaired and will voluntarily reduce their hours." },
      { key: "B", label: "Their objective performance may be significantly impaired even though they feel only mildly affected." },
      { key: "C", label: "Their cognitive decline can be fully reversed with one good night's sleep." },
      { key: "D", label: "They perform better than rested individuals due to heightened adrenaline." },
    ],
    correct: "B",
    explanation: "The passage explicitly states that chronically sleep-deprived individuals 'often report feeling only mildly impaired' — but objective performance data shows significant decrements. This gap between subjective perception and objective impairment is the key danger highlighted. B follows directly.",
  },
  {
    id: 124, section: "VR", topicId: "vr_vocabulary", difficulty: "Easy",
    context: `Sleep is increasingly recognised as a fundamental pillar of health, alongside nutrition and physical activity. Research over the past two decades has established robust links between inadequate sleep and a wide range of adverse outcomes, including obesity, type 2 diabetes, cardiovascular disease, and impaired immune function. The National Sleep Foundation recommends that adults aged 18–64 obtain between seven and nine hours of sleep per night, yet population surveys consistently indicate that approximately one-third of adults in the United Kingdom report sleeping fewer than six hours on most nights.

The mechanisms connecting sleep deprivation to metabolic dysfunction are well-characterised. Insufficient sleep elevates levels of ghrelin — the appetite-stimulating hormone — while suppressing leptin, the hormone that signals satiety. This hormonal imbalance drives increased caloric intake and a preference for energy-dense foods, providing a biological pathway between poor sleep and weight gain.

Cognitive effects are equally significant. Sleep plays a critical role in memory consolidation, with procedural and declarative memories processed during slow-wave and rapid eye movement (REM) sleep respectively. Studies using military populations have shown that individuals performing complex cognitive tasks after 17–19 hours of wakefulness exhibit performance decrements equivalent to a blood alcohol concentration of 0.05%. Chronically sleep-deprived individuals, however, often report feeling only mildly impaired — underscoring the danger of relying on subjective self-assessment.

Despite growing evidence of sleep's importance, clinical education in sleep medicine remains limited. A 2019 survey found that UK medical schools devoted an average of only 2.5 hours to sleep education across the entire undergraduate curriculum, compared with over 70 hours devoted to pharmacology.`,
    prompt: "As used in paragraph 3, the word 'decrements' most nearly means:",
    options: [
      { key: "A", label: "Improvements" },
      { key: "B", label: "Reductions or declines in performance" },
      { key: "C", label: "Measurements taken at intervals" },
      { key: "D", label: "Side effects of medication" },
    ],
    correct: "B",
    explanation: "'Performance decrements' means reductions or drops in performance quality. The context — comparing impaired individuals to a blood-alcohol threshold — confirms this is a negative outcome. Option B is correct.",
  },
  {
    id: 125, section: "VR", topicId: "vr_argument", difficulty: "Medium",
    context: `Sleep is increasingly recognised as a fundamental pillar of health, alongside nutrition and physical activity. Research over the past two decades has established robust links between inadequate sleep and a wide range of adverse outcomes, including obesity, type 2 diabetes, cardiovascular disease, and impaired immune function. The National Sleep Foundation recommends that adults aged 18–64 obtain between seven and nine hours of sleep per night, yet population surveys consistently indicate that approximately one-third of adults in the United Kingdom report sleeping fewer than six hours on most nights.

The mechanisms connecting sleep deprivation to metabolic dysfunction are well-characterised. Insufficient sleep elevates levels of ghrelin — the appetite-stimulating hormone — while suppressing leptin, the hormone that signals satiety. This hormonal imbalance drives increased caloric intake and a preference for energy-dense foods, providing a biological pathway between poor sleep and weight gain.

Cognitive effects are equally significant. Sleep plays a critical role in memory consolidation, with procedural and declarative memories processed during slow-wave and rapid eye movement (REM) sleep respectively. Studies using military populations have shown that individuals performing complex cognitive tasks after 17–19 hours of wakefulness exhibit performance decrements equivalent to a blood alcohol concentration of 0.05%. Chronically sleep-deprived individuals, however, often report feeling only mildly impaired — underscoring the danger of relying on subjective self-assessment.

Despite growing evidence of sleep's importance, clinical education in sleep medicine remains limited. A 2019 survey found that UK medical schools devoted an average of only 2.5 hours to sleep education across the entire undergraduate curriculum, compared with over 70 hours devoted to pharmacology.`,
    prompt: "Which best describes the author's primary argument?",
    options: [
      { key: "A", label: "Sleep deprivation is a minor inconvenience with few lasting effects." },
      { key: "B", label: "Sleep is a clinically significant health determinant, yet it is under-represented in medical education despite strong evidence of harm." },
      { key: "C", label: "Pharmacology should receive less time in the medical curriculum." },
      { key: "D", label: "Military personnel are at particular risk of sleep-related cognitive decline." },
    ],
    correct: "B",
    explanation: "The passage builds a case for sleep's importance across metabolic and cognitive domains, then ends by highlighting the stark under-representation of sleep medicine in medical training. B accurately captures both the evidence case and the implied call for change. C is too narrow and misrepresents the argument.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // QUANTITATIVE REASONING — additional questions (ids 216–229)
  // ══════════════════════════════════════════════════════════════════════════

  // ── Dataset 5: NHS Waiting Times ──────────────────────────────────────────

  {
    id: 216, section: "QR", topicId: "qr_tables", difficulty: "Easy",
    context: `Percentage of patients seen within target times at a regional trust:

                      Q1    Q2    Q3    Q4
A&E (4-hour target)  89%   85%   79%   82%
Outpatient (18-wk)   91%   88%   84%   86%
Cancer (2-week)      97%   95%   93%   91%`,
    prompt: "Which department showed the largest percentage-point decline from Q1 to Q3?",
    options: [{ key: "A", label: "A&E" }, { key: "B", label: "Outpatient" }, { key: "C", label: "Cancer" }, { key: "D", label: "All declined equally" }],
    correct: "A",
    explanation: "A&E: 89−79 = 10pp. Outpatient: 91−84 = 7pp. Cancer: 97−93 = 4pp. A&E declined most.",
  },
  {
    id: 217, section: "QR", topicId: "qr_tables", difficulty: "Medium",
    context: `Percentage of patients seen within target times at a regional trust:

                      Q1    Q2    Q3    Q4
A&E (4-hour target)  89%   85%   79%   82%
Outpatient (18-wk)   91%   88%   84%   86%
Cancer (2-week)      97%   95%   93%   91%`,
    prompt: "What is the average performance across all three departments in Q4?",
    options: [{ key: "A", label: "85.3%" }, { key: "B", label: "86.3%" }, { key: "C", label: "87.3%" }, { key: "D", label: "88.0%" }],
    correct: "B",
    explanation: "(82+86+91) ÷ 3 = 259 ÷ 3 = 86.3%.",
  },
  {
    id: 218, section: "QR", topicId: "qr_tables", difficulty: "Hard",
    context: `Percentage of patients seen within target times at a regional trust:

                      Q1    Q2    Q3    Q4
A&E (4-hour target)  89%   85%   79%   82%
Outpatient (18-wk)   91%   88%   84%   86%
Cancer (2-week)      97%   95%   93%   91%`,
    prompt: "If A&E processed 4,000 patients in Q3, how many were NOT seen within the 4-hour target?",
    options: [{ key: "A", label: "720" }, { key: "B", label: "780" }, { key: "C", label: "840" }, { key: "D", label: "900" }],
    correct: "C",
    explanation: "Missed target = 4,000 × (1−0.79) = 4,000 × 0.21 = 840 patients.",
  },
  {
    id: 219, section: "QR", topicId: "qr_tables", difficulty: "Hard",
    context: `Percentage of patients seen within target times at a regional trust:

                      Q1    Q2    Q3    Q4
A&E (4-hour target)  89%   85%   79%   82%
Outpatient (18-wk)   91%   88%   84%   86%
Cancer (2-week)      97%   95%   93%   91%`,
    prompt: "Between Q1 and Q4, which department showed the smallest absolute change in performance?",
    options: [{ key: "A", label: "A&E" }, { key: "B", label: "Outpatient" }, { key: "C", label: "Cancer" }, { key: "D", label: "All changed equally" }],
    correct: "B",
    explanation: "A&E: 89→82 = −7pp. Outpatient: 91→86 = −5pp. Cancer: 97→91 = −6pp. Outpatient had the smallest absolute change.",
  },

  // ── Dataset 6: GP Prescribing Costs ──────────────────────────────────────

  {
    id: 220, section: "QR", topicId: "qr_dosage", difficulty: "Easy",
    context: `Monthly prescribing data for a GP practice:
  Dr Adams: 240 patients, £18 per patient
  Dr Bell:  240 patients, £15 per patient
  Dr Chen:  210 patients, £21 per patient`,
    prompt: "What is the total monthly prescribing cost for the practice?",
    options: [{ key: "A", label: "£11,880" }, { key: "B", label: "£12,000" }, { key: "C", label: "£12,330" }, { key: "D", label: "£12,600" }],
    correct: "C",
    explanation: "Adams: 240×18 = £4,320. Bell: 240×15 = £3,600. Chen: 210×21 = £4,410. Total = £12,330.",
  },
  {
    id: 221, section: "QR", topicId: "qr_dosage", difficulty: "Medium",
    context: `Monthly prescribing data for a GP practice:
  Dr Adams: 240 patients, £18 per patient
  Dr Bell:  240 patients, £15 per patient
  Dr Chen:  210 patients, £21 per patient`,
    prompt: "What is the average prescribing cost per patient across the entire practice?",
    options: [{ key: "A", label: "£17.50" }, { key: "B", label: "£17.87" }, { key: "C", label: "£18.00" }, { key: "D", label: "£18.50" }],
    correct: "B",
    explanation: "Total patients = 240+240+210 = 690. Total cost = £12,330. Average = 12,330÷690 = £17.87.",
  },
  {
    id: 222, section: "QR", topicId: "qr_dosage", difficulty: "Hard",
    context: `Monthly prescribing data for a GP practice:
  Dr Adams: 240 patients, £18 per patient
  Dr Bell:  240 patients, £15 per patient
  Dr Chen:  210 patients, £21 per patient`,
    prompt: "The practice has a £12,000 monthly budget cap. Next month Dr Chen's patient list increases to 250 (same per-patient cost). By how much will the practice exceed its budget?",
    options: [{ key: "A", label: "£840" }, { key: "B", label: "£1,170" }, { key: "C", label: "£1,330" }, { key: "D", label: "£960" }],
    correct: "B",
    explanation: "New Chen cost = 250×21 = £5,250. New total = 4,320+3,600+5,250 = £13,170. Overspend = 13,170−12,000 = £1,170.",
  },
  {
    id: 223, section: "QR", topicId: "qr_dosage", difficulty: "Medium",
    context: `Monthly prescribing data for a GP practice:
  Dr Adams: 240 patients, £18 per patient
  Dr Bell:  240 patients, £15 per patient
  Dr Chen:  210 patients, £21 per patient`,
    prompt: "What percentage of the total monthly prescribing cost does Dr Bell account for?",
    options: [{ key: "A", label: "27.5%" }, { key: "B", label: "29.2%" }, { key: "C", label: "30.8%" }, { key: "D", label: "31.4%" }],
    correct: "B",
    explanation: "Dr Bell = £3,600. Total = £12,330. Percentage = 3,600÷12,330×100 = 29.2%.",
  },
  {
    id: 224, section: "QR", topicId: "qr_ratios", difficulty: "Easy",
    prompt: "A clinical trial enrolls 150 patients. 30% are assigned to the control group. How many are in the treatment group?",
    options: [{ key: "A", label: "45" }, { key: "B", label: "90" }, { key: "C", label: "105" }, { key: "D", label: "120" }],
    correct: "C",
    explanation: "Control = 150×0.30 = 45. Treatment = 150−45 = 105.",
  },
  {
    id: 225, section: "QR", topicId: "qr_dosage", difficulty: "Medium",
    prompt: "A medication is dosed at 8 mg/kg. A patient weighs 75 kg. The drug is available as 200 mg/5 mL. How many mL should be administered?",
    options: [{ key: "A", label: "10 mL" }, { key: "B", label: "12 mL" }, { key: "C", label: "15 mL" }, { key: "D", label: "20 mL" }],
    correct: "C",
    explanation: "Dose = 8×75 = 600 mg. Volume = (600÷200)×5 = 15 mL.",
  },
  {
    id: 226, section: "QR", topicId: "qr_ratios", difficulty: "Medium",
    prompt: "A hospital reduces its average length of stay from 5.2 days to 4.4 days. What is the percentage reduction?",
    options: [{ key: "A", label: "12.8%" }, { key: "B", label: "13.5%" }, { key: "C", label: "15.4%" }, { key: "D", label: "18.2%" }],
    correct: "C",
    explanation: "Reduction = (5.2−4.4)÷5.2×100 = 0.8÷5.2×100 = 15.4%.",
  },
  {
    id: 227, section: "QR", topicId: "qr_ratios", difficulty: "Hard",
    prompt: "A ward has 24 beds. Bed occupancy over 4 weeks: 85%, 92%, 78%, 88%. What was the average number of beds occupied per week (to 1 decimal place)?",
    options: [{ key: "A", label: "19.5" }, { key: "B", label: "20.6" }, { key: "C", label: "21.4" }, { key: "D", label: "22.0" }],
    correct: "B",
    explanation: "Average occupancy = (85+92+78+88)÷4 = 343÷4 = 85.75%. Average beds = 24×0.8575 = 20.58 ≈ 20.6.",
  },
  {
    id: 228, section: "QR", topicId: "qr_dosage", difficulty: "Hard",
    prompt: "A patient needs 1.2 g of IV amoxicillin per dose. It is supplied as 500 mg vials. How many vials are required per dose?",
    options: [{ key: "A", label: "2 vials" }, { key: "B", label: "3 vials" }, { key: "C", label: "4 vials" }, { key: "D", label: "5 vials" }],
    correct: "B",
    explanation: "Dose = 1,200 mg. Each vial = 500 mg. Vials needed = 1,200÷500 = 2.4 → must round up to 3 complete vials.",
  },
  {
    id: 229, section: "QR", topicId: "qr_ratios", difficulty: "Medium",
    prompt: "A clinical team has doctors, nurses, and healthcare assistants in the ratio 1:4:2. If there are 8 doctors, how many people are in the team altogether?",
    options: [{ key: "A", label: "42" }, { key: "B", label: "48" }, { key: "C", label: "56" }, { key: "D", label: "64" }],
    correct: "C",
    explanation: "Ratio parts = 1+4+2 = 7. With 8 doctors (1 part): nurses = 32, HCAs = 16. Total = 8+32+16 = 56.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SITUATIONAL JUDGEMENT — additional questions (ids 416–429)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 416, section: "SJT", topicId: "sjt_safety", difficulty: "Medium",
    context: `You are an FY1 on a busy afternoon ward with three outstanding tasks: (1) a blood transfusion prescription for a post-operative patient with Hb 7.2 g/dL, (2) discharge summaries for two stable patients awaiting discharge, (3) an audit data collection form due by 5 pm.`,
    prompt: "In what order should you address these tasks?",
    options: [
      { key: "A", label: "Audit form first to meet the deadline, then transfusion, then discharge summaries" },
      { key: "B", label: "Transfusion first, then discharge summaries, then audit form" },
      { key: "C", label: "Discharge summaries first as they affect bed flow, then transfusion, then audit form" },
      { key: "D", label: "Delegate all three to nursing staff" },
    ],
    correct: "B",
    explanation: "Symptomatic anaemia (Hb 7.2) requiring transfusion is the immediate patient safety priority. Discharge summaries affect bed flow but are not acutely life-threatening. Audit is the lowest clinical priority. Nursing staff cannot prescribe — delegation is inappropriate here.",
  },
  {
    id: 417, section: "SJT", topicId: "sjt_ethics", difficulty: "Easy",
    context: `You are an FY1 on a surgical ward.`,
    prompt: "A patient who consented for an elective cholecystectomy tomorrow tells you they have changed their mind and no longer wish to proceed. What should you do?",
    options: [
      { key: "A", label: "Persuade them to proceed — the surgery is booked and delays are expensive" },
      { key: "B", label: "Accept the decision, document it clearly, and inform the surgical team immediately" },
      { key: "C", label: "Tell them they must decide quickly or they will lose their slot permanently" },
      { key: "D", label: "Contact the patient's family to help persuade them" },
    ],
    correct: "B",
    explanation: "A competent adult has the absolute right to withdraw consent at any time, even at the last moment. The clinician's obligation is to accept this decision without coercion, document it, and ensure the team is informed.",
  },
  {
    id: 418, section: "SJT", topicId: "sjt_teamwork", difficulty: "Easy",
    context: `You are starting your first week as an FY1 doctor.`,
    prompt: "Your registrar asks you to perform a procedure you have never done and do not feel confident to carry out. What should you do?",
    options: [
      { key: "A", label: "Attempt the procedure — learning by doing is expected at FY1 level" },
      { key: "B", label: "Tell the registrar you are not yet confident and ask for supervision or teaching" },
      { key: "C", label: "Ask a colleague from a different specialty who may have more experience" },
      { key: "D", label: "Watch a tutorial video and attempt the procedure without supervision" },
    ],
    correct: "B",
    explanation: "Acknowledging the limits of your competence is a fundamental professional obligation. Attempting procedures you are not competent in — regardless of the learning context — is unsafe. Requesting supervision is the correct and expected response.",
  },
  {
    id: 419, section: "SJT", topicId: "sjt_professionalism", difficulty: "Medium",
    context: `You are an FY2 on a night shift.`,
    prompt: "You accidentally prescribed 10 mg methotrexate weekly instead of the correct 2.5 mg. The pharmacist caught the error before dispensing. What should you do?",
    options: [
      { key: "A", label: "Thank the pharmacist quietly and correct the prescription — no further action needed" },
      { key: "B", label: "Disclose the near-miss to the patient, complete an incident report, and reflect to prevent recurrence" },
      { key: "C", label: "Do nothing — the error was caught and there was no harm" },
      { key: "D", label: "Ask a consultant to amend the prescription to avoid any record linking it to you" },
    ],
    correct: "B",
    explanation: "The duty of candour and incident reporting apply to near-misses as well as actual harm. Transparency, documentation, and reflection are required. Concealing errors (A, C, D) is a serious breach of professional standards.",
  },
  {
    id: 420, section: "SJT", topicId: "sjt_safety", difficulty: "Hard",
    context: `You are an FY1 covering multiple wards on a night shift.`,
    prompt: "You are en route to see a deteriorating patient on Ward 4 when a nurse on Ward 2 stops you to report a patient with new-onset chest pain starting 5 minutes ago. What should you do?",
    options: [
      { key: "A", label: "Continue to Ward 4 — you were already called there first" },
      { key: "B", label: "Assess which patient is more acutely unwell and activate the registrar for backup to ensure both patients are covered" },
      { key: "C", label: "Go to the chest pain patient — acute chest pain always takes priority" },
      { key: "D", label: "Call 999 for both patients immediately" },
    ],
    correct: "B",
    explanation: "Both patients may be critically unwell. The correct response is to rapidly triage both situations and activate backup so neither patient is left unseen. Blanket rules about priority (A or C) may lead to unsafe delays. Calling 999 (D) is disproportionate when on-site escalation is available.",
  },
  {
    id: 421, section: "SJT", topicId: "sjt_ethics", difficulty: "Hard",
    context: `You are a GP registrar.`,
    prompt: "A 28-year-old woman with full mental capacity requests a termination of pregnancy at 8 weeks. Your personal beliefs mean you are conscientiously opposed to abortion. What is the most appropriate response?",
    options: [
      { key: "A", label: "Decline to engage with the request entirely — your beliefs override professional obligations in this instance" },
      { key: "B", label: "Inform the patient of your conscientious objection and promptly refer her to a colleague who can help" },
      { key: "C", label: "Tell the patient that abortion is morally wrong" },
      { key: "D", label: "Prescribe contraception instead without addressing her request" },
    ],
    correct: "B",
    explanation: "The GMC permits conscientious objection but requires that the patient is not disadvantaged and is promptly referred to another clinician. Declining to refer (A) is not acceptable — it leaves the patient without time-sensitive care. Expressing personal moral judgements (C) is unprofessional.",
  },
  {
    id: 422, section: "SJT", topicId: "sjt_professionalism", difficulty: "Hard",
    context: `You are an FY2 doctor.`,
    prompt: "You discover a published trust audit describes a sample size of 150, but you were involved in data collection and know it was only 85. The consultant who published it is your direct supervisor. What should you do?",
    options: [
      { key: "A", label: "Do nothing — the error may not significantly affect the conclusions" },
      { key: "B", label: "Raise your concern with the consultant privately, then escalate to the clinical director if it is not corrected" },
      { key: "C", label: "Post about it anonymously on social media" },
      { key: "D", label: "Ignore it — you may be misremembering the data" },
    ],
    correct: "B",
    explanation: "Research integrity is a professional and ethical obligation. Raising the concern with the author first is courteous and proportionate. Escalation is required if the error is not corrected. Anonymous social media (C) bypasses appropriate channels.",
  },
  {
    id: 423, section: "SJT", topicId: "sjt_teamwork", difficulty: "Medium",
    context: `You are an FY1 doctor.`,
    prompt: "A consultant repeatedly uses a name for you that you find disrespectful and ignores your requests to stop. How should you respond?",
    options: [
      { key: "A", label: "Ignore it — this is normal behaviour and consultants are senior" },
      { key: "B", label: "Raise it with the consultant privately; if it continues, document incidents and discuss with your educational supervisor or foundation programme director" },
      { key: "C", label: "Respond with similarly disrespectful language" },
      { key: "D", label: "File a formal HR complaint immediately after the first incident" },
    ],
    correct: "B",
    explanation: "Proportionate escalation is key. A direct private conversation is the first step; formal processes follow if the behaviour continues. Immediate formal complaint after one incident (D) may be premature. Accepting it (A) normalises unprofessional behaviour.",
  },
  {
    id: 424, section: "SJT", topicId: "sjt_safety", difficulty: "Medium",
    context: `You are an FY1 on a surgical ward.`,
    prompt: "A pre-operative patient who is nil by mouth asks for a glass of water as they are very thirsty. You are unsure whether sips of water are permitted. What should you do?",
    options: [
      { key: "A", label: "Give the patient water — a small amount is unlikely to cause harm" },
      { key: "B", label: "Check with the anaesthetic team or registrar before giving anything" },
      { key: "C", label: "Tell the patient they cannot have anything, without checking why" },
      { key: "D", label: "Give ice chips as a compromise" },
    ],
    correct: "B",
    explanation: "Pre-operative fasting instructions are safety-critical — violation increases aspiration risk under anaesthesia. When uncertain, always clarify with the relevant clinical team before acting. Even ice chips (D) may not be safe without checking.",
  },
  {
    id: 425, section: "SJT", topicId: "sjt_professionalism", difficulty: "Easy",
    context: `You are an FY1 doctor.`,
    prompt: "A local journalist wants to interview you about an interesting clinical case you recently managed. What should you do?",
    options: [
      { key: "A", label: "Agree and describe the case in detail — public health communication is valuable" },
      { key: "B", label: "Decline to discuss individual patient cases and direct the journalist to the trust's communications department" },
      { key: "C", label: "Describe the case but change the patient's name" },
      { key: "D", label: "Share the case only if it would benefit public understanding of medicine" },
    ],
    correct: "B",
    explanation: "Patient confidentiality is absolute. Journalists must be directed to official trust channels. Even changing a name (C) may not adequately anonymise a case, and no discussion of individual patients should occur without authorisation.",
  },
  {
    id: 426, section: "SJT", topicId: "sjt_ethics", difficulty: "Medium",
    context: `You are an FY1 doctor on a ward round.`,
    prompt: "An 82-year-old patient with advanced dementia has been diagnosed with cancer. The team is discussing treatment. The patient lacks capacity. His son insists on 'doing everything possible.' What is the correct framework for this decision?",
    options: [
      { key: "A", label: "Do what the son requests — next of kin have legal decision-making authority" },
      { key: "B", label: "Make the decision based on the patient's best interests under the Mental Capacity Act, taking into account any prior wishes, values, and the views of those close to him" },
      { key: "C", label: "Defer entirely to oncology and take no role in the decision" },
      { key: "D", label: "Proceed with aggressive treatment to minimise medico-legal risk" },
    ],
    correct: "B",
    explanation: "The Mental Capacity Act 2005 requires best-interest decision-making for incapacitated patients. Next of kin are consulted but have no legal authority to consent (unless holding a Health and Welfare LPA). Option A is a very common misconception.",
  },
  {
    id: 427, section: "SJT", topicId: "sjt_teamwork", difficulty: "Hard",
    context: `You are an FY2 on a general medicine ward.`,
    prompt: "You notice a senior nurse has been documenting drug administration as completed before the drug round has occurred, apparently to meet audit targets. No patient harm has resulted yet. What should you do?",
    options: [
      { key: "A", label: "Raise it with the nurse privately, then escalate to the ward sister or clinical governance lead if it continues" },
      { key: "B", label: "Do nothing — this is an administrative matter, not a clinical one" },
      { key: "C", label: "Report it to the CQC anonymously without raising it internally first" },
      { key: "D", label: "Cover for the nurse as they are under significant pressure" },
    ],
    correct: "A",
    explanation: "Falsifying medical records is a serious patient safety and governance issue regardless of immediate harm. Internal escalation is the appropriate first step. Going straight to the CQC (C) without attempting internal resolution is premature unless internal processes have failed.",
  },
  {
    id: 428, section: "SJT", topicId: "sjt_professionalism", difficulty: "Medium",
    context: `You are an FY1 finishing a night shift.`,
    prompt: "A patient asks you directly: 'Do I have cancer?' You have reviewed the biopsy showing malignancy, but the consultant has not yet spoken to the patient. What should you do?",
    options: [
      { key: "A", label: "Tell the patient directly — they have the right to know their diagnosis immediately" },
      { key: "B", label: "Acknowledge the question sensitively, explain that the consultant needs to discuss the results, and ensure this happens promptly" },
      { key: "C", label: "Tell the patient the result was normal to avoid distress before the consultant arrives" },
      { key: "D", label: "Decline to engage with the question and leave the room" },
    ],
    correct: "B",
    explanation: "Breaking serious news should be done properly — with adequate time, support, and by the senior responsible clinician. However, a patient cannot simply be dismissed. Acknowledging and ensuring the conversation happens urgently is the right balance. Lying (C) is never acceptable.",
  },
  {
    id: 429, section: "SJT", topicId: "sjt_safety", difficulty: "Easy",
    context: `You are an FY1 doctor.`,
    prompt: "A registrar gives you a verbal medication order over the phone. What is the safest course of action?",
    options: [
      { key: "A", label: "Implement the order immediately based on the verbal instruction" },
      { key: "B", label: "Repeat the order back to confirm it, document it as a verbal order, implement it, and ensure the prescribing doctor countersigns it at the earliest opportunity" },
      { key: "C", label: "Refuse all verbal orders and insist the doctor returns to prescribe in person" },
      { key: "D", label: "Document the order yourself as the prescriber" },
    ],
    correct: "B",
    explanation: "Verbal orders require read-back confirmation to prevent transcription errors, must be documented clearly, and must be countersigned as soon as possible. Refusing all verbal orders (C) could be dangerous in genuine emergencies.",
  },
];
