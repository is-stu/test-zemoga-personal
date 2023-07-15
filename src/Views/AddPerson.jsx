import { useEffect, useState } from 'react'
import { Button, Form, Spinner, Toast, ToastContainer } from 'react-bootstrap'
import { useAPI } from '../Hooks/useAxios'

export const AddPerson = () => {
  // Se que esto se puede mejorar con un custom hook o alguna libreria como formik, pero por tiempo lo hago asi
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [picture, setPicture] = useState('')
  const [show, setShow] = useState(false)

  const postPerson = useAPI('POST', 'api/people')

  const toast = () => {
    return (
      <ToastContainer position='bottom-end' className='m-4'>
        <Toast show={show}>
          <Toast.Header>
            <strong className='me-auto'>Trial Created</strong>
          </Toast.Header>
          <Toast.Body>Success.</Toast.Body>
        </Toast>
      </ToastContainer>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      name,
      description,
      category,
      picture,
      lastUpdated: Date.now(),
      votes: {
        positive: 1,
        negative: 0
      }
    }

    postPerson.execute(payload)
    setName('')
    setDescription('')
    setCategory('')
    setPicture('')
  }

  useEffect(() => {
    if (postPerson.onError === null) {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }
  }, [postPerson.data])

  return (
    <>
      {toast()}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name of the person'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Description of the person'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            placeholder='Category of the person'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Picture</Form.Label>
          <Form.Control
            type='text'
            placeholder={"insert the url of a person's image"}
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </Form.Group>

        <Button type='submit' className='mt-3'>
          {postPerson.loading ? <Spinner /> : 'Submit'}
        </Button>
      </Form>
    </>
  )
}
