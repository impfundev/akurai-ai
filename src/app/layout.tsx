import "./globals.css";
import "./highlighter.css";

import type { Metadata } from "next";
import { FormMessage } from "@/components/FormMessage";

export const metadata: Metadata = {
  title: "Akurai AI",
  description:
    "Akurai AI is a chat code generator app that uses AI-powered technology to generate code snippets for various programming languages. With Akurai AI, developers can quickly and easily generate code for their projects, saving time and increasing productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen flex flex-col justify-between">
          {children}
          <FormMessage />
        </main>
      </body>
    </html>
  );
}
