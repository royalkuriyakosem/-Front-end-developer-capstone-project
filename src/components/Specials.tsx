import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SpecialsContainer = styled.section`
  padding: 8rem 0 4rem; // Extra top padding to account for Hero image overlap
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2.5rem;
  }
`;

const Button = styled(Link)`
  background-color: #F4CE14;
  color: #333;
  padding: 15px 30px;
  border-radius: 16px;
  font-weight: bold;
  text-decoration: none;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #EDEFEE;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        margin: 0;
      }
      
      .price {
        color: #EE9972;
        font-weight: bold;
      }
    }

    p {
      color: #495E57;
      flex: 1;
    }

    .order {
        margin-top: 20px;
        font-weight: bold;
        cursor: pointer;
    }
  }
`;

const Specials = () => {
    const specialsData = [
        {
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "/assets/greek salad.jpg"
        },
        {
            title: "Bruchetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: "/assets/bruchetta.svg"
        },
        {
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: "/assets/lemon dessert.jpg"
        }
    ];

    return (
        <SpecialsContainer>
            <Wrapper>
                <Top>
                    <h2>This weeks specials!</h2>
                    <Button to="/menu">Online Menu</Button>
                </Top>
                <Cards>
                    {specialsData.map((item, index) => (
                        <Card key={index}>
                            <img src={item.image} alt={item.title} onError={(e) => e.currentTarget.style.backgroundColor = '#ddd'} />
                            <div className="content">
                                <div className="header">
                                    <h3>{item.title}</h3>
                                    <span className="price">{item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <div className="order">Order a delivery</div>
                            </div>
                        </Card>
                    ))}
                </Cards>
            </Wrapper>
        </SpecialsContainer>
    );
};

export default Specials;
