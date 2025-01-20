import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PointsProvider } from "@/context/PointsContext";

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
  title: "Quiz App",
  description: "Quiz App For Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon here */}
        {/* <link rel="icon" href="/public/images/profile-pic.png" /> */}
        {/* Optionally, if you want to use a PNG favicon */}
        <link rel="icon" type="image/png" href="../images/profile-pic.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PointsProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <SpeedInsights />
          <Footer />
        </PointsProvider>
      </body>
    </html>
  );
}
