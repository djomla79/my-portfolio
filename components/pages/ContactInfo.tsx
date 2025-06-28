'use client';

import { Button } from '@heroui/react';
import { CONTACT_INFO } from '@/lib/constants/contact-me';

const Contact = () => {
  return (
    <div className='py-6 px-4 md:py-12 md:px-42 flex flex-col items-start text-left max-w-3xl mx-auto'>
      <div className='w-full max-w-2xl space-y-12'>
        <section>
          <h3 className='text-2xl font-semibold mb-12 text-left'>
            Contact Information
          </h3>
          <div className='text-left list-none space-y-3'>
            {CONTACT_INFO.map(({ label, value }) => {
              const isLink = label === 'Github' || label === 'Linkedin';
              return (
                <div key={label}>
                  <strong>{label}:</strong>{' '}
                  {isLink ? (
                    <Button
                      as='a'
                      href={value}
                      target='_blank'
                      rel='noopener noreferrer'
                      variant='flat'
                      className='text-[var(--primary-light)] hover:text-[var(--primary-dark)] p-0'
                    >
                      {value}
                    </Button>
                  ) : (
                    value
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
