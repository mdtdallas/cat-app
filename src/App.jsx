import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import CatProfile from './pages/CatProfile';
import AddAward from "./pages/AddAward";
import Shows from "./pages/Shows";
import Show from "./pages/Show";

function App() {
  return (
    <div>
      <Router>
        <Navbar collapseOnSelect bg="light" expand='md'>
          <Container>
            <Navbar.Brand href="/">Cat Shows</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={'/shows'}>Shows</Nav.Link>
              <Nav.Link as={Link} to={'/signup'}>Sign Up</Nav.Link>
              <Nav.Link as={Link} to={"/signin"}>Sign In</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/catprofile/:id' element={<CatProfile/>}/>
          <Route path="/addaward" element={<AddAward/>}/>
          <Route path='/shows' element={<Shows/>}/>
          <Route path='/show/:id' element={<Show/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
