import MainPage from './pages/MainPage';
import './App.css';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Footer from './components/Footer';
import DetailsPage from './pages/DetailsPage';
import Error from './pages/Error';
import logo from './logo-intrasoft.svg'
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() { 

  return (
    <div className="App">
      <div>
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand as={Link} to="/" ><img src={logo} alt='intrasoft logo' className='logo' /></Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} exact to="/" >HOME</Nav.Link>
                <Nav.Link as={NavLink} to="/lifestyle" >LIFESTYLE</Nav.Link>
                <Nav.Link as={NavLink} to="/travel" >TRAVEL</Nav.Link>
                <Nav.Link as={NavLink} to="/fashion" >FASHION</Nav.Link>
                <Nav.Link as={NavLink} to="/gallery" >GALLERY</Nav.Link>
                <Nav.Link as={NavLink} to="/contact" >CONTACT</Nav.Link>
              </Nav>
              <Form inline>
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary" disabled>Search</Button>
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
            <Route exact path='/article/:id/:type' component={() => <DetailsPage/>} />     
            <Route exact path='/gallery' component={() => <GalleryPage/>} />   
            <Route exact path='/contact' component={() => <ContactPage/>} />    
            <Route exact path="*"><Error /></Route>     
          </Switch>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
