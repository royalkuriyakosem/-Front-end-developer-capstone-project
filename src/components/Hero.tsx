import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  background-color: #495E57;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1140px;
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  h1 {
    color: #F4CE14;
    font-size: 4rem;
    margin: 0;
    line-height: 1;
  }

  h2 {
    font-size: 2.5rem;
    margin: 0;
    font-family: 'Markazi Text', serif;
  }

  p {
    font-size: 1.2rem;
    margin: 20px 0;
    max-width: 400px;
  }
`;

const Button = styled(Link)`
  background-color: #F4CE14;
  color: #333;
  padding: 15px 30px;
  border-radius: 16px;
  font-weight: bold;
  text-decoration: none;
  width: fit-content;
  &:hover {
    background-color: #e0bd13;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  
  img {
    width: 300px;
    height: 350px;
    object-fit: cover;
    border-radius: 16px;
    position: relative;
    top: 40px; 
    
    @media (max-width: 768px) {
      top: 0;
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
  }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <Wrapper>
                <Content>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Button to="/booking">Reserve a Table</Button>
                </Content>
                <ImageContainer>
                    {/* Placeholder for hero image */}
                    <img src="/assets/restaurantfood.jpg" alt="Restaurant Food" onError={(e) => {
                        e.currentTarget.style.backgroundColor = '#ccc'; // Fallback
                    }} />
                </ImageContainer>
            </Wrapper>
        </HeroContainer>
    );
};

export default Hero;
