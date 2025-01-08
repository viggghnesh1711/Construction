import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import Navbar from "@/components/Navbar";
import "./globals.css";


const pop = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={pop.className}
      >
        {children}
      </body>
    </html>
  );
}
