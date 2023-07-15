import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'wouter'

export const CustomNavbar = () => {
  return (
    <Navbar className='bg-ligth' expand='lg'>
      <Container>
        <Navbar.Brand>Personal thumbs rule</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-around'>
          <Nav.Link as={Link} href='/'>Current trial</Nav.Link>
          <Nav.Link as={Link} href='/pastTrials'>Past Trials</Nav.Link>
          <Nav.Link as={Link} href='/addPerson'>Add someone</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
