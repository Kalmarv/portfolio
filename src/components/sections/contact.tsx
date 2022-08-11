import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIntersectionObserver } from 'usehooks-ts'

const Contact = () => {
  type formData = { name: string; email: string; message: string }
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.5 })
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
      <div className='flex flex-col justify-center place-items-center' ref={ref}>
        <h1 className='text-3xl font-bold'>Contact Me</h1>
        <form
          onSubmit={handleSubmit((data) => {
            setData(data as formData)
            sendEmail()
          })}>
          <div className='flex flex-col justify-center place-items-center'>
            <input {...register('name')} placeholder='Name' />
            <input {...register('email')} placeholder='Email' />
            <textarea className='' {...register('message')} placeholder='Type your message here' />
            <input type='submit' />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
