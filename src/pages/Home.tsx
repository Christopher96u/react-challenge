import { useEffect, useState } from "react";
import { CountryCardDetails } from "../components/CountryCardDetails";
import { CountryCardOverviewList } from "../components/CountryCardOverviewList";
import { SearchInput } from "../components/SearchInput";
import { API_URL } from "../utils/constants/constants";
import { useFetch } from "../hooks/useFetch";
import { Country } from "../interfaces/Country";

const Home = () => {
    const [searchResults, setSearchResults] = useState<Country[]>([]);
    const [query, setQuery] = useState('');
    const { response, isLoading, error } = useFetch<Country[]>(
        query ? `${API_URL}/${query}` : ''
    );
    const handleSearch = (newQuery: string) => {
        setQuery(newQuery);
    }
    // Update results when we get new data
    useEffect(() => {
        if (response) {
            setSearchResults(response);
        }
    }, [response]);

    // Clear results when text field is empty
    useEffect(() => {
        if (!query) {
            setSearchResults([]);
        }
    }, [query]);

    return (
        <div className="">
            <h1>Home Page Layout</h1>
            <SearchInput onSearch={handleSearch} />
            {isLoading ? <p>Loading...</p> : null}
            {error ? <p>{error.message}</p> : null}
            <CountryCardOverviewList countries={searchResults} />
            <CountryCardDetails />
        </div>
    );
};

export { Home };