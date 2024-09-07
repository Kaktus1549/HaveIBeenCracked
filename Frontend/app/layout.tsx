import type { Metadata } from "next";
import "./style/global.css"

export const metadata: Metadata = {
  title: "Have I been cracked?",
  description: "Check if your WiFi password has been cracked",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-">
      <body className="flex flex-col items-center min-h-screen bg-background text-white font-oxygen bg-neon bg-repeat">
        {children}
      </body>
    </html>
  );
}
