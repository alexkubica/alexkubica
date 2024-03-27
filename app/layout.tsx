import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Kubica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </Head>
      <body>
        {/* kubica add analytics */}
        {children}
      </body>
    </html>
  );
}
