import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Country } from '../../interfaces/Country';
import { CountryCardOverviewList } from '../../components/CountryCardOverviewList';
import { CountryProvider } from '../../context/CountryContext';

const mockCountries: Country[] = [
    {
        name: {
            common: 'Country 1',
            official: 'Official Name 1',
        },
        currencies: {
            USD: {
                name: 'US Dollar',
                symbol: '$',
            },
        },
        car: {
            signs: ['Sign 1'],
            side: 'Right',
        },
        flags: {
            png: 'url-to-flag.png',
            svg: 'url-to-flag.svg',
            alt: 'Flag Alt Text',
        },
        coatOfArms: {
            png: 'url-to-coat.png',
            svg: 'url-to-coat.svg',
        },
    },
];

describe('CountryCardOverviewList component', () => {
    it('renders the list of countries', () => {
        render(<CountryProvider><CountryCardOverviewList countries={mockCountries} /></CountryProvider>);
        mockCountries.forEach((country) => {
            const countryName = screen.getByText(country.name.common);
            expect(countryName).toBeInTheDocument();
        });
    });

    it('renders the correct number of countries', () => {
        render(<CountryProvider><CountryCardOverviewList countries={mockCountries} /></CountryProvider>);
        const countryCards = screen.getAllByTestId('country-card-overview');
        expect(countryCards).toHaveLength(mockCountries.length);
    });

});
