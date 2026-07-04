// Sample content. Chunked deliberately short — one idea per card —
// so a session can be entered and exited without losing the thread.

export const decks = [
  {
    id: 'biology-cells',
    subject: 'Biology',
    title: 'Cell transport',
    color: 'teal',
    cards: [
      { id: 'bio-1', front: 'What is diffusion?', back: 'The net movement of particles from an area of high concentration to low concentration, down a concentration gradient. No energy needed.' },
      { id: 'bio-2', front: 'What makes diffusion faster?', back: 'A steeper concentration gradient, higher temperature, a shorter diffusion distance, and a larger surface area.' },
      { id: 'bio-3', front: 'What is osmosis?', back: 'The diffusion of water molecules from a dilute solution to a concentrated solution, across a partially permeable membrane.' },
      { id: 'bio-4', front: 'What is active transport?', back: 'Movement of particles against a concentration gradient (low to high), using energy from respiration via ATP.' },
      { id: 'bio-5', front: 'Why do root hair cells use active transport?', back: 'To absorb mineral ions from soil even when soil concentration is lower than inside the cell — diffusion alone would move ions the wrong way.' },
    ],
  },
  {
    id: 'chemistry-bonding',
    subject: 'Chemistry',
    title: 'Bonding & structure',
    color: 'gold',
    cards: [
      { id: 'chem-1', front: 'What is an ionic bond?', back: 'Electrostatic attraction between oppositely charged ions, formed when electrons transfer from a metal to a non-metal.' },
      { id: 'chem-2', front: 'What is a covalent bond?', back: 'A shared pair of electrons between two non-metal atoms, giving both a full outer shell.' },
      { id: 'chem-3', front: 'Why does diamond have a high melting point?', back: 'It\'s a giant covalent structure — every carbon is bonded to 4 others in a rigid lattice, so huge amounts of energy are needed to break the many strong covalent bonds.' },
      { id: 'chem-4', front: 'Why can graphite conduct electricity but diamond can\'t?', back: 'Each carbon in graphite bonds to only 3 others, leaving one delocalised electron per atom free to move and carry charge. Diamond has no free electrons or ions.' },
      { id: 'chem-5', front: 'What determines the strength of metallic bonding?', back: 'The number of delocalised electrons per atom and the charge/size of the metal ion — more delocalised electrons and smaller, more highly charged ions mean stronger metallic bonds.' },
    ],
  },
  {
    id: 'medicine-clinical-cases',
    subject: 'Medicine',
    title: 'Clinical case snapshots',
    color: 'teal',
    template: 'case',
    cards: [
      { id: 'case-1', front: 'Patient presents with sudden chest pain, shortness of breath, and a swollen calf after a long-haul flight. What\'s the differential?', back: 'Pulmonary embolism is top of the list given the recent immobility (DVT risk) — also consider MI and pneumothorax. Would want a Wells score, D-dimer, and CTPA.' },
      { id: 'case-2', front: 'A 6-year-old presents with a high fever, sore throat, and a sandpaper-like rash. What\'s the differential?', back: 'Scarlet fever (Group A Strep) is classic here — the rash plus fever plus sore throat triad. Would check for strawberry tongue and treat with penicillin.' },
      { id: 'case-3', front: 'Patient presents with sudden severe headache described as "the worst of my life", plus neck stiffness. What\'s the differential?', back: 'Subarachnoid haemorrhage until proven otherwise — a thunderclap headache is a red flag. Needs an urgent CT head, and LP if CT is negative but suspicion remains.' },
      { id: 'case-4', front: 'A young adult presents with unilateral vision loss, painful eye movements, and had an episode of leg weakness last year. What\'s the differential?', back: 'Optic neuritis, raising suspicion of multiple sclerosis given the prior neurological episode — lesions disseminated in time and space. Would want an MRI with contrast.' },
    ],
  },
]

export function findDeck(deckId) {
  return decks.find((d) => d.id === deckId)
}

export function allCardsFlat() {
  return decks.flatMap((d) => d.cards.map((c) => ({ ...c, deckId: d.id, subject: d.subject })))
}
