import './App.css';
import Pages from './pages/Pages';
import Search from './components/Search';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"} >Deliciouss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;

`;

const Nav = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 3rem  0;

svg{
  font-size: 2rem;
}

`

export default App;
