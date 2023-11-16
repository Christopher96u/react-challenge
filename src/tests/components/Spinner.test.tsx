import { describe, it, expect } from 'vitest';
import { Spinner } from '../../components/Spinner';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Spinner component', () => {
    it('Render Spinner component', () => {
        const { container } = render(<Spinner />);
        expect(container.firstChild).toBeDefined();
    });
    it('Has basic css classes', () => {
        const { container } = render(<Spinner />);
        expect(container.firstChild).toHaveClass('fixed block h-full w-full');
    });
    it('Has Loading text', () => {
        const { getByRole, getByText } = render(<Spinner />);
        expect(getByRole('status')).toBeInTheDocument();
        expect(getByText('Loading...')).toBeInTheDocument();
    });
});