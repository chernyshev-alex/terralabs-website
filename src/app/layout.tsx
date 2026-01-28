import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terra Labs - AI/RAG, Big Data & Go/Java Development",
  description: "Expert AI/RAG solutions, Big Data analytics, and high-performance Go/Java development by Terra Labs in Krakow, Poland.",
  keywords: ["Terra Labs", "AI", "RAG", "Big Data", "Go", "Java", "LLM", "Data Engineering", "Krakow", "Poland"],
  authors: [{ name: "Alexander Chernyshev" }],
  openGraph: {
    title: "Terra Labs - AI/RAG, Big Data & Go/Java Development",
    description: "Expert solutions in AI/RAG, Big Data, and Go/Java development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra Labs",
    description: "AI/RAG, Big Data & Go/Java Development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
