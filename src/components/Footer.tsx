import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #495E57;
  color: #fff;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: #F4CE14;
    margin-bottom: 10px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <Section>
                    <h3>Little Lemon</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </Section>
                <Section>
                    <h3>Important Links</h3>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/menu">Menu</a>
                    <a href="/reservations">Reservations</a>
                    <a href="/order">Order Online</a>
                    <a href="/login">Login</a>
                </Section>
                <Section>
                    <h3>Contact</h3>
                    <p>Address: 123 Town Street, Chicago</p>
                    <p>Phone: +00 123 456 789</p>
                    <p>Email: lemon@littlelemon.com</p>
                </Section>
                <Section>
                    <h3>Social Media Link</h3>
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://instagram.com">Instagram</a>
                    <a href="https://twitter.com">Twitter</a>
                </Section>
            </Wrapper>
        </FooterContainer>
    );
};

export default Footer;
