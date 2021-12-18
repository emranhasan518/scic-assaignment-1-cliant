import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home#home">Ever Green Travel Agency</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/placeorder">PlaceOrder</Nav.Link> */}
                        {users?.email && <Nav.Link as={Link} to="/myorder">MyOrder</Nav.Link>}
                        {users?.email && <Nav.Link as={Link} to="/manageorder">ManageOrder</Nav.Link>}
                        {users?.email && <Nav.Link as={Link} to="/addservice">AddService</Nav.Link>}
                        {users?.email?
                            <Button onClick={logOut} variant="dark">LogOut</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    <Navbar.Text>
                        user: <a href="#login">{users?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
             </Navbar>
        </>
    );
};

export default Header;