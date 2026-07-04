// Ported from northstar-app/app/lib/vr-passages.ts, TypeScript types stripped.
// 8 full Verbal Reasoning passages with embedded True/False/Cant Tell and multiple-choice questions.


export const VR_PASSAGES = [
  // ─── Passage 1 ────────────────────────────────────────────────────────────
  {
    id: "vr-p1",
    title: "Gene Therapy in Rare Diseases",
    category: "Medicine & Science",
    text: `While gene therapy has been theorised since the 1970s, it only saw significant clinical success in the late 2010s. Specifically, the treatment of Spinal Muscular Atrophy (SMA) using viral vectors showed that a single dose could provide long-term motor function. However, the high cost — often exceeding £1.5 million per patient — has sparked fierce debate regarding the sustainability of such treatments in publicly funded healthcare systems like the NHS.

Critics argue that prioritising extraordinarily expensive single-patient treatments creates an ethical tension with the principle of resource allocation, which demands that limited funding be distributed to maximise overall population health. Proponents counter that rare disease patients are already disadvantaged by the small commercial incentive for pharmaceutical companies to develop treatments — a phenomenon known as the "orphan drug" problem — and that healthcare systems have a duty to address this inequality.

Regulatory bodies in the UK, including NICE, have begun developing novel appraisal frameworks to evaluate these therapies using multi-criteria decision analysis rather than the conventional cost-per-QALY metric. Whether this will resolve the affordability tension or simply introduce new forms of inconsistency remains to be seen.`,
    questions: [
      {
        id: 1001,
        type: "tfct",
        statement: "The NHS currently refuses to fund SMA gene therapy due to its cost.",
        answer: "Can't Tell",
        explanation: "The passage describes a 'fierce debate' about sustainability in publicly funded systems, but does not state that the NHS has refused funding. The outcome of that debate is not declared. Answer: Can't Tell.",
      },
      {
        id: 1002,
        type: "mc",
        question: "According to the passage, what was the primary factor in the clinical success of SMA treatment?",
        options: [
          "Decades of theoretical research since the 1970s",
          "The use of viral vectors to deliver long-term motor function",
          "Reduced manufacturing costs making the treatment viable",
          "Support from NICE's novel appraisal framework",
        ],
        answer: "The use of viral vectors to deliver long-term motor function",
        explanation: "The passage directly states: 'the treatment of SMA using viral vectors showed that a single dose could provide long-term motor function.' The other options are not mentioned as factors in its success.",
      },
      {
        id: 1003,
        type: "tfct",
        statement: "The 'orphan drug' problem refers to the limited financial incentive for pharmaceutical companies to develop rare disease treatments.",
        answer: "True",
        explanation: "The passage explicitly defines the orphan drug problem as the 'small commercial incentive for pharmaceutical companies to develop treatments' — this matches the statement exactly.",
      },
      {
        id: 1004,
        type: "tfct",
        statement: "NICE's new appraisal framework will definitively resolve the affordability tension in gene therapy.",
        answer: "False",
        explanation: "The passage states 'Whether this will resolve the affordability tension… remains to be seen' — actively expressing uncertainty, not confirmation. The statement is therefore False according to the passage.",
      },
      {
        id: 1005,
        type: "mc",
        question: "Which ethical principle do critics invoke when arguing against prioritising costly single-patient treatments?",
        options: [
          "Patient autonomy",
          "Non-maleficence",
          "Resource allocation to maximise population health",
          "The orphan drug principle",
        ],
        answer: "Resource allocation to maximise population health",
        explanation: "Critics specifically cite 'the principle of resource allocation, which demands that limited funding be distributed to maximise overall population health.' The other options are not mentioned by critics in this context.",
      },
      {
        id: 1006,
        type: "tfct",
        statement: "Multi-criteria decision analysis is the conventional metric currently used by NICE for drug appraisal.",
        answer: "False",
        explanation: "The passage states NICE is developing novel frameworks using multi-criteria decision analysis 'rather than the conventional cost-per-QALY metric' — implying cost-per-QALY is the conventional tool, not multi-criteria analysis.",
      },
    ],
  },

  // ─── Passage 2 ────────────────────────────────────────────────────────────
  {
    id: "vr-p2",
    title: "Stem Cell Ethics and Regulation",
    category: "Ethics & Biomedical Science",
    text: `Stem cell research occupies a uniquely contested space in biomedical science. Pluripotent stem cells — those capable of developing into almost any tissue type — were originally sourced exclusively from human embryos, a practice that generated substantial ethical objection on the grounds that embryos constitute human life and should not be subject to destruction for research purposes.

The development of induced pluripotent stem cells (iPSCs) in 2006, for which Shinya Yamanaka received the Nobel Prize in 2012, appeared to sidestep this controversy: by reprogramming adult somatic cells, researchers could obtain pluripotent cells without embryo destruction. However, critics noted that iPSC-derived cells have distinct epigenetic profiles from embryonic stem cells and may not be perfectly interchangeable for all research and therapeutic applications.

In the United Kingdom, embryo research is regulated by the Human Fertilisation and Embryology Authority (HFEA), which permits research on embryos up to 14 days after fertilisation — the so-called "14-day rule." Some scientists have recently advocated for extending this limit to 28 days to allow study of a critical phase of development, while ethicists and religious groups have argued this would represent an unacceptable moral line.`,
    questions: [
      {
        id: 1007,
        type: "tfct",
        statement: "Shinya Yamanaka won the Nobel Prize for discovering embryonic stem cells.",
        answer: "False",
        explanation: "Yamanaka won the Nobel Prize for developing iPSCs (induced pluripotent stem cells) by reprogramming adult somatic cells — not for discovering embryonic stem cells, which is a separate line of research.",
      },
      {
        id: 1008,
        type: "mc",
        question: "Why did iPSC technology not fully end the ethical debate around stem cell research?",
        options: [
          "The procedure for creating iPSCs still requires embryo destruction",
          "iPSCs were more expensive to produce than embryonic stem cells",
          "iPSCs have distinct epigenetic profiles and may not be interchangeable with embryonic cells",
          "The HFEA refused to grant licences for iPSC research",
        ],
        answer: "iPSCs have distinct epigenetic profiles and may not be interchangeable with embryonic cells",
        explanation: "The passage states that critics noted 'iPSC-derived cells have distinct epigenetic profiles from embryonic stem cells and may not be perfectly interchangeable for all research and therapeutic applications.' No mention is made of cost, embryo use, or HFEA refusal.",
      },
      {
        id: 1009,
        type: "tfct",
        statement: "Under current UK law, embryo research may be conducted up to 28 days after fertilisation.",
        answer: "False",
        explanation: "The passage clearly states the current UK rule permits research on embryos 'up to 14 days after fertilisation.' The 28-day figure is a proposed extension, not the current limit.",
      },
      {
        id: 1010,
        type: "tfct",
        statement: "Religious groups are among those opposing any extension of the 14-day rule.",
        answer: "True",
        explanation: "The passage explicitly states: 'ethicists and religious groups have argued this would represent an unacceptable moral line' — confirming religious groups oppose extending the rule.",
      },
      {
        id: 1011,
        type: "mc",
        question: "What is the primary ethical objection to using embryonic stem cells rather than iPSCs?",
        options: [
          "The process is scientifically unreliable",
          "It requires the destruction of embryos, which some regard as human life",
          "Embryonic stem cells have inferior therapeutic potential",
          "The HFEA has never permitted embryonic research",
        ],
        answer: "It requires the destruction of embryos, which some regard as human life",
        explanation: "The passage describes 'substantial ethical objection on the grounds that embryos constitute human life and should not be subject to destruction for research purposes.' This is the primary objection stated.",
      },
      {
        id: 1012,
        type: "tfct",
        statement: "The iPSC technique involves destroying embryos to extract pluripotent cells.",
        answer: "False",
        explanation: "The passage says iPSCs are obtained 'by reprogramming adult somatic cells' — the key advantage being that this process avoids embryo destruction entirely.",
      },
    ],
  },

  // ─── Passage 3 ────────────────────────────────────────────────────────────
  {
    id: "vr-p3",
    title: "NHS Digital Health Transformation",
    category: "Healthcare Policy",
    text: `The NHS Long Term Plan, published in 2019, committed to a comprehensive digital transformation of NHS services in England. Central to this ambition was the rollout of electronic health records (EHRs) across all NHS trusts, enabling clinicians to access complete patient histories regardless of where care was initially provided. By 2023, the majority of NHS acute trusts had adopted some form of EHR, though interoperability — the ability of different systems to share data seamlessly — remained an unresolved challenge.

Digital prescribing and remote consultation services, accelerated significantly by the COVID-19 pandemic, have generated mixed evidence on their effectiveness. While remote GP consultations reduced the burden on physical infrastructure and increased access for patients with mobility difficulties, studies noted higher rates of missed diagnoses and patient dissatisfaction among elderly populations unfamiliar with digital interfaces.

NHSX, the joint digital unit established to drive this transformation, was subsequently absorbed into NHS England and NHS Improvement in 2022. Critics of this merger argued that it diluted the focused mandate for digital innovation, while supporters contended that integration would eliminate costly duplication of function between the organisations. The long-term impact of this structural change on the pace of NHS digitalisation is not yet fully understood.`,
    questions: [
      {
        id: 1013,
        type: "tfct",
        statement: "All NHS acute trusts had fully interoperable EHR systems in place by 2023.",
        answer: "False",
        explanation: "The passage states the majority had adopted 'some form of EHR' but that interoperability 'remained an unresolved challenge' — meaning full interoperability was not achieved, and 'the majority' is not 'all trusts.'",
      },
      {
        id: 1014,
        type: "mc",
        question: "According to the passage, which patient group showed the highest dissatisfaction with remote consultations?",
        options: [
          "Patients with mobility difficulties",
          "Patients with chronic conditions",
          "Elderly patients unfamiliar with digital interfaces",
          "Patients in rural areas",
        ],
        answer: "Elderly patients unfamiliar with digital interfaces",
        explanation: "The passage specifically notes 'patient dissatisfaction among elderly populations unfamiliar with digital interfaces.' Patients with mobility difficulties are mentioned as a group who benefited, not as dissatisfied users.",
      },
      {
        id: 1015,
        type: "tfct",
        statement: "NHSX was an independent body created solely to manage NHS digital prescribing.",
        answer: "False",
        explanation: "NHSX is described as a 'joint digital unit established to drive this transformation' — referring to the broader NHS digital transformation, not only digital prescribing. It was not described as independent.",
      },
      {
        id: 1016,
        type: "tfct",
        statement: "The long-term effect of absorbing NHSX into NHS England has not yet been determined.",
        answer: "True",
        explanation: "The passage concludes: 'The long-term impact of this structural change on the pace of NHS digitalisation is not yet fully understood' — a direct match for the statement.",
      },
      {
        id: 1017,
        type: "mc",
        question: "What was the primary argument of those who supported merging NHSX into NHS England?",
        options: [
          "It would give NHSX a more focused mandate for digital innovation",
          "It would eliminate costly duplication of function between the organisations",
          "It would accelerate the rollout of EHRs to remaining trusts",
          "It was required under the NHS Long Term Plan commitments",
        ],
        answer: "It would eliminate costly duplication of function between the organisations",
        explanation: "Supporters 'contended that integration would eliminate costly duplication of function between the organisations.' The other options either describe critics' concerns or are not mentioned.",
      },
      {
        id: 1018,
        type: "tfct",
        statement: "The rollout of remote consultations was already widespread before the COVID-19 pandemic.",
        answer: "False",
        explanation: "The passage describes remote consultation services as having been 'accelerated significantly by the COVID-19 pandemic' — implying they were not widespread before it.",
      },
    ],
  },

  // ─── Passage 4 ────────────────────────────────────────────────────────────
  {
    id: "vr-p4",
    title: "The Antibiotic Resistance Crisis",
    category: "Public Health & Microbiology",
    text: `Antimicrobial resistance (AMR) has been described by the World Health Organisation as one of the greatest threats to global public health. Bacteria evolve resistance through multiple mechanisms, including enzymatic degradation of antibiotics, modification of drug target sites, and the efflux of antibiotic molecules before they can act. The overuse of antibiotics in both human medicine and agricultural settings is widely cited as the primary driver of resistance, though the relative contribution of each remains contested.

A landmark 2019 report estimated that AMR was directly responsible for 1.27 million deaths globally per year, with a further 4.95 million deaths associated with AMR complications. The distinction between deaths caused directly by resistant infections versus those where resistance was a contributing factor is methodologically significant: conflating these figures, critics argued, risks overstating the crisis and diverting resources from other global health priorities.

In the United Kingdom, NHS antimicrobial stewardship programmes have focused on reducing unnecessary prescribing, particularly in primary care where overprescription of broad-spectrum antibiotics has historically been highest. Incentive schemes for GP practices that meet antibiotic reduction targets have shown modest but measurable results. However, public awareness of AMR remains low, and patient pressure for antibiotic prescriptions — particularly for self-limiting viral infections — continues to challenge clinicians.`,
    questions: [
      {
        id: 1019,
        type: "tfct",
        statement: "According to the 2019 report, AMR was directly responsible for approximately 4.95 million deaths globally per year.",
        answer: "False",
        explanation: "The passage states 4.95 million deaths were 'associated with' AMR complications — not directly caused by it. The 1.27 million figure was cited as directly caused by AMR. The statement confuses these two distinct figures.",
      },
      {
        id: 1020,
        type: "mc",
        question: "Why did critics consider the distinction between AMR-caused and AMR-associated deaths methodologically significant?",
        options: [
          "Conflating the figures could overstate the crisis and misdirect resources",
          "The larger figure made AMR appear less serious than it truly is",
          "International guidelines require that only direct deaths be reported",
          "The distinction affects the type of antibiotic stewardship recommended",
        ],
        answer: "Conflating the figures could overstate the crisis and misdirect resources",
        explanation: "The passage directly states critics argued conflating these figures 'risks overstating the crisis and diverting resources from other global health priorities.' This matches option A precisely.",
      },
      {
        id: 1021,
        type: "tfct",
        statement: "The relative contribution of agricultural versus human medical antibiotic use to AMR development is a settled scientific question.",
        answer: "False",
        explanation: "The passage explicitly states the relative contribution of each 'remains contested' — meaning it is not settled.",
      },
      {
        id: 1022,
        type: "tfct",
        statement: "NHS stewardship programmes have achieved measurable reductions in antibiotic prescribing.",
        answer: "True",
        explanation: "The passage states incentive schemes have shown 'modest but measurable results' — the statement that measurable reductions have been achieved is consistent with this.",
      },
      {
        id: 1023,
        type: "mc",
        question: "Which of the following is described as an ongoing challenge to antimicrobial stewardship in the UK?",
        options: [
          "A shortage of broad-spectrum antibiotics in primary care",
          "Lack of GP participation in incentive schemes",
          "Patient pressure for prescriptions for viral infections",
          "WHO restrictions on antibiotic prescribing guidelines",
        ],
        answer: "Patient pressure for prescriptions for viral infections",
        explanation: "The passage identifies 'patient pressure for antibiotic prescriptions — particularly for self-limiting viral infections — continues to challenge clinicians' as an ongoing obstacle.",
      },
      {
        id: 1024,
        type: "tfct",
        statement: "Efflux pumps are one mechanism by which bacteria develop antibiotic resistance.",
        answer: "True",
        explanation: "The passage lists 'the efflux of antibiotic molecules before they can act' as one of the resistance mechanisms — efflux pumps are the cellular machinery responsible for this process.",
      },
    ],
  },

  // ─── Passage 5 ────────────────────────────────────────────────────────────
  {
    id: "vr-p5",
    title: "Mental Health Policy in the UK",
    category: "Healthcare Policy",
    text: `The Mental Health Act 1983 governs the compulsory detention and treatment of people with severe mental illness in England and Wales. Following a 2018 independent review led by Professor Sir Simon Wessely, the government committed to significant reform. The Mental Health Act Amendment Bill proposed to narrow the criteria for detention, strengthen patients' rights to refuse certain treatments, and give patients greater say in their care through 'advance choice documents.' Critics argue, however, that reforms without substantial investment in community services risk simply shifting pressure onto an already overstretched voluntary sector.

Parity of esteem — the principle that mental health should receive the same priority as physical health within the NHS — was enshrined in law by the Health and Social Care Act 2012 and later reinforced through the NHS Long Term Plan, which committed to expanding access through the Improving Access to Psychological Therapies (IAPT) programme. Despite this, evidence from NHS Digital data consistently shows that mental health services receive a disproportionately smaller share of NHS funding relative to the burden of disease they address. Advocates for reform point out that the unit cost of treating conditions such as depression through IAPT is comparatively low, suggesting poor value in current overall spending patterns.

The Wessely Review also highlighted the disproportionate rate at which Black African and Caribbean patients are detained under the Act — a pattern that has persisted for decades. The review acknowledged that structural inequalities in access to early community intervention likely exacerbate this disparity, though causal mechanisms remain incompletely understood.`,
    questions: [
      {
        id: 1025,
        type: "tfct",
        statement: "The Mental Health Act 1983 applies throughout the United Kingdom.",
        answer: "False",
        explanation: "The passage explicitly states the Act governs detention 'in England and Wales' — it does not apply throughout the whole United Kingdom.",
      },
      {
        id: 1026,
        type: "tfct",
        statement: "The Wessely Review recommended that patients should be given greater control over their treatment decisions.",
        answer: "True",
        explanation: "The passage states the Amendment Bill proposed to 'strengthen patients' rights to refuse certain treatments' and give patients greater say through 'advance choice documents' — both flowing from the Wessely Review.",
      },
      {
        id: 1027,
        type: "tfct",
        statement: "Mental health services currently receive a proportional share of NHS funding relative to the disease burden they address.",
        answer: "False",
        explanation: "The passage explicitly states that mental health services receive 'a disproportionately smaller share of NHS funding relative to the burden of disease they address.'",
      },
      {
        id: 1028,
        type: "mc",
        question: "According to the passage, what concern do critics raise about the proposed Mental Health Act reforms?",
        options: [
          "That advance choice documents give patients too much autonomy over compulsory treatment",
          "That reforms without community investment may overwhelm the voluntary sector",
          "That narrowing detention criteria will prevent necessary emergency treatment",
          "That the reforms fail to address racial disparities in detention rates",
        ],
        answer: "That reforms without community investment may overwhelm the voluntary sector",
        explanation: "The passage states: 'reforms without substantial investment in community services risk simply shifting pressure onto an already overstretched voluntary sector.' The other options are not presented as critics' concerns.",
      },
      {
        id: 1029,
        type: "tfct",
        statement: "The disproportionate detention rate of Black African and Caribbean patients under the Mental Health Act is caused by structural inequalities in access to community care.",
        answer: "False",
        explanation: "The passage says structural inequalities 'likely exacerbate this disparity' but adds that 'causal mechanisms remain incompletely understood' — causation is not established.",
      },
      {
        id: 1030,
        type: "tfct",
        statement: "The passage presents IAPT as a relatively inexpensive intervention per patient.",
        answer: "True",
        explanation: "The passage states 'the unit cost of treating conditions such as depression through IAPT is comparatively low' — this directly supports the statement.",
      },
    ],
  },

  // ─── Passage 6 ────────────────────────────────────────────────────────────
  {
    id: "vr-p6",
    title: "AI Diagnostics and Medical Liability",
    category: "Medicine & Science",
    text: `Machine learning algorithms trained on medical imaging data have demonstrated diagnostic accuracy rivalling, and in some studies exceeding, that of experienced clinicians. A 2019 study published in Nature Medicine reported that a deep learning system outperformed US radiologists in detecting breast cancer from mammograms, achieving a 5.7% reduction in false negatives compared with a single radiologist reading. Such findings have prompted both optimism about AI's potential to alleviate diagnostic bottlenecks and concern about the implications for clinical accountability.

The legal framework governing AI-assisted diagnosis in the UK remains underdeveloped. Under current guidelines from the Medicines and Healthcare products Regulatory Agency (MHRA), AI systems used for diagnosis are classified as medical devices. However, the question of liability when an algorithmic recommendation leads to patient harm is unresolved. Some legal scholars argue that existing negligence frameworks are sufficient — the clinician who relies on a flawed AI recommendation is analogous to one who relies on a faulty test kit — while others contend that the opacity of deep learning 'black box' systems makes attribution of fault inherently problematic.

Training data bias presents a further concern: algorithms trained predominantly on data from certain demographic groups may perform less accurately on underrepresented populations. A widely cited 2019 study found that a commercial skin lesion classifier performed significantly worse on darker skin tones. Addressing this requires not merely technical refinement but deliberate curation of more representative datasets.`,
    questions: [
      {
        id: 1031,
        type: "tfct",
        statement: "The study described in the passage found that the AI system achieved a lower false negative rate than a single radiologist reading.",
        answer: "True",
        explanation: "The passage states the system achieved 'a 5.7% reduction in false negatives compared with a single radiologist reading' — a lower false negative rate.",
      },
      {
        id: 1032,
        type: "tfct",
        statement: "The MHRA currently has no regulatory classification for AI systems used in medical diagnosis.",
        answer: "False",
        explanation: "The passage states that under current MHRA guidelines, 'AI systems used for diagnosis are classified as medical devices' — a classification exists.",
      },
      {
        id: 1033,
        type: "tfct",
        statement: "The question of legal liability when AI-assisted diagnosis causes patient harm has been definitively resolved in UK law.",
        answer: "False",
        explanation: "The passage explicitly states 'the question of liability when an algorithmic recommendation leads to patient harm is unresolved.'",
      },
      {
        id: 1034,
        type: "mc",
        question: "Which of the following best summarises the legal concern about 'black box' AI systems described in the passage?",
        options: [
          "They produce less accurate diagnoses than human clinicians in most cases",
          "Their internal reasoning is opaque, making it difficult to attribute fault when harm occurs",
          "They are not yet regulated as medical devices by the MHRA",
          "They require retraining on diverse datasets before clinical deployment",
        ],
        answer: "Their internal reasoning is opaque, making it difficult to attribute fault when harm occurs",
        explanation: "The passage states that 'the opacity of deep learning black box systems makes attribution of fault inherently problematic' — this is the legal concern identified.",
      },
      {
        id: 1035,
        type: "tfct",
        statement: "The problem of training data bias in AI diagnostic tools can be fully resolved through technical improvements alone.",
        answer: "False",
        explanation: "The passage states: 'Addressing this requires not merely technical refinement but deliberate curation of more representative datasets' — technical improvement alone is insufficient.",
      },
      {
        id: 1036,
        type: "tfct",
        statement: "The skin lesion AI classifier study found reduced accuracy in patients with lighter skin tones.",
        answer: "False",
        explanation: "The passage states the classifier 'performed significantly worse on darker skin tones' — it was darker skin tones that showed reduced accuracy, not lighter.",
      },
    ],
  },

  // ─── Passage 7 ────────────────────────────────────────────────────────────
  {
    id: "vr-p7",
    title: "Vaccine Hesitancy and Public Trust",
    category: "Public Health & Microbiology",
    text: `Vaccine hesitancy — defined by the WHO as the reluctance or refusal to vaccinate despite the availability of vaccines — has been designated one of the top ten global health threats. While aggregate global coverage of many childhood vaccines has increased since the 1970s, localised declines in uptake have led to resurgent outbreaks of measles, a disease the World Health Organisation had previously declared eliminated from the United Kingdom. The WHO restored the UK's measles elimination status in 2021 following a temporary decline in cases during the COVID-19 pandemic, though this restoration was contested by some epidemiologists.

Hesitancy is not monolithic: surveys across Europe and North America consistently identify it as a spectrum rather than a binary position. The WHO SAGE Working Group on Vaccine Hesitancy identified three categories of influence — confidence (trust in vaccine safety and efficacy), complacency (low perceived risk of the disease), and convenience (accessibility barriers). Crucially, the group found that information-based interventions alone are largely ineffective in changing the minds of individuals with deep-seated hesitancy, particularly when mistrust extends to healthcare institutions broadly.

The role of social media in amplifying vaccine misinformation is widely recognised, but its causal relationship to actual hesitancy behaviour remains contested. Studies examining the association between social media use and hesitancy face significant methodological challenges, including reverse causality — individuals predisposed to hesitancy may selectively expose themselves to anti-vaccine content, rather than being persuaded into hesitancy by it. Policy responses have ranged from platform content moderation to legislative vaccination mandates in certain jurisdictions.`,
    questions: [
      {
        id: 1037,
        type: "tfct",
        statement: "The WHO identified vaccine hesitancy as the single greatest threat to global health.",
        answer: "False",
        explanation: "The passage describes vaccine hesitancy as 'one of the top ten global health threats' — not the single greatest threat.",
      },
      {
        id: 1038,
        type: "tfct",
        statement: "The UK lost its measles elimination status at some point before 2021.",
        answer: "True",
        explanation: "The passage states the WHO 'restored the UK's measles elimination status in 2021,' implying it had been lost before that restoration occurred.",
      },
      {
        id: 1039,
        type: "mc",
        question: "According to the SAGE Working Group, why are information-based interventions largely ineffective for highly hesitant individuals?",
        options: [
          "Because such individuals lack access to reliable health information sources",
          "Because misinformation on social media always counteracts factual messaging",
          "Because deep hesitancy often reflects broader mistrust of healthcare institutions",
          "Because convenience barriers prevent hesitant individuals from accessing vaccines",
        ],
        answer: "Because deep hesitancy often reflects broader mistrust of healthcare institutions",
        explanation: "The passage states information-based interventions are ineffective 'particularly when mistrust extends to healthcare institutions broadly' — the deeper issue is institutional distrust, not information access.",
      },
      {
        id: 1040,
        type: "tfct",
        statement: "The SAGE Working Group identified confidence, complacency, and convenience as three categories influencing vaccine hesitancy.",
        answer: "True",
        explanation: "The passage directly lists these three categories: 'confidence (trust in vaccine safety and efficacy), complacency (low perceived risk of the disease), and convenience (accessibility barriers).'",
      },
      {
        id: 1041,
        type: "tfct",
        statement: "Research has conclusively established that social media use causes vaccine hesitancy.",
        answer: "False",
        explanation: "The passage states the 'causal relationship to actual hesitancy behaviour remains contested' and notes methodological challenges including reverse causality — the relationship is not conclusively established.",
      },
      {
        id: 1042,
        type: "tfct",
        statement: "According to the passage, all individuals who are hesitant about vaccines ultimately refuse to receive them.",
        answer: "False",
        explanation: "The WHO definition quoted in the passage defines hesitancy as 'reluctance or refusal' — hesitancy includes reluctance, which is not the same as refusal. It is a spectrum, not a binary.",
      },
    ],
  },

  // ─── Passage 8 ────────────────────────────────────────────────────────────
  {
    id: "vr-p8",
    title: "Informed Consent and Patient Autonomy",
    category: "Ethics & Biomedical Science",
    text: `The legal and ethical requirement of informed consent rests on the principle that patients have the right to make decisions about their own bodies based on sufficient information. In English law, this principle was significantly developed through the Supreme Court's ruling in Montgomery v Lanarkshire Health Board (2015), which shifted the standard for disclosure from what a 'reasonable doctor' would consider necessary — the Bolam test — to what a reasonable patient in the individual's position would want to know. The court held that clinicians must now disclose any risks that a reasonable person in the patient's position would consider material.

The Montgomery ruling has had significant practical implications. Critics within the medical profession argue that it creates a duty to disclose even remote risks, leading to information overload that may paradoxically impair rather than enhance patient decision-making — a phenomenon sometimes termed 'choice overload.' Studies in behavioural economics have demonstrated that presenting individuals with too many options or excessive risk information can lead to decision paralysis or suboptimal choices.

A further complexity arises when patients lack the capacity to consent. The Mental Capacity Act 2005 provides that decisions for incapacitated adults must be made in the patient's 'best interests,' taking into account previously expressed wishes. However, best interests is a broader concept than the patient's own prior preferences — it encompasses welfare, emotional wellbeing, and the views of those close to the patient. This means that a prior refusal of treatment, while an important consideration, does not necessarily constitute an absolute veto under current English law.`,
    questions: [
      {
        id: 1043,
        type: "tfct",
        statement: "The Bolam test required clinicians to disclose what a reasonable patient would want to know.",
        answer: "False",
        explanation: "The passage states the Bolam test was based on what a 'reasonable doctor' would consider necessary — the Montgomery ruling shifted this to the reasonable patient standard.",
      },
      {
        id: 1044,
        type: "tfct",
        statement: "Following Montgomery, clinicians must disclose any risk that a reasonable person in the patient's position would consider material.",
        answer: "True",
        explanation: "The passage directly states: 'clinicians must now disclose any risks that a reasonable person in the patient's position would consider material.'",
      },
      {
        id: 1045,
        type: "mc",
        question: "What does the passage identify as a potential drawback of the Montgomery disclosure standard?",
        options: [
          "It reduces clinical discretion to a degree that is practically unworkable",
          "It may result in patients receiving so much information that their decision-making is impaired",
          "It was subsequently overturned by a later Supreme Court ruling",
          "It applies only to risks above a specified minimum threshold of severity",
        ],
        answer: "It may result in patients receiving so much information that their decision-making is impaired",
        explanation: "The passage describes the risk of 'information overload that may paradoxically impair rather than enhance patient decision-making,' termed 'choice overload.'",
      },
      {
        id: 1046,
        type: "tfct",
        statement: "Under the Mental Capacity Act 2005, a patient's previously expressed refusal of treatment is legally binding even after the patient loses capacity.",
        answer: "False",
        explanation: "The passage states a prior refusal 'does not necessarily constitute an absolute veto under current English law' — it is a consideration, not a binding instruction.",
      },
      {
        id: 1047,
        type: "tfct",
        statement: "According to the passage, a patient's best interests under the Mental Capacity Act are defined solely by their own previously stated preferences.",
        answer: "False",
        explanation: "The passage explicitly states: 'best interests is a broader concept than the patient's own prior preferences — it encompasses welfare, emotional wellbeing, and the views of those close to the patient.'",
      },
      {
        id: 1048,
        type: "tfct",
        statement: "The passage suggests that behavioural economics research supports the concern that excessive disclosure can harm patient decision-making.",
        answer: "True",
        explanation: "The passage states 'studies in behavioural economics have demonstrated that presenting individuals with too many options or excessive risk information can lead to decision paralysis or suboptimal choices' — directly supporting this concern.",
      },
    ],
  },
];

export const VR_TOTAL_QUESTIONS = VR_PASSAGES.reduce((sum, p) => sum + p.questions.length, 0);
export const VR_TIME_SECONDS = 22 * 60; // 22 minutes per 2026 UCAT rules
