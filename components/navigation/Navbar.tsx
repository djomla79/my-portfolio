'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@heroui/react';
import { NAVBAR_ROUTES } from '@/lib/constants/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className='bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white sticky top-0 z-10 shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>
        <h1 className='text-[16px] md:text-xl font-semibold'>
          Portfolio | Mladen Todorović
        </h1>

        <nav className='hidden md:flex space-x-2'>
          {NAVBAR_ROUTES.map(({ label, route }) => {
            const isActive = pathname === route;
            return (
              <Button
                key={label}
                variant='flat'
                as={Link}
                href={route}
                size='md'
                className={`!text-white !border-none focus:!outline-none focus:!ring-0 hover:!bg-white/10 active:!text-gray-300 p-2 rounded-[6px] ${
                  isActive ? 'font-semibold' : 'font-normal'
                }`}
              >
                {label}
              </Button>
            );
          })}
        </nav>

        <button
          className='md:hidden focus:outline-none'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <svg
            className='w-8 h-8 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] px-4 pb-4'>
          <nav className='flex flex-col space-y-2 mt-2'>
            {NAVBAR_ROUTES.map(({ label, route }) => {
              const isActive = pathname === route;
              return (
                <Link
                  key={label}
                  href={route}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded hover:bg-white/20 ${
                    isActive ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
