import { Chats } from "@/components/Chat";
import { Introduction } from "@/components/Introduction";

export default function ChatRoom() {
  return (
    <div className="overflow-y-auto px-6 md:px-10 pt-10">
      <Introduction />
      <Chats />
    </div>
  );
}
