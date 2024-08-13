import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Sidebar from "~/components/sidebar";
import Navbar from "~/components/navbar";

export const metadata: Metadata = {
  title: "Unión Dragones",
  description: "Club deportivo Unión Dragones",
  icons: [{ rel: "icon", url: "/brand/icono.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="negro" className={`${GeistSans.variable}`}>

    <body>
    <div className="flex h-screen">
      <Sidebar />
      <div className="overflow-y-auto w-lvw">
        {children}
      </div>
    </div>
    </body>
    </html>
  );
}
