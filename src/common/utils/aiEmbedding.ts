import {GoogleGenerativeAI} from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export const getGeminiEmbedding = async (text: string) => {
    try {
        const model = genAI.getGenerativeModel({ model: "text-embedding-004" })

        const result = await model.embedContent(text)
        const embedding = result.embedding
        return embedding.values
    } catch (error) {
        console.error("Gemini Embedding Error:", error)
        throw error
    }
}