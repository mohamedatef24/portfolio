import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Atef",
  description: "Portfolio of Mohamed Atef, Machine Learning Engineer. Explore projects, skills, certifications, and experience in AI, web development, and more.",
  keywords: [
    "Mohamed Atef", "Portfolio", "Machine Learning", "AI", "Artificial Intelligence", "Web Development", "React", "Next.js", "Deep Learning", "Projects", "Certifications", "Skills", "Cairo University", "Frontend", "Backend", "Software Engineer"
  ],
  authors: [{ name: "Mohamed Atef", url: "https://www.linkedin.com/in/mohamed-atef-mawad" }],
  creator: "Mohamed Atef",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true, noimageindex: false }
  },
  openGraph: {
    title: "Mohamed Atef",
    description: "Portfolio of Mohamed Atef, Machine Learning Engineer. Explore projects, skills, certifications, and experience in AI, web development, and more.",
    url: "https://your-portfolio-domain.com/",
    siteName: "Mohamed Atef Portfolio",
    images: [
      {
        url: "/my_photo.jpg",
        width: 800,
        height: 600,
        alt: "Mohamed Atef Photo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Atefr",
    description: "Portfolio of Mohamed Atef, Machine Learning Engineer. Explore projects, skills, certifications, and experience in AI, web development, and more.",
    creator: "@your_twitter_handle",
    images: [
      {
        url: "/my_photo.jpg",
        width: 800,
        height: 600,
        alt: "Mohamed Atef Photo"
      }
    ]
  },
  alternates: {
    canonical: "https://your-portfolio-domain.com/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/my_photo.jpg" type="image/jpeg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
