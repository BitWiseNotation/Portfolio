import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components 
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react"

const jetBrainsMono = JetBrains_Mono({
  src: "./next/font/google",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})

export const metadata = {
  title: "Yudhvir Singh",
  description: "Portfolio site of Yudhvir Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetBrainsMono.variable}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
