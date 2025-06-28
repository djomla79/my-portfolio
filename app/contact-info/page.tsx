import { Metadata } from 'next';
import ContactInfo from '@/components/pages/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Info | Mladen Todorović',
  description:
    'Find all the ways to get in touch with Mladen Todorović, experienced Frontend and Full Stack Developer.',
  keywords: [
    'Mladen Todorović',
    'Mladen Todorovic',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Portfolio',
    'Contact',
    'Get in Touch',
  ],
  openGraph: {
    title: 'Contact Info | Mladen Todorović',
    description:
      'Find all the ways to get in touch with Mladen Todorović, experienced Frontend and Full Stack Developer.',
    url: 'https://my-portfolio-mladen-todorovic.vercel.app/contact-info',
    siteName: 'Mladen Todorović Portfolio',
    images: [
      {
        url: 'https://my-portfolio-mladen-todorovic.vercel.app/images/contact-info.png',
        width: 1200,
        height: 630,
        alt: 'Mladen Todorović - Contact Info',
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

const ContactPage = () => {
  return <ContactInfo />;
};

export default ContactPage;
