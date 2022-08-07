import { useTrail, config, a, useSpring } from 'react-spring'

const Intro: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  const trail = useTrail(children.length, {
    config: config.stiff,
    opacity: 1,
    x: 0,
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

const Info: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  const trail = useTrail(children.length, {
    config: config.stiff,
    opacity: 1,
    from: { opacity: 0 },
    delay: 750,
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
  const spring = useSpring({
    x: 0,
    opacity: 1,
    from: { opacity: 0, x: 40 },
    config: config.stiff,
    delay: 2000,
  })

  return (
    <>
      <div className='flex flex-col justify-center h-screen place-items-center'>
        <Intro>
          <span className='text-white'>Hello.</span>
          <span>{"I'm Kalmarv"}</span>
        </Intro>
        <div className='p-4'></div>
        <Info>
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
