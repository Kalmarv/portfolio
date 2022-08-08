import { useAtom } from 'jotai'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useTrail, config, a, useSpring } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'
import { pageAtom } from '../../utils/store'
import { useDrag, useHover } from '@use-gesture/react'

type animationProps = {
  open: boolean
  delay?: number
  children: JSX.Element[]
  containerStyle?: string
  outerStyle?: string
  innerStyle?: string
}

const AnimatedChildren: React.FC<animationProps> = ({
  open,
  children,
  delay,
  containerStyle,
  outerStyle,
  innerStyle,
}) => {
  const trail = useTrail(children.length, {
    config: config.stiff,
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
    from: { opacity: 0, x: 40 },
    delay: open ? delay ?? 0 : 0,
  })
  return (
    <div className={containerStyle ?? ''}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className={outerStyle ?? ''} style={style}>
          <a.div className={innerStyle ?? ''}>{children[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const AnimatedIcons: React.FC<animationProps> = ({
  open,
  children,
  delay,
  containerStyle,
  outerStyle,
  innerStyle,
}) => {
  const [trail, api] = useTrail(
    children.length,
    () => ({
      config: config.stiff,
      opacity: open ? 1 : 0,
      y: open ? 0 : 40,
      from: { opacity: 0, y: 40 },
      delay: open ? delay ?? 0 : 0,
    }),
    [open]
  )

  return (
    <div className={containerStyle ?? ''}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className={outerStyle ?? ''} style={style}>
          <a.div className={innerStyle ?? ''}>{children[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  const [props, api] = useSpring(
    () => ({
      transform: 'rotateY(0deg)',
    }),
    []
  )

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <a.img
      onMouseEnter={() => api.start({ transform: 'rotateY(360deg)' })}
      onMouseLeave={() => api.start({ transform: 'rotateY(0deg)' })}
      style={{ ...props, transformStyle: 'preserve-3d' }}
      alt={icon}
      src={`/icons/${icon}.svg`}
      width={40}
      height={40}
    />
  )
}

const About = () => {
  const [, setPage] = useAtom(pageAtom)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.75 })
  const isVisible = !!entry?.isIntersecting
  const icons = [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Python',
    'Nextjs',
    'React',
    'Svelte',
    'Express',
    'Tailwind',
    'Postgres',
    'Git',
    'Node',
    'NPM',
    'Docker',
    'VSCode',
  ]

  useEffect(() => {
    if (isVisible) setPage(1)
  }, [isVisible, setPage])

  return (
    <>
      <div className='flex flex-col justify-center h-screen place-items-center' ref={ref}>
        <AnimatedChildren
          open={isVisible}
          containerStyle='max-w-sm p-2'
          outerStyle='relative w-full'>
          <h1 className='font-bold text-2xl'>About Me</h1>
          <div className='p-2'></div>
          <section>
            <p>
              Growing up, I always had an obsession for technology. Jailbreaking my phone, creating
              Minecraft mods, and making small websites and games was a big part of my childhood and
              developed my problem solving skills.
            </p>
            <div className='p-1'></div>
            <p>
              Today I&apos;m a fullstack dev, working on creating interactive and responsive web
              apps with a focus on user experience and desgin.
            </p>
            <div className='p-1'></div>
            <p>
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
          <div className='p-2'></div>
          <h1 className='font-bold text-2xl'>Tech Stack</h1>
          <div className='p-2'></div>
          <section>Here&apos;s some of the technologies I use and love the most.</section>
        </AnimatedChildren>
        <div className='p-4'></div>
        <AnimatedIcons open={isVisible} containerStyle='grid grid-cols-4 gap-6' delay={1000}>
          {icons.map((icon) => (
            <Icon key={icon} icon={icon} />
          ))}
        </AnimatedIcons>
      </div>
    </>
  )
}

export default About
