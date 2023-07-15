import { Button, Card, Col, ProgressBar, Row, Spinner } from 'react-bootstrap'
import { ThumbsDown, ThumbsUp } from 'akar-icons'
import moment from 'moment/moment'

const iconByVows = (person) => {
  return person?.votes?.positive > person?.votes?.negative
    ? (
      <ThumbsUp strokeWidth={2} size={20} color='green' className='me-1' />
      )
    : (
      <ThumbsDown strokeWidth={2} size={20} color='red' className='me-1' />
      )
}

export const PersonCard = ({ person, updatePerson }) => {
  const positivePercentage =
    (person?.votes?.positive /
      (person?.votes?.positive + person?.votes?.negative)) *
    100
  const negativePercentage =
    (person?.votes?.negative /
      (person?.votes?.positive + person?.votes?.negative)) *
    100

  const handleThumbsUp = () => {
    const payload = {
      ...person,
      votes: {
        positive: person.votes.positive + 1,
        negative: person.votes.negative
      }
    }
    updatePerson.execute(payload, {
      params: {
        id: person?._id
      }
    })
  }

  const handleThumbsDown = () => {
    const payload = {
      ...person,
      votes: {
        positive: person.votes.positive,
        negative: person.votes.negative + 1
      }
    }
    updatePerson.execute(payload, {
      params: {
        id: person?._id
      }
    })
  }

  return (
    <>
      <Card
        className='mb-1'
        style={{
          width: '40rem',
          border:
            person?.votes?.positive > person?.votes?.negative
              ? '2px solid green'
              : '2px solid red'
        }}
      >
        <Card.Img
          variant='top'
          src={person?.picture}
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>
            {iconByVows(person)}
            {person?.name}
          </Card.Title>
          <Card.Subtitle>
            {moment(person?.lastUpdated).fromNow()} in {person?.category}
          </Card.Subtitle>
          <Card.Text>{person?.description}</Card.Text>
          <Card.Text className='d-flex justify-content-center fw-bold'>
            What's your veredict ?
          </Card.Text>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Button variant='outline-success' onClick={handleThumbsUp}>
                {updatePerson.loading
                  ? (
                    <Spinner />
                    )
                  : (
                    <ThumbsUp strokeWidth={2} size={36} />
                    )}
              </Button>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Button variant='outline-danger' onClick={handleThumbsDown}>
                {updatePerson.loading
                  ? (
                    <Spinner />
                    )
                  : (
                    <ThumbsDown strokeWidth={2} size={36} />
                    )}
              </Button>
            </Col>
          </Row>
          <ProgressBar className='mt-3'>
            <ProgressBar
              variant='success'
              now={positivePercentage}
              key={1}
              label={`${positivePercentage.toFixed(1)} %`}
            />
            <ProgressBar
              variant='danger'
              now={negativePercentage}
              key={2}
              label={`${negativePercentage.toFixed(1)} %`}
            />
          </ProgressBar>
        </Card.Body>
      </Card>
    </>
  )
}
