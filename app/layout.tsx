import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Hadi Razal | Software Developer",
  description: "Welcome to the portfolio of Hadi Razal, a dedicated software developer specializing in full-stack development, modern web technologies, and innovative solutions.",
  keywords: "Hadi Razal, Software Developer, Full-Stack Developer, Web Development, Portfolio, JavaScript, React, Node.js, Next.js,firebase,supabase,mysql,typescript"
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
          href="/public/icon.ico"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/public/apple-touch-icon.png"
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
