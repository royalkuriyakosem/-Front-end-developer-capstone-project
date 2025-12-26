import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    test('Renders labels and inputs', () => {
        render(<BookingForm />);

        expect(screen.getByLabelText(/Choose date/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose time/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/)).toBeInTheDocument();
    });

    test('Validates required fields', async () => {
        render(<BookingForm />);

        const submitButton = screen.getByRole('button', { name: /Make your reservation/i });

        // Initial state: button might be disabled (if logic dictates) or form submits and shows errors
        // In our code: <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        // So button should be disabled initially.

        expect(submitButton).toBeDisabled();

        // Touch fields to trigger validation
        // Since button is disabled, we interact with inputs

        const dateInput = screen.getByLabelText(/Choose date/);
        fireEvent.change(dateInput, { target: { value: '' } });
        fireEvent.blur(dateInput);

        // Wait for async validation if any, though Formik sync validation should be fast.
        // However, since button starts disabled because !dirty, we need to make it dirty first.

        // Let's test valid submission enabling button

        fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2025-01-01' } });
        fireEvent.change(screen.getByLabelText(/Choose time/), { target: { value: '17:00' } });
        fireEvent.change(screen.getByLabelText(/Number of guests/), { target: { value: 2 } });
        fireEvent.change(screen.getByLabelText(/Occasion/), { target: { value: 'Birthday' } });

        await waitFor(() => {
            expect(submitButton).not.toBeDisabled();
        });
    });
});
