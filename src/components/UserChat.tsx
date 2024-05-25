"use client";

import { useEffect } from "react";

export function UserChat({ message, id }: { message: string; id: string }) {
  useEffect(() => {
    const messageElement = document.getElementById(id);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id={id} className="animate-fade w-full justify-center">
      <div className="grid w-fit ml-auto">
        <div className="px-3 py-2 bg-indigo-600 rounded ">
          <h2 className="text-white text-sm font-normal leading-snug">
            {message}
          </h2>
        </div>
        <div className="justify-start items-center inline-flex">
          <h3 className="prose text-gray-500 text-xs font-normal leading-4 py-">
            You
          </h3>
        </div>
      </div>
    </div>
  );
}
