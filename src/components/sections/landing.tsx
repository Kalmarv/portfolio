import { useEffect, useRef, useState } from 'react'
import { useTrail, config, a, useSpring } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'

const Intro: React.FC<{ open: boolean; children: JSX.Element[] }> = ({ open, children }) => {
  const trail = useTrail(children.length, {
    config: config.stiff,
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
    from: { opacity: 0, x: 40 },
  })
  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className='w-full text-6xl md:text-7xl font-bold' style={style}>
          <div>{children[index]}</div>
        </a.div>
      ))}
    </div>
  )
}

const Info: React.FC<{ open: boolean; children: JSX.Element[] }> = ({ open, children }) => {
  const trail = useTrail(children.length, {
    config: config.stiff,
    opacity: open ? 1 : 0,
    from: { opacity: 0 },
    delay: open ? 750 : 0,
  })
  return (
    <div className='flex flex-row'>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style} className='px-4 font-bold md:text-2xl'>
          {children[index]}
        </a.div>
      ))}
    </div>
  )
}

const DownArrow: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  /*
  Yeah this whole thing is super ugly
  I have three things happening at the same time:
  - Delay fade until the first elments fade in
  - Bounce the arrow up and down
  - Show/hide the arrow based on if the page is scrolled down
  */
  const [delayFade, setDelayFade] = useState(true)
  useEffect(() => {
    setTimeout(() => setDelayFade(false), 2000)
  }, [])
  const style = useSpring({
    from: { y: 0 },
    to: async (next) => {
      let toggle = 5
      while (true) {
        await next({
          y: toggle,
        })
        toggle = toggle === 5 ? 0 : 5
      }
    },
    config: { mass: 75, tension: 500, friction: 0 },
    delay: 2000,
  })
  const fadeOnScroll = useSpring({
    config: config.stiff,
    opacity: delayFade ? 0 : isVisible ? 1 : 0,
    from: { opacity: 0 },
  })

  return (
    <a.svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      style={{ ...style, ...fadeOnScroll }}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 13l-7 7-7-7m14-8l-7 7-7-7' />
    </a.svg>
  )
}

const Landing = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.8 })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible) setOpen(true)
  }, [isVisible])

  const spring = useSpring({
    x: open ? 0 : 40,
    opacity: open ? 1 : 0,
    from: { opacity: 0, x: 40 },
    config: config.stiff,
    delay: open ? 1500 : 0,
  })

  return (
    <>
      <div className='flex flex-col justify-center h-screen place-items-center' ref={ref}>
        <Intro open={open}>
          <span className='text-white'>Hello.</span>
          <span>{"I'm Kalmarv"}</span>
        </Intro>
        <div className='p-4'></div>
        <Info open={open}>
          <span>Developer</span>
          <span>|</span>
          <span>Designer</span>
          <span>|</span>
          <span>Veteran</span>
        </Info>
        <div className='p-4'></div>
        <a.p
          className='text-xl md:text-2xl max-w-sm md:max-w-lg p-2 text-center'
          style={{ ...spring }}>
          I&apos;m a full-stack developer with a passion for building beautiful, responsive, and
          fast websites.
        </a.p>
        <div className='p-4'></div>
        <DownArrow isVisible={isVisible} />
      </div>
    </>
  )
}

export default Landing
