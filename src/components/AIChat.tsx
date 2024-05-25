"use client";

import Image from "next/image";
import { useEffect } from "react";

export function AIChat({ answere, id }: { answere: string; id: string }) {
  useEffect(() => {
    const messageElement = document.getElementById(id);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id={id} className="animate-fade w-full grid gap-4">
      <div className="flex gap-2.5 items-center">
        <Image
          src="/logo.png"
          alt="AI"
          className="w-10 h-11 object-contain"
          width={40}
          height={44}
        />
        <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
          Akurai AI
        </h5>
      </div>
      <div className="px-3.5 py-2 bg-gray-100 rounded-2xl justify-start max-w-[90vw] w-max items-center gap-3 inline-flex mb-2.5 overflow-x-auto">
        <div
          className="prose text-gray-900 text-sm font-normal leading-snug"
          dangerouslySetInnerHTML={{ __html: answere }}
        />
      </div>
    </div>
  );
}
