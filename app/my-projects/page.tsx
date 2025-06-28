import { Metadata } from 'next';
import MyProjects from '@/components/pages/MyProjects';

export const metadata: Metadata = {
  title: 'My Projects | Mladen Todorović',
  description:
    'Explore the diverse portfolio of projects by Mladen Todorović, including live applications, legacy systems, and other notable work.',
  keywords: [
    'Mladen Todorović',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Portfolio',
    'Projects',
    'Live Apps',
    'Legacy Projects',
  ],
  openGraph: {
    title: 'My Projects | Mladen Todorović',
    description:
      'Explore the diverse portfolio of projects by Mladen Todorović, including live applications, legacy systems, and other notable work.',
    url: 'https://your-actual-domain.com/my-projects',
    siteName: 'Mladen Todorović Portfolio',
    images: [
      {
        url: 'https://your-actual-domain.com/images/my-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Mladen Todorović - My Projects',
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

const ProjectsPage = () => {
  return <MyProjects />;
};

export default ProjectsPage;
