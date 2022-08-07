import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { useTrail, config, a, useSpring } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'
import { pageAtom } from '../../utils/store'

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
        <a.div key={index} className='relative w-full text-6xl font-bold' style={style}>
          <a.div>{children[index]}</a.div>
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
        <a.div key={index} style={style} className='px-4 font-bold'>
          {children[index]}
        </a.div>
      ))}
    </div>
  )
}

const Landing = () => {
  const [, setPage] = useAtom(pageAtom)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.75 })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible) setPage(0)
  }, [isVisible, setPage])

  const spring = useSpring({
    x: isVisible ? 0 : 40,
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0, x: 40 },
    config: config.stiff,
    delay: isVisible ? 1500 : 0,
  })

  return (
    <>
      <div className='flex flex-col justify-center h-screen place-items-center' ref={ref}>
        <Intro open={isVisible}>
          <span className='text-white'>Hello.</span>
          <span>{"I'm Kalmarv"}</span>
        </Intro>
        <div className='p-4'></div>
        <Info open={isVisible}>
          <span>Developer</span>
          <span>|</span>
          <span>Designer</span>
          <span>|</span>
          <span>Veteran</span>
        </Info>
        <div className='p-4'></div>
        <a.p className='text-xl max-w-sm p-2 text-center' style={{ ...spring }}>
          I&apos;m a full-stack developer with a passion for building beautiful, responsive, and
          fast websites.
        </a.p>
      </div>
    </>
  )
}

export default Landing
