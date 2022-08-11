import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIntersectionObserver } from 'usehooks-ts'

const Contact = () => {
  type formData = { name: string; email: string; message: string }
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.75 })
  const isVisible = !!entry?.isIntersecting

  const { register, handleSubmit } = useForm()
  const [data, setData] = useState<formData>()

  useEffect(() => {}, [isVisible])

  const sendEmail = () => {
    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        name: data?.name ?? 'No name',
        email: data?.email ?? 'No email',
        message: data?.message ?? 'No message',
      }),
    })
  }

  return (
    <>
      <div className='py-8'></div>
      <div className='flex flex-col justify-center place-items-center' ref={ref}>
        <div className='max-w-sm p-2 w-full'>
          <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
          <div className='py-4'></div>
          <form
            onSubmit={handleSubmit((data) => {
              setData(data as formData)
              sendEmail()
            })}>
            <div className='flex flex-col justify-center place-items-center'>
              <div className='grid grid-cols-2'>
                <input
                  className='bg-branding-dark rounded p-2 mx-2'
                  {...register('name')}
                  placeholder='Name'
                />
                <input
                  className='bg-branding-dark rounded p-2 mx-2'
                  {...register('email')}
                  placeholder='Email'
                />
              </div>
              <textarea
                className='bg-branding-dark w-full h-40 rounded m-4 p-2'
                {...register('message')}
                placeholder='Type your message here'
              />
              <input
                className='bg-branding-dark rounded-full px-4 py-2 font-bold text-white'
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
