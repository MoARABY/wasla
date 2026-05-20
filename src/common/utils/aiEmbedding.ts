import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export const getGeminiEmbedding = async (text: string): Promise<number[]> => {
try {
    const response = await ai.models.embedContent({
        model: 'gemini-embedding-2',
        contents: text,
    })
    if (response && response.embeddings?.[0]?.values) {
        return response.embeddings[0].values
    }
    
    throw new Error("Failed to generate embedding array")
} catch (error) {
    console.error("Gemini Embedding Error inside Utils:", error)
    throw error
}
}