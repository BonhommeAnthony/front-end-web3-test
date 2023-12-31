import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ArkMarket",
    description: "Frontend test for ArkMarket",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Navbar />
                    {children}
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
