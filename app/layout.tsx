import type { Metadata } from "next";
import localFont from "next/font/local";
import AnimationProvider from "@/components/AnimationProvider";
import "./globals.css";

const dmMono = localFont({
  src: [
    { path: "./fonts/dm-mono-400.woff2", weight: "400" },
    { path: "./fonts/dm-mono-500.woff2", weight: "500" },
  ],
  variable: "--font-dm-mono",
});

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "400 800",
});

export const metadata: Metadata = {
  title: "Sivabalan | AI Engineer & Software Developer",
  description: "Sivabalan builds thoughtful software at the intersection of full-stack engineering and generative AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
