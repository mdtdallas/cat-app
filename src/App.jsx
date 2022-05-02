import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import CatProfile from './pages/CatProfile';
import AddAward from "./pages/AddAward";
import Shows from "./pages/Shows";
import Show from "./pages/Show";
import NewCat from './pages/NewCat';
import NewShow from "./pages/NewShow";
import { ThemeProvider } from 'styled-components';
import {lightTheme, GlobalStyles, greenTheme} from './theme'


function App() {
  const themeSet = window.localStorage.getItem('theme')
  const [theme, setTheme] = useState({themeSet});
  const themeToggler = () => {
    theme === 'green' ? setTheme('light') : setTheme('green');
    window.localStorage.setItem('theme', JSON.stringify(theme))
  }
  
  return (
    <ThemeProvider theme={theme === 'green' ? lightTheme : greenTheme}>
      <GlobalStyles />
      
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
              <Button onClick={() => themeToggler()}>Change Theme</Button>
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
          <Route path='/newCat' element={<NewCat/>}/>
          <Route path='/newshow' element={<NewShow/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
      
    </ThemeProvider>
    
  );
}

export default App;
