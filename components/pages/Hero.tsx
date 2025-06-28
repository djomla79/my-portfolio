import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mladen Todorovic | Portfolio',
  description:
    'Portfolio of Mladen Todorovic, an experienced Frontend and Full Stack Developer skilled in React, Next.js, and modern web technologies.',
  keywords: [
    'Mladen Todorović',
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
};

const Hero = () => {
  return (
    <>
      <section className='flex flex-col items-center text-center py-16'>
        <div className='w-36 h-36 relative'>
          <Image
            src='/images/profile-picture.png'
            alt='Mladen Todorovic'
            fill
            className='rounded-full object-cover border-4 border-[var(--primary-light)]'
          />
        </div>
        <h2 className='mt-6 text-2xl md:text-6xl font-bold'>{`Hi, I'm Mladen`}</h2>
        <p className='mt-4 max-w-2xl text-lg md:text-xl text-gray-700'>
          {`Experienced and motivated Frontend / Full Stack Developer, passionate about building high quality web applications.`}
        </p>
      </section>
    </>
  );
};

export default Hero;
