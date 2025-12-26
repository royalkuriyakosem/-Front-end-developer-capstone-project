import styled from 'styled-components';
// import { Link } from 'react-router-dom'; // Will use later for logo link
import Nav from './Nav';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding: 0 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Wrapper>
                {/* Placeholder for Logo, since we don't have the asset yet */}
                <Logo src="/assets/Logo.svg" alt="Little Lemon Logo" onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML += '<h2 style="margin:0; color:#495E57">Little Lemon</h2>';
                }} />
                <Nav />
            </Wrapper>
        </HeaderContainer>
    );
};

export default Header;
