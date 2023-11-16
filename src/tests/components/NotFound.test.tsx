import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NotFound } from '../../components/NotFound';

describe('NotFound component', () => {

    it('Renders NotFound component with error message', () => {
        const errorMessage = "Sorry, we couldn't find any information.";

        render(<NotFound errorMessage={errorMessage} />);
        const errorMessageElement = screen.getByText(errorMessage);
        expect(errorMessageElement).toBeInTheDocument();
    });
});
