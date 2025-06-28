import Image from 'next/image';

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
