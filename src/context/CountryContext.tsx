import { ReactNode, createContext, useContext, useState } from "react";
import { Country } from "../interfaces/Country";

interface CountryContextProps {
    selectedCountry: Country | null;
    handleButtonClick: (country: Country) => void;
    clearSelectedCountry: () => void;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const handleButtonClick = (country: Country) => {
        setSelectedCountry(country);
    };

    const clearSelectedCountry = () => {
        setSelectedCountry(null);
    };

    return (
        <CountryContext.Provider value={{ selectedCountry, clearSelectedCountry, handleButtonClick }}>
            {children}
        </CountryContext.Provider>
    );
};

const useCountryContext = () => {
    const context = useContext(CountryContext);

    if (!context) {
        throw new Error('useCountryContext should be used inside a CountryProvider');
    }

    return context;
};
export { CountryProvider, useCountryContext };