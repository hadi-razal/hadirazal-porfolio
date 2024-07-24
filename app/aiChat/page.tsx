"use client";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';



const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

export default function AiChat() {

    const router = useRouter()


    const [chatHistory, setChatHistory] = useState<{ prompt: string; response: string }[]>([]);
    const [prompt, setPrompt] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function runChat(prompt: string) {
        setIsLoading(true);

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];

        const chat = await model.startChat({
            generationConfig,
            safetySettings,
        });

        const result = await chat.sendMessage(prompt);
        const response = await result.response.text();

        setChatHistory((prev) => [
            ...prev,
            { prompt, response },
        ]);
        setIsLoading(false);
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (prompt.trim() === "") return;
        await runChat(prompt);
        setPrompt("");
    };

    const formatResponse = (response: string) => {
        return response.split('\n').filter(paragraph => paragraph).map((paragraph, index) => (
            <p key={index} className="text-gray-400 mb-2">{paragraph}</p>
        ));
    };

    return (
        <main className="realtive flex flex-col min-h-screen items-center text-white px-5 w-full md:px-10 lg:px-20">


            <div className="absolute top-5 left-5 flex items-center cursor-pointer z-20" onClick={() => router.back()}>
                <IoMdArrowRoundBack className="text-2xl text-gray-300" />
                <p className="ml-2 text-lg text-gray-300 font-medium">Back</p>
            </div>

            <div className="sticky top-0 bg-black z-10 w-full pb-5 flex flex-col items-center justify-center pt-5">
                <h1 className="text-4xl font-bold mb-2">Chat with AI</h1>

                <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-4 w-full max-w-md rounded-lg shadow-md">
                    <label htmlFor="prompt" className="text-gray-300">
                        What can I help you with today?
                    </label>
                    <input
                        type="text"
                        id="prompt"
                        placeholder="Ask me anything!"
                        name="prompt"
                        className="border w-full border-gray-300 rounded-lg p-4 text-black focus:outline-none"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-gray-800 w-full text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-900"
                    >
                        {isLoading ? "Generating..." : "Ask Bard "}
                    </button>
                </form>

                {chatHistory.length > 0 && <h2 className="text-2xl font-bold py-2">Chat History</h2>}


            </div>



            {chatHistory.length > 0 && (
                <div className="mt-4 w-full rounded-lg shadow-md px-2 h-full" >
                    <div className="flex flex-col-reverse gap-1 h-full">
                        {chatHistory.map((message, index) => (
                            <div
                                key={index}
                                className="p-2 h-full"
                            >
                                <p className="text-gray-400">
                                    <strong>You : </strong>
                                    {message.prompt}
                                </p>
                                <div className="text-gray-700">
                                    <strong>AI : </strong>
                                    {formatResponse(message.response)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}