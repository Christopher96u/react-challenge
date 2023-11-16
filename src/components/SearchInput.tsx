import { ChangeEvent, useState } from "react";
import { useCountryContext } from "../context/CountryContext";
import { isAlphabeticInput } from "../utils/helpers/isAlphabeticInput";
import { handleAlphabeticInput } from "../utils/helpers/handleAlphabeticInput";

interface SearchInputProps {
    onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
    const [query, setQuery] = useState('');
    const { clearSelectedCountry } = useCountryContext();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        if (inputValue.trim() === '') {
            clearSelectedCountry();
        }
        if (isAlphabeticInput(inputValue) && inputValue.length >= 2) {
            onSearch(inputValue);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={($event) => handleAlphabeticInput($event)}
                placeholder="Search for a country..."
                className="w-full sm:w-1/2 lg:w-1/3 p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export { SearchInput };