import { Metadata } from 'next';
import AboutMe from '@/components/pages/AboutMe';

export const metadata: Metadata = {
  title: 'About Me | Mladen Todorović',
  description:
    'Learn more about Mladen Todorović, a passionate Frontend and Full Stack Developer skilled in React, Next.js, and modern web technologies.',
  keywords: [
    'Mladen Todorović',
    'Mladen Todorovic',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Portfolio',
    'Next.js Developer',
  ],
  openGraph: {
    title: 'About Me | Mladen Todorović',
    description:
      'Learn more about Mladen Todorović, a passionate Frontend and Full Stack Developer skilled in React and Next.js.',
    url: 'https://my-portfolio-mladen-todorovic.vercel.app/about-me',
    siteName: 'Mladen Todorović Portfolio',
    images: [
      {
        url: 'https://my-portfolio-mladen-todorovic.vercel.app/images/about-me.png',
        width: 1200,
        height: 630,
        alt: 'Mladen Todorović - About Me',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const AboutPage = () => {
  return <AboutMe />;
};

export default AboutPage;
