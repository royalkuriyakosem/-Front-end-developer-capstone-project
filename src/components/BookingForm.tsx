import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #EDEFEE;
  padding: 30px;
  border-radius: 16px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: bold;
    color: #333;
  }

  input, select {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #495E57;
    }
  }

  .error {
    color: red;
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  background-color: #F4CE14;
  color: #333;
  padding: 15px 30px;
  border-radius: 16px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #e0bd13;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const BookingForm = () => {
    // Validation Schema
    const validationSchema = Yup.object({
        date: Yup.date().required('Please select a date').typeError('Invalid date'),
        time: Yup.string().required('Please select a time'),
        guests: Yup.number().min(1, 'At least 1 guest').max(10, 'Max 10 guests').required('Required'),
        occasion: Yup.string().required('Please select an occasion'),
    });

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: 1,
            occasion: 'Birthday',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            // Here you would typically send data to an API
        },
    });

    // Available times (could be dynamic)
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <FieldGroup>
                    <label htmlFor="date">Choose date</label>
                    <input
                        type="date"
                        id="date"
                        {...formik.getFieldProps('date')}
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div className="error">{formik.errors.date}</div>
                    ) : null}
                </FieldGroup>

                <FieldGroup>
                    <label htmlFor="time">Choose time</label>
                    <select
                        id="time"
                        {...formik.getFieldProps('time')}
                    >
                        <option value="" label="Select time" />
                        {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                    {formik.touched.time && formik.errors.time ? (
                        <div className="error">{formik.errors.time}</div>
                    ) : null}
                </FieldGroup>

                <FieldGroup>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        min="1"
                        max="10"
                        {...formik.getFieldProps('guests')}
                    />
                    {formik.touched.guests && formik.errors.guests ? (
                        <div className="error">{formik.errors.guests}</div>
                    ) : null}
                </FieldGroup>

                <FieldGroup>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        {...formik.getFieldProps('occasion')}
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion ? (
                        <div className="error">{formik.errors.occasion}</div>
                    ) : null}
                </FieldGroup>

                <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
                    Make your reservation
                </Button>
            </Form>
        </FormContainer>
    );
};

export default BookingForm;
