import type { Metadata } from "next";
import "./style/global.css"
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: "Have I been cracked?",
  description: "Check if your WiFi password has been cracked",
};
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center min-h-screen bg-background text-white font-oxygen bg-neon bg-repeat w-screen bg-cover">
        {children}
      </body>
    </html>
  );
}
