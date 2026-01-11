import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoderKit | Learn. Practice. Build. - Mobile Coding IDE",
  description: "Master coding with visual learning. Python, Java, Go, C with 20+ visualizers, ghost-code practice, and real offline runtimes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "CoderKit",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Master coding with visual learning. Python, Java, Go, C with 20+ visualizers, ghost-code practice, and real offline runtimes."
      },
      {
        "@type": "Organization",
        "name": "Shivam App Studio",
        "url": "https://coderkit.shivamappstudio.com",
        "logo": "https://coderkit.shivamappstudio.com/assets/logo.png"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
         <JsonLd data={schema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
