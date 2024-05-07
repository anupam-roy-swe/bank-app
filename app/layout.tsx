import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
const IBMPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ibm-sans",
});

export const metadata: Metadata = {
    title: "Bank Application",
    description: "Modern banking platform for everything",
    icons: {
        icon: "/icons/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${inter.variable}${IBMPlexSans.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
