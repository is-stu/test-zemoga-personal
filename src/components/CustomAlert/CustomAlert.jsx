import { Alert, Stack } from 'react-bootstrap'
import './CustomAlert.css'

export const CustomAlert = () => {
  return (
    <Alert variant='dark ' className='mx-5 my-3'>
      <Stack direction='horizontal' gap={2}>
        <p className='alert-stack__title'>Speak out. Be heard. Be counted</p>
        <p className='ms-auto alert-stack__subtitle'>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </Stack>
    </Alert>
  )
}
