import { CustomAlert } from '../components/CustomAlert/CustomAlert'
import { PersonCard } from '../components/PersonCard/PersonCard'
import { Container } from 'react-bootstrap'
import { useEffect } from 'react'
import { useAPI } from '../Hooks/useAxios'
export const Home = () => {
  const getPeople = useAPI('GET', 'api/people')
  const updatePerson = useAPI('PUT', 'api/people')

  useEffect(() => {
    getPeople.execute()
  }, [updatePerson.data])

  return (
    <>
      <CustomAlert />

      <h2 className='mx-5 my-4'>What's your opinion on...</h2>
      <Container className='d-flex justify-content-center'>
        <PersonCard person={getPeople.data[0]} updatePerson={updatePerson} />
      </Container>
    </>
  )
}
