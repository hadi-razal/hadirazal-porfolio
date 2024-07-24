"use client";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { useState } from "react";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

interface ChatMessage {
    role: "user" | "model";
    text: string;
}

export default function Home() {
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [prompt, setPrompt] = useState<string>("");

    async function runChat(prompt: string) {
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

        const chat = model.startChat({
            generationConfig,
            safetySettings,
            history: [
                {
                    role: "user",
                    parts: [{ text: "HELLO" }],
                },
                {
                    role: "model",
                    parts: [{ text: "Hello there! How can I assist you today?" }],
                },
            ],
        });

        const result = await chat.sendMessage(prompt);
        const response = await result.response.text();

        setChatHistory((prev) => [
            ...prev,
            { role: "user", text: prompt },
            { role: "model", text: response },
        ]);
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (prompt.trim() === "") return;
        runChat(prompt);
        setPrompt("");
    };

    return (
        <main className="flex min-h-screen max-h-screen flex-col items-center py-10 px-5 md:px-20">
            <h1 className="text-3xl font-bold mb-8">Chat with AI</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-md">
                <label htmlFor="prompt" className="text-gray-700">
                    What can I help you with today?
                </label>
                <input
                    type="text"
                    id="prompt"
                    placeholder="Ask me anything!"
                    name="prompt"
                    className="border border-gray-300 rounded-lg p-4 text-black"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                    Ask Bard
                </button>
            </form>
            {chatHistory.length > 0 && (
                <div className="mt-8 w-full max-w-md overflow-y-scroll">
                    <h2 className="text-2xl font-bold mb-4">Chat History</h2>
                    <div className="flex flex-col gap-4">
                        {chatHistory.reverse().map((message, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg ${message.role === "user" ? "bg-gray-200" : "bg-blue-100"
                                    }`}
                            >
                                <p className="text-gray-700">
                                    <strong>{message.role === "user" ? "You" : "AI"}:</strong> {message.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
