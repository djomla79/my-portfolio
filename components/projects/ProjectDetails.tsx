'use client';

import { Button } from '@heroui/react';

type Props = {
  project: {
    title: string;
    description: string;
    role: string;
    liveLink?: string;
    techs: string[];
    duration: string;
    team: string;
    status: 'live' | 'not-live' | string;
  };
};

const ProjectDetails = ({ project }: Props) => {
  const { title, description, role, liveLink, techs, duration, team, status } =
    project;
  return (
    <div className='max-w-3xl mx-auto px-4 py-4 md:py-12'>
      <h1 className='text-4xl font-bold mb-6'>{title}</h1>
      <p className='mb-4 text-gray-700'>
        <strong>Description:</strong> {description}
      </p>
      <p className='mb-4 text-gray-700'>
        <strong>My Role:</strong> {role}
      </p>
      <p className='mb-4 text-gray-700'>
        <strong>Duration:</strong> {duration}
      </p>
      <p className='mb-4 text-gray-700'>
        <strong>Team:</strong> {team}
      </p>
      <div className='flex mb-8 text-gray-700'>
        <strong>Technologies used:</strong>{' '}
        <div className='flex flex-wrap md:inline ml-0 md:ml-2'>
          {techs.length > 0 &&
            techs.map((tech) => (
              <div key={tech} className='pl-2'>
                {tech}
              </div>
            ))}
        </div>
      </div>

      {liveLink && status === 'live' && (
        <Button
          as='a'
          href={liveLink}
          target='_blank'
          rel='noopener noreferrer'
          variant='flat'
          className='bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white font-semibold rounded-[6px] px-6 py-3'
        >
          View Live Project
        </Button>
      )}
    </div>
  );
};

export default ProjectDetails;
