import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { useTrail, config, a, useSpring } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'
import { pageAtom } from '../../utils/store'

const MultipleElements: React.FC<{ open: boolean; delay?: number; children: JSX.Element[] }> = ({
  open,
  children,
  delay,
}) => {
  const trail = useTrail(children.length, {
    config: config.stiff,
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
    from: { opacity: 0, x: 40 },
    delay: open ? delay ?? 0 : 0,
  })
  return (
    <div className='max-w-sm p-2'>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className='relative w-full' style={style}>
          <a.div>{children[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const About = () => {
  const [, setPage] = useAtom(pageAtom)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.75 })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible) setPage(1)
  }, [isVisible, setPage])

  return (
    <>
      <div className='flex flex-col justify-center h-screen place-items-center' ref={ref}>
        <MultipleElements open={isVisible}>
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
          <h1 className='font-bold text-2xl'>Technology</h1>
          <div className='p-2'></div>
          <section>Here&apos;s some of the technologies I use and love the most.</section>
        </MultipleElements>
      </div>
    </>
  )
}

export default About
