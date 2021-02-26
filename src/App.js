import MainPage from './pages/MainPage';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" >HOME</Nav.Link>
                <Nav.Link as={Link} to="/lifestyle" >LIFESTYLE</Nav.Link>
                <Nav.Link as={Link} to="/travel" >TRAVEL</Nav.Link>
                <Nav.Link as={Link} to="/fashion" >FASHION</Nav.Link>
              </Nav>
              <Form inline>
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={() => <MainPage articles='all' />} />
            <Route exact path='/lifestyle' component={() => <MainPage articles='lifestyle' />} />
            <Route exact path='/travel' component={() => <MainPage articles='travel' />} />
            <Route exact path='/fashion' component={() => <MainPage articles='fashion' />} />
          </Switch>
        </div>
      </div>
      <div>Footer - Evangelia</div>
    </div>
  );
}

export default App;
