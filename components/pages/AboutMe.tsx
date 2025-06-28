'use client';

import { Badge } from '@heroui/react';
import {
  SKILLS,
  CAREER_INFO,
  PERSONAL_INFO,
  DOWNLOAD_LINK,
} from '@/lib/constants/about-me';
import DownloadButton from '../common/DownloadButton';

const About = () => {
  return (
    <div className='py-6 px-4 md:py-12 md:px-42 flex flex-col items-start text-left max-w-3xl mx-auto'>
      <div className='w-full max-w-2xl space-y-12'>
        <section>
          <h3 className='text-2xl font-semibold mb-4 text-left'>
            Personal Information
          </h3>
          <ul className='text-left list-none space-y-1'>
            {PERSONAL_INFO.map(({ label, value }) => (
              <li key={label}>
                <strong>{label}:</strong> {value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className='text-2xl font-semibold mb-4 text-left'>
            Professional Experience
          </h3>
          <div className='list-decimal list-inside text-left space-y-4'>
            {CAREER_INFO.map(({ company, location, role, period }, idx) => (
              <div key={idx} className='mb-4'>
                <div>
                  <strong>Company:</strong> {company}
                </div>
                <div>
                  <strong>Location:</strong> {location}
                </div>
                <div>
                  <strong>Role:</strong> {role}
                </div>
                <div>
                  <strong>Period:</strong> {period}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className='text-2xl font-semibold mb-4 text-left'>Skills</h3>
          <div className='flex flex-wrap gap-2'>
            {SKILLS.map((skill) => (
              <Badge key={skill} variant='shadow' color='success'>
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className='mt-8 text-left'>
          <DownloadButton cvLink={DOWNLOAD_LINK} title='Download My CV' />
        </section>
      </div>
    </div>
  );
};

export default About;
