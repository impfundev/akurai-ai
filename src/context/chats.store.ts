import { create } from "zustand";

type Message = {
  who: "AI" | "user";
  value: string;
};

type Store = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  messages: Message[];
  setMessage: (value: string, who: "AI" | "user") => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

export const useChats = create<Store>()((set, get) => ({
  loading: false,
  setLoading: (loading: boolean) => set(() => ({ loading })),
  messages: [],
  setMessage: (value: string, who: "AI" | "user") => {
    get().setLoading(true);
    set(() => ({
      messages: [
        ...get().messages,
        {
          who,
          value,
        },
      ],
    }));
    get().setLoading(false);
  },
  inputValue: "",
  setInputValue: (value: string) => set(() => ({ inputValue: value })),
}));
