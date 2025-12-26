import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Li = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-family: 'Karla', sans-serif;
    
    &:hover {
      color: #495E57;
    }
  }
`;

const Nav = () => {
    return (
        <NavContainer>
            <Ul>
                <Li><Link to="/">Home</Link></Li>
                <Li><Link to="/about">About</Link></Li>
                <Li><Link to="/menu">Menu</Link></Li>
                <Li><Link to="/reservations">Reservations</Link></Li>
                <Li><Link to="/order">Order Online</Link></Li>
                <Li><Link to="/login">Login</Link></Li>
            </Ul>
        </NavContainer>
    );
};

export default Nav;
