import { Metadata } from 'next';
import ProjectDetails from '@/components/projects/ProjectDetails';
import { LIVE_PROJECTS, OTHER_PROJECTS } from '@/lib/constants/my-projects';
import { toSlug } from '@/lib/utils/helper-functions';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const realParams = await params;
  const allProjects = [...LIVE_PROJECTS, ...OTHER_PROJECTS];
  const project = allProjects.find((p) => toSlug(p.title) === realParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found | My Projects | Mladen Todorović',
      description: 'The requested project could not be found.',
      robots: {
        index: false,
        follow: true,
        noarchive: true,
      },
    };
  }

  return {
    title: `${project.title} | My Projects | Mladen Todorović`,
    description:
      project.description ||
      'Detailed project description by Mladen Todorović.',
    keywords: [
      'Mladen Todorović',
      'Frontend Developer',
      'Full Stack Developer',
      'React Developer',
      'Portfolio',
      'Projects',
      project.title,
    ],
    openGraph: {
      title: project.title,
      description:
        project.description ||
        'Detailed project description by Mladen Todorović.',
      url: `https://my-portfolio-mladen-todorovic.vercel.app/my-projects/${realParams.slug}`,
      images: [
        {
          url:
            project.imageUrl ||
            'https://my-portfolio-mladen-todorovic.vercel.app/my-projects.png',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description:
        project.description ||
        'Detailed project description by Mladen Todorović.',
      images: [
        project.imageUrl || 'https://tvoj-portfolio.com/default-og-image.jpg',
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const ProjectPage = async ({ params }: Props) => {
  const realParams = await params;
  const allProjects = [...LIVE_PROJECTS, ...OTHER_PROJECTS];
  const project = allProjects.find((p) => toSlug(p.title) === realParams.slug);

  if (!project) {
    return (
      <main className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-3xl font-semibold mb-4'>Project Not Found</h1>
        <p className='text-gray-600'>
          The project you are looking for does not exist.
        </p>
      </main>
    );
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
