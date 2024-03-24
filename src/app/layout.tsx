import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./theme-provider";
import { Header } from "./header";
import { Footer } from "./footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexleap-Assignment",
  description: "Hexleap - Frontend-Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
  
    <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >  
       <Header />
         <div className="container">{children}</div>
        
 <Footer />
      </ThemeProvider>
    </body>
  </html>
  );
}


