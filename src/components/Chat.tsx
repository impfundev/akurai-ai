"use client";

import { useChats } from "@/context/chats.store";
import { AIChat } from "@/components/AIChat";
import { UserChat } from "@/components/UserChat";

export function Chats() {
  const { messages } = useChats();

  return (
    <>
      {messages.map((message, i) => {
        const messageId = `message-${i}`;

        return message.who === "user" ? (
          <UserChat key={i} id={messageId} message={message.value} />
        ) : (
          <AIChat key={i} id={messageId} answere={message.value} />
        );
      })}
    </>
  );
}
