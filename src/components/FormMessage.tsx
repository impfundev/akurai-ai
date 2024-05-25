"use client";

import { useChats } from "@/context/chats.store";
import { getAnswere } from "@/lib/services/getAnswere";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export function FormMessage() {
  const { setMessage, setInputValue, inputValue, loading } = useChats();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (inputValue) {
          setMessage(inputValue, "user");
          setInputValue("");
          getAnswere(inputValue).then((res) => setMessage(res, "AI"));
        }
      }}
      className="animate-fade-up bg-white w-full py-4 px-6 border-t rounded-3xl items-center gap-6 inline-flex justify-between shadow-t-md"
    >
      <div className="w-full flex items-center gap-2">
        <input
          disabled={loading}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full text-black text-xs font-medium leading-4 focus:outline-none"
          placeholder="Type here..."
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={loading}
          type="submit"
          className="items-center flex px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow "
        >
          <h3 className="text-white text-xs font-semibold leading-4 px-2">
            Send
          </h3>
          <PaperPlaneIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </form>
  );
}
