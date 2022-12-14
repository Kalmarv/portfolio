import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'

type navProps = { enabled: boolean; onClick: () => void }

const PrevButton: React.FC<navProps> = ({ enabled, onClick }) => (
  <button className='' onClick={onClick} disabled={!enabled}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`h-6 w-6 transition md:h-10 md:w-10 ${enabled ? 'opacity-100' : 'opacity-50'}`}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      strokeWidth={2}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
    </svg>
  </button>
)

const NextButton: React.FC<navProps> = ({ enabled, onClick }) => (
  <button onClick={onClick} disabled={!enabled}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`h-6 w-6 transition md:h-10 md:w-10 ${enabled ? 'opacity-100' : 'opacity-50'}`}
      stroke='currentColor'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
    </svg>
  </button>
)

type sliderProps = {
  displayName: string
  projectName: string
  liveLink: string
  githubLink: string
  slides: number
  children: JSX.Element
}

const Slider: React.FC<sliderProps> = ({
  displayName,
  projectName,
  slides,
  children,
  liveLink,
  githubLink,
}) => {
  const [emblaRef, embla] = useEmblaCarousel()
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <>
      <h1 className='pt-4 text-xl font-bold md:text-2xl'>{displayName}</h1>
      <div className='p-2'></div>
      {children}
      <div className='p-2'></div>
      <div className='flex flex-row'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {Array.from(Array(slides).keys()).map((_, i) => (
              <div
                className='flex flex-shrink-0 flex-grow-0 basis-full hover:cursor-grab active:cursor-grabbing'
                key={i}>
                <Image
                  src={`/project-images/${projectName}-${i + 1}.webp`}
                  alt='Music Club'
                  width={2300}
                  height={1466}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='p-2' />
      <div className='flex justify-center gap-8'>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={liveLink}
          className='rounded-full bg-k-dark px-4 py-2 font-bold text-white'>
          Visit
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={githubLink}
          className='rounded-full bg-k-dark px-4 py-2 font-bold text-white'>
          Source
        </a>
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  )
}

const Projects = () => {
  return (
    <>
      <div className='py-8'></div>
      <div id='projects' className='relative -top-20'></div>
      <div className='flex flex-col place-items-center justify-center'>
        <div className='max-w-sm p-2 md:max-w-3xl'>
          <div className='p-2' />
          <h1 className='text-2xl font-bold md:text-3xl'>Projects</h1>
          <div className='p-2' />
          <p>{"Here's some of the projects I've been working on recently"}</p>
          <Slider
            displayName='Ascent'
            liveLink='https://ascent.kalmarv.xyz/'
            githubLink='https://github.com/Kalmarv/ascent'
            projectName='ascent'
            slides={4}>
            <p>
              Ascent displays your currently playing song from Last.fm in a rendered 3d scene with
              custom shaders. I learned a lot through building this project about authentication,
              fetching data, managing state, and tying together a backend/frontend.
            </p>
          </Slider>
          <Slider
            displayName='Music Club'
            liveLink='https://club.kv7.dev/'
            githubLink='https://github.com/Kalmarv/MusicClub'
            projectName='music-club'
            slides={2}>
            <p>
              My friends and I started an album listening club and I wanted to make a website to
              share and track our listening experience.
            </p>
          </Slider>
          <Slider
            displayName='OverTrack'
            liveLink='https://overtrack.kalmarv.xyz/'
            githubLink='https://github.com/Kalmarv/over-track'
            projectName='overtrack'
            slides={3}>
            <p>
              Overwatch match tracker to track your performance and statistics. Currently on hold as
              Overwatch 2 is coming out, and I&apos;m planning on remaking it with that in mind.
            </p>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Projects
