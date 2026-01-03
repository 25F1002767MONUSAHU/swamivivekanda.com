
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are a dedicated scholar of Swami Vivekananda's teachings and life. 
Your tone is respectful, insightful, and empowering. 
Reference his Complete Works, the concept of "Practical Vedanta", the four Yogas (Karma, Bhakti, Raja, Jnana), and his vision for the youth and women. 
Help users apply his timeless wisdom to modern challenges. 
When asked about his biography, provide rich, historical details. 
Always encourage the user to "Arise, awake, and stop not till the goal is reached."
If the user says 'Namaste' or greetings, respond with a warm, spiritual greeting in character.`;

export const geminiService = {
  async *streamWisdom(message: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const result = await chat.sendMessageStream({ message });
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      yield c.text || "";
    }
  },

  async generateReflection(prompt: string, taskType: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Context: Learning from Swami Vivekananda.
Task: ${taskType}
Prompt: ${prompt}

Provide a deep philosophical reflection or structured draft based on the above.`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 4000 },
      }
    });
    return response.text || "";
  },

  async generateImage(prompt: string, aspectRatio: "1:1" | "16:9" | "9:16") {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio,
        },
      },
    });

    const candidate = response.candidates?.[0];
    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data || "";
          return `data:${part.inlineData.mimeType || 'image/png'};base64,${base64EncodeString}`;
        }
      }
    }
    throw new Error("No image data found in model response.");
  },

  async searchGrounding(query: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Find accurate historical information or current relevance regarding: ${query}. Focus on Swami Vivekananda and Ramakrishna Mission.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    const sources = groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Archive Record',
      uri: chunk.web?.uri || '#'
    })) || [];

    return {
      text: response.text || "",
      sources: sources.filter((s: any) => s.uri !== '#')
    };
  }
};
