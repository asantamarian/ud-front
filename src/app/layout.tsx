import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Unión Dragones",
    description: "Club Deportivo Unión Dragones",
    icons: [{ rel: "icon", url: "/brand/icono.ico" }],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-theme="negro" className={`${GeistSans.variable}`}>

        <body className="bg-black">


                {children}


        </body>
        </html>
    );
}
