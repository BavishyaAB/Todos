import {Link, useNavigate } from "react-router-dom";
import {Container,Navbar,Nav} from 'react-bootstrap';
function NavBar () {
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={()=>navigate('/')}>Todos</Navbar.Brand>
                <Nav>
                    <Link to="/create" className="nav-link">Add Task</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;