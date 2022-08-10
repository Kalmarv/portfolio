import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

type message = {
  name: string
  email: string
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
  const { name, email, message } = req.body as message

  const msg = {
    to: process.env.MY_EMAIL!,
    from: process.env.MY_EMAIL!,
    subject: `Portfolio Contact Form - ${name} - ${email}`,
    text: message?.length > 0 ? message : 'No message in form',
  }

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error)
      if (error.response) {
        console.error(error.response.body)
        return res.status(400).json(error.response.body)
      }
    }
  )
  return res.status(200).json({ status: 'Ok' })
}
