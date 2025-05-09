import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect} from 'react';
import { Person } from '../models/Person';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

function NavHeader() {
  const[hoomans, setHoomans] = useState<Person[]>([]);
  const countryList: string[] = [];
  
  useEffect(() => {
    fetch("http://localhost:8080/humans")
      .then(res => res.json())
      .then(json => setHoomans(json))
  }, []);

  hoomans.forEach(function (person) {
    if(countryList.includes(person.country) == false) {
      countryList.push(person.country);
    }
  })
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand to="/" as={Link}>DecathlOwOn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
          <Nav.Link to="/results" as={Link}>Results</Nav.Link>
          
          <NavDropdown title="Attendees" id="basic-nav-dropdown">
            <NavDropdown.Item href="/sportsmen">Σ All</NavDropdown.Item>
            <NavDropdown.Divider />

            {countryList.map(country => 
              <div>
                <NavDropdown.Item href={"/sportsmen/" + country}>• {country}</NavDropdown.Item>
              </div>
            )}

          </NavDropdown>

          <NavDropdown title="Manage" id="basic-nav-dropdown">
            <NavDropdown.Item href="/manage/addperson">+ Add attendee</NavDropdown.Item>
            <NavDropdown.Item href="/manage/rmattendee">░ Remove attendee</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/manage/addresult">+ Add result</NavDropdown.Item>
            <NavDropdown.Item href="/manage/rmresult">░ Edit result</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavHeader

