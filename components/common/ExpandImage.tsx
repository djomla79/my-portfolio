'use client';

import { useState } from 'react';
import Image from 'next/image';

type ExpandImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoomWidth?: number;
  zoomHeight?: number;
};

const ExpandImage = ({
  src,
  alt,
  width,
  height,
  zoomWidth = 800,
  zoomHeight = 600,
}: ExpandImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='cursor-pointer rounded-md'
        onClick={() => setIsZoomed(true)}
      />

      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className='fixed inset-0 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] flex items-center justify-center z-50 cursor-zoom-out'
        >
          <Image
            src={src}
            alt={alt}
            width={zoomWidth}
            height={zoomHeight}
            className='rounded-md'
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setIsZoomed(false)}
            className='absolute top-8 right-8 text-white text-3xl font-bold cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center'
            aria-label='Close expand image'
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default ExpandImage;
