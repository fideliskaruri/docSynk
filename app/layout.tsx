import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/TopNavbar/NavBar";



export const metadata: Metadata = {
  title: "DocSynk",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="flex flex-col items-center justify-center w-full flex-1 p-20">
          {children}
        </main>
      </body>
    </html>
  );
}
