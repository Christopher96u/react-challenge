import { describe, it, expect, vi } from 'vitest';
import { handleAlphabeticInput } from '../../utils/helpers/handleAlphabeticInput';

describe('handleAlphabeticInput function', () => {
    it('Allow alphabetic input', () => {
        const mockEvent = {
            key: 'a',
            preventDefault: vi.fn(),
        } as unknown as React.KeyboardEvent<HTMLInputElement>;

        handleAlphabeticInput(mockEvent);

        expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
    it('Allow space input', () => {
        const mockEvent = {
            key: ' ',
            preventDefault: vi.fn(),
        } as unknown as React.KeyboardEvent<HTMLInputElement>;

        handleAlphabeticInput(mockEvent);

        expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
    it('Prevent numeric input', () => {
        const mockEvent = {
            key: '1',
            preventDefault: vi.fn(),
        } as unknown as React.KeyboardEvent<HTMLInputElement>;

        handleAlphabeticInput(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
    it('Prevent special character input', () => {
        const mockEvent = {
            key: '@',
            preventDefault: vi.fn(),
        } as unknown as React.KeyboardEvent<HTMLInputElement>;

        handleAlphabeticInput(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
});