import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUNU DIGITAL | Formation IA Vidéo Gratuite",
  description: "Apprenez à créer des vidéos virales avec l'intelligence artificielle. 3 vidéos gratuites pour transformer votre business en créateur de contenu IA.",
  metadataBase: new URL("https://sunudigital.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SUNU DIGITAL | Formation IA Vidéo Gratuite",
    description: "3 vidéos gratuites pour maîtriser la création vidéo avec l'IA. Sans montrer votre visage. Sans compétences techniques.",
    url: "https://sunudigital.vercel.app",
    siteName: "SUNU DIGITAL",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "SUNU DIGITAL - Formation IA Vidéo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUNU DIGITAL | Formation IA Vidéo Gratuite",
    description: "3 vidéos gratuites pour maîtriser la création vidéo avec l'IA.",
    images: ["/hero.png"],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Security / Anti-Download Script */}
        <Script id="security-script" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined') {
              document.addEventListener('contextmenu', event => event.preventDefault());
              document.addEventListener('dragstart', event => event.preventDefault());
              document.addEventListener('selectstart', event => event.preventDefault());
            }
          `}
        </Script>

        {/* Meta Pixel (Facebook Ads) */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'VOTRE_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=VOTRE_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
