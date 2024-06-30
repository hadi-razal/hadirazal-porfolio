import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Hadi Razal | Software Developer",
  description: "Welcome to the portfolio of Hadi Razal, a dedicated software developer specializing in full-stack development, modern web technologies, and innovative solutions.",
  keywords: "Hadi Razal, Software Developer, Full-Stack Developer, Ponnai, Kerala, best software developer in Kerala, best developer, top developer in Kerala, top software developer in Kerala, best developers in Kerala, top developers in Kerala, Web Development, Portfolio, JavaScript, React, Node.js, Next.js, Firebase, Supabase, MySQL, TypeScript"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link
          rel="favicom"
          href="/icon.ico"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${poppins.className}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
