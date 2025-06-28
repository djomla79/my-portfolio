import { Metadata } from 'next';
import Hero from '../components/pages/Hero';

export const metadata: Metadata = {
  title: 'Mladen Todorovic | Portfolio',
  description:
    'Portfolio of Mladen Todorovic, an experienced Frontend and Full Stack Developer skilled in React, Next.js, and modern web technologies.',
  keywords: [
    'Mladen Todorović',
    'Mladen Todorovic',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
  ],
  openGraph: {
    title: 'Mladen Todorovic | Portfolio',
    description:
      'Portfolio of Mladen Todorovic, an experienced Frontend and Full Stack Developer.',
    url: 'https://my-portfolio-mladen-todorovic.vercel.app',
    siteName: 'Mladen Todorovic Portfolio',
    images: [
      {
        url: 'https://my-portfolio-mladen-todorovic.vercel.app/images/home.png',
        width: 1200,
        height: 630,
        alt: 'Mladen Todorovic Portfolio',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'H_53LpgYC75gy-aYmqhM43C0xgUCxptcEDHKdwkLcUY',
  },
};

const HomePage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;
