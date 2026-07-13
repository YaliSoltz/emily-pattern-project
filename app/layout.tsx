import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const hebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-hebrew",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pattern collection — Emily Kryzewski",
  description:
    "Pattern collection — a textile collection by Emily Kryzewski, reinterpreting the handwritten letters, stamps and postal marks of pre-digital communication into contemporary scarf prints for Marni.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hebrew.variable}>
      <body>{children}</body>
    </html>
  );
}
