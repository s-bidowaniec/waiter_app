import { Navbar, Container, Nav } from 'react-bootstrap';
const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className={'rounded'}>
      <Container>
        <Navbar.Brand href="#home">Waiter.app</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
