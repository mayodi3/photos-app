import "./globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { AuthProvider } from "./contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maphotos",
  description: "Photography, Event Management, and Branding Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      <Header />
        {children}
        <Footer />
        <Chatbot />
      </AuthProvider>
      </body>
    </html>
  );
}
