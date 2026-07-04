import { askGemini } from '../lib/gemini'

// Generates flashcards on demand via Gemini — started by a collaborator,
// completed here to route through the app's shared Gemini client (retry
// handling included) instead of duplicating a raw fetch call. Not yet
// wired into any page.
export async function generateFlashcards(subject, topic, count = 5) {
  const prompt = `You are an expert GCSE and A-Level tutor. Generate exactly ${count} flashcards for the subject "${subject}" focused on the topic "${topic}".

Format your response as ONLY a valid JSON array with no additional text. Each flashcard must have:
- "question": A clear, focused question (2-3 sentences max)
- "answer": A concise explanation (3-5 sentences, simple language)

Example format:
[
  {
    "question": "What is photosynthesis?",
    "answer": "Photosynthesis is the process by which plants use sunlight to make food. It converts light energy into chemical energy in glucose."
  }
]

Make answers accessible for GCSE/A-Level students. Avoid jargon where possible.`

  const text = await askGemini(prompt)
  const jsonText = text.replace(/^```json\s*|```$/g, '').trim()

  let cards
  try {
    cards = JSON.parse(jsonText)
  } catch (e) {
    throw new Error('Gemini returned a response that could not be parsed as flashcards.')
  }

  if (!Array.isArray(cards)) {
    throw new Error('Gemini response was not a flashcard array.')
  }

  return cards
}
