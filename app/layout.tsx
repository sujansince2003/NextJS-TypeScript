import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import LocalFont from "next/font/local";
import Nav from "./Nav";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "700"],
});

const poppins = LocalFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={poppins.className}>
        <AuthProvider>
          <Nav />
          <main> {children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
