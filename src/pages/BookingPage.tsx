import styled from 'styled-components';
import BookingForm from '../components/BookingForm';

const PageContainer = styled.main`
  padding: 40px 20px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #495E57;
  margin-bottom: 40px;
`;

const BookingPage = () => {
    return (
        <PageContainer>
            <Heading>Reserve a Table</Heading>
            <BookingForm />
        </PageContainer>
    );
};

export default BookingPage;
