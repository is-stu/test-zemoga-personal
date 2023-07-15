import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAPI } from '../Hooks/useAxios'
import { PersonCard } from '../components/PersonCard/PersonCard'

export const PastTrials = () => {
  const getPeople = useAPI('GET', 'api/people')
  const updatePerson = useAPI('PUT', 'api/people')

  useEffect(() => {
    getPeople.execute()
  }, [updatePerson.data])
  return (
    <>
      <Row>
        {getPeople.data.map((person) => (
          <Col key={person._id} lg={6} xl={6}>
            <PersonCard person={person} updatePerson={updatePerson} />
          </Col>
        ))}
      </Row>
    </>
  )
}
