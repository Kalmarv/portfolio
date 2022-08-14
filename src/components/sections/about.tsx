const About = () => {
  return (
    <>
      <div id='about' className='flex flex-col justify-center place-items-center'>
        <div className='max-w-sm md:max-w-lg p-2'>
          <h1 className='font-bold text-2xl md:text-3xl'>About Me</h1>
          <div className='p-2'></div>
          <section>
            <p className='md:text-xl'>
              Growing up, I always had an obsession for technology. Jailbreaking my phone, creating
              Minecraft mods, and making small websites and games was a big part of my childhood and
              developed my problem solving skills.
            </p>
            <div className='p-1'></div>
            <p className='md:text-xl'>
              Today I&apos;m a fullstack dev, working on creating interactive and responsive web
              apps with a focus on user experience and desgin.
            </p>
            <div className='p-1'></div>
            <p className='md:text-xl'>
              Some of my interests include creating and consuming music,{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='font-bold underline'
                href='https://art.kalmarv.xyz/'>
                generative art
              </a>
              , and 3D modeling.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default About
