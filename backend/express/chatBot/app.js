import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});

import express from "express";
import { get } from "http";
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const results = await main();
  res.send(results);
});

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion.choices[0];
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Tell me a joke on Vladimir Ali Putin.",
      },
    ],
    model: "llama3-8b-8192",
  });
}

// main();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
