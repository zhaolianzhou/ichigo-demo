import localFont from "next/font/local";
import "@/styles/main.scss";

import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NinjaTech - Homebrew",
  description: "NinjaTech model based on Homebrew Research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon and Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/ninja_logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/ninja_logo.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        {/*<link*/}
        {/*  rel="mask-icon"*/}
        {/*  href="/favicons/safari-pinned-tab.svg"*/}
        {/*  color="#de8f1b"*/}
        {/*/>*/}
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
