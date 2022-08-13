import { useEffect, useRef, useState } from 'react'
import { config } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'
import AnimatedChildren from '../animated-children'

const About = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.5 })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible) setOpen(true)
  }, [isVisible])

  return (
    <>
      <div className='flex flex-col justify-center place-items-center' ref={ref}>
        <AnimatedChildren
          containerStyle='max-w-sm md:max-w-lg p-2'
          outerStyle='relative w-full'
          trailConfig={{
            config: config.stiff,
            opacity: open ? 1 : 0,
            x: open ? 0 : 40,
            from: { opacity: 0, x: 40 },
          }}>
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
        </AnimatedChildren>
      </div>
    </>
  )
}

export default About
