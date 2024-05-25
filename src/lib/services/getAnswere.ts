"use server";

import { getGroqChatCompletion } from "../groq";
import markdownit from "markdown-it";
import highlight from "markdown-it-highlightjs";

export async function getAnswere(message: string) {
  const markdown = markdownit().use(highlight);
  const ask = await getGroqChatCompletion(message);

  const response = ask.choices.find(
    (choice) => choice.message.role === "assistant"
  );
  const result = markdown.render(response!.message.content!);

  return result;
}
