import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const font = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSH Dynamic Blog",
  description: "Created with ❤️ by mshsheikh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "#f2f2f2"}} className={`${font.className} ${font.className} antialiased`}>
        <Navbar/>
        <div className="max-w-[1500px] mx-auto md:px-10 px-5">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
