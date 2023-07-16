import { Configuration, OpenAIApi } from "openai";

const OpenaiKey = import.meta.env.VITE_GPT3_API_KEY;

export const requestGPT = async (userInput) => {

    try {
        const configuration = new Configuration({
            apiKey: OpenaiKey,
        });

        const openai = new OpenAIApi(configuration);
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: `${userInput}`
            }],
        });

        return {
            assistant: completion.data.choices[0].message.role,
            content: completion.data.choices[0].message.content
        }
    } catch (error) {

        return { error: error.message }
    }
}
