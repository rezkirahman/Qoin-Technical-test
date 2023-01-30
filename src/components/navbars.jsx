import { React } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NavsBar() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>MovieDB</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>navigate('/genre')}>Genre</Nav.Link>
                        <Nav.Link onClick={()=>navigate('/')}>Movie</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}