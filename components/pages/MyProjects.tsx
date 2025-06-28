'use client';

import Link from 'next/link';
import { Button } from '@heroui/react';
import DownloadButton from '../common/DownloadButton';
import ExpandImage from '../common/ExpandImage';
import {
  LEGACY_PROJECTS,
  LIVE_PROJECTS,
  OTHER_PROJECTS,
} from '@/lib/constants/my-projects';
import { toSlug } from '@/lib/utils/helper-functions';

const MyProjects = () => {
  const { title, description, cvLink } = LEGACY_PROJECTS;

  return (
    <div className='py-6 px-4 md:py-12 md:px-42 flex flex-col items-start text-left max-w-3xl mx-auto'>
      <div className='w-full'>
        <h2 className='text-3xl font-semibold mb-3 text-center md:text-left'>
          Live Projects
        </h2>
        <div className='space-y-4'>
          {LIVE_PROJECTS.length === 0 && (
            <p className='text-gray-600 text-center md:text-left'>
              No live projects available yet.
            </p>
          )}
          {LIVE_PROJECTS.map(({ title, imageUrl }) => (
            <div
              key={title}
              className='flex flex-col md:flex-row items-center justify-between gap-3'
            >
              <div className='flex flex-col items-center md:items-start'>
                <span className='text-xl font-semibold text-[var(--primary-dark)]'>
                  {title}
                </span>
                <div className='flex items-center space-x-6 mt-2'>
                  <ExpandImage
                    src={imageUrl}
                    alt={title}
                    width={160}
                    height={120}
                    zoomWidth={1000}
                    zoomHeight={700}
                  />
                </div>
              </div>

              <Link href={`/my-projects/${toSlug(title)}`}>
                <Button className='flex px-4 py-2 min-w-fit bg-gradient-to-r font-semibold from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-[6px] hover:brightness-110 transition'>
                  Project Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full my-12'>
        <h2 className='text-3xl font-semibold mb-3 text-center md:text-left'>
          Other Projects
        </h2>
        <div className='space-y-6'>
          {OTHER_PROJECTS.length === 0 ? (
            <p className='text-gray-600 text-center md:text-left'>
              No other projects to show.
            </p>
          ) : (
            OTHER_PROJECTS.map(({ title }) => (
              <div
                key={title}
                className='flex flex-col mb-2 items-center md:items-start'
              >
                <Link
                  href={`/my-projects/${toSlug(title)}`}
                  className='text-[var(--primary-light)] underline hover:text-[var(--primary-dark)]'
                >
                  {title}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <div className='w-full mb-3'>
        <h2 className='text-3xl font-semibold mb-4 text-center md:text-left'>
          {title}
        </h2>
        <div className='flex space-y-4'>
          <div
            key={title}
            className='flex flex-col md:flex-row items-center md:items-center gap-3'
          >
            <p className='mb-4 md:mb-0 text-gray-700 text-center md:text-left mr-0 md:mr-2'>
              {description}
            </p>
            <DownloadButton cvLink={cvLink} title='Download My CV' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
