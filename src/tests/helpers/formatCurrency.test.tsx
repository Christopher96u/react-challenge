import { describe, it, expect } from 'vitest';
import { formatCurrency } from '../../utils/helpers/formatCurrency';

describe('formatCurrency function', () => {
    it('Format currency with valid currency object', () => {
        const currencies = {
            USD: { name: 'US Dollar', symbol: '$' },
        };
        const result = formatCurrency(currencies);
        expect(result).toBe('US Dollar - $');
    });
    it('Format currency with multiple currencies', () => {
        const currencies = {
            USD: { name: 'US Dollar', symbol: '$' },
            EUR: { name: 'Euro', symbol: '€' },
        };
        const result = formatCurrency(currencies);
        expect(result).toBe('US Dollar - $');
    });
    it('Format currency with no currencies', () => {
        const currencies = {};
        const result = formatCurrency(currencies);
        expect(result).toBe('Currency not found');
    });
    it('Format currency with empty object', () => {
        const currencies = {};
        const result = formatCurrency(currencies);
        expect(result).toBe('Currency not found');
    });
});